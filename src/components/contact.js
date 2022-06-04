import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_6mfw3xf",
        "template_bb8aebw",
        form.current,
        "user_tF7OLHQ41f2A3l6UsEq8G"
      )
      .then(
        (result) => {
          alert("Message sent");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <>
      <div className="contact-background">
        <div class="contact-container" id="contact">
          <div class="contact-head-container">
            <p class="intouch" id="touch">
              Get in touch.
            </p>
          </div>
          <form class="form-container" ref={form} onSubmit={sendEmail}>
            <label>Name</label>
            <input type="text" name="name" />
            <label>Subject</label>
            <input type="text" name="subject" />
            <textarea placeholder="What's up?" name="message"></textarea>
            <button className="send" type="submit" value="Send">
              Send
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
