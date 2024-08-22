import React from "react";
import aaims from "../assets/aaims.jpg";
import cmc from "../assets/cmc.jpg";
import pgimer from "../assets/pgimer.jpg";
import nimhans from "../assets/nimhans.jpeg";
import jipmer from "../assets/jipmer.jpg";

const CollegeCard = ({ image, name, location, rank, link, imgHeight }) => {
  return (
    <div className="h-[340px] w-[340px] rounded-2xl bg-red-50">
      <div className={`h-[${imgHeight}px] bg-blue-600 rounded-t-2xl`}>
        <a href={link} target="_blank" rel="noopener noreferrer">
          <img
            src={image}
            alt={name}
            className={`h-[${imgHeight}px] w-full rounded-t-2xl object-cover`}
          />
        </a>
      </div>
      <div className="text-black mt-8 ml-3 ">
        <a href={link} target="_blank" rel="noopener noreferrer">
          <p className="font-semibold">{name}</p>
        </a>
        <p>{location}</p>
        <p>{rank}</p>
      </div>
    </div>
  );
};

function MedicalCllg() {
  return (
    <div className="medicalcllg">
      <p className="text-white font-semibold text-3xl text-center pt-14 pb-10">
        Top Medical Colleges in India
      </p>
      <hr className="text-gray-500 w-4/5 ml-24" />
      <div className="flex gap-20 pt-16 ml-16">
        <CollegeCard
          image={aaims}
          name="All India Institute of Medical Sciences"
          location="New Delhi"
          rank="Ranked first"
          link="https://www.aiims.edu/index.php?lang=en"
          imgHeight={210}
        />
        <CollegeCard
          image={cmc}
          name="Christian Medical College"
          location="Vellore"
          rank="Ranked Second"
          link="https://www.cmch-vellore.edu/"
          imgHeight={210}
        />
        <CollegeCard
          image={pgimer}
          name="Post Graduate Institute of Medical Education and Research"
          location="Chandigarh"
          rank="Ranked third"
          link="https://pgimer.edu.in/PGIMER_PORTAL/PGIMERPORTAL/home.jsp"
          imgHeight={210}
        />
      </div>
      <div className="flex gap-20 pt-10 ml-16">
        <CollegeCard
          image={nimhans}
          name="National Institute of Mental Health & Neurosciences"
          location="Bengaluru"
          rank="Ranked fourth"
          link="https://nimhans.ac.in"
          imgHeight={210}
        />
        <CollegeCard
          image={jipmer}
          name="Jawaharlal Institute of Post-Graduate Medical Education and Research"
          location="Puducherry"
          rank="Ranked fifth"
          link="https://jipmer.edu.in/"
          imgHeight={210}
        />
      </div>
    </div>
  );
}

export default MedicalCllg;
