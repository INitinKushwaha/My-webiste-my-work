import React from 'react';

const projects = [
    {
        category: 'JavaScript',
        title: 'Project 1',
        description: 'This is a JavaScript project description.',
        image: 'https://example.com/project1.jpg',
        link: 'https://react-with-nitin.vercel.app/',
    },
    {
        category: 'JavaScript',
        title: 'Project 2',
        description: 'This is another JavaScript project description.',
        image: 'https://example.com/project2.jpg',
        link: 'https://react-with-nitin.vercel.app/',
    },
    {
        category: 'React',
        title: 'React Project 1',
        description: 'This is a React project description.',
        image: 'https://example.com/reactproject1.jpg',
        link: 'https://react-with-nitin.vercel.app/',
    },
    {
        category: 'React',
        title: 'React Project 2',
        description: 'This is another React project description.',
        image: 'https://example.com/reactproject2.jpg',
        link: 'https://react-with-nitin.vercel.app/',
    },
];

function Project() {
    return (
        <div className="max-w-6xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {projects.map((project, index) => (
                    <div key={index} className="bg-white shadow overflow-hidden sm:rounded-lg">
                        <img src={project.image} alt={project.title} className="w-full h-64 object-cover" />
                        <div className="px-4 py-4">
                            <h3 className="text-lg font-bold text-gray-800">{project.title}</h3>
                            <p className="text-sm text-gray-600 mt-2">{project.description}</p>
                            <a
                                href={project.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="mt-4 inline-block bg-orange-700 hover:bg-orange-600 text-white py-2 px-4 rounded-lg transition duration-300"
                            >
                                Check Project
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Project;
