// import styles from "./Auth.module,css"

// export const forms = [
//     {
//       id: "01",
//       template: (
//         <form type="form" className={styles.form}>
//           <input
//             type="text"
//             className={styles.input}
//             value={textInputValue}
//             onChange={handleChange}
//             placeholder={
//               language === "ua" ? "Введіть Ваш токен" : "Enter your token"
//             }
//           />
//           <button
//             type="submit"
//             className={styles.submitBtn}
//             onClick={handleSubmit}
//           >
//             {language === "ua" ? "Підтвердити" : "Submit"}
//           </button>
//         </form>
//       ),
//     },
//     {
//       id: "02",
//       template: (
//         <form type="submit" className={styles.form}>
//           <input
//             type="text"
//             className={styles.input}
//             name="login"
//             value={textInputValue}
//             onChange={handleChange}
//             placeholder={
//               language === "ua" ? "Введіть Ваш логін" : "Enter your login"
//             }
//           />
//           <input
//             type="password"
//             className={styles.input}
//             name="password"
//             value={passInputValue}
//             onChange={handleChange}
//             placeholder={
//               language === "ua" ? "Введіть Ваш пароль" : "Enter your password"
//             }
//             autoComplete="off"
//           />
//           <button
//             type="submit"
//             className={styles.submitBtn}
//             onClick={handleSubmit}
//           >
//             {language === "ua" ? "Підтвердити" : "Submit"}
//           </button>
//         </form>
//       ),
//     },
//   ];