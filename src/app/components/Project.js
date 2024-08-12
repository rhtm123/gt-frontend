

import React from "react";
import Link from "next/link";

export default function ProjectComponent({project}) {



    return (

        <div key={project.id} className="w-full bg-base-200 rounded-3xl p-4 flex flex-col items-start justify-center gap-3 hover:bg-base-200 hover:shadow-2xl hover:shadow-secondary transition-shadow">
                        <div className="w-full rounded-2xl overflow-hidden">
                            {project?.thumbnail ? (
                                <img src={project.thumbnail} alt={project.name} className="w-full h-full object-cover" />
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
    )
}