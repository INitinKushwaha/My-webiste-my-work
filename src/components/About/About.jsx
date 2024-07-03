import React from 'react';

export default function About() {
    return (
        <div className="py-16 bg-white dark:bg-gray-700">
            <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
                <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
                    <div className="md:5/12 lg:w-5/12 ">
                        <img
                            src="https://images.pexels.com/photos/2047905/pexels-photo-2047905.jpeg?auto=compress&cs=tinysrgb&w=600"
                            alt="Nitin Kushwaha"
                            className="rounded-full w-80 mx-auto glow-effect "
                        />
                    </div>
                    <div className="md:7/12 lg:w-6/12">
                        <h3 className="text-2xl text-gray-900 font-bold  dark:text-white">About Me</h3>
                        <p className="mt-4 text-gray-600  dark:text-white">
                            Hello! I'm <strong>Nitin Kushwaha</strong>, a passionate <strong>MERN Stack Developer</strong> with a keen interest in creating dynamic and interactive web applications. With a strong foundation in computer science and hands-on experience in full-stack development, I am committed to building high-quality, scalable solutions that meet the needs of both clients and users.
                        </p>
                        <h3 className="text-2xl text-gray-900 font-bold mt-8  dark:text-white">Professional Background</h3>
                        <p className="mt-4 text-gray-600  dark:text-white">
                            I'm Fresher but I have experience working with the MERN stack, which includes <strong>MongoDB, Express.js, React, and Node.js</strong>. My journey as a developer began with a fascination for how websites work, leading me to pursue a degree in computer science. Since then, I've honed my skills by working on various projects, from small websites to large-scale web applications.
                        </p>
                        <h3 className="text-2xl text-gray-900 font-bold mt-8  dark:text-white">Skills and Expertise</h3>
                        <div className="mt-4 flex justify-center gap-8 ">
                            <div className="bg-gray-200 p-4 rounded-lg shadow w-24 h-24 flex items-center justify-center  dark:text-black">
                                <span>React</span>
                            </div>
                            <div className="bg-gray-200 p-4 rounded-lg shadow w-24 h-24 flex items-center justify-center  dark:text-black">
                                <span>Node.js</span>
                            </div>
                            <div className="bg-gray-200 p-4 rounded-lg shadow w-24 h-24 flex items-center justify-center  dark:text-black">
                                <span>Express.js</span>
                            </div>
                            <div className="bg-gray-200 p-4 rounded-lg shadow w-24 h-24 flex items-center justify-center  dark:text-black">
                                <span>MongoDB</span>
                            </div>
                        </div>
                        <h3 className="text-2xl text-gray-900 font-bold mt-8  dark:text-white">My Approach</h3>
                        <p className="mt-4 text-gray-600  dark:text-white">
                            I believe in writing clean, maintainable code and am always eager to learn new technologies and best practices. My development philosophy revolves around user-centric design, ensuring that every application I build is intuitive and enjoyable to use. I am a strong advocate for continuous improvement and regularly participate in coding meetups, hackathons, and online forums to stay updated with the latest trends in web development.
                        </p>
                        <h3 className="text-2xl text-gray-900 font-bold mt-8  dark:text-white">Personal Interests</h3>
                        <p className="mt-4 text-gray-600  dark:text-white">
                            Outside of coding, I enjoy exploring the great outdoors, which helps me stay refreshed and inspired. I'm also an avid chess player, which has taught me the importance of strategic thinking and patience. Additionally, I love reading about the latest advancements in technology, which often spark new ideas for my projects.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
