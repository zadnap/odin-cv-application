import { useRef, useEffect, useState } from 'react';
import styles from '@/styles/input.module.scss';

function Input({ placeholder, ariaLabel, value, onChange }) {
  const inputRef = useRef(null);
  const spanRef = useRef(null);
  const [inputWidth, setInputWidth] = useState('auto');

  useEffect(() => {
    if (spanRef.current) {
      const newWidth = spanRef.current.offsetWidth;
      setInputWidth(`${newWidth}px`);
    }
  }, [value]);

  return (
    <div className={styles.inputWrapper}>
      <input
        ref={inputRef}
        className={styles.input}
        placeholder={placeholder}
        aria-label={ariaLabel}
        value={value}
        onChange={onChange}
        style={{ width: inputWidth }}
      />
      <span ref={spanRef} className={styles.hiddenSpan}>
        {value || placeholder}
      </span>
    </div>
  );
}

export default Input;
