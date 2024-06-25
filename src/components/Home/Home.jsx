import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
    return (
        <div className="mx-auto w-full max-w-7xl">
            <aside className="relative overflow-hidden text-black rounded-lg sm:mx-16 mx-2 sm:py-16">
                <div className="relative z-10 max-w-screen-xl px-4 pb-20 pt-10 sm:py-24 mx-auto sm:px-6 lg:px-8">
                    <div className="max-w-xl sm:mt-1 mt-80 space-y-8 text-center sm:text-right sm:ml-auto fade-in">
                        <h2 className="text-4xl font-bold sm:text-5xl">
                            MERN Stack Developer
                            <span className="hidden sm:block text-4xl"></span>
                        </h2>
                    </div>
                </div>

                <div className="absolute inset-0 w-full sm:my-20 sm:pt-1 pt-12 h-full fade-in" style={{ animationDelay: '0.5s' }}>
                    <img className="w-96" src="https://i.ibb.co/5BCcDYB/Remote2.png" alt="image1" />
                </div>
            </aside>

            <div className="grid place-items-center sm:mt-20 fade-in" style={{ animationDelay: '1s' }}>
                <img className="sm:w-96 w-48" src="https://i.ibb.co/2M7rtLk/Remote1.png" alt="image2" />
            </div>

            <h1 className="text-center text-2xl sm:text-5xl py-10 font-medium fade-in" style={{ animationDelay: '1.5s' }}>
                Hey, I'm Nitin Kushwaha
            </h1>

            


            <section className="fade-in" style={{ animationDelay: '3s' }}>
                <div className="text-center py-10">
                    <div className="mt-4 mx-4 sm:mx-20">
                        <p className="italic">"I'm is a highly skilled developer who delivers top-notch solutions on time."</p>
                        <p className="mt-2 font-bold">- nitin</p>
                    </div>
                </div>
            </section>
        </div>
    );
}
