import React from 'react';

const GlobalStyles = () => (
  <style>{`
    .perspective {
      perspective: 1000px;
    }

    .card-3d {
      transform-style: preserve-3d;
      transition: transform 0.4s ease;
    }

    .card-3d:hover {
      transform: translateZ(50px) scale(1.03);
    }
  `}</style>
);

const Card = ({ imageUrl, label }) => {
  return (
    <div className="group cursor-pointer relative flex flex-col items-center">
      {/* Card with image */}
      <div className="relative w-full h-64 sm:h-72 perspective z-10">
        <div className="card-3d w-full h-full overflow-hidden rounded-xl shadow-xl relative">
          <img src={imageUrl} alt="card" className="object-cover w-full h-full" />
        </div>
      </div>

      {/* Label */}
      <div
        className={`
          w-full py-5 h-20 bg-white backdrop-blur-md text-black text-lg font-semibold flex items-center justify-center
          rounded-b-xl shadow transition-all duration-500
          -mt-20 group-hover:mt-6
          group-hover:rounded-xl group-hover:pl-20 group-hover:pr-20
          z-20
          text-center
        `}
        style={{ willChange: 'margin-top, border-radius, padding-left, padding-right' }}
      >
        <span className="w-full text-center">{label}</span>
      </div>
    </div>
  );
};

const HoverCards = () => {
  const cards = [
    {
      imageUrl: "https://www.gbu.ac.in/USICT/media/img/slider/1.jpg",
      label: "School Of Information and Communication Technology"
    },
    {
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUoLwvVWxxxBLWiAC0R019yjKPhFJzb5TuFg&s",
      label: "School Of Biotechnology"
    },
    {
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTU89cU4dCM-KXWNc_7tD7_VrF45IcfZGDgFQ&s",
      label: "School Of Engineering"
    },
    {
      imageUrl: "https://raw.githubusercontent.com/vishal-pandey/content-gbusite/master/slider/5.jpg",
      label: "School Of Buddhist Studies & Civilization" 
    },
    {
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTk75RFQPIldQiGk1kAwU7bEURFQV0ORVlqyg&s",
      label: "School Of Law, Justice and Governance"
    },
    {
      imageUrl: "https://allegiance-educare.in/storage/uploads/colleges/14974330541497431571kjhldf.jpg",
      label: "School Of Management"
    },
    {
      imageUrl: "https://www.psychologs.com/wp-content/uploads/2023/03/GBU-final.jpg",
      label: "School Of Humanities and Social Sciences"
    },
    {
      imageUrl: "https://images.shiksha.com/mediadata/images/1742534877phpTHlfCW.jpeg",
      label: "School Of Vocational Studies"
    }
  ];

  return (
    <div className="min-h-screen p-6 flex flex-col items-center text-black bg-white">
      <GlobalStyles />
      <h1 className="text-5xl font-bold mb-12 text-center relative">
        Schools
        <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-full h-max bg-black/10" />
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-12 w-full px-4">
        {cards.map((card, index) => (
          <Card key={index} imageUrl={card.imageUrl} label={card.label} />
        ))}
      </div>
    </div>
  );
};

export default HoverCards;
