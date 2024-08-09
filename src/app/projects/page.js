'use client'; // Ensure that the component is a client component

import { useEffect, useState } from 'react';
import Link from 'next/link';

const ProjectsPage = () => {
    const [projects, setProjects] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchProjects = async () => {
            try {
                const res = await fetch(`${process.env.API_URL}api/project/projects`);
                if (!res.ok) {
                    throw new Error('Failed to fetch projects');
                }
                const data = await res.json();
                console.log(data);
                setProjects(data.results);
            } catch (error) {
                setError(error.message);
            }
        };

        fetchProjects();
    }, []);

    if (error) {
        return <p>{error}</p>;
    }

    if (projects.length === 0) {
        return <p>Loading...</p>;
    }
    const imageUrl = projects.img ? `http://localhost:8000${projects.img}` : null;
    return (
        <div className="p-8">
            {/* Page Heading */}
            <h1 className="text-4xl font-bold text-center mb-4">Our Projects</h1>
            <p className="text-lg text-center mb-10">
                Explore our latest projects and see the amazing work we've done for our clients. Each project showcases our expertise in technology and design.
            </p>

            {/* Project Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
                {projects.map((project) => (
                    <div key={project.id} className="w-60 h-80 bg-base-200 rounded-3xl text-base-900 p-4 flex flex-col items-start justify-center gap-3 hover:bg-base-900 hover:shadow-2xl hover:shadow-sky-400 transition-shadow">
                        <div className="w-52 h-40 rounded-2xl overflow-hidden">
                            {imageUrl ? (
                                <img src={imageUrl} alt={project.name} className="w-full h-full object-cover" />
                            ) : (
                                <div className="w-full h-full bg-sky-300 rounded-2xl"></div>
                            )}
                        </div>
                        <div>
                            <p className="font-extrabold">{project.name}</p>
                            <p>{project.short_description}</p>
                        </div>
                        <div className="flex items-center gap-2">
                            {project.technology_used.map((tech) => (
                                <img key={tech.id} src={tech.icon} alt={tech.name} className="w-6 h-6 text-base-100" />
                            ))}
                            <Link href={`/projects/${project.id}`}>
                                <button className="bg-sky-700 font-extrabold p-2 px-6 rounded-xl hover:bg-sky-500 transition-colors">See more</button>
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProjectsPage;
