import styles from './App.module.scss';
import EditForm from './components/EditForm';
import Resume from './components/Resume';

function App() {
  return (
    <div className={styles.app}>
      <EditForm />
      <Resume />
    </div>
  );
}

export default App;
