import { useState } from "react";
import styles from "./Login.module.scss";

const Login = () => {
  const [form, setForm] = useState({ email: "", pass: "" });

  const handleForm = (evt) => {
    const {name, value} = evt.target;
    setForm((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const onFormSubmit = (evt) => {
    evt.preventDefault();
    setForm({ email: "", pass: "" });
    console.log({ ...form });
  };

  return (
    <div className={styles.wrapper}>
      <form
        action="#"
        method="post"
        className={styles.form}
        onSubmit={onFormSubmit}
      >
        <header>Sign in to your account</header>
        <input
          type="email"
          name="email"
          id="userEmail"
          placeholder="email"
          value={form.email}
          onChange={handleForm}
        />
        <input
          type="password"
          name="pass"
          id="userPass"
          placeholder="password"
          value={form.pass}
          onChange={handleForm}
        />
        <button type="submit">Log in</button>
      </form>
    </div>
  );
};

export default Login;
