import styles from './styles.module.scss';

const GlassParticles = () => {
  return (
    <div className={styles.particles} aria-hidden>
      {Array.from({ length: 24 }).map((_, i) => (
        <span key={i} className={`${styles.dot} ${styles[`d${(i % 8) + 1}`]}`} />
      ))}
      <div className={`${styles.blob} ${styles.b1}`} />
      <div className={`${styles.blob} ${styles.b2}`} />
      <div className={`${styles.blob} ${styles.b3}`} />
    </div>
  );
};

export default GlassParticles;
