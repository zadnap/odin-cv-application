import styles from '@/styles/Button.module.scss';

function Button({ children }) {
  return <button className={styles.button}>{children}</button>;
}

export default Button;
