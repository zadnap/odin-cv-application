import styles from '@/styles/section.module.scss';
import Input from './Input';
import TextArea from './TextArea';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Section({
  title,
  icon,
  description,
  isEditing,
  onChangeTitle,
  onChangeDesc,
  children,
}) {
  return (
    <section className={styles.section}>
      {!icon && title && (
        <span className={styles.title}>
          {isEditing ? (
            <Input
              placeholder={title}
              ariaLabel={`Edit ${title}`}
              value={title}
              onChange={onChangeTitle}
            />
          ) : (
            <h1 className={styles.text}>{title}</h1>
          )}
        </span>
      )}
      <div className={styles.content}>
        {description && (
          <div className={styles.description}>
            {isEditing ? (
              <TextArea
                placeholder={description}
                ariaLabel="Edit Description"
                value={description}
                onChange={onChangeDesc}
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
