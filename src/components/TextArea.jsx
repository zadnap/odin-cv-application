import { useRef, useEffect } from 'react';
import styles from '@/styles/textArea.module.scss';

function TextArea({ placeholder, ariaLabel, value, onChange }) {
  const textAreaRef = useRef(null);

  const adjustHeight = () => {
    const el = textAreaRef.current;
    if (el) {
      el.style.height = 'auto';
      el.style.height = el.scrollHeight + 'px';
    }
  };

  useEffect(() => {
    adjustHeight();
  }, [value]);

  return (
    <textarea
      ref={textAreaRef}
      className={styles.textArea}
      placeholder={placeholder}
      aria-label={ariaLabel}
      value={value}
      onChange={(e) => {
        onChange(e);
        adjustHeight();
      }}
    ></textarea>
  );
}

export default TextArea;
