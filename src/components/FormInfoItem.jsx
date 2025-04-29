import styles from '@/styles/FormInfoItem.module.scss';

function FormInfoItem({ text }) {
  return <div className={styles.formInfoItem}>{text}</div>;
}

export default FormInfoItem;
