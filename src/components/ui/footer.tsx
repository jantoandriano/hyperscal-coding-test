const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white py-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center">
                    <p>&copy; 2023 BrandName. All rights reserved.</p>
                    <div className="mt-4">
                        <a href="#" className="text-gray-400 hover:text-white px-3">Privacy Policy</a>
                        <a href="#" className="text-gray-400 hover:text-white px-3">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

Footer.displayName = "Footer"

export { Footer }

