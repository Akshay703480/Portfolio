import React from 'react';

function Contact() {
  return (
    <section id="contact" className="min-h-screen py-12 dark:bg-gray-800  bg-gray-100 text-center">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold mb-4 text-gray-800 dark:text-white">Get in Touch</h2>
        <p className="text-lg text-gray-600 mb-4 text-center dark:text-white">
  Feel free to fill out the form below, and I’ll get back to you as  soon as possible. If you prefer,<br /> you can also reach me through social media or directly at my email.
</p>

        <form className="w-full max-w-lg mx-auto bg-white p-8 rounded-lg shadow-md transition-transform transform hover:scale-105">
          <input
            type="text"
            className="w-full p-4 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500 transition duration-200"
            placeholder="Your Name"
          />
          <input
            type="email"
            className="w-full p-4 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500 transition duration-200"
            placeholder="Your Email"
          />
          <textarea
            className="w-full p-4 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500 transition duration-200"
            rows="5"
            placeholder="Your Message"
          ></textarea>
          <button className="w-full p-4 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition duration-200 shadow-md">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
