import styles from '@/styles/Input.module.scss';

function Input({ name }) {
  return (
    <div className={styles.inputContainer}>
      <label htmlFor={name}>{name}</label>
      <input type="text" id={name} />
    </div>
  );
}

export default Input;
