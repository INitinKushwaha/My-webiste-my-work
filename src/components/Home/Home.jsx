import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
    const [stackType, setStackType] = useState('MERN');

    useEffect(() => {
        const interval = setInterval(() => {
            // Toggle between stack types
            setStackType(currentStack =>
                currentStack === 'MERN' ? 'FULL' : 'MERN'
            );
        }, 2000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="mx-auto w-full max dark:bg-gray-700">
            <aside className="relative overflow-hidden text-black rounded-lg sm:mx-16 mx-2 sm:py-16 dark:text-white">
                <div className="relative z-10 max-w-screen-xl px-4 pb-20 pt-10 sm:py-24 mx-auto sm:px-6 lg:px-8">
                    <div className="max-w-xl sm:mt-1 mt-80 space-y-8 text-center sm:text-right sm:ml-auto fade-in">
                        <h2 className="text-4xl sm:text-5xl">
                            {stackType === 'MERN' ? (
                                <span className="text-red-600 ">MERN <span className='text-black dark:text-white' > Stack Developer</span> </span>
                            ) : (
                                <span className="text-red-600">Software <span className='text-black dark:text-white' > Developer</span></span>
                            )}
                            <span className="hidden sm:block text-4xl"></span>
                        </h2>
                    </div>
                </div>

                <div className="absolute inset-0 w-full sm:my-20 sm:pt-1 pt-12 h-full fade-in" style={{ animationDelay: '1s' }}>
                    <img className="w-96  " src="https://png.pngtree.com/png-vector/20220710/ourmid/pngtree-business-worker-at-workplace-png-image_5695269.png" alt="image1" />
                </div>
            </aside>

            <div className="grid place-items-center sm:mt-20 fade-in" style={{ animationDelay: '1s' }}>
                <img className="sm:w-100 w-48" src="https://www.freecodecamp.org/news/content/images/2022/11/hire-full-stack-developers1546507474317-1.gif" alt="image2" />
            </div>

            <h1 className="text-center text-2xl sm:text-5xl py-10 font-medium fade-in dark:text-white " style={{ animationDelay: '1.5s' }}>
                Hey, I'm Nitin Kushwaha
            </h1>

            <section className="fade-in" style={{ animationDelay: '3s' }}>
                <div className="text-center py-10">
                    <div className="mt-4 mx-4 sm:mx-20">
                        <p className="italic dark:text-white">"I'm is a highly skilled developer who delivers top-notch solutions on time."</p>
                        <p className="mt-2 font-bold dark:text-white">- nitin</p>
                    </div>
                </div>
            </section>
        </div>
    );
}
