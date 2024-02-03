import styles from './footer.module.css';

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>{`Spark's`}</div>
      <div className={styles.text}>
        Spark creative thoughts agency © All rights reserved.
      </div>
    </div>
  );
};

export default Footer;
