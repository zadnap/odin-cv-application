import styles from '@/styles/page.module.scss';

function Page({ isEditing }) {
  return (
    <section className={styles.page}>
      <aside className={styles.sidebar}></aside>
      <section className={styles.main}></section>
    </section>
  );
}

export default Page;
