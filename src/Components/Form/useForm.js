import { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";

const useForm = () => {
  const [pending, setPending] = useState(false);
  const phoneRegex = /^\+\d{2}\s\(\d{3}\)\s\d{3}-\d{2}-\d{2}$/;
  const language = useSelector((state) => state.myLanguage);
  const formik = useFormik({
    initialValues: {
      firstName: "",
      phone: "",
      messanger: "",
      typeConnect: "call",
      message: "",
    },
    validationSchema: Yup.object().shape({
      firstName: Yup.string()
        .min(
          2,
          language === "ua"
            ? "Повинно бути мінімум 2 знаки"
            : "Need minimum 2 characters"
        )
        .max(
          20,
          language === "ua"
            ? "Повинно бути максимум 20 знаків"
            : "Need maximun 20 characters"
        )
        .required(language === "ua" ? "Введіть своє ім'я" : "Enter your name"),
      phone: Yup.string()
        .matches(
          phoneRegex,
          language === "ua" ? "Номер телефону не валідний" : "Invalid phone"
        )
        .when("typeConnect",{
          is:(typeConnectValue) => typeConnectValue === "call",
          then: (schema) => schema.required(
            language === "ua" ? "Введіть свій номер телефону" : "Enter your phone"
          )
        }),
      messanger: Yup.string()
        .min(
          2,
          language === "ua"
            ? "Повинно бути мінімум 5 знаків"
            : "Need minimum 5 characters"
        )
        .max(
          20,
          language === "ua"
            ? "Повинно бути максимум 35 знаків"
            : "Need maximun 35 characters"
        )
        .when("typeConnect",{
          is:(typeConnectValue) => typeConnectValue !== "call",
          then: (schema) => schema.required(
            language === "ua" ? "Введіть посилання на Ваш мессенджер" : "Enter link to your messenger"
          )
        }),
    }),
    validateOnBlur: true,
    onSubmit: () => {},
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    const valueForClear = formik.values.typeConnect !== "call" ? "phone" : "messanger";

    const fakeEvent = {
      target: {
        name: valueForClear,
        value: ""
      }
    };
    console.log(fakeEvent)
    formik.handleChange(fakeEvent);
    
    console.log(formik.values)

    const formData = new FormData();
    formData.append("access_key", "75e715fd-170c-43b3-b4ac-a09f1de2ecad");

    for (const key in formik.values) {
      if (formik.values[key].length > 0) {
        formData.append(key, formik.values[key]);
      }
    }
    setPending(true)
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();
    if (!data.success) {
      toast.error(data.message);
      setPending(false);
      return;
    }

    setPending(false);
    toast.success(data.message)
    formik.handleReset();
  };
  
  return { formik, handleSubmit, pending };
};

export default useForm;
