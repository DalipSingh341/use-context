import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";
import $ from "jquery";

const Email2 = () => {
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
          Swal.fire({
            title: "Good job!",
            text: "You clicked the button.",
            icon: "success",
          });
          e.target.reset();
        },
        (error) => {
          console.log(error.text);
          Swal.fire({
            title: "unsuccessful!",
            text: "You clicked the button.",
            icon: "failed",
          });
        }
      );
  };

  const successAlert = () => {};

  function sendEmail1() {
    var empt = document.form1.user_name.value;
    if (empt === "") {
      alert("Please input a Value");
      return false;
    } else {
      alert("Code has accepted : you can try another");
      return true;
    }
  }
  function sendEmail2() {
    var empt = document.form1.user_email.value;
    if (empt === "") {
      alert("Please input a Value");
      return false;
    } else {
      alert("Code has accepted : you can try another");
      return true;
    }
  }
  function sendEmail3() {
    var empt = document.form1.message.value;
    if (empt === "") {
      alert("Please input a Value");
      return false;
    } else {
      alert("Code has accepted : you can try another");
      return true;
    }
  }

  return (
    <div>
      <form id="orderform" ref={form} onSubmit={"sendEmail(),sendEmail1(),sendEmail2(),sendEmail3()"}>
        <label>Name</label>
        <input type="text" id="initials" name="user_name" maxlength="7" />
        <label>Email</label>
        <input type="email" id="initials" name="user_email" />
        <label>Message</label>
        <textarea name="message" id="initials" />
        <input onClick={successAlert} type="submit" value="Send" />
      </form>
    </div>
  );
};

export default Email2;
