import styles from '@/styles/section.module.scss';
import Input from './Input';

function Section({ title, description, isEditing, children }) {
  return (
    <section className={styles.section}>
      {title && (
        <h1>
          {isEditing ? (
            <Input
              placeholder={title}
              ariaLabel={`Edit ${title}`}
              value={title}
            />
          ) : (
            <span className={styles.text}>{title}</span>
          )}
        </h1>
      )}
      <div className={styles.content}>
        {description && <div className={styles.description}>{description}</div>}
        {children && <div className={styles.children}>{children}</div>}
      </div>
    </section>
  );
}

export default Section;
