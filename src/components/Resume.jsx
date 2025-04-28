import styles from '@/styles/Resume.module.scss';
import Headline from './Headline';

function Resume() {
  return (
    <div className={styles.resume}>
      <Headline
        name="Jennifer Watson"
        title="User Interface Designer"
        webpage="www.jwatson.com"
      />
    </div>
  );
}

export default Resume;
