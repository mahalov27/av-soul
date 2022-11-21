import { motion } from "framer-motion";
import PagesAnimated from "../../PagesAnimated/PagesAnimated";
import styles from "./ContactsPage.module.css";

const animation = {
  hidden: {
    x: 150,
    opacity: 0,
  },
  visible: (custom) => ({
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.3,
      delay: custom * 0.2,
    },
  }),
};

const ContactsPage = () => {
  return (
    <PagesAnimated>
      <div className={styles.contactsBlock}>
        <img
          src="https://c.wallhere.com/photos/e4/b2/couple_forest_grass_trees_date-663691.jpg!d"
          className={styles.img}
          alt="poster"
        />
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          className={styles.listContacts}
        >
          <motion.a
            custom={1}
            variants={animation}
            href="mailto: sasha.volyuvach@gmail.com"
            className={styles.link}
          >
            <img src="/icons/mail.png" className={styles.icon}  alt="mial icon"/>
            <span className={styles.text}>sasha.volyuvach@gmail.com</span>
          </motion.a>
          <motion.a
            custom={2}
            variants={animation}
            href="tel: +380995390818"
            className={styles.link}
          >
            <img src="/icons/phone.png" className={styles.icon} alt="phone icon"/>
            <span className={styles.text}>+380995390818</span>
          </motion.a>
          <motion.ul
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            className={styles.subListContacts}
          >
            <motion.li
              custom={3}
              variants={animation}
              className={styles.listItem}
            >
              <a
                href="https://www.instagram.com/avsoul_photo/"
                className={styles.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src="/icons/instagram.png" className={styles.icon}  alt="facebook icon"/>
                <span className={styles.text}>Instagram</span>
              </a>
            </motion.li>
            <motion.li
              custom={4}
              variants={animation}
              className={styles.listItem}
            >
              <a
                href="https://www.facebook.com/sasha.volyuvach"
                className={styles.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src="/icons/facebook.png" className={styles.icon}  alt="facebook icon"/>
                <span className={styles.text}>Facebook</span>
              </a>
            </motion.li>
            <motion.li
              custom={5}
              variants={animation}
              className={styles.listItem}
            >
              <a
                href="https://t.me/avsoul"
                className={styles.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src="/icons/telegram.png" className={styles.icon}  alt="telegram icon"/>
                <span className={styles.text}>Telegram</span>
              </a>
            </motion.li>
          </motion.ul>
        </motion.div>
      </div>
    </PagesAnimated>
  );
};

export default ContactsPage;
