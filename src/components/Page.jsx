import styles from '@/styles/page.module.scss';

function Page({ isEditing }) {
  return (
    <section className={styles.page}>
      <aside className={styles.sidebar}>
        <div className={styles.info}></div>
      </aside>
      <section isEditing={isEditing} className={styles.main}></section>
    </section>
  );
}

export default Page;
