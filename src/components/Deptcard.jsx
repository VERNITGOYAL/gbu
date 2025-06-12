import React from 'react';

const cards = [
  {
    frontImage: "https://bsmedia.business-standard.com/_media/bs/img/article/2024-09/29/full/1727598515-5448.jpg?im=FeatureCrop,size=(826,465)", // CSE
    frontTitle: "DEPARTMENT OF COMPUTER SCIENCE & ENGINEERING",
    name: "Dr. A. I. Singh",
    designation: "Professor, AI & ML",
    phone: "+91 9876543210",
    email: "ai.singh@gbu.ac.in",
    profilePic: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    frontImage: "https://t4.ftcdn.net/jpg/03/08/69/75/360_F_308697506_9dsBYHXm9FwuW0qcEqimAEXUvzTwfzwe.jpg", // IT
    frontTitle: "DEPARTMENT OF INFORMATION TECHNOLOGY",
    name: "Ms. Web D. Veloper",
    designation: "Assistant Professor, Web Tech",
    phone: "+91 9123456780",
    email: "web.veloper@gbu.ac.in",
    profilePic: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    frontImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSh4Q25MYvgKeSgtED-Cse4WKkqOoFSWaf02Q&s", // ECE
    frontTitle: "DEPARTMENT OF ELECTRONICS & COMMUNICATION ENGINEERING",
    name: "Mr. C. Yber",
    designation: "HOD, Cyber Security",
    phone: "+91 9988776655",
    email: "c.yber@gbu.ac.in",
    profilePic: "https://randomuser.me/api/portraits/men/85.jpg",
  },
];

const DepartmentCard = () => {
  return (
    <div className="min-h-screen bg-gray-100 text-black flex flex-col items-center p-10">
      <h1 className="text-4xl font-bold mb-12">Department of UISCT</h1>
      <div className="flex flex-wrap justify-center gap-10">
        {cards.map((card, idx) => (
          <div key={idx} className="w-72 h-96 perspective">
            <div className="relative w-full h-full transition-transform duration-700 transform-style preserve-3d hover:rotate-y-180 rounded-xl shadow-lg">
              
              {/* Front Side */}
              <div className="absolute w-full h-full backface-hidden bg-white text-black rounded-xl flex flex-col items-center justify-center px-4 py-6 text-center">
                <img
                  src={card.frontImage}
                  alt={card.frontTitle}
                  className="w-full h-36 object-cover rounded-md mb-4"
                />
                <p className="text-sm font-semibold">{card.frontTitle}</p>
              </div>

              {/* Back Side */}
              <div className="absolute w-full h-full backface-hidden rotate-y-180 bg-white rounded-xl p-4 flex flex-col items-center text-center shadow-lg">
                <img
                  src={card.profilePic}
                  alt={card.name}
                  className="w-24 h-24 rounded-full object-cover mb-4 border-2 border-blue-600"
                />
                <h2 className="text-lg font-bold mb-1">{card.name}</h2>
                <p className="text-sm text-gray-700 mb-2">{card.designation}</p>
                <p className="text-sm text-gray-600">📞 {card.phone}</p>
                <p className="text-sm text-gray-600 mb-4">✉️ {card.email}</p>
                <button className="mt-auto bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
                  View More
                </button>
              </div>

            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DepartmentCard;