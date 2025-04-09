import styles from '@/styles/headline.module.scss';

function Headline({ firstName, lastName, position }) {
  return (
    <section className={styles.headline}>
      <h1>
        <span>{firstName}</span> <span>{lastName}</span>
      </h1>
      <p>{position}</p>
    </section>
  );
}

export default Headline;
