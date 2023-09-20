import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";

const Email = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_q60hwnz",
        "template_4prc7vj",
        form.current,
        "GQRdlv2-7FQdKoL6F"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
      
  };
  const successAlert2 = () => {
    Swal.fire({
      title: "Good job!",
      text: "You message was submitted.",
      icon: "success",
    });
  };

  const [address, setAddress] = useState("");

  return (
    <div>
      <form ref={form} onSubmit={sendEmail}>
        <label>Name</label>
        <input
          value={address}
          onChange={(e) => setAddress(e.target.value1)}
          placeholder="name"
          type="text"
          name="user_name"
        />
        <label>Email</label>
        <input
          value={address}
          onChange={(e) => setAddress(e.target.value2)}
          placeholder="email"
          type="email"
          name="user_email"
        />
        <label>Message</label>
        <textarea
          value={address}
          onChange={(e) => setAddress(e.target.value3)}
          placeholder="type any text"
          name="message"
        />
        <div onClick={() => setAddress("")}>
          <input id="btn" onClick={successAlert2} type="submit" value="Send" />
        </div>
      </form>
    </div>
  );
};

export default Email;
