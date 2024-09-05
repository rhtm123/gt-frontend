'use client'; // Ensure that the component is a client component

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { CiLocationArrow1 } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";

import ImageSlider from '@/app/components/ImageSlider';

const ProjectPage = ({ params }) => {
    const { id } = params;
    const [project, setProject] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchProject = async () => {
            try {
                const res = await fetch(`${process.env.API_URL}api/project/projects/${id}`);
                if (!res.ok) {
                    throw new Error('Failed to fetch project data');
                }
                const data = await res.json();
                console.log(data);
                setProject(data);
            } catch (error) {
                setError(error.message);
            }
        };

        if (id) {
            fetchProject();
        }
    }, [id]);

    if (error) {
        return (
            <div className="alert alert-error shadow-lg">
                <div>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="stroke-current flex-shrink-0 h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M18.364 5.636a9 9 0 11-12.728 12.728 9 9 0 0112.728-12.728zM12 8v4m0 4h.01"
                        />
                    </svg>
                    <span>{error}</span>
                </div>
            </div>
        );
    }

    if (!project) {
        return (
            <div className="flex justify-center items-center h-screen">
                <div className="spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full"></div>
                <p className="ml-2">Loading...</p>
            </div>
        );
    }
    // const imageUrl = project.img ? `http://localhost:8000${project.img}` : null;
    const imageUrl = project.img ? project.img : null;

    return (
        <div className="flex flex-col md:flex-row p-8 space-y-6 md:space-y-0 md:space-x-8">
            <div className="flex-1">
            <div className="relative w-full max-w-2xl h-96 rounded-xl border overflow-hidden">
                <img
                    src="/image/desktop.png"
                    alt="Desktop screen"
                    className="absolute inset-0 w-full h-full object-contain z-10 pointer-events-none"
                />
                <div className="absolute top-[5%] left-[18%] right-[18%] bottom-[30%] overflow-hidden z-0">
                    <div className="scroll-container w-full h-full flex items-start justify-center">
                        {project.img ? (
                            <div className="scroll-content">
                                <img
                                    src={project.img}
                                    alt={project.name}
                                    className="object-contain"
                                    style={{ width: '100%', height: 'auto'}}
                                />
                            </div>
                        ) : (
                            <div className="w-full h-full bg-gray-300 flex items-center justify-center text-gray-600">
                                No Image Available
                            </div>
                        )}
                    </div>
                </div>
            </div>


            <div className='py-4'>
            <ImageSlider project={project} />

            </div>

            

        
            </div>
            <div className="flex-1 space-y-4">
                <h1 className="text-4xl font-extrabold">{project.name}</h1>
                <p className="text-lg">{project.short_description}</p>
                <div className="text-base prose" dangerouslySetInnerHTML={{ __html: project.description }}/>
                <div className="flex items-center gap-2">
                    <strong>Technologies Used:</strong>
                    {project.technology_used.map((tech) => (
                        <img
                            key={tech.id}
                            src={tech.icon}
                            alt={tech.name}
                            className="w-6 h-6"
                        />
                    ))}
                </div>

                <div className='flex py-4'>
                {project.url && (
                            <div className='mr-2'> 
                            <Link href={project.url}
                            target="_blank"
                            rel="noopener noreferrer" >
                            <button
                            className="overflow-hidden w-32 p-2 h-12 bg-black text-white border-none rounded-md  font-bold cursor-pointer relative z-10 group"
                            >
                            Visit Project
                            <span
                                className="absolute w-36 h-32 -top-8 -left-2 bg-green-200 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-500 duration-1000 origin-bottom"
                            ></span>
                            <span
                                className="absolute w-36 h-32 -top-8 -left-2 bg-green-400 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-700 duration-700 origin-bottom"
                            ></span>
                            <span
                                className="absolute w-36 h-32 -top-8 -left-2 bg-green-600 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-1000 duration-500 origin-bottom"
                            ></span>
                            <span
                                className="group-hover:opacity-100 group-hover:duration-1000 duration-100 opacity-0 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 flex items-center justify-center">
                                <CiLocationArrow1 size={24} />
                            </span>

                            </button>

                          </Link>
                          </div>
                        )}
                        {project.github && (
                            <div className='ml-2 mr-2'>
                             <Link href={project.github}
                             target="_blank"
                             rel="noopener noreferrer" >
                             
                           <button
                            className="overflow-hidden w-38 p-2 h-12 bg-black text-white border-none rounded-md text-wrap font-bold cursor-pointer relative z-10 group"
                            >
                           View on GitHub
                            <span
                                className="absolute w-36 h-32 -top-8 -left-2 bg-green-200 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-500 duration-1000 origin-bottom"
                            ></span>
                            <span
                                className="absolute w-36 h-32 -top-8 -left-2 bg-green-400 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-700 duration-700 origin-bottom"
                            ></span>
                            <span
                                className="absolute w-36 h-32 -top-8 -left-2 bg-green-600 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-1000 duration-500 origin-bottom"
                            ></span>
                            <span
                                className="group-hover:opacity-100 group-hover:duration-1000 duration-100 opacity-0 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 flex items-center justify-center">
                                <FaGithub size={24} />
                            </span>
                            </button>
                           </Link>
                           </div>
                        )}
            </div>
                
            
            

            
            </div>


        </div>
    );
};

export default ProjectPage;
