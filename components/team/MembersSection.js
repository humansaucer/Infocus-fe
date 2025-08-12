import React, { useEffect, useRef, useState } from "react";

// Team data organized by departments - only titles
const teamData = {
  strategy: ["Founder & CEO"],
  creative: ["Art Director", "Animation Team Lead"],
  social: [
    "Social Media Manager",
    "Content Manager",
    "Community Manager",
    "Social Media Specialist",
    "Brand Manager",
  ],
  production: [
    "Accountant",
    "Project Manager",
    "Human Resources Manager",
    "Operations Manager",
  ],
};

const MembersSection = () => {
  const [activeSection, setActiveSection] = useState(null);
  const [hoveredTitle, setHoveredTitle] = useState(null);
  const [isMobile, setIsMobile] = useState(false);
  const lineRef = useRef(null);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    // Animate the line on mount
    if (lineRef.current) {
      lineRef.current.style.height = "0px";
      lineRef.current.style.transition = "height 1s ease-in-out";
      setTimeout(() => {
        if (lineRef.current) {
          lineRef.current.style.height = "60px";
        }
      }, 500);
    }

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const handleDepartmentHover = (department) => {
    if (department !== "strategy" && !isMobile) {
      setActiveSection(department);
    }
  };

  const handleDepartmentLeave = () => {
    if (!isMobile) {
      setActiveSection(null);
      setHoveredTitle(null);
    }
  };

  const handleTitleHover = (titleIndex) => {
    setHoveredTitle(titleIndex);
  };

  const handleTitleLeave = () => {
    setHoveredTitle(null);
  };

  // Generate circle positions dynamically based on number of titles
  const generateCirclePositions = (titleCount) => {
    const positions = [
      {
        top: "8%",
        left: "10%",
        size: "w-20 h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 xl:w-32 xl:h-32",
      },
      {
        top: "8%",
        right: "10%",
        size: "w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 xl:w-28 xl:h-28",
      },
      {
        top: "32%",
        left: "20%",
        size: "w-24 h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 xl:w-36 xl:h-36",
      },
      {
        top: "32%",
        right: "20%",
        size: "w-18 h-18 md:w-22 md:h-22 lg:w-26 lg:h-26 xl:w-30 xl:h-30",
      },
      {
        top: "60%",
        left: "8%",
        size: "w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 xl:w-28 xl:h-28",
      },
      {
        top: "60%",
        right: "8%",
        size: "w-20 h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 xl:w-32 xl:h-32",
      },
      {
        top: "80%",
        left: "30%",
        size: "w-14 h-14 md:w-18 md:h-18 lg:w-22 lg:h-22 xl:w-26 xl:h-26",
      },
      {
        top: "80%",
        right: "30%",
        size: "w-22 h-22 md:w-26 md:h-26 lg:w-30 lg:h-30 xl:w-34 xl:h-34",
      },
    ];

    return positions.slice(0, titleCount);
  };

  // Render circles for desktop hover or mobile/tablet always visible
  const renderCircles = (department, titles) => {
    if (isMobile || activeSection === department) {
      const positions = generateCirclePositions(titles.length);

      return (
        <div className="absolute inset-0 p-4 lg:p-8 overflow-hidden">
          {titles.map((title, index) => {
            const position = positions[index];
            if (!position) return null;

            return (
              <div
                key={index}
                className={`absolute ${
                  position.size
                } rounded-full flex items-center justify-center text-center p-2 lg:p-3 cursor-pointer transition-all duration-500 ease-out transform ${
                  hoveredTitle === index
                    ? isMobile
                      ? "bg-green-500 text-white scale-110 shadow-lg"
                      : "bg-green-500 text-white scale-110 shadow-lg"
                    : isMobile
                    ? "bg-green-400 text-white hover:bg-green-500 shadow-md"
                    : "bg-white text-gray-800 hover:bg-green-500 hover:text-white border-2 border-gray-200 hover:border-green-500 shadow-md hover:shadow-lg"
                }`}
                style={{
                  ...position,
                  animation:
                    !isMobile && activeSection === department
                      ? `fadeInScale 0.6s ease-out ${index * 0.1}s both`
                      : "none",
                }}
                onMouseEnter={() => handleTitleHover(index)}
                onMouseLeave={handleTitleLeave}
              >
                <span className="font-medium text-xs lg:text-sm xl:text-base leading-tight text-center">
                  {title}
                </span>
              </div>
            );
          })}
        </div>
      );
    }
    return null;
  };

  return (
    <div className="flex flex-col w-full bg-gray-50 min-h-screen">
      {/* Add keyframes for animations */}
      <style jsx>{`
        @keyframes fadeInScale {
          0% {
            opacity: 0;
            transform: scale(0) rotate(180deg);
          }
          100% {
            opacity: 1;
            transform: scale(1) rotate(0deg);
          }
        }

        .circle-animate {
          animation: fadeInScale 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55)
            both;
        }
      `}</style>

      {/* Header Section with CEO */}
      <div className="flex flex-col items-center justify-center w-full py-20 bg-white relative">
        <div className="text-center">
          <p className="text-[16px] md:text-[20px] text-black/50 font-semibold mb-2">
            FOUNDER & CEO
          </p>
          <h1 className="font-bold text-[32px] md:text-[48px] lg:text-[56px] mb-6">
            Hassan Al Najjar
          </h1>

          {/* Green dot separator */}

          {/* Green line extending downward */}
          <div
            ref={lineRef}
            className="w-0.5 bg-green-500 mx-auto"
            style={{ height: "60px", width: "1px" }}
          ></div>
          <div className="w-5 h-5 bg-green-400 rounded-full mx-auto mb-6"></div>

          <h2 className="relative font-bold text-[24px] md:text-[36px] lg:text-[42px] mt-6">
            Agency Team
            <div className="w-[1px] absolute top-[100%] left-0 right-0 h-8 bg-green-500  mx-auto mt-6"></div>
            <div className="max-w-[2500px] absolute top-[150%] left-[-110%] right-[-110%] h-[1px] bg-green-500  mx-auto mt-6"></div>
          </h2>
        </div>
      </div>

      {/* Main Grid Layout */}
      <div className="w-full flex-1">
        {/* Desktop Layout - Custom Grid with no gaps */}
        <div className="hidden lg:block h-screen">
          <div className="h-full w-full flex flex-row gap-4">
            {/* Top Row */}
            <div className="flex h-full flex-col w-[30%] gap-4">
              {/* Strategy Box - Top Left (30% width) */}
              <div className="bg-black h-[30vh] text-white flex items-center justify-center relative ">
                <span className="font-bold text-4xl xl:text-5xl">Strategy</span>
              </div>

              {/* Social Box - Top Right (70% width) */}
              <div
                className="bg-white h-[70vh] flex items-center justify-center relative cursor-pointer hover:bg-gray-50 transition-all duration-300 "
                onMouseEnter={() => handleDepartmentHover("creative")}
                onMouseLeave={handleDepartmentLeave}
              >
                {renderCircles("creative", teamData.creative)}
                {(isMobile || activeSection !== "creative") && (
                  <span className="font-bold text-4xl xl:text-5xl">
                    Creative
                  </span>
                )}
              </div>
            </div>

            {/* Bottom Row */}
            <div className="flex h-full flex-col w-[70%] gap-4">
              {/* Creative Box - Bottom Left (60% width) */}

              <div
                className="bg-white h-[70vh] flex items-center justify-center relative cursor-pointer hover:bg-gray-50 transition-all duration-300 "
                onMouseEnter={() => handleDepartmentHover("social")}
                onMouseLeave={handleDepartmentLeave}
              >
                {renderCircles("social", teamData.social)}
                {(isMobile || activeSection !== "social") && (
                  <span className="font-bold text-4xl xl:text-5xl">Social</span>
                )}
              </div>
              {/* Production Box - Bottom Right (40% width) */}
              <div
                className="bg-white h-[30vh] flex items-center justify-center relative cursor-pointer hover:bg-gray-50 transition-all duration-300 "
                onMouseEnter={() => handleDepartmentHover("production")}
                onMouseLeave={handleDepartmentLeave}
              >
                {renderCircles("production", teamData.production)}
                {(isMobile || activeSection !== "production") && (
                  <span className="font-bold text-4xl xl:text-5xl">
                    Production
                  </span>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Tablet Layout - All circles visible */}
        <div className="hidden md:block lg:hidden">
          <div className="w-full">
            {/* Strategy Box */}
            <div className="bg-black text-white text-center py-12">
              <span className="font-bold text-3xl">Strategy</span>
            </div>

            {/* All sections visible with circles */}
            <div className="space-y-0">
              {Object.entries(teamData)
                .filter(([dept]) => dept !== "strategy")
                .map(([department, titles]) => (
                  <div
                    key={department}
                    className="bg-white border-b border-gray-200 min-h-[300px] relative"
                  >
                    <div className="absolute top-4 left-1/2 transform -translate-x-1/2 z-10">
                      <span className="font-bold text-2xl capitalize bg-white px-4 py-2 rounded-lg shadow-sm">
                        {department}
                      </span>
                    </div>

                    {renderCircles(department, titles)}
                  </div>
                ))}
            </div>
          </div>
        </div>

        {/* Mobile Layout - All circles visible */}
        <div className="md:hidden">
          <div className="w-full">
            {/* Strategy Box */}
            <div className="bg-black text-white text-center py-8">
              <span className="font-bold text-2xl">Strategy</span>
            </div>

            {/* All sections visible with circles */}
            <div className="space-y-0">
              {Object.entries(teamData)
                .filter(([dept]) => dept !== "strategy")
                .map(([department, titles]) => (
                  <div
                    key={department}
                    className="bg-white border-b border-gray-200 min-h-[250px] relative"
                  >
                    <div className="absolute top-4 left-1/2 transform -translate-x-1/2 z-10">
                      <span className="font-bold text-xl capitalize bg-white px-3 py-1 rounded-lg shadow-sm">
                        {department}
                      </span>
                    </div>

                    {renderCircles(department, titles)}
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MembersSection;
