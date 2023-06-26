import styles from "../AddInfo.module.css";

export const Education = ({
  changeEducation,
  addNewEducation,
  newEducation,
  removeEducation,
}) => {
  return (
    <div className={styles.formRow}>
      <div className={styles.formRow}>
        <span>Start Date</span> / <span>End Date</span>
      </div>
      <div className={styles.formRow}>
        <label htmlFor="education" className={styles.formLabels}>
          Add your Education:
        </label>
        <input
          type="text"
          id="education"
          name="education"
          placeholder="Enter education"
          onChange={changeEducation}
          className={styles.formInput}
        />
      </div>
      <div className={styles.formRow}>
        <label htmlFor="titleEducation" className={styles.formLabels}>
          University:
        </label>
        <input
          type="text"
          id="titleEducation"
          name="titleEducation"
          placeholder="Education Title"
          onChange={changeEducation}
          className={styles.formInput}
        />
      </div>
      <div className={styles.formRow}>
        <label htmlFor="educationDesc" className={styles.formLabels}>
          Write short description of what you have learned:
        </label>
        <textarea
          id="educationDesc"
          name="educationDesc"
          placeholder="Write short description of what you have learned"
          onChange={changeEducation}
          className={styles.formTextarea}
        />
      </div>
      <button className={styles.newFormRow} onClick={addNewEducation}>
        Add New Education
      </button>
      {newEducation.map((education) => {
        return (
          <div key={education}>
            <h1>{education.education}</h1>
            <h4>{education.titleEducation}</h4>
            <p>{education.educationDesc}</p>
            <span
              className={styles.removeSkill}
              onClick={() => removeEducation(education)}
            >
              Remove
            </span>
          </div>
        );
      })}
    </div>
  );
};
