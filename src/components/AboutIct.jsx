import React from "react";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.8,
      ease: "easeOut",
    },
  }),
};

const AboutUs = () => {
  return (
    <div className="bg-white text-gray-800 py-16 px-6 font-serif">
      <div className="max-w-7xl mx-auto space-y-24">
        {/* Section Header */}

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          custom={1}
          className="text-center"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-4 tracking-tight text-gray-900">
            About Us
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            As a Web Development Services team, we are committed to building
            custom web solutions that drive business success with elegance and
            clarity.
          </p>
        </motion.div>

        {/* Mission Section */}
        <div className="flex flex-col md:flex-row gap-10 items-center">
          <motion.img
            src="https://images.unsplash.com/photo-1522075469751-3a6694fb2f61"
            alt="Team at work"
            className="rounded-xl w-full max-w-[300px] aspect-square object-cover flex-shrink-0"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          />

          <motion.div
            className="bg-gray-50 p-8 rounded-xl shadow-md flex-1"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={2}
          >
            <p className="text-sm uppercase font-semibold text-gray-500 mb-2">
              Our Mission
            </p>
            <h3 className="text-3xl font-bold text-gray-800 mb-4 leading-snug">
              Empowering Financial Independence
            </h3>
            <p className="text-lg text-gray-700 leading-relaxed mb-5">
              At Financial Freedom Advisors, our mission is clear: to empower
              individuals and families to achieve financial independence. We’re
              committed to providing thoughtful, personalized guidance that
              aligns with your goals and dreams. Our focus is on helping you
              build a solid foundation for your financial future.
            </p>
            <a
              href="#"
              className="text-indigo-600 font-semibold hover:underline text-base"
            >
              READ MORE
            </a>
          </motion.div>
        </div>

        {/* Dean's Message Section */}
        <div className="flex flex-col md:flex-row-reverse gap-10 items-center">
          <motion.img
            src="https://images.unsplash.com/photo-1607746882042-944635dfe10e"
            alt="Dean"
            className="rounded-xl w-full max-w-[300px] aspect-square object-cover flex-shrink-0"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          />

          <motion.div
            className="bg-gray-50 p-8 rounded-xl shadow-md flex-1"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={3}
          >
            <p className="text-sm uppercase font-semibold text-gray-500 mb-2">
              Dean’s Message
            </p>
            <h3 className="text-3xl font-bold text-gray-800 mb-4 leading-snug">
              A Note from Our Dean
            </h3>
            <blockquote className="text-xl italic text-gray-700 border-l-4 border-indigo-500 pl-4">
              “Innovation isn't just about technology—it's about nurturing minds
              that shape the future.”
            </blockquote>
            <p className="mt-4 text-lg font-medium text-gray-800">
              — Dr. Anupam Sharma, Dean of SOICT
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
