import styles from '@/styles/section.module.scss';
import Input from './Input';
import TextArea from './TextArea';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Section({ title, icon, description, isEditing, children }) {
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
        {description && (
          <div className={styles.description}>
            {isEditing ? (
              <TextArea
                placeholder={description}
                ariaLabel="Edit Description"
                value={description}
              />
            ) : (
              <span className={styles.text}>
                {icon && (
                  <FontAwesomeIcon className={styles.icon} icon={icon} />
                )}
                {description}
              </span>
            )}
          </div>
        )}
        {children && <div className={styles.children}>{children}</div>}
      </div>
    </section>
  );
}

export default Section;
