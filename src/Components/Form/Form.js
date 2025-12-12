import {
  TextField,
  Button,
  RadioGroup,
  FormControlLabel,
  Radio,
  FormLabel,
} from "@mui/material";
import InputMask from "react-input-mask";
import useForm from "./useForm";
import { useSelector } from "react-redux";
import { SendIcon } from "../../assets/icons/icons";
import Pending from "../Pending/Pending";
import styles from "./Form.module.css";

const Form = () => {
  const language = useSelector((state) => state.myLanguage);
  const { formik, handleSubmit, pending } = useForm();

  return (
    <section className={styles.section}>
      <h2>
        {language === "ua"
          ? "Або зв'яжіться зі мною за цією формою"
          : "Or contact me using this form"}
      </h2>
      <form className={styles.form} type="submit" onSubmit={handleSubmit}>
        <div className={styles.contacts}>
          <TextField
            label={language === "ua" ? "Ваше ім'я" : "Your name"}
            variant="standard"
            name="firstName"
            value={formik.values.firstName}
            onChange={formik.handleChange}
            helperText={formik.errors.firstName}
            error={!!formik.errors.firstName}
          />
          <InputMask
            mask="+38 (099) 999-99-99"
            maskChar="_"
            name="phone"
            value={formik.values.phone}
            onChange={formik.handleChange}
            helperText={formik.errors.phone}
            error={!!formik.errors.phone}
          >
            {(inputProps) => {
              return (
                <TextField
                  label={
                    language === "ua"
                      ? "Ваш номер телефону"
                      : "Your phone number"
                  }
                  variant="standard"
                  {...inputProps}
                  inputRef={inputProps.ref}
                />
              );
            }}
          </InputMask>
          <TextField
            label={
              language === "ua"
                ? "Посилання на Ваш мессенджер"
                : "Link to your messenger"
            }
            variant="standard"
            name="messanger"
            value={formik.values.messanger}
            onChange={formik.handleChange}
          />
        </div>
        <div className={styles.typeConnect}>
          <FormLabel>
            {language === "ua"
              ? "Вам буде зручніше як що я Вам ..."
              : "Would it be more convenient for you if I ..."}
          </FormLabel>
          <RadioGroup
            name="typeConnect"
            value={formik.values.typeConnect}
            onChange={formik.handleChange}
          >
            <FormControlLabel
              value="call"
              control={<Radio color="secondary" />}
              label={language === "ua" ? "подзвоню?" : "call you?"}
            />
            <FormControlLabel
              value="send"
              control={<Radio />}
              label={
                language === "ua"
                  ? "напишу у мессенджер?"
                  : "send to your a messenger?"
              }
            />
          </RadioGroup>
        </div>
        <div className={styles.message}>
          <TextField
            multiline
            name="message"
            label={
              language === "ua"
                ? "Введіть ваше повідомлення"
                : "Enter your message"
            }
            value={formik.values.message}
            onChange={formik.handleChange}
            minRows={3}
            maxRows={6}
          />
          <Button
            type="submit"
            endIcon={!pending ? <SendIcon /> : <Pending />}
            variant="contained"
            disabled={!(formik.isValid && formik.dirty)}
          >
            {language === "ua" ? "Відправити" : "Send"}
          </Button>
        </div>
      </form>
    </section>
  );
};

export default Form;
