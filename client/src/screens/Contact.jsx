import "../styles/Contact.css";

export default function Contact() {
  return (
    <div className="contact-container">
      <h2 className="contact-text">Let's Create Together</h2>
      <p className="contact-text">If you like my work please reach out to me. I would love to hear from you.</p>
      <div className="contact-links">
        {/* <a
          target="_blank"
          rel="noreferrer"
          href="https://github.com/jpacheco008"
        >
          <img
            src="https://image.flaticon.com/icons/png/512/25/25231.png"
            alt="github"
            className="contact-icon"
          />
        </a> */}
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.linkedin.com/in/julio-pacheco-06958bb7/"
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
          href="mailto:jpacheco0825@gmail.com"
        >
          <img
            src="https://i.pinimg.com/originals/bb/18/bd/bb18bdbbef437b2d50518db5a8292c94.png"
            alt="email"
            className="contact-icon"
          />
        </a>
      </div>
    </div>
  );
}
