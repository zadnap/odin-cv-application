import styles from '@/styles/Contact.module.scss';

function Contact({ name, content }) {
  return (
    <div className={styles.contact}>
      <h3 className={styles.name}>{name}</h3>
      <p className={styles.content}>{content}</p>
    </div>
  );
}

export default Contact;
