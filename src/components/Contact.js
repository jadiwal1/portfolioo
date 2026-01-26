"use client";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <section id="contact" className="py-20 px-6 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Get In Touch
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            I'm currently looking for new opportunities. Feel free to reach out!
          </p>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-12 max-w-xl mx-auto"
        >
          <div className="flex flex-col gap-6">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600"
            />
            <textarea
              placeholder="Your Message"
              rows="5"
              className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600"
            ></textarea>
          </div>
          <motion.button
            whileHover={{ scale: 1.05 }}
            type="submit"
            className="mt-6 w-full bg-indigo-600 text-white px-6 py-3 rounded-lg shadow-md font-medium"
          >
            Send Message
          </motion.button>
        </motion.form>
      </div>
    </section>
  );
};

export default Contact;