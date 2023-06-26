import { useForm } from "../../../hooks/useForm";
import styles from "../AddInfo.module.css";

export const ProSkills = ({
  personalSkill,
  changeSkill,
  addNewSkill,
  removeSkill,
}) => {
  return (
    <div className={styles.formRow}>
      <label htmlFor="skill" className={styles.formLabels}>
        Enter your skills for the desired role:
      </label>
      <input
        type="text"
        id="skill"
        name="skill"
        placeholder="Enter Skill for the Role"
        onChange={changeSkill}
        className={styles.formInput}
      />
      <button className={styles.newFormRow} onClick={addNewSkill}>
        Add New Skill
      </button>
      {personalSkill.map((skill) => {
        return (
          <p className={styles.addedSkill} key={skill}>
            {skill}{" "}
            <span
              className={styles.removeSkill}
              onClick={() => removeSkill(skill)}
            >
              Remove
            </span>
          </p>
        );
      })}
    </div>
  );
};
