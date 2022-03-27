import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    console.log(form.current);
    emailjs
      .sendForm("gmail", "default", form.current, "bVxK7PZwLIutCAifw")
      .then(
        (result) => {
          console.log("sent");
        },
        (error) => {
          console.log("didint work");
        }
      );
  };

  return (
    <form ref={form} onSubmit={sendEmail}>
      <div className="top">
        <input type="text" name="user_name" placeholder="Name" />
        <input type="email" name="user_email" placeholder="Email" />
      </div>
      <textarea name="message" placeholder="Message" />
      <input className="btn" type="submit" value="Send" />
    </form>
  );
};

export default Contact;
