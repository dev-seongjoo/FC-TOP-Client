import styles from "./Input.module.css";

const Input = (props) => {
  return (
    <div>
      <label htmlFor={props.input.id} className={styles.label}>
        {props.label}
      </label>
      <input {...props.input} className={styles.input} />
    </div>
  );
};

export default Input;
