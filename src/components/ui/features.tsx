'use client';
import { FaRocket, FaShieldAlt, FaThumbsUp } from 'react-icons/fa';
import { useInView } from 'react-intersection-observer';
import { useState, useEffect } from 'react';

const Features = () => {

    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });
    const [animate, setAnimate] = useState(false);

    useEffect(() => {
        if (inView) {
            setAnimate(true);
        }
    }, [inView]);

    return (
        <section ref={ref} className="bg-gray-100 py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className={`text-center transition-opacity duration-1000 ${animate ? 'opacity-100' : 'opacity-0'}`}>
                    <h2 className="text-4xl font-extrabold text-gray-900">Our Features</h2>
                    <p className="mt-4 text-lg text-gray-600">Explore the amazing features we offer to help you succeed.</p>
                </div>
                <div className={`mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3 transition-opacity duration-1000 delay-200 ${animate ? 'opacity-100' : 'opacity-0'}`}>
                    <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                        <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white mb-4">
                            <FaRocket className="h-6 w-6" />
                        </div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">Fast Performance</h3>
                        <p className="text-gray-600">Our service is optimized for speed, ensuring that your tasks are completed quickly and efficiently.</p>
                    </div>
                    <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                        <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white mb-4">
                            <FaShieldAlt className="h-6 w-6" />
                        </div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">Secure</h3>
                        <p className="text-gray-600">We prioritize your security and privacy, ensuring that your data is always safe with us.</p>
                    </div>
                    <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                        <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white mb-4">
                            <FaThumbsUp className="h-6 w-6" />
                        </div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">User-Friendly</h3>
                        <p className="text-gray-600">Our platform is designed with the user in mind, making it easy to navigate and use.</p>
                    </div>
                    <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                        <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white mb-4">
                            <FaRocket className="h-6 w-6" />
                        </div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">Innovative Solutions</h3>
                        <p className="text-gray-600">We provide cutting-edge solutions to help you stay ahead in the market.</p>
                    </div>
                    <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                        <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white mb-4">
                            <FaShieldAlt className="h-6 w-6" />
                        </div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">Reliable</h3>
                        <p className="text-gray-600">Our services are dependable and consistent, ensuring that you can always count on us.</p>
                    </div>
                    <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                        <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white mb-4">
                            <FaThumbsUp className="h-6 w-6" />
                        </div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">Excellent Support</h3>
                        <p className="text-gray-600">Our dedicated support team is here to help you with any issues you may encounter.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

Features.displayName = "Features"

export { Features }

