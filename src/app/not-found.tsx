import Link from 'next/link';
import React from 'react';

const NotFoundPage = () => {
    return (
        <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-gray-800 px-6">

            {/* Background */}
            <div className="absolute -left-32 -top-32 h-80 w-80 rounded-full bg-green-500/20 blur-3xl" />

            <div className="absolute -bottom-40 -right-32 h-96 w-96 rounded-full bg-blue-500/20 blur-3xl" />

            <div className="relative z-10 mx-auto max-w-2xl text-center">

                {/* Icon */}
                <div className="mx-auto mb-8 flex h-20 w-20 items-center justify-center rounded-3xl bg-linear-to-br from-green-400 to-green-600 text-4xl shadow-xl shadow-green-500/20">
                    🏋️
                </div>

                {/* 404 */}
                <h1 className="text-[120px] font-black leading-none tracking-[-0.08em] text-gray-200 sm:text-[160px]">
                    4<span className="text-green-500">0</span>4
                </h1>

                {/* Content */}
                <h2 className="mt-6 text-3xl font-bold tracking-tight text-gray-200 sm:text-4xl">
                    Page Not Found
                </h2>

                <p className="mx-auto mt-4 max-w-lg text-base leading-7 text-gray-200 sm:text-lg">
                    Looks like this workout took a wrong turn. The page you&apos;re
                    looking for doesn&apos;t exist or may have been moved.
                </p>

                {/* Actions */}
                <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
                    <Link
                        href="/"
                        className="inline-flex w-full items-center justify-center rounded-xl bg-green-500 px-6 py-3.5 font-semibold text-white shadow-lg shadow-green-500/20 transition-all hover:-translate-y-0.5 hover:bg-green-600 hover:shadow-xl sm:w-auto"
                    >
                        ← Back to Home
                    </Link>

                </div>

                {/* Footer */}
                <p className="mt-12 text-sm text-gray-200">
                    © {new Date().getFullYear()} Fit Log · Stay consistent. Stay fit.
                </p>
            </div>
        </main>
    );
};

export default NotFoundPage;