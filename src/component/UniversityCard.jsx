import React from "react";
import { motion } from "framer-motion";
const UniversityCard = () => {
  return (
    <div className="  outercourses mt-[-185px]">
      <h1 className="text-center text-3xl mb-10 text-white pt-[250px]">
        Top 10 Colleges in India
      </h1>
      <hr className="text-gray-500 w-4/5 ml-24" />
      <div className="flex justify-center pt-20">
        <div className="grid grid-cols-2 gap-10">
          {/* Left Column */}
          <motion.div
            initial={{ x: -1000 }}
            animate={{ x: 0 }}
            transition={{
              duration: "2",
              delay: "0.5",
            }}
            className="flex flex-col items-center space-y-10"
          >
            {data.slice(0, 5).map((d) => (
              <div key={d.university} className="flex flex-col items-center">
                <div className="h-[150px] rounded-full mb-6">
                  <a href={d.link} target="_blank">
                    <img
                      className="h-[150px] w-[150px] rounded-full"
                      src={d.image}
                      alt=""
                    />
                  </a>
                </div>
                <div className="text-center text-white">
                  <a href={d.link} target="_blank">
                    <p className="font-bold m-4">{d.university}</p>
                  </a>
                </div>
              </div>
            ))}
          </motion.div>

          {/* Right Column */}
          <motion.div
            initial={{ x: 1000 }}
            animate={{ x: 0 }}
            transition={{
              duration: "2",
              delay: "0.5",
            }}
            
            className="flex flex-col items-center space-y-10"
          >
            {data.slice(5, 10).map((d) => (
              <div key={d.university} className="flex flex-col items-center">
                <div className="h-[150px] rounded-full mb-6">
                  <a href={d.link} target="_blank">
                    <img
                      className="h-[150px] w-[150px] rounded-full"
                      src={d.image}
                      alt=""
                    />
                  </a>
                </div>
                <div className="text-center text-white">
                  <a href={d.link} target="_blank">
                    <p className="font-bold m-4">{d.university}</p>
                  </a>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

const data = [
  {
    university: `Indian Institute of Technology Bombay (IITB)`,
    image: `/assets/bombay.avif`,
    link: `https://www.iitb.ac.in/`,
  },
  {
    university: ` Indian Institute of Technology Delhi (IITD)`,
    image: `/assets/Delhi.jpeg`,
    link: `https://www.iitdu.ac.in/`,
  },
  {
    university: `IIT Madras`,
    image: `/assets/iitm.webp`,
    link: `https://www.iitm.ac.in/`,
  },
  {
    university: "Indian Institute of Science (IISC)",
    image: `/assets/iisc.webp`,
    link: `https://www.iisc.ac.in/`,
  },
  {
    university: "Indian Institute of Technology Kharagpur (IITKGP)",
    image: `/assets/iitkgp.jpg`,
    link: `https://www.iitkgp.ac.in/`,
  },
  {
    university: "Indian Institute of Technology Kanpur (IITK)",
    image: `/assets/kanpur.jpeg`,
    link: `https://www.iitk.ac.in/`,
  },
  {
    university: "University of Delhi",
    image: `/assets/udelhi.avif`,
    link: `https://www.udelhi.ac.in/`,
  },
  {
    university: "Indian Institute of Technology Roorkee (IITR)",
    image: `/assets/roorkee.webp`,
    link: `https://www.iitr.ac.in/`,
  },
  {
    university: "Jawaharlal Nehru National University (JNU)",
    image: `/assets/JNU.jpeg`,
    link: `https://www.jnu.ac.in/`,
  },
  {
    university: "Indian Institute of Technology Guwahati (IITG)",
    image: `/assets/iitg.jpg`,
    link: `https://www.iitg.ac.in/`,
  },
];

export default UniversityCard;
