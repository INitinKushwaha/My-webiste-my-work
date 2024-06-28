import React from 'react';

const projects = [
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
        <div className="max mx-auto py-16 px-4 sm:px-6 lg:px-8 dark:bg-gray-700">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {projects.map((project, index) => (
                    <div key={index} className="bg-white shadow overflow-hidden sm:rounded-lg max-w-full">
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
