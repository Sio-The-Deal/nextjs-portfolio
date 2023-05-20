import Head from "next/head";
import AnimatedText from "../components/AnimatedText";
import Layout from "../components/Layout";
import Image from "next/image";
// import ProfilePicture from "../img/star_war_coding.png";
import { useEffect, useRef } from "react";
import { useInView, useMotionValue, useSpring } from "framer-motion";
import Skills from "../components/Skills";
import Job from "../components/Job";
import Education from "../components/Education";
import { projects } from "../components/data/Projects";
import TransitionEffect from "../components/TransitionEffect";

const AnimatedNumbers = ({ value }) => {
    const ref = useRef(null);
    const motionValue = useMotionValue(0);
    const springValue = useSpring(motionValue, { duration: 3000 });
    const isInView = useInView(ref, { once: true });

    useEffect(() => {
        if (isInView) {
            motionValue.set(value);
        }
    }, [isInView, value, motionValue]);

    useEffect(() => {
        springValue.on("change", (latest) => {
            if (ref.current && latest.toFixed(0) <= value) {
                ref.current.textContent = latest.toFixed(0);
            }
        });
    }, [springValue, value]);
    return <span ref={ref}></span>;
};

const experienceYears = () => {
    const currentYear = new Date().getFullYear();
    const experienceYears = currentYear - 2022;
    return experienceYears;
};

const projectsNumber = (collaboration) => {
    var number = 0;
    var projects = collaboration.map(function (project) {
        number += project.projects.length;
    });
    return number;
};

const collaborationNumber = (collaboration) => {
    return collaboration.length;
};

const About = () => {
    return (
        <>
            <Head>
                <title>About Sio Chang</title>
                <meta
                    name="description"
                    content="Professional experience and education of Sio Chang"
                />
                <meta property="og:title" content="Professional experience and education of Sio Chang" />
                <meta
                    property="og:description"
                    content="Professional experience and education of Sio Chang"
                />
            </Head>
            <TransitionEffect />
            <main className="flex w-full flex-col items-center justify-center dark:text-light">
                <Layout className="p-32 pt-16 xl:p-24 lg:p-16 md:p-12 sm:pt-8 ">
                    <AnimatedText
                        text="Portfolio"
                        className="mb-16 lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8"
                    />
                    <div className="grid w-full grid-cols-8 gap-16 sm:gap-8">
                        <div className="col-span-3 flex flex-col items-start justify-start xl:col-span-4 md:col-span-8 md:order-2">
                            <h2 className="mb-4 text-lg font-bold uppercase text-dark/75 dark:text-light/75">
                                Biography
                            </h2>
                            <p className="text-justify font-medium indent-10">
                            During my studies, I developed a strong foundation in business principles and technical skills, 
                            including software development, database management, and project management. 
                            </p>
                            <p className="text-justify font-medium indent-10 my-4">
                                I have {experienceYears()} years of experience in software development and have gained data analysis skill through completing machine learning assignments in college.   
                            </p>
                            <p className="text-justify font-medium indent-10">
                                As a motivated and adaptable individual, I am passionate about leveraging my experience, education and skills to drive innovation and success in the business and technology sectors.
                                I am particularly interested in exploring opportunities in areas such as data analysis, e-commerce, blockchain technology, software engineering and software development. 
                            </p>
                        </div>
                        <div className="hidden md:block" />
                        {/* <div className="col-span-3 relative h-max rounded-2xl border-2 border-solid border-dark bg-light p-8 dark:bg-dark dark:border-light xl:col-span-4 md:col-span-6 md:order-1">
                            <div className="absolute top-0 -right-3 -z-10 w-[102%] h-[102%] rounded-[2rem] bg-dark dark:bg-light" />
                            <Image
                                src={ProfilePicture}
                                alt="Real picture photo"
                                className="w-full h-auto rounded-2xl"
                                priority
                                sizes="(max-width:768px) 100vw, (max-width:1200px) 50vw, 33vw"
                            />
                        </div> */}
                        <div className="col-span-2 flex flex-col items-end justify-between xl:col-span-8 xl:flex-row xl:items-center md:order-3">
                            <div className="flex flex-col items-end justify-center xl:items-center">
                                <span className="inline-block text-7xl font-bold md:text-6xl sm:text-5l xs:text-4xl">
                                    <AnimatedNumbers
                                        value={collaborationNumber(projects.collaborations)}
                                    />{" "}
                                </span>
                                <h2 className="text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm">
                                    Collaborations
                                </h2>
                            </div>
                            <div className="flex flex-col items-end xl:items-center justify-center">
                                <span className="inline-block text-7xl font-bold md:text-6xl sm:text-5l xs:text-4xl">
                                    <AnimatedNumbers
                                        value={projectsNumber(projects.collaborations)}
                                    />{" "}
                                </span>
                                <h2 className="text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm">
                                    Projects
                                </h2>
                            </div>
                            <div className="flex flex-col items-end justify-center xl:items-center">
                                <span className="inline-block text-7xl font-bold md:text-6xl sm:text-5l xs:text-4xl">
                                    <AnimatedNumbers value={experienceYears()} /> +
                                </span>
                                <h2 className="text-xl font-medium text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm">
                                    Years of Experience
                                </h2>
                            </div>
                        </div>
                    </div>
                    <Skills />
                    <Job />
                    <Education />
                </Layout>
            </main>
        </>
    );
};
export default About;