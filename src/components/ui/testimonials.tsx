const Testimonials = () => {
    return (
        <section className="bg-white py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center">
                    <h2 className="text-3xl font-extrabold text-gray-900">Testimonials</h2>
                    <p className="mt-4 text-lg text-gray-600">See what our customers are saying.</p>
                </div>
                <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <div className="bg-white p-6 rounded-lg shadow-lg">
                        <p className="text-gray-600">"Great service! Highly recommend."</p>
                        <div className="mt-4">
                            <p className="text-gray-900 font-bold">Jokowi</p>
                            <p className="text-gray-600">Presiden of Indonesia</p>
                        </div>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-lg">
                        <p className="text-gray-600">"Amazing experience, will use again."</p>
                        <div className="mt-4">
                            <p className="text-gray-900 font-bold">Jhon Doe</p>
                            <p className="text-gray-600">Engineer</p>
                        </div>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-lg">
                        <p className="text-gray-600">"Very satisfied with the results."</p>
                        <div className="mt-4">
                            <p className="text-gray-900 font-bold">Tim Cook</p>
                            <p className="text-gray-600">CEO of Apple</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

Testimonials.displayName = "Testimonials"

export { Testimonials }

