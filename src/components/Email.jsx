import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";

const Email = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    e.reset();
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
          Swal.fire({
            title: "Good job!",
            text: "You message was submitted.",
            icon: "success",
          });
        },
        (error) => {
          console.log(error.text);
          Swal.fire({
            title: "Not Good!",
            text: "You message was not submitted.",
            icon: "failed",
          });
        }
      );
  };
  const successAlert2 = () => {
    Swal.fire({
      title: "Good job!",
      text: "You message was submitted.",
      icon: "success",
      
    });
    // if (document.getElementById("question1,question2.question3").value == "") {
    //   alert("empty");
    // }
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
          id="question1"
        />
        <label>Email</label>
        <input
          value={address}
          
          onChange={(e) => setAddress(e.target.value2)}
          placeholder="email"
          type="email"
          name="user_email"
          id="question2"
        />
        <label>Message</label>
        <textarea
          value={address}
          
          onChange={(e) => setAddress(e.target.value3)}
          placeholder="type any text"
          name="message"
          id="question3"
        />
        <div onClick={() => setAddress("")}>
          <input id="btn" onClick={successAlert2} type="submit" value="Send" />
        </div>
      </form>
    </div>
  );
};

export default Email;
