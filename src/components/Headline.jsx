import styles from '@/styles/headline.module.scss';
import TextArea from './TextArea';

function Headline({ name, content, isSubHeadline, isEditing }) {
  const className = `${styles.headline} ${isSubHeadline && styles.subHeadline}`;
  return (
    <section className={className}>
      <h1 className={styles.content}>
        {isEditing ? (
          <TextArea
            placeholder={content}
            value={content}
            ariaLabel={`Edit ${name}`}
          />
        ) : (
          <span className={styles.text}>{content}</span>
        )}
      </h1>
    </section>
  );
}

export default Headline;
