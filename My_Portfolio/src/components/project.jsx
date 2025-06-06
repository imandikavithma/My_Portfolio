import React from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import { useEffect, useState, useCallback } from 'react';
import {IoArrowForward} from 'react-icons/io5'
import ProjectCard from './projectcard';
//motion
import { motion } from 'framer-motion'
import { fadeIn } from '../Variants';
// Import project images
import Project1 from '/Vyakarana.png'
import Project2 from '/Plane Seats Management System.png'
import Project3 from '/Cinema Seats Management System.png'
import Project4 from '/GoodHealth.png'
import Project5 from '/MovieWorld.png'
import Project6 from '/BookStore.jpg'
import Project7 from '/portfolio.png'

// Example PROJECTS array; replace with your actual project data as needed
const PROJECTS = [
    {
        id: 1,
        image:Project1,
        title: 'Sinhala Grammar Checker - Vyakarana',
        tags: ['React', 'TypeScript', 'Tailwind CSS'],
        githubLink: 'https://github.com/imandikavithma/Sinhala-Grammar-Checker-Vyakarana.git'
    },
    {
        id: 2,
        image:Project2,
        title: 'Plane Seats Management System',
        tags: ['Java'],
        githubLink: 'https://github.com/imandikavithma/Plane_Seats_Management_System.git'
    },
    {
        id: 3,
        image:Project3,
        title: 'Cinema Management System',
        tags: ['Java'],
        githubLink: 'https://github.com/imandikavithma/Cinema_Management_System.git'
    },
    {
        id: 4,
        image:Project4,
        title: 'Good Health and Wellbeing website',
        tags: ['HTML', 'JavaScript', 'CSS'],
        githubLink: 'https://github.com/imandikavithma/Good-Health-Well-being-website.git'
    },
    {
        id: 5,
        image:Project5,
        title: 'Movie World Website',
        tags: ['HTML', 'CSS', 'JavaScript'],
        githubLink: 'https://github.com/imandikavithma/Movie-World-website.git'
    },
    {
        id: 6,
        image:Project6,
        title: 'Book Store API',
        tags: ['Java'],
        githubLink: 'https://github.com/imandikavithma/BookStore_API.git'
    },
    {
        id: 7,
        image:Project7,
        title: 'My Portfolio',
        tags: ['React', 'JavaScript','Tailwind CSS'],
        githubLink: 'https://github.com/imandikavithma/My_Portfolio.git'
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
                    <motion.div
                    variants={fadeIn('up', 0.2)}
                    initial='hidden'
                    whileInView='show'
                    viewport={{ once: false, amount: 0.7 }}
                    className='w-full lg:w-[60vw] mx-auto'>
                        <h2 className="text-4xl font-bold text-center mb-12">Projects</h2>
                        <p className='text-lg text-center mt-3 leading-6'>
                            These projects showcase my technical expertise.
                            I focus on clean code, performance and user experience.
                        </p>

                    </motion.div>
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
                                            githubLink={project.githubLink}
                                        />
                                    </div>
                                    
                                ))}

                            </div>

                        </div>

                        {/*Navigation Buttons*/}
                        <button
                            className={`absolute top-1/2 -translate-y-1/2 bg-orange-400 text-white p-2 rounded-full shadow left-8 ${
                                !canScrollPrev ? "opacity-50 cursor-not-allowed" : ""
                            }`}
                            onClick={() => emblaApi && emblaApi.scrollPrev()}
                            disabled={!canScrollPrev}
                        >
                            <IoArrowForward className='rotate-180'/>
                        </button>

                        <button
                            className={`absolute top-1/2 -translate-y-1/2 bg-orange-400 text-white p-2 rounded-full shadow right-8 ${
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