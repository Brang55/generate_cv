import styles from "../AddInfo.module.css";

export const WorkExp = ({
  changeExperience,
  addNewExperience,
  newExperience,
  removeExperience,
}) => {
  return (
    <div className={styles.formRow}>
      <label htmlFor="experience" className={styles.formLabels}>
        Add your work experience:
      </label>
      <div className={styles.formRow}>
        <span>Start Date</span> / <span>End Date</span>
      </div>
      <div className={styles.formRow}>
        <label htmlFor="title" className={styles.formLabels}>
          Add Title:
        </label>
        <input
          type="text"
          id="title"
          name="title"
          placeholder="Title of the Job"
          onChange={changeExperience}
          className={styles.formInput}
        />
      </div>
      <div className={styles.formRow}>
        <label htmlFor="role" className={styles.formLabels}>
          Add Role:
        </label>
        <input
          type="text"
          id="role"
          name="role"
          placeholder="Add Role of the Job"
          onChange={changeExperience}
          className={styles.formInput}
        />
      </div>
      <div className={styles.formRow}>
        <label htmlFor="roleDesc" className={styles.formLabels}>
          Write short description of the role:
        </label>
        <textarea
          id="roleDesc"
          name="roleDesc"
          placeholder="Write short description of the role"
          onChange={changeExperience}
          className={styles.formTextarea}
        />
      </div>
      <button className={styles.newFormRow} onClick={addNewExperience}>
        Add New Experience
      </button>
      {newExperience.map((exp) => {
        return (
          <div key={exp}>
            <h1>{exp.title}</h1>
            <h4>{exp.role}</h4>
            <p>{exp.roleDesc}</p>
            <span
              className={styles.removeSkill}
              onClick={() => removeExperience(exp)}
            >
              Remove
            </span>
          </div>
        );
      })}
    </div>
  );
};
