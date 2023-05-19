const Technologies = ({ tech1, tech2, tech3, tech4, tech5, tech6 }) => {
    return (
        <>
            <div className="text-xs sm:text-[10px] text-primaryRed dark:text-primaryDarkOrange">
                {tech1}
            </div>
            <div className="text-xs sm:text-[10px] text-primaryPurple dark:text-primaryDarkYellow mx-3">
                {tech2}
            </div>
            <div className="text-xs sm:text-[10px] text-primaryBlue dark:text-primaryDark">
                {tech3}
            </div>
            <div className="text-xs sm:text-[10px] text-primaryBlue dark:text-primaryDark">
                {tech4}
            </div>
            <div className="text-xs sm:text-[10px] text-primaryBlue dark:text-primaryDark">
                {tech5}
            </div>
            <div className="text-xs sm:text-[10px] text-primaryBlue dark:text-primaryDark">
                {tech6}
            </div>
        </>
    );
};

export default Technologies;