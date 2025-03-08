import React, { useEffect, useState } from 'react';

const ScrollTop = () => {
    const [isVisible, setIsVisible] = useState(false);

    // Show button when page is scrolled down
    const toggleVisibility = () => {
        if (window.scrollY > 300) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    // Scroll to top function
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility);
        return () => {
            window.removeEventListener('scroll', toggleVisibility);
        };
    }, []);

    return (
        <div className="fixed bottom-4 right-4 z-50">
            {isVisible && (
                <button
                    onClick={scrollToTop}
                    className="bg-green-500 text-white p-3 rounded-full shadow-lg hover:bg-blue-600 transition duration-300 flex items-center justify-center w-12 h-12"
                    aria-label="Scroll to top">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="w-6 h-6">
                        <circle cx="12" cy="12" r="10" />
                        <path d="M16 12l-4-4-4 4" />
                    </svg>
                </button>
            )}
        </div>
    );
};

export default ScrollTop;
