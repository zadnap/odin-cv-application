import styles from '@/styles/Fieldset.module.scss';

function Fieldset({ legend, children }) {
  return (
    <fieldset className={styles.fieldset}>
      <legend className={styles.legend}>{legend}</legend>
      <div className={styles.body}>{children}</div>
    </fieldset>
  );
}

export default Fieldset;
