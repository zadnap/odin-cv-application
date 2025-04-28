import styles from '@/styles/Headline.module.scss';

function Headline({ name, title }) {
  const nameArray = name.split(' ');

  return (
    <div className={styles.headline}>
      <h1 className={styles.name}>
        {nameArray.map((word, index) => (
          <span key={index}>{word}</span>
        ))}
      </h1>
      <h2 className={styles.title}>{title}</h2>
    </div>
  );
}

export default Headline;
