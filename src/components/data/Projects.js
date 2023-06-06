
import ReactFiber from "./../../img/reactfiber.jpg";
import Color from "./../../img/color.jpg";
import Yelp from "./../../img/yelp_data_2.jpg";
import Facilities from "./../../img/facilities.jpg";
import Portfolio from "./../../img/portfolio1.jpg";

export const projects = {
    collaborations: [

        {
            name: "DCU solar racing car",
            time: "Dec 2022 - Present",
            projects: ["DCU solar racing car"],
            position: "Software Engineer",
            company: "DCU solar racing",
            companyLink: "https://solarracing.ie/",
            address: "DCU",
            work: "Building driver's interface ,connect to database , ensuring reliability.",
        },

        {
            name: "Off The Road Collective",
            time: "Feb 2023 - May 2023",
            projects: ["E-commerce website"],
            position: "Fullstack Developer",
            company: "Off The Road Collective",
            companyLink: "https://www.linkedin.com/company/off-the-road-collective?trk=organization_guest_main-feed-card_reshare-text",
            address: "DCU",
            work: "Building the frontend of the website.",
        },
        {
            name: "Facilities Booking App",
            time: "Dec 2022 - April 2023",
            projects: [
                "Facilities Booking App"
            ],
            position: "Fullstack Developer",
            company: "DCU",
            companyLink: "/",
            address: "Dublin",
            work: "User Login, Frontend design, backend data",
        },
    ],
    personnalProjects: [
        {
            name: "Portfolio React-Three-Fiber Website",
            img: ReactFiber,
            live_demo_url:  "https://siochang-portfolio-anime.vercel.app",
            gitHub_url: "https://github.com/Sio-The-Deal/react-animation-portfolio",
            technologies: ["#threejs", "#react-three-fiber", "#blender"],
            colSize: 12,
            summary:
                "portfolio website built with react fiber, blender and three.",
        },
        {
            name: "Portfolio Nextjs Website",
            img: Portfolio,
            live_demo_url: "https://siochang.vercel.app/",
            gitHub_url: "https://github.com/Sio-The-Deal/react-animation-portfolio",
            technologies: ["#nextJS", "#tailwindcss", "#framer-motion"],
            colSize: 12,
            summary:
                "portfolio website built with NextJS, TailwindCSS and Framer Motion.",
        },
        
        {
            name: "Yelp Data Analysis",
            img: Yelp,
            live_demo_url: "https://github.com/Sio-The-Deal/Yelp-restaurants-star-rating-prediction",
            gitHub_url: "https://github.com/Sio-The-Deal/Yelp-restaurants-star-rating-prediction",
            technologies: ["#sql-lite", "#machine-learning", "#python" ],
            colSize: 6,
            summary: "Predicting the star rating of a restaurant based on the reviews.",
        },
        {
            name: "Openai Color Scheme Search",
            img: Color,
            live_demo_url: "https://github.com/Sio-The-Deal/color-scheme",
            gitHub_url: "https://github.com/Sio-The-Deal/color-scheme",
            technologies: ["#flask", "#python" ,  "#css"],
            colSize: 6,
            summary: "Using openai davinci-03 model to generate color schemes based on a user's text input.",
        },
        {
            name: "Mern Stack facilities booking & colab app",
            img: Facilities,
            live_demo_url: "https://github.com/Sio-The-Deal/color-scheme",
            gitHub_url: "https://github.com/Sio-The-Deal/color-scheme",
            technologies: ["#MongoDB", "#react" , "#nodejs" ],
            colSize: 12,
            summary: " This would be a booking app for DCU students, so that they can book the quietpods or lab rooms or classrooms. It also aims to provide tools for students and for businesses. The first tool we want to have is a color scheme, finding the right color scheme is especially important for marketing and building an optimal frontend ui design..",
        },
    ],
};