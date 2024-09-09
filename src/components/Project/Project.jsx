import React, { useState, useEffect } from 'react';

const projects = [
    {
        "category": "MERN",
        "title": "Quote of the Day",
        "description": "A full-stack web application built with the MERN stack (MongoDB, Express, React, Node.js) that displays a random quote each day. The front end is designed with React and TailwindCSS for a responsive UI, while the back end uses Node.js and Express to handle API requests. Users can search for quotes by author name, and quotes are stored and fetched from a MongoDB database. The app is deployed on Vercel and Render, providing seamless user experience across devices.",
        "image": "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEid3yU0ILUym_fMj-VtNc0Q9E5fqJv4Tv1rUNH7Fr94Y9gZocmUdghNLLxgYa-zHpnDnZrJyFOEmBTewQBT7h_NXgXsoL9JF6l9sTvNo6271su2eOy66TQbbTpSuLXfaPFIBppkS53WrW7ukwVq3aqVlrZlm2Wu-MhTMSPHf0bisPFpqa4ROhfsTfc-6Ts/s320/Screenshot%202024-09-06%20015425.png",
        "link": "https://techplement-2mx3.vercel.app/"
      },
    {
        category: 'ReactJs',
        title: 'BlogHere',
        description: 'A dynamic blogging website utilizing React, Redux, TailwindCSS, Appwrite, React Hook Form, and TinyMCE for an enhanced user experience.',
        image: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhI19RCfg9kQK7X3tCIA_2w-oefO5o8kBLc0pljjq_ZTFMl3CJNUz8pZi5-3L1gQsUVZax8g-CvzgancvqSOaSUktrwQ5enSqg7VQIvZxYnoksIDokQ3NkM5D3nSVdpbWC3HL99F69gmcLFxF_CU-jPvkD2eWpJ5CvWJj2lrDF4IvxlRRy9o3WqdSNcCBY/s320/Screenshot%202024-07-02%20084435.png',
        link: 'https://bloghere-delta.vercel.app/',
    },
    {
        category: 'ReactJs',
        title: 'Todo Manage Application',
        description: 'A Todo manage application is a tool designed to help users organize, prioritize, and track their tasks efficiently.',
        image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgylhUxICqnALcZUBAEvX2B7Z-gISWa1fmZtoGkEAH2NXc2rnPlRupJ6KPfDB8Zv3rRV2PJQd65lUFGrEAfIjzEj6GubWSeOggn43iquPirKk3uyFmT6TRg_Yfu2iuhWGSOwcz5gRBLPkpVpbwGWv3YXEgkYlkWJqv2h_Iy_7hR1nxMBUJ6ARFXrzQFjpw/s837/todoapp.png",
        link: 'https://todomanagerapp.vercel.app/',
    },
    {
        category: 'ReactJs',
        title: 'Currency Converter Application',
        description: 'A currency converter application allows users to easily convert amounts between different currencies using real-time exchange rates.',
        image: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgI1_tD2oh0dv8wKwYkcbaXUNn96gWuL9oYQwZC9U7jQlL_tWcEhHVnES90zHFw01j-7lPtMbkI2njghTP5tEPVxviG-RwcIYpNL13E07NGgG0eqKkiKouPSNcRz14469GaBju4S2-xl7BGbq2JMsctavj088LTdQ5Kl3rhCZq8lrbMeqAJ_ecGIks6a0Q/s694/currencyapp.png',
        link: 'https://react-with-nitin.vercel.app/',
    },

];

function Project() {
    const [hoveredIndex, setHoveredIndex] = useState(null);

    useEffect(() => {
        const handleMouseMove = (index) => {
            setHoveredIndex(index);
        };

        const handleMouseLeave = () => {
            setHoveredIndex(null);
        };

        // Attach event listeners
        projects.forEach((_, index) => {
            const element = document.getElementById(`project-${index}`);
            if (element) {
                element.addEventListener('mousemove', () => handleMouseMove(index));
                element.addEventListener('mouseleave', handleMouseLeave);
            }
        });

        return () => {
            // Clean up event listeners
            projects.forEach((_, index) => {
                const element = document.getElementById(`project-${index}`);
                if (element) {
                    element.removeEventListener('mousemove', () => handleMouseMove(index));
                    element.removeEventListener('mouseleave', handleMouseLeave);
                }
            });
        };
    }, []);

    return (
        <div className="max mx-auto py-16 px-4 sm:px-6 lg:px-8 dark:bg-gray-700">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 ">
                {projects.map((project, index) => (
                    <div
                        key={index}
                        id={`project-${index}`}
                        className={`relative bg-white shadow overflow-hidden sm:rounded-lg max-w-full transform transition-transform glow-effect ${
                            hoveredIndex === index ? 'scale-105' : 'scale-100'
                        }`}
                        style={{
                            zIndex: hoveredIndex === index ? '10' : '1',
                            transitionDuration: '0.3s',
                        }}
                    >
                        <img src={project.image} alt={project.title} className="w-full h-64 object-cover" />
                        <div className="px-4 py-4">
                            <h3 className="text-lg font-bold text-gray-800">{project.title}</h3>
                            <p className="text-sm text-gray-600 mt-2">{project.description}</p>
                            <a
                                href={project.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="mt-4 inline-block bg-orange-700 hover:bg-orange-600 text-white py-2 px-4 rounded-lg transition duration-300 dark:bg-yellow-700 dark:hover:bg-yellow-600"
                            >
                                Visit Project
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Project;
