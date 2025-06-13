import React from 'react';
import { FaInstagram, FaFacebookF, FaXTwitter } from 'react-icons/fa6';

const entrepreneurs = [
  {
    name: 'Priyansh Goel',
    title: 'Co founder at Frienducation',
    imageUrl:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTUKfas9xlNLEpCZmq1Et-7qR1rQBE6XLo8g&s',
  },
  {
    name: 'Sumit Kumar',
    title: 'Founder at Apex Byte',
    imageUrl:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTUKfas9xlNLEpCZmq1Et-7qR1rQBE6XLo8g&s',
  },
  {
    name: 'Gaurav Kumar Jha',
    title: 'Co founder at Driffle',
    imageUrl:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTUKfas9xlNLEpCZmq1Et-7qR1rQBE6XLo8g&s',
  },
  {
    name: 'Chetan Bhardwaj',
    title: 'CEO at Driffle',
    imageUrl:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTUKfas9xlNLEpCZmq1Et-7qR1rQBE6XLo8g&s',
  },
];

const OurEntrepreneurs = () => {
  return (
    <div className="bg-white py-12 px-4 text-center">
      <h2 className="text-3xl font-semibold mb-10">Our Entrepreneurs</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {entrepreneurs.map((person, index) => (
          <div
            key={index}
            className="group bg-white rounded-2xl shadow-lg overflow-hidden transition duration-500 hover:bg-[#692b74] flex flex-col"
          >
            {/* Image Section */}
            <div className="relative w-full h-80 overflow-hidden">
              <img
                src={person.imageUrl}
                alt={person.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
            </div>

            {/* Diagonal Info Section */}
            <div className="relative -mt-12 z-10">
              <div className="clip-diagonal bg-white group-hover:bg-[#692b74] transition-all duration-500 px-4 py-6 text-center">
                <div className="flex gap-4 justify-center mb-2 text-black group-hover:text-white">
                  <FaInstagram className="cursor-pointer hover:text-pink-400 transition duration-300" />
                  <FaXTwitter className="cursor-pointer hover:text-blue-400 transition duration-300" />
                  <FaFacebookF className="cursor-pointer hover:text-blue-600 transition duration-300" />
                </div>
                <hr className="w-8 border-2 mb-2 mx-auto border-black group-hover:border-white" />
                <p className="text-sm font-semibold text-black group-hover:text-white">
                  {person.name}
                </p>
                <p className="text-sm text-black group-hover:text-white">
                  {person.title}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Custom styles for diagonal clipping */}
      <style jsx>{`
        .clip-diagonal {
          clip-path: polygon(0 20%, 100% 0%, 100% 100%, 0% 100%);
        }
      `}</style>
    </div>
  );
};

export default OurEntrepreneurs;
