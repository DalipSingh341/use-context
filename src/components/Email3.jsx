import React, { useState } from "react";
import emailjs from "emailjs-com";
import Swal from "sweetalert2";

const Email3 = () => {
const [formData, setFormData] = useState({
  name: "",
  email: "",
  subject: "",
  message: "",
});
     const handleSubmit = (e) => {
       e.preventDefault();

       if (
         !formData.name ||
         !formData.email ||
         !formData.subject ||
         !formData.message
       ) {
         alert("Please fill in all fields.");
         return;
       }
       emailjs
         .sendForm(
           "service_q60hwnz",
           "template_4prc7vj",
           e.target,
           "GQRdlv2-7FQdKoL6F"
         )
         .then(
           (result) => {
            Swal.fire({
              title: "Good job!",
              text: "You clicked the button.",
              icon: "success",
            });
             setFormData({
               name: "",
               email: "",
               subject: "",
               message: "",
             });
           },
           (error) => {
             alert("Email could not be sent. Please try again later.");
             console.error(error);
           }
         );
    };
    const handleInputChange = (e) => {
      const { name, value } = e.target;
      setFormData({ ...formData, [name]: value });
    };

    return (
      <div>
        <form onSubmit={handleSubmit}>
          <label>
            Name:
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
            />
          </label>
          <br />
          <label>
            Email:
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
            />
          </label>
          <br />
          <label>
            Subject:
            <input
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleInputChange}
            />
          </label>
          <br />
          <label>
            Message:
            <textarea
              name="message"
              rows="4"
              value={formData.message}
              onChange={handleInputChange}
            />
          </label>
          <br />
          <input type="submit" value="Send" />
        </form>
      </div>
    );
};

export default Email3;
