import styles from '@/styles/Input.module.scss';

function Input({ name, value, onChange }) {
  return (
    <div className={styles.inputContainer}>
      <label htmlFor={name}>{name}</label>
      <input type="text" id={name} value={value} onChange={onChange} />
    </div>
  );
}

export default Input;
