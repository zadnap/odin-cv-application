import styles from '@/styles/button.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Button({ action, icon, onClick }) {
  return (
    <button className={styles.button} onClick={onClick} aria-label={action}>
      <FontAwesomeIcon icon={icon} />
    </button>
  );
}

export default Button;
