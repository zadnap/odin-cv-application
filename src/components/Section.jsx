import styles from '@/styles/Section.module.scss';

function Section({ title, children }) {
  return (
    <section className={styles.section}>
      <h1 className={styles.title}>{title}</h1>
      <div className={styles.content}>{children}</div>
    </section>
  );
}

export default Section;
