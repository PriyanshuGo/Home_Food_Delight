'use client'
import Navigation from "@/components/navbar/Navigation";
import { store } from "@/redux/store";
import { ReactNode } from "react";
import { Provider } from "react-redux";

const RootLayout = ({ children }: { children: ReactNode }) => {
    return (
        <>
            <Provider store={store}>
                {/* Alert Banner */}
                <div className="bg-saffron text-white py-2 px-4 text-center">
                    <p className="text-sm">
                        🍽️ “Freshly Prepared. Google-Certified Chefs. Real Home Food — Made Just for You.”
                    </p>
                </div>
                {/* Navigation */}
                <Navigation />
                {children}
            </Provider>
        </>
    );
};

export default RootLayout;