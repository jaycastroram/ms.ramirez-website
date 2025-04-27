import { useRef } from "react";
import emailjs from "@emailjs/browser";

export function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_PUBLIC_KEY')
      .then((result) => {
          console.log('Email sent:', result.text);
          alert("Message sent successfully!");
      }, (error) => {
          console.log('Email error:', error.text);
          alert("An error occurred, please try again.");
      });
  };

  return (
    <section id="contact">
      <h2>Contact Me</h2>
      <form ref={form} onSubmit={sendEmail} className="space-y-4">
        <div>
          <label>Name:</label>
          <input type="text" name="user_name" className="border p-2 w-full" required />
        </div>
        <div>
          <label>Email:</label>
          <input type="email" name="user_email" className="border p-2 w-full" required />
        </div>
        <div>
          <label>Message:</label>
          <textarea name="message" className="border p-2 w-full" rows="4" required></textarea>
        </div>
        <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded">
          Send Message
        </button>
      </form>
    </section>
  );
}
