import React from "react";
import EducationCard from "./EducationCard";
import { getImageUrl } from "../../utils";
import styles from "./Education.module.css"


const Education = () => {
  return (
    <div className="education-section">
      <div className="education-item">
        <EducationCard
          title="Matriculation"
          instituteImage={getImageUrl("about/dav.jpeg")}
          name="TATA DAV SIJUA"
          passingYear="2019"
          grade="93.6%"
        />
      </div>
      <div className="education-item">
        <EducationCard
          title="Intermediate"
          instituteImage={getImageUrl("about/dav.jpeg")}
          name="TATA DAV SIJUA"
          passingYear="2021"
          grade="82%"
        />
      </div>
      <div className="education-item">
        
        <EducationCard
          title="B.Tech"
          instituteImage={getImageUrl("about/nit.png")}
          name="NIT JAMSHEDPUR"
          passingYear="2025"
          grade="7.78 CGPA"
        />
      </div>
    </div>
  );
};

export default Education;
