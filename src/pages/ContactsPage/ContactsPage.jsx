import { useState } from "react";
import { motion } from "framer-motion";
import PagesAnimated from "../../components/PagesAnimated/PagesAnimated";
import Loader from "../../components/Loader/Loader";
import Form from "../../components/Form/Form";
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
  const [isLoaded, setIsloaded] = useState(false)
  return (
    <PagesAnimated>
      {!isLoaded && <Loader/>}
      <div className={styles.contactsBlock}>
        {!isLoaded && <div className={styles.skeleton}></div>}
        <img
          src={process.env.PUBLIC_URL + '/images/DSC01763.webp'}
          className={styles.img}
          alt="poster"
          onLoad={() => setIsloaded(true)}
          style={{display: isLoaded ? "block" : "none"}}
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
            <img src={process.env.PUBLIC_URL + '/images/icons/mail.png'} className={styles.icon}  alt="mial icon"/>
            <span className={styles.text}>sasha.volyuvach@gmail.com</span>
          </motion.a>
          <motion.a
            custom={2}
            variants={animation}
            href="tel: +380995390818"
            className={styles.link}
          >
            <img src={process.env.PUBLIC_URL + '/images/icons/phone.png'} className={styles.icon} alt="phone icon"/>
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
                <img src={process.env.PUBLIC_URL + '/images/icons/instagram.png'} className={styles.icon}  alt="facebook icon"/>
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
                <img src={process.env.PUBLIC_URL + '/images/icons/facebook.png'} className={styles.icon}  alt="facebook icon"/>
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
                <img src={process.env.PUBLIC_URL + '/images/icons/telegram.png'} className={styles.icon}  alt="telegram icon"/>
                <span className={styles.text}>Telegram</span>
              </a>
            </motion.li>
          </motion.ul>
        </motion.div>
      </div>
      <Form />
    </PagesAnimated>
  );
};

export default ContactsPage;
