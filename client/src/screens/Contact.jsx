import emailjs from "emailjs-com";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import SideNav from '../layouts/SideNav'

export default function Contact() {
  const history = useHistory();
  const [form, setForm] = useState({
    from_name: "",
    from_email: "",
    message: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let templateParams = {
      from_name: from_name,
      from_email: from_email,
      message: message,
    };
    emailjs
      .send(
        "service_wsuog7h",
        "template_gw8tk9l",
        templateParams,
        "user_MddSnDgCfT6cgbP3V6IpB"
      )
      .then(() => history.push("/"));
  };
  const renderError = () => {
    const toggleForm = form.isError ? "danger" : "";
    if (form.isError) {
      return (
        <button type="submit" className={toggleForm} variant="contained">
          {form.errorMsg}
        </button>
      );
    } else {
      return (
        <button type="submit" className="form-buttom" variant="contained">
          Contact Me
        </button>
      );
    }
  };

  const { from_name, from_email, message } = form;
  return (
    <div className='contact-screen'>
      <SideNav />
    
    <div className="contact-container">
      <h2 className="contact-text">Let's Create Something Together!</h2>
      <p className="contact-text-2">
        If you like my work, contact me below
      </p>

      <div className="form-container">
        <form className="contact-form" onSubmit={handleSubmit}>
          <input
            required
            onChange={handleChange}
            name="from_name"
            value={from_name}
            className="text-input"
            label="Name"
            variant="outlined"
            type="text"
            placeholder="name"
          />
          <input
            required
            onChange={handleChange}
            name="from_email"
            value={from_email}
            className="text-input"
            label="E-mail"
            variant="outlined"
            type="text"
            placeholder="e-mail"
          />
          <textarea
            required
            onChange={handleChange}
            name="message"
            value={message}
            className="text-area"
            label="Message"
            rows={4}
            variant="outlined"
            placeholder="message"
          />
          {renderError()}
        </form>
      </div>

      {/* <div className="contact-links">
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.linkedin.com/in/julio-pacheco-008/"
        >
          <img
            src="https://www.vectorico.com/wp-content/uploads/2018/02/LinkedIn-Icon-Squircle-Dark.png"
            alt="linkedin"
            className="contact-icon"
          />
        </a>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://calendly.com/jpacheco0825"
        >
          <img
            src="https://d338t8kmirgyke.cloudfront.net/icons/icon_pngs/000/000/868/original/schedule.png"
            alt="meeting"
            className="contact-icon"
          />
        </a>
      </div> */}
      </div>
      </div>
  );
}
