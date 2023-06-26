import { useState, useEffect } from "react";
import { Header } from "../Header/Header";
import { Footer } from "../Footer/Footer";

import styles from "./CVPreview.module.css";

export const CVPReview = () => {
  const [loadedCV, setLoadedCV] = useState([]);
  useEffect(() => {
    fetch(
      "https://cvgenerator-4ae2e-default-rtdb.europe-west1.firebasedatabase.app/cv.json"
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const cvInfo = [];

        for (const key in data) {
          const cv = {
            id: key,
            ...data[key],
          };

          cvInfo.push(cv);
        }
        setLoadedCV(cvInfo);
      });
  }, []);

  const generatedCV = loadedCV.map((cv) => {
    return (
      <section className={styles.previewSection}>
        <h3>Personal Information</h3>
        <div className={styles.personalInfo}>
          <div className={styles.imgHolder}>
            <span>Image Place</span>
          </div>
          <div className={styles.info}>
            <h1>
              {cv.firstName} {cv.secondName}
            </h1>
            <p>Age: {cv.years}</p>
            <p>Phone: {cv.phoneNumber}</p>
            <p>email: {cv.email}</p>
            <p>Personal Info: {cv.personalInfo}</p>
          </div>
        </div>
        <h2>Professional Skills</h2>
        <ul>
          <li>{cv.skill}</li>
        </ul>
        <h3>Work Experience</h3>
        {cv.newExperience.map((experience) => {
          return (
            <div className="exp">
              <h1>{experience.title}</h1>
              <h4>{experience.role}</h4>
              <p>{experience.roleDesc}</p>
            </div>
          );
        })}
        <h3>Education</h3>
        {cv.newEducation.map((education) => {
          return (
            <div className="education">
              <h1>{education.education}</h1>
              <h2>{education.titleEducation}</h2>
              <p>{education.educationDesc}</p>
            </div>
          );
        })}
        <h3>Job Related Skills</h3>
        <ul>
          <li>{cv.jobRelated}</li>
        </ul>
      </section>
    );
  });

  return (
    <>
      <Header />
      <div>{generatedCV}</div>;
      <Footer />
    </>
  );
};
