import styles from '@/styles/headline.module.scss';
import TextArea from './TextArea';

function Headline({ name, content, isSubHeadline, isEditing, onChange }) {
  const className = `${styles.headline} ${isSubHeadline && styles.subHeadline}`;
  return (
    <section className={className}>
      {isEditing ? (
        <TextArea
          placeholder={content}
          value={content}
          ariaLabel={`Edit ${name}`}
          onChange={onChange}
        />
      ) : (
        <h1 className={styles.text}>{content}</h1>
      )}
    </section>
  );
}

export default Headline;
