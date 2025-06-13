import React from "react";
import { motion } from "framer-motion";

const companies = [
  { name: "Google", image: "https://logo.clearbit.com/google.com", url: "https://www.google.com" },
  { name: "Microsoft", image: "https://logo.clearbit.com/microsoft.com", url: "https://www.microsoft.com" },
  { name: "Amazon", image: "https://logo.clearbit.com/amazon.com", url: "https://www.amazon.com" },
  { name: "Apple", image: "https://logo.clearbit.com/apple.com", url: "https://www.apple.com" },
  { name: "Meta", image: "https://logo.clearbit.com/meta.com", url: "https://www.meta.com" },
  { name: "Netflix", image: "https://logo.clearbit.com/netflix.com", url: "https://www.netflix.com" },
  { name: "Tesla", image: "https://logo.clearbit.com/tesla.com", url: "https://www.tesla.com" },
  { name: "Adobe", image: "https://logo.clearbit.com/adobe.com", url: "https://www.adobe.com" },
  { name: "LinkedIn", image: "https://logo.clearbit.com/linkedin.com", url: "https://www.linkedin.com" },
  { name: "Salesforce", image: "https://logo.clearbit.com/salesforce.com", url: "https://www.salesforce.com" },
  { name: "Intel", image: "https://logo.clearbit.com/intel.com", url: "https://www.intel.com" },
  { name: "Spotify", image: "https://logo.clearbit.com/spotify.com", url: "https://www.spotify.com" },
  { name: "Dropbox", image: "https://logo.clearbit.com/dropbox.com", url: "https://www.dropbox.com" },
  { name: "Slack", image: "https://logo.clearbit.com/slack.com", url: "https://www.slack.com" },
  { name: "Twitter", image: "https://logo.clearbit.com/twitter.com", url: "https://www.twitter.com" },
];

const cardVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: (i) => ({
    opacity: 1,
    scale: 1,
    transition: {
      delay: i * 0.04,
      duration: 0.4,
      ease: "easeOut"
    }
  })
};

export default function TechHiringCompanies() {
  return (
    <div className="h-screen bg-white px-4 py-2 flex flex-col justify-center items-center">
      <h1 className="text-4xl font-bold text-black mb-6 text-center">
        🚀 Top 15 Tech Companies Hiring Now
      </h1>

      <div className="grid grid-cols-5 gap-4">
        {companies.map((company, index) => (
          <motion.a
            key={company.name}
            href={company.url}
            target="_blank"
            rel="noopener noreferrer"
            custom={index}
            initial="hidden"
            animate="visible"
            variants={cardVariants}
            whileHover={{ scale: 1.05 }}
            className="w-56 h-36 rounded-xl shadow-lg bg-white p-3 flex items-center justify-start gap-3 transition-transform duration-300"
          >
            <img
              src={company.image}
              alt={company.name}
              className="max-h-20 w-auto object-contain"
            />
            <span className="text-gray-800 font-bold text-lg">{company.name}</span>
          </motion.a>
        ))}
      </div>
    </div>
  );
}
