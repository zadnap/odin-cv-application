import styles from '@/styles/section.module.scss';

function Section({ title, children }) {
  return (
    <section className={styles.section}>
      <h1>{title}</h1>
      <div className={styles.content}>{children}</div>
    </section>
  );
}

export default Section;
