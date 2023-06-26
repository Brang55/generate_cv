import { useNavigate } from "react-router-dom";
import { useForm } from "../../hooks/useForm";
import styles from "./AddInfo.module.css";
import { BasicInfo } from "./BasicInfo/BasicInfo";
import { ProSkills } from "./ProSkills/ProSkills";
import { WorkExp } from "./WorkExp/WorkExp";
import { Education } from "./Education/Education";
import { RelatedSkills } from "./RelatedSkills/RelatedSkills";

export const AddInfo = () => {
  const {
    formData,
    changeHandler,
    newExperience,
    personalSkill,
    newEducation,
    relatedSkills,
    changeEducation,
    addNewEducation,
    removeEducation,
    addNewSkill,
    removeSkill,
    changeExperience,
    addNewExperience,
    removeExperience,
    addNewRelatedSkill,
    removeRelatedSkill,
    changeSkill,
  } = useForm({
    firstName: "",
    secondName: "",
    years: "",
    phoneNumber: "",
    email: "",
    personalInfo: "",
    skill: "",
    jobRelated: "",
  });

  const navigate = useNavigate();

  const formSubmit = (e) => {
    e.preventDefault();
    fetch(
      "https://cvgenerator-4ae2e-default-rtdb.europe-west1.firebasedatabase.app/cv.json",
      {
        method: "POST",
        body: JSON.stringify({
          ...formData,
          newExperience,
          newEducation,
          personalSkill,
          relatedSkills,
        }),
        headers: {
          "Content-Type": "apllication/json",
        },
      }
    ).then(() => {
      navigate("/", { replace: true });
    });
  };

  return (
    <form className={styles.formInfo} onSubmit={formSubmit}>
      <h2 className={styles.formHeadings}>Personal Information</h2>
      <BasicInfo changeHandler={changeHandler} />
      <h2>Professional Skills</h2>
      <ProSkills
        personalSkill={personalSkill}
        changeSkill={changeSkill}
        addNewSkill={addNewSkill}
        removeSkill={removeSkill}
      />
      <h2>Work Experience</h2>
      <WorkExp
        changeExperience={changeExperience}
        addNewExperience={addNewExperience}
        removeExperience={removeExperience}
        newExperience={newExperience}
      />
      <h2>Education</h2>
      <Education
        changeEducation={changeEducation}
        addNewEducation={addNewEducation}
        removeEducation={removeEducation}
        newEducation={newEducation}
      />
      <h2>Job Related Skills</h2>
      <RelatedSkills
        changeHandler={changeHandler}
        addNewRelatedSkill={addNewRelatedSkill}
        removeRelatedSkill={removeRelatedSkill}
        relatedSkills={relatedSkills}
      />
      <button type="submit" className={styles.newFormRow}>
        Submit Form
      </button>
    </form>
  );
};
