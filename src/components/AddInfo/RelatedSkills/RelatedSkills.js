import styles from "../AddInfo.module.css";

export const RelatedSkills = ({
  relatedSkills,
  addNewRelatedSkill,
  removeRelatedSkill,
  changeHandler,
}) => {
  return (
    <div className={styles.formRow}>
      <label htmlFor="jobRelated" className={styles.formLabels}>
        Write shortly explained Job Related Skills (60 characters max):
      </label>
      <input
        type="text"
        id="jobRelated"
        name="jobRelated"
        placeholder="Short Explanation for the Job Related Skills"
        onChange={changeHandler}
        className={styles.formInput}
      />
      <button className={styles.newFormRow} onClick={addNewRelatedSkill}>
        Add New Related Skill
      </button>
      {relatedSkills.map((related) => {
        return (
          <p className={styles.addedSkill} key={related}>
            {related}{" "}
            <span
              className={styles.removeSkill}
              onClick={() => removeRelatedSkill(related)}
            >
              Remove
            </span>
          </p>
        );
      })}
    </div>
  );
};
