import styles from '@/styles/headline.module.scss';
import TextArea from './TextArea';

function Headline({ content, isEditing, children }) {
  return (
    <section className={styles.headline}>
      <h1 className={styles.content}>
        {isEditing ? (
          <TextArea
            placeholder={content}
            value={content}
            ariaLabel="Edit Content"
          />
        ) : (
          <span className={styles.text}>{content}</span>
        )}
      </h1>
      {children}
    </section>
  );
}

export default Headline;
