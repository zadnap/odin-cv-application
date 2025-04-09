import styles from '@/styles/avatar.module.scss';
import avatarSrc from '@/assets/default-avatar.png';

function Avatar() {
  return (
    <div className={styles.avatar}>
      <img src={avatarSrc} alt="User's Avatar" />
    </div>
  );
}

export default Avatar;
