// components/Menu/CategoryFilter.tsx
import { Button } from '@/components/ui/button';
import { categories } from '@/utils/constants';
import { Category } from '@/types/product';

interface Props {
  activeCategory: string;
  setActiveCategory: (categoryId: string) => void;
}

const CategoryFilter = (props: Props) => {
  const { activeCategory, setActiveCategory } = props;
  return (
    <div className="flex flex-wrap justify-center gap-2">
      {categories.map((category: Category) => (
        <Button
          key={category.id}
          variant={activeCategory === category.id ? 'default' : 'outline'}
          size="sm"
          onClick={() => setActiveCategory(category.id)}
          className={`flex items-center space-x-2 ${
            activeCategory === category.id
              ? 'bg-saffron hover:bg-saffron-dark text-white'
              : 'border-saffron text-saffron hover:bg-saffron hover:text-white'
          }`}
        >
          <span>{category.icon}</span>
          <span>{category.name}</span>
        </Button>
      ))}
    </div>
  );
};

export default CategoryFilter;
