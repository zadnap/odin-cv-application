import styles from '@/styles/buttonGroup.module.scss';
import Button from './Button';
import { faDownload, faPen } from '@fortawesome/free-solid-svg-icons';

function ButtonGroup() {
  return (
    <div className={styles.buttonGroup}>
      <Button icon={faPen} />
      <Button icon={faDownload} />
    </div>
  );
}

export default ButtonGroup;
