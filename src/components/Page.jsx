import styles from '@/styles/page.module.scss';
import Sidebar from './Sidebar';
import Main from './Main';

function Page() {
  return (
    <section className={styles.page}>
      <Sidebar />
      <Main />
    </section>
  );
}

export default Page;
