import styles from '@/styles/contact.module.scss';

function Contact({ icon, content }) {
  return (
    <li className={styles.contact}>
      <span className={styles.icon}>{icon}</span>
      <p className={styles.content}>{content}</p>
    </li>
  );
}

export default Contact;
