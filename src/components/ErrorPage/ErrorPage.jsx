const ErrorPage = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-base-200 px-4">
            <div className="text-center max-w-md bg-base-100 shadow-xl rounded-2xl p-8 border border-base-300">

                {/* Icon */}
                <div className="text-6xl mb-4">⚠️</div>

                {/* Title */}
                <h1 className="text-3xl font-bold text-error mb-2">
                    Oops! Page Not Found
                </h1>

                {/* Description */}
                <p className="text-base-content/70 mb-6">
                    The page you are looking for doesn’t exist or has been moved.
                    Please check the URL or go back to safety.
                </p>

                {/* Action Button */}
                <button
                    onClick={() => window.history.back()}
                    className="btn btn-primary w-full"
                >
                    Go Back
                </button>

                {/* Secondary link */}
                <p className="mt-4 text-sm text-base-content/60">
                    Or return to the homepage and continue browsing.
                </p>
            </div>
        </div>
    );
};

export default ErrorPage;