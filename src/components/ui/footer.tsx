import Link from "next/link";

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white py-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center">
                    <p>&copy; 2024 Hyperscal. All rights reserved.</p>
                    <div className="mt-4">
                        <Link href="#" className="text-gray-400 hover:text-white px-3">Privacy Policy</Link>
                        <Link href="#" className="text-gray-400 hover:text-white px-3">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

Footer.displayName = "Footer"

export { Footer }

