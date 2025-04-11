import styles from '@/styles/contact.module.scss';
import Input from './Input';

function Contact({ info, icon, content, onChange, isEditing }) {
  return (
    <li className={styles.contact}>
      <span className={styles.icon}>{icon}</span>
      <p className={styles.content}>
        {isEditing ? (
          <Input
            value={content}
            placeholder={content}
            ariaLabel={`Edit ${info}`}
            onChange={onChange}
          />
        ) : (
          <span className={styles.text}>{content}</span>
        )}
      </p>
    </li>
  );
}

export default Contact;
