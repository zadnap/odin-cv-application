import styles from '@/styles/InfoItem.module.scss';

function InfoItem({ title, subtitle, from, to, desc }) {
  return (
    (title || subtitle || from || to || desc) && (
      <div className={styles.infoItem}>
        <h4 className={styles.subtitle}>{subtitle}</h4>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.dateRange}>
          {from} - {to}
        </p>
        <p className={styles.desc}>{desc}</p>
      </div>
    )
  );
}

export default InfoItem;
