import styles from "../AddInfo.module.css";

export const BasicInfo = ({ changeHandler }) => {
  return (
    <>
      <div className={styles.formRow}>
        <label htmlFor="firstName" className={styles.formLabels}>
          First Name:
        </label>
        <input
          type="text"
          id="firstName"
          name="firstName"
          placeholder="First Name"
          className={styles.formInput}
          onChange={changeHandler}
        />
      </div>
      <div className={styles.formRow}>
        <label htmlFor="secondName" className={styles.formLabels}>
          Second Name:
        </label>
        <input
          type="text"
          id="secondName"
          name="secondName"
          placeholder="Second Name"
          onChange={changeHandler}
          className={styles.formInput}
        />
      </div>
      <div className={styles.formRow}>
        <label htmlFor="years" className={styles.formLabels}>
          Years:
        </label>
        <input
          type="text"
          id="years"
          name="years"
          placeholder="Years"
          onChange={changeHandler}
          className={styles.formInput}
        />
      </div>
      <div className={styles.formRow}>
        <label htmlFor="phoneNumber" className={styles.formLabels}>
          Phone Number:
        </label>
        <input
          type="text"
          id="phoneNumber"
          name="phoneNumber"
          placeholder="Phone Number"
          onChange={changeHandler}
          className={styles.formInput}
        />
      </div>
      <div className={styles.formRow}>
        <label htmlFor="email" className={styles.formLabels}>
          Email Address:
        </label>
        <input
          type="text"
          id="email"
          name="email"
          placeholder="Email Address"
          onChange={changeHandler}
          className={styles.formInput}
        />
      </div>
      <div className={styles.formRow}>
        <label htmlFor="personalInfo" className={styles.formLabels}>
          Personal Information:
        </label>
        <textarea
          id="personalInfo"
          placeholder="Tell us more about you"
          name="personalInfo"
          onChange={changeHandler}
          className={styles.formTextarea}
        />
      </div>
    </>
  );
};
