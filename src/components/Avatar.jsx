import styles from '@/styles/avatar.module.scss';
import avatarSrc from '@/assets/default-avatar.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCameraRetro } from '@fortawesome/free-solid-svg-icons';

function Avatar({ src, onChange, isEditing }) {
  return (
    <div className={styles.avatar}>
      <img src={src || avatarSrc} alt="User's Avatar" />
      {isEditing && (
        <label htmlFor="avatarInput" className={styles.avatarInputLabel}>
          <FontAwesomeIcon icon={faCameraRetro} />
        </label>
      )}
      <input
        className={styles.avatarInput}
        type="file"
        id="avatarInput"
        accept="image/*"
        onChange={onChange}
      />
    </div>
  );
}

export default Avatar;
