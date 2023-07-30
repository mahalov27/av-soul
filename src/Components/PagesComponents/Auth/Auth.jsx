import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { motion } from "framer-motion";
import authFeed from "../../../json/authFeed.json";
import { setLogin } from "../../../redux/login/loginSlice";
import styles from "./Auth.module.css";

const animation = {
  hidden: {
    opacity: 0,
    top: "-50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
  },
  visible: {
    opacity: 1,
    top: "25%",
    transition: {
      duration: 0.3,
    },
  },
};

const Auth = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [redirect, setRedirect] = useState(false);
  const [inputMode, setInputMode] = useState("order");
  const [textInputValue, setTextInputValue] = useState("");
  const [passInputValue, setPassInputValue] = useState("");
  const [isAttention, setIsAttention] = useState(false);
  const language = useSelector((state) => state.myLanguage);
  const isLogin = useSelector((state) => state.isLogin);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const TOKEN = "LSKDMDdd1561DF";
  const LOGIN = "Sasha";
  const PASSWORD = "110491";

  useEffect(() => {
    redirect && setRedirect(false);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputMode === "order") {
      if (textInputValue === TOKEN) {
        setRedirect(true);
        dispatch(setLogin(true));
        navigate("/user-account", { replace: true });
      } else {
        setIsAttention(true);
      }
    } else if (inputMode === "admin") {
      if (textInputValue === LOGIN && passInputValue === PASSWORD) {
        setRedirect(true);
        dispatch(setLogin(true));
        navigate("/admin", { replace: true });
      } else {
        setIsAttention(true);
      }
    }
    setTextInputValue("");
  };

  const handleChange = (e) => {
    e.target.name === "value-login" && setTextInputValue(e.target.value);
    e.target.name === "value-password" && setPassInputValue(e.target.value);
  };

  const handleSwitch = (e) => {
    if (e.target.name === "token-btn" && inputMode === "admin") {
      setInputMode("order");
    } else if (e.target.name === "log_in-btn" && inputMode === "order") {
      setInputMode("admin");
    }
    setTextInputValue("");
    setPassInputValue("");
    setIsAttention(false);
  };

  const openAuth = () => {
    !isOpen ? setIsOpen(true) : setIsOpen(false);
  };

  return (
    <>
      <button type="bottom" className={styles.btn} onClick={openAuth}>
        {!isLogin ? authFeed.button_open[language] : LOGIN}
      </button>
      {isOpen && (
        <motion.div
          className={styles.wrapperAuthBlock}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.div className={styles.authBlock} variants={animation}>
            <div className={styles.nav}>
              <div className={styles.navBtns}>
                <div
                  className={
                    styles.activeBtn +
                    " " +
                    (inputMode === "admin" && styles.activeBtnSwitch)
                  }
                ></div>
                <button
                  type="button"
                  className={styles.btnSwitch}
                  name="token-btn"
                  onClick={handleSwitch}
                >
                  {authFeed.order.title[language]}
                </button>
                <button
                  type="button"
                  className={styles.btnSwitch}
                  name="log_in-btn"
                  onClick={handleSwitch}
                >
                  {authFeed.admin.title[language]}
                </button>
              </div>
              <button
                type="button"
                className={styles.btnClose}
                onClick={openAuth}
              ></button>
            </div>
            <div className={styles.blockForm}>
              {isAttention && (
                <p className={styles.attention}>
                  {authFeed[inputMode].attention[language]}
                </p>
              )}
              <form type="submit" className={styles.form}>
                <input
                  type="text"
                  className={styles.input}
                  name="value-login"
                  value={textInputValue}
                  onChange={handleChange}
                  placeholder={authFeed[inputMode].placeholder[language]}
                />
                {inputMode === "admin" && (
                  <input
                    type="password"
                    className={styles.input}
                    name="value-password"
                    value={passInputValue}
                    onChange={handleChange}
                    placeholder={
                      authFeed[inputMode].placeholder_password[language]
                    }
                    autoComplete="off"
                  />
                )}
                <button
                  type="submit"
                  className={styles.submitBtn}
                  onClick={handleSubmit}
                >
                  {authFeed.button_submit[language]}
                </button>
              </form>
            </div>
          </motion.div>
        </motion.div>
      )}
    </>
  );
};

export default Auth;
