import Head from "next/head";
import Layout from "../components/Layout";
import Image from "next/image";
import profilePic from "./../img/star_war_coding.png";
import AnimatedText from "../components/AnimatedText";
import Link from "next/link";
import { LinkArrow } from "../components/Icons";
import { useRouter } from "next/router";
import HireMe from "../components/HireMe";
import TransitionEffect from "../components/TransitionEffect";

export default function Home() {
    const router = useRouter();
    return (
        <>
            <Head>
                <title>Sio Chang Portfolio page</title>
                <meta
                    name="description"
                    content="Portfolio page by Sio Chang"
                />
                <meta property="og:title" content="Portfolio page by Sio Chang" />
                <meta
                    property="og:description"
                    content="Portfolio page by Sio Chang"
                />
            </Head>
            <TransitionEffect />
            <main className="flex items-center text-dark w-full min-h-screen dark:text-light">
                <Layout className="p-32 pt-0 xl:p-24 lg:p-16 md:p-12 md:pt-16 sm:pt-8">
                    <div className="flex items-center justify-between w-full lg:flex-col">
                        <div className="w-1/2">
                            <Image
                                src={profilePic}
                                alt="Sio's profile pic"
                                className="w-auto h-auto m-auto rounded-full shadow-2xl lg:inline-block lg:w-full"
                                priority
                                sizes="(max-width:768px) 100vw, (max-width:1200px) 50vw, 50vw"
                            />
                        </div>
                        <div className="w-1/2 flex flex-col items-center self-center lg:w-full lg:text-center">
                            <AnimatedText
                                text="My name is Sio"
                                className="!text-6xl !text-left xl:!text-5xl lg:!text-center lg:!text-6xl md:!text-5xl sm:!text-3xl"
                            />
                            <p className="my-4 text-base font-medium indent-10 capitalize text-justify md:text-md sm:text-sm">
                                I am an Enterprise Computing graduate, with particular interest in software development and machine learning.
                            </p>
                            <div className="flex items-center self-start mt-2 lg:self-center font-large capitalize ">
                                    My Certifications:
                            </div>
                            <div className="flex items-center self-start mt-2 lg:self-center">

                                <ul>
                                    <li>
                                        <Link
                                            href="https://www.credly.com/badges/0acdd389-6d30-4bac-9de4-bb475afc3bdb"
                                            className="relative group ml-4 text-lg font-small text-dark dark:text-light md:text-base"
                                        >
                                            Professional Scrum Master I
                                            <span
                                                className={`h-[2px] inline-block bg-dark dark:bg-light absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300 ${
                                                    router.asPath === "https://www.credly.com/badges/0acdd389-6d30-4bac-9de4-bb475afc3bdb"
                                                        ? "w-full"
                                                        : "w-0"
                                                }`}
                                            ></span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            href="https://www.credly.com/badges/16e637e8-afc6-4a2c-8f28-0fdd9e62c51c/public_url"
                                            className="relative group ml-4 text-lg font-small text-dark dark:text-light md:text-base"
                                        >
                                            Microsoft Certified: Azure Data Fundamentals
                                            <span
                                                className={`h-[2px] inline-block bg-dark dark:bg-light absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300 ${
                                                    router.asPath === "https://www.credly.com/badges/16e637e8-afc6-4a2c-8f28-0fdd9e62c51c/public_url"
                                                        ? "w-full"
                                                        : "w-0"
                                                }`}
                                            ></span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            href="https://catalog-education.oracle.com/pls/certview/sharebadge?id=8EA44C18240C411C9B0B6B8466F8A167BA0203E36FB2BFA32B2BB2E5D90995A5"
                                            className="relative group ml-4 text-lg font-small text-dark dark:text-light md:text-base"
                                        >
                                            Oracle Cloud Data Management Certified Foundations Associate
                                            <span
                                                className={`h-[2px] inline-block bg-dark dark:bg-light absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300 ${
                                                    router.asPath === "https://catalog-education.oracle.com/pls/certview/sharebadge?id=8EA44C18240C411C9B0B6B8466F8A167BA0203E36FB2BFA32B2BB2E5D90995A5"
                                                        ? "w-full"
                                                        : "w-0"
                                                }`}
                                            ></span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            href="https://catalog-education.oracle.com/pls/certview/sharebadge?id=A902C7AC88B4B1D138007AB2A0ED271DA1EBC4CCA7FDCC0867FAA00EB482DBEB"
                                            className="relative group ml-4 text-lg font-small text-dark dark:text-light md:text-base"
                                        >
                                            Oracle Cloud Infrastructure Certified Foundations Associate
                                            <span
                                                className={`h-[2px] inline-block bg-dark dark:bg-light absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300 ${
                                                    router.asPath === "https://catalog-education.oracle.com/pls/certview/sharebadge?id=A902C7AC88B4B1D138007AB2A0ED271DA1EBC4CCA7FDCC0867FAA00EB482DBEB"
                                                        ? "w-full"
                                                        : "w-0"
                                                }`}
                                            ></span>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                            <div className="flex items-center self-start mt-2 lg:self-center">
                                <Link
                                    href="/resume.pdf"
                                    target="_blank"
                                    className="flex items-center bg-dark text-light p-2.5 px-6 rounded-lg text-lg font-semibold hover:bg-light hover:text-dark border-2 border-solid border-transparent hover:border-dark dark:bg-light dark:text-dark hover:dark:bg-dark hover:dark:text-light hover:dark:border-light md:p-2 md:px-4 md:text-base"
                                    download={true}
                                >
                                    CV <LinkArrow className={"w-6 ml-1"} />
                                </Link>
                                <Link
                                    href="mailto:sioschannel@gmail.com"
                                    className="relative group ml-4 text-lg font-medium capitalize text-dark dark:text-light md:text-base"
                                >
                                    Contact
                                    <span
                                        className={`h-[2px] inline-block bg-dark dark:bg-light absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300 ${
                                            router.asPath === "mailto:sioschannel@gmail.com"
                                                ? "w-full"
                                                : "w-0"
                                        }`}
                                    ></span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </Layout>
                <HireMe />
            </main>
        </>
    );
}
