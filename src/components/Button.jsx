import styles from '@/styles/button.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Button({ icon, onClick }) {
  return (
    <button className={styles.button} onClick={onClick}>
      <FontAwesomeIcon icon={icon} />
    </button>
  );
}

export default Button;
