import styles from '@/styles/FormInfoItem.module.scss';

function FormInfoItem({ text, onClick }) {
  return (
    <button className={styles.formInfoItem} onClick={onClick}>
      {text || 'Untitled'}
    </button>
  );
}

export default FormInfoItem;
