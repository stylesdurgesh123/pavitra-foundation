import React from 'react';
import adv1 from "../../assests/images/advimg1.jpg";
import adv2 from "../../assests/images/advimg2.jpg";
import adv3 from "../../assests/images/advimg3.jpg";
import adv4 from "../../assests/images/advimg4.jpg";

const advocates = [
  {
    id: 1,
    name: 'Advocate Rajesh Sharma',
    specialization: 'Criminal Law',
    experience: '12 years',
    image: adv1
  },
  {
    id: 2,
    name: 'Advocate Priya Verma',
    specialization: 'Family Law',
    experience: '9 years',
    image: adv2
  },
  {
    id: 3,
    name: 'Advocate Anil Kumar',
    specialization: 'Corporate Law',
    experience: '15 years',
    image: adv3
  },
  {
    id: 4,
    name: 'Advocate Sunita Mishra',
    specialization: 'Civil Law',
    experience: '11 years',
    image: adv4
  }
];

const AdvocateProfileCards = () => {
  return (
    <section className="py-10 bg-gray-100">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8 text-gray-800">Our Advocates</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {advocates.map((advocate) => (
            <div key={advocate.id} className="bg-white rounded-2xl shadow-lg overflow-hidden p-4 transition-transform duration-300 transform hover:scale-105 hover:shadow-2xl">
              <img src={advocate.image} alt={advocate.name} className="w-32 h-32 mx-auto rounded-full mb-4 border-4 border-green-500" />
              <h3 className="text-xl font-semibold text-gray-700">{advocate.name}</h3>
              <p className="text-gray-600 mt-2">{advocate.specialization}</p>
              <p className="text-gray-500">Experience: {advocate.experience}</p>
              <button className="mt-4 bg-green-500 text-white px-4 py-2 rounded-xl hover:bg-blue-600 transition-colors">View Profile</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AdvocateProfileCards;
