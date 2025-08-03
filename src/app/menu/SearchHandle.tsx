"use client";
import { useState, useRef, useMemo } from 'react';
import { Input } from '@/components/ui/input';
import { X, Search } from 'lucide-react';
import { menuItems } from '@/utils/constants';
import Fuse from 'fuse.js';


interface SearchHandleProps {
    searchTerm: string;
    setSearchTerm: (value: string) => void;
    handleSearch: (query: string) => void;
}

function SearchHandle({ searchTerm, setSearchTerm, handleSearch }: SearchHandleProps) {
    const [isSearching, setIsSearching] = useState(false);
    const [highlightedIndex, setHighlightedIndex] = useState(-1);
    const [showSuggestions, setShowSuggestions] = useState(false);
    const resultRef = useRef<HTMLDivElement | null>(null);

    const fuse = new Fuse(menuItems, {
        keys: ['name', 'description', 'category'],
        threshold: 0.4, // fuzzy match sensitivity
    });

    const filteredSuggestions = useMemo(() => {
        if (!searchTerm) return [];
        return fuse.search(searchTerm).map((result) => result.item);
    }, [searchTerm]);



    const handleSubmitSearch = (e: React.FormEvent) => {
        e.preventDefault();
        setSearchTerm("");
        setIsSearching(true);
        setShowSuggestions(false);
        handleSearch(searchTerm);
        setTimeout(() => setIsSearching(false), 300);
        if (typeof window !== 'undefined' && window.innerWidth <= 768) {
            setTimeout(() => {
                resultRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }, 100);
        }
    };

    return (
        <div className="max-w-md mx-auto relative">
            <form action="" onSubmit={handleSubmitSearch}>
                <Input
                    placeholder="Search for dishes..."
                    className="w-full"
                    value={searchTerm}
                    onChange={(e) => {
                        setSearchTerm(e.target.value);
                        setShowSuggestions(e.target.value.trim().length > 0);
                        setHighlightedIndex(-1); // reset selection
                    }}
                    onKeyDown={(e) => {
                        if (!showSuggestions) return;

                        if (e.key === 'ArrowDown') {
                            e.preventDefault();
                            setHighlightedIndex((prev) =>
                                prev === filteredSuggestions.length - 1 || filteredSuggestions.length === 0
                                    ? 0
                                    : prev + 1
                            );
                        } else if (e.key === 'ArrowUp') {
                            e.preventDefault();
                            setHighlightedIndex((prev) =>
                                prev <= 0 ? filteredSuggestions.length - 1 : prev - 1
                            );
                        } else if (e.key === 'Enter') {
                            if (highlightedIndex >= 0 && filteredSuggestions[highlightedIndex]) {
                                e.preventDefault();
                                const selected = filteredSuggestions[highlightedIndex];
                                setSearchTerm(selected.name);
                                handleSearch(selected.name);
                                setShowSuggestions(false);
                            }
                        } else if (e.key === 'Escape') {
                            setShowSuggestions(false);
                        }
                    }}


                />

                {searchTerm && showSuggestions && (
                    <ul className="absolute w-full bg-white border mt-1 rounded-md shadow z-10 max-h-48 overflow-y-auto scrollbar-thin scrollbar-thumb-saffron scrollbar-track-gray-100">
                        {filteredSuggestions.slice(0, 5).map((item, index) => (
                            <li
                                key={item.id}
                                className={`px-4 py-2 cursor-pointer ${index === highlightedIndex
                                    ? 'bg-saffron text-white'
                                    : 'hover:bg-saffron hover:text-white'
                                    }`}
                                ref={(el) => {
                                    if (index === highlightedIndex && el) {
                                        el.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
                                    }
                                }}
                                onMouseDown={(e) => {
                                    e.preventDefault();
                                    setSearchTerm(item.name);
                                    handleSearch(item.name);
                                    setShowSuggestions(false);
                                }}
                            >
                                {item.name}

                            </li>
                        ))}

                    </ul>
                )}

                {searchTerm && (
                    <div>
                        <button
                            type="submit"
                            className="absolute right-2 top-1/2 transform -translate-y-1/2 text-saffron hover:text-saffron-dark transition-colors duration-200 text-lg font-bold hidden sm:block"
                            aria-label="Submit search"
                        >
                            <Search className="w-4 h-4" />
                        </button>
                        <button
                            onClick={() => setSearchTerm("")}
                            className="absolute right-2 top-1/2 transform -translate-y-1/2 text-saffron hover:text-saffron-dark transition-colors duration-200 text-lg font-bold sm:hidden"
                            aria-label="Clear search"
                        >
                            <X className="w-4 h-4" />
                        </button>
                    </div>
                )}
                {isSearching && (
                    <div className="absolute right-10 top-1/2 transform -translate-y-1/2 text-gray-400 animate-spin sm:hidden">
                        <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none">
                            <circle
                                className="opacity-25"
                                cx="12"
                                cy="12"
                                r="10"
                                stroke="currentColor"
                                strokeWidth="4"
                            ></circle>
                            <path
                                className="opacity-75"
                                fill="currentColor"
                                d="M4 12a8 8 0 018-8v8H4z"
                            ></path>
                        </svg>
                    </div>
                )}
            </form>

        </div>
    )
}

export default SearchHandle
