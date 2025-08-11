"use client";
import CountUp from "react-countup";
import React, { useEffect, useRef, useState } from "react";

const TeamSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.3,
        rootMargin: "0px 0px -100px 0px",
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [isVisible]);

  return (
    <section ref={sectionRef} className="py-26 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Stat 1 - Years of Experience */}

          {/* Stat 2 - Clients */}
          <div className="flex flex-col items-center text-center">
            <h1 className="text-[54px] md:text-[74px] lg:text-[90px] font-bold leading-none">
              {isVisible ? <CountUp end={75} duration={3} /> : 0}+
            </h1>
            <h2 className="text-[16px] md:text-[18px] lg:text-[22px] font-bold uppercase sub-heading mt-2">
              Clients
            </h2>
          </div>
          <div className="flex flex-col items-center text-center">
            <h1 className="text-[54px] md:text-[74px] lg:text-[90px] font-bold leading-none">
              {isVisible ? <CountUp end={10} duration={3} /> : 0}+
            </h1>
            <h2 className="text-[16px] md:text-[18px] lg:text-[22px] uppercase font-bold sub-heading mt-2">
              Years of Experience
            </h2>
          </div>
          {/* Stat 3 - Employees */}
          <div className="flex flex-col items-center text-center">
            <h1 className="text-[54px] md:text-[74px] lg:text-[90px] font-bold leading-none">
              {isVisible ? <CountUp end={80} duration={3} /> : 0}+
            </h1>
            <h2 className="text-[16px] md:text-[18px] lg:text-[22px] font-bold uppercase sub-heading mt-2">
              Employees
            </h2>
          </div>

          {/* Stat 4 - Projects */}
          <div className="flex flex-col items-center text-center">
            <h1 className="text-[54px] md:text-[74px] lg:text-[90px] font-bold leading-none">
              {isVisible ? <CountUp end={3000} duration={3} separator="" /> : 0}
              +
            </h1>
            <h2 className="text-[16px] md:text-[18px] lg:text-[22px] font-bold uppercase sub-heading mt-2">
              Projects
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
