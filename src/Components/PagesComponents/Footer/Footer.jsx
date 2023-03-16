import styles from "./footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.socialNetwork}>
        <h4 className={styles.titleNetwork}>
          Мої соціальні мережі |
          <span className={styles.titleSpan}>
            My social networks
          </span>
        </h4>
        <ul className={styles.networkList}>
          <li className={styles.networkItem}>
            <a
              href="https://www.instagram.com/avsoul_photo/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className={styles.networkIcon}
                src={process.env.PUBLIC_URL + '/images/icons/instagram.png'}
                alt="link_instagram"
              />
            </a>
          </li>
          <li className={styles.networkItem}>
            <a
              href="https://www.facebook.com/sasha.volyuvach"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className={styles.networkIcon}
                src={process.env.PUBLIC_URL + '/images/icons/facebook.png'}
                alt="link_facebook"
              />
            </a>
          </li>
          <li className={styles.networkItem}>
            <a
              href="https://t.me/avsoul"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className={styles.networkIcon}
                src={process.env.PUBLIC_URL + '/images/icons/telegram.png'}
                alt="link_telegram"
              />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
