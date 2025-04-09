import styles from '@/styles/subSection.module.scss';

function SubSection({ title, from, to, children }) {
  return (
    <section className={styles.subSection}>
      <div className={styles.title}>
        <h1>{title}</h1>
        {from && to && (
          <span>
            {from} - {to}
          </span>
        )}
      </div>
      {children && <p>{children}</p>}
    </section>
  );
}

export default SubSection;
