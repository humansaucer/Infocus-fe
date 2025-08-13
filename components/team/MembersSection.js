import React, { useEffect, useRef, useState } from "react";

// Team data organized by departments - only titles
const teamData = {
  strategy: ["Founder & CEO"],
  creative: ["Art Director", "Animation Lead" , "Animator" ,"JR.ART DIRECTOR" ,"GRAPHIC DESIGNER"],
  social: [
    "ACCOUNT DIRECTOR",
    "ASSOCIATE DIRECTOR",
    "ORM LEAD",
    "SR.ACCOUNT MANAGER",
    "ACCOUNT MANAGER",
    "SR.ORM EXECUTIVE",
    "SR.ACCOUNT EXECUTIVE",
    "ACCOUNT EXECUTIVE",
    "ARABIC COPYWRITER",
    "CONTENT LEAD",
    "ENGLISH COPYWRITER"
  ],
  production: [
    "PRODUCTION Manager",
    "CREATIVE CONCEPTUALIST",
    "VIDEO CONTENT CREATORS",
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
        top: "12%",
        left: "8%",
        size: "w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 xl:w-28 xl:h-28",
      },
      {
        top: "8%",
        right: "15%",
        size: "w-14 h-14 md:w-16 md:h-16 lg:w-18 lg:h-18 xl:w-20 xl:h-20",
      },
      {
        top: "35%",
        left: "20%",
        size: "w-20 h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 xl:w-32 xl:h-32",
      },
      {
        top: "32%",
        right: "22%",
        size: "w-16 h-16 md:w-18 md:h-18 lg:w-20 lg:h-20 xl:w-22 xl:h-22",
      },
      {
        top: "65%",
        left: "12%",
        size: "w-14 h-14 md:w-16 md:h-16 lg:w-18 lg:h-18 xl:w-20 xl:h-20",
      },
      {
        top: "58%",
        right: "10%",
        size: "w-18 h-18 md:w-20 md:h-20 lg:w-22 lg:h-22 xl:w-24 xl:h-24",
      },
      {
        top: "85%",
        left: "38%",
        size: "w-12 h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 xl:w-18 xl:h-18",
      },
      {
        top: "75%",
        right: "35%",
        size: "w-16 h-16 md:w-18 md:h-18 lg:w-20 lg:h-20 xl:w-22 xl:h-22",
      },
      {
        top: "18%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        size: "w-16 h-16 md:w-18 md:h-18 lg:w-20 lg:h-20 xl:w-22 xl:h-22",
      },
      {
        top: "48%",
        left: "52%",
        transform: "translate(-50%, -50%)",
        size: "w-18 h-18 md:w-20 md:h-20 lg:w-22 lg:h-22 xl:w-24 xl:h-24",
      },
      {
        top: "70%",
        left: "65%",
        size: "w-20 h-20 md:w-22 md:h-22 lg:w-24 lg:h-24 xl:w-26 xl:h-26",
      },
    ];

    return positions.slice(0, titleCount);
  };

  // Function to get responsive font size based on text length and circle size
  const getResponsiveFontSize = (text, circleSize) => {
    const textLength = text.length;
    
    // For very small circles
    if (circleSize.includes('w-12') || circleSize.includes('w-14')) {
      if (textLength > 15) return "text-[7px] md:text-[8px] lg:text-[9px]";
      if (textLength > 10) return "text-[8px] md:text-[9px] lg:text-[10px]";
      return "text-[9px] md:text-[10px] lg:text-[11px]";
    }
    
    // For small circles
    if (circleSize.includes('w-16') || circleSize.includes('w-18')) {
      if (textLength > 20) return "text-[8px] md:text-[9px] lg:text-[10px]";
      if (textLength > 15) return "text-[9px] md:text-[10px] lg:text-[11px]";
      if (textLength > 10) return "text-[10px] md:text-xs lg:text-xs";
      return "text-xs md:text-sm lg:text-sm";
    }
    
    // For medium circles
    if (circleSize.includes('w-20') || circleSize.includes('w-22')) {
      if (textLength > 20) return "text-[9px] md:text-[10px] lg:text-xs";
      if (textLength > 15) return "text-[10px] md:text-xs lg:text-sm";
      if (textLength > 10) return "text-xs md:text-sm lg:text-base";
      return "text-sm md:text-base lg:text-base";
    }
    
    // For larger circles
    if (circleSize.includes('w-24') || circleSize.includes('w-26')) {
      if (textLength > 20) return "text-xs md:text-sm lg:text-sm";
      if (textLength > 15) return "text-sm md:text-base lg:text-base";
      if (textLength > 10) return "text-sm md:text-base lg:text-lg";
      return "text-base md:text-lg lg:text-lg";
    }
    
    // For extra large circles
    if (textLength > 20) return "text-sm md:text-base lg:text-base";
    if (textLength > 15) return "text-base md:text-lg lg:text-lg";
    if (textLength > 10) return "text-base md:text-lg lg:text-xl";
    return "text-lg md:text-xl lg:text-xl";
  };

  // Render circles for desktop hover or mobile/tablet always visible
  const renderCircles = (department, titles) => {
    if (isMobile || activeSection === department) {
      const positions = generateCirclePositions(titles.length);

      return (
        <div className="absolute inset-0 p-3 md:p-4 lg:p-6 xl:p-8 overflow-hidden">
          {titles.map((title, index) => {
            const position = positions[index];
            if (!position) return null;

            const fontSize = getResponsiveFontSize(title, position.size);

            return (
            // Replace the circle div in renderCircles function with this:
<div
  key={index}
  className={`absolute ${
    position.size
  } rounded-full flex items-center justify-center text-center cursor-pointer transition-all duration-300 ease-in-out ${
    hoveredTitle === index
      ? isMobile
        ? "bg-green-500 text-white scale-105 shadow-lg"
        : "bg-green-500 text-black scale-110 shadow-lg border-2 border-green-500"
      : isMobile
      ? "bg-green-400 text-white hover:bg-green-500 shadow-md"
      : "bg-white text-black hover:bg-green-500 hover:text-black border-2 border-gray-200 hover:border-green-500 shadow-md hover:shadow-lg hover:scale-110"
  }`}
  style={{
    top: position.top,
    left: position.left,
    right: position.right,
    transform: position.transform || "none",
    animation:
      !isMobile && activeSection === department
        ? `fadeInScale 0.6s ease-out ${index * 0.1}s both`
        : "none",
  }}
  onMouseEnter={() => handleTitleHover(index)}
  onMouseLeave={handleTitleLeave}
>
  <span className={`font-bold ${fontSize} leading-tight text-center px-1 md:px-2 lg:px-2`}>
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
            <div className="max-w-[2500px] absolute md:top-[150%] top-[190%] left-[-20%] right-[-20%] md:left-[-110%] md:right-[-110%] h-[1px] bg-green-500  mx-auto mt-6"></div>
          </h2>
        </div>
      </div>

      {/* Main Grid Layout */}
      <div className="bg-white w-full flex-1">
        {/* Desktop Layout - Custom Grid with no gaps */}
        <div className="hidden lg:block h-screen ">
          <div className="h-full w-full flex flex-row gap-4 px-8">
            {/* Top Row */}
            <div className="flex h-full flex-col w-[30%] gap-4">
              {/* Strategy Box - Top Left (30% width) */}
              <div className="bg-black h-[30vh] text-white flex items-center justify-center relative ">
                <span className="font-bold text-4xl xl:text-5xl">Strategy</span>
              </div>

              {/* Creative Box - Bottom Left (70% width) */}
              <div
                className="h-[70vh] flex items-center justify-center relative cursor-pointer bg-gray-50 hover:bg-gray-50 transition-all duration-300 "
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

            {/* Right Column */}
            <div className="flex h-full flex-col w-[70%] gap-4">
              {/* Social Box - Top Right (70% width) */}
              <div
                className=" h-[70vh] flex items-center justify-center relative cursor-pointer bg-gray-50 hover:bg-gray-50 transition-all duration-300 "
                onMouseEnter={() => handleDepartmentHover("social")}
                onMouseLeave={handleDepartmentLeave}
              >
                {renderCircles("social", teamData.social)}
                {(isMobile || activeSection !== "social") && (
                  <span className="font-bold text-4xl xl:text-5xl">Social</span>
                )}
              </div>
              {/* Production Box - Bottom Right (30% width) */}
              <div
                className="h-[30vh] flex items-center justify-center relative cursor-pointer bg-gray-50 hover:bg-gray-50 transition-all duration-300 "
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
                    className="bg-white border-b border-gray-200 min-h-[350px] relative"
                  >
                    <div className="absolute top-4 left-1/2 transform -translate-x-1/2 z-10">
                      <span className="font-bold text-2xl capitalize  px-4 py-2 rounded-lg shadow-sm">
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
          <div className="w-full bg-white px-1">
            {/* Strategy Box */}
            <div className="bg-black text-white text-center py-8">
              <span className="font-bold text-2xl">Strategy</span>
            </div>

            {/* All sections visible with circles */}
            <div className="space-y-2">
              {Object.entries(teamData)
                .filter(([dept]) => dept !== "strategy")
                .map(([department, titles]) => (
                  <div
                    key={department}
                    className="bg-[#FAFAFA] border-gray-200 min-h-[350px] relative mx-1"
                  >
                    <div className="absolute top-4 left-1/2 transform -translate-x-1/2 z-10"> 
                      <span className="font-bold text-xl capitalize px-3 py-1 rounded-lg">
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