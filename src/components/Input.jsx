import styles from '@/styles/input.module.scss';

function Input({ placeholder, ariaLabel, value, onChange, type = 'text' }) {
  return (
    <input
      className={styles.input}
      placeholder={placeholder}
      aria-label={ariaLabel}
      value={value}
      type={type}
      onChange={onChange}
    />
  );
}
export default Input;
