import React from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import { useEffect, useState, useCallback } from 'react';
import {IoArrowForward} from 'react-icons/io5'
import ProjectCard from './projectcard';
import Project1 from '../assets/project.png'

// Example PROJECTS array; replace with your actual project data as needed
const PROJECTS = [
    {
        id: 1,
        image:Project1,
        title: 'Project One',
        tags: ['React', 'JavaScript']
    },
    {
        id: 2,
        image:Project1,
        title: 'Project Two',
        tags: ['Node.js', 'Express']
    },
    {
        id: 3,
        image:Project1,
        title: 'Project Three',
        tags: ['CSS', 'HTML']
    },
    {
        id: 4,
        image:Project1,
        title: 'Project Four',
        tags: ['React', 'JavaScript']
    },
    {
        id: 5,
        image:Project1,
        title: 'Project Five',
        tags: ['Node.js', 'Express']
    },
    {
        id: 6,
        image:Project1,
        title: 'Project Six',
        tags: ['React', 'JavaScript']
    }
   
];

const Project = () => {
    const [emblaRef, emblaApi] = useEmblaCarousel ({loop: true, align: "start"});
    const [canScrollPrev, setCanScrollPrev] = useState(false);
    const [canScrollNext, setCanScrollNext] = useState(false);

    const updateScrollButtons = useCallback(() => {
        if (!emblaApi) return;
        setCanScrollPrev(emblaApi.canScrollPrev());
        setCanScrollNext(emblaApi.canScrollNext());
    }, [emblaApi]);

    useEffect(() => {
        if (!emblaApi) return;
        
        emblaApi.on('select', updateScrollButtons);
        updateScrollButtons();
    }, [emblaApi, updateScrollButtons]);

    return (
        <section className='section'>
            <div className='bg-black text-white' id='projects'>
                <div className='container mx-auto px-8 md:px-10 py-10'>
                    <div className='w-full lg:w-[60vw] mx-auto'>
                        <h2 className="text-4xl font-bold text-center mb-12">Projects</h2>
                        <p className='text-lg text-center mt-3 leading-6'>
                            These projects showcase my technical expertise.
                            I focus on clean code, performance and user experience.
                        </p>

                    </div>
                    <div className='relative'>
                        <div className='overflow-hidden' ref={emblaRef}>
                            <div className='flex pt-14 pb-8'>
                                {PROJECTS.map((project) => (
                                    <div key={project.id} className = "min-w-[100%] sm:min-w-[50%] lg:min-w-[33%]">
                                        <ProjectCard
                                            key={project.id}
                                            imgUrl={project.image}
                                            title = {project.title}
                                            tags = {project.tags}
                                        />
                                    </div>
                                    
                                ))}

                            </div>

                        </div>

                        {/*Navigation Buttons*/}
                        <button
                            className={`absolute top-1/2 -translate-y-1/2 bg-primary text-black p-2 rounded-full shadow left-8 ${
                                !canScrollPrev ? "opacity-50 cursor-not-allowed" : ""
                            }`}
                            onClick={() => emblaApi && emblaApi.scrollPrev()}
                            disabled={!canScrollPrev}
                        >
                            <IoArrowForward className='rotate-180'/>
                        </button>

                        <button
                            className={`absolute top-1/2 -translate-y-1/2 bg-primary text-black p-2 rounded-full shadow right-8 ${
                                !canScrollNext ? "opacity-50 cursor-not-allowed" : ""
                            }`}
                            onClick={() => emblaApi && emblaApi.scrollNext()}
                            disabled={!canScrollNext}
                        >
                            <IoArrowForward/>
                        </button>
                    </div>

                </div>
            </div>

        </section>
    )
}

export default Project