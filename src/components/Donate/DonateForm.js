import React, { useState } from 'react';
import { FaCcVisa, FaCcMastercard, FaPaypal, FaGooglePay, FaUniversity } from 'react-icons/fa';
import Peopledonationimg from "../../assests/images/peopledonation.jpg";
import Banner from "../../assests/images/donation-banner.webp";

const DonateContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    amount: '',
    pan: '',
    comments: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <section className="w-full mx-auto mt-10 bg-white shadow-2xl rounded-2xl border border-gray-300 overflow-hidden">
      {/* Banner Section */}
      <div className="w-full h-64">
        <img src={Banner} alt="Donation Banner" className="w-full h-full object-cover" />
      </div>

      {/* Donation Section */}
      <div className="grid md:grid-cols-2 grid-cols-1 gap-6 p-6">
        <div className="flex flex-col justify-center">
          <h2 className="text-4xl font-bold mb-4">Donate Now</h2>
          <p className="text-gray-600 mb-4">Your donation helps us support those in need. Every contribution matters!</p>
          <img src={Peopledonationimg} alt="People donating" className="w-full h-72 object-cover rounded-lg" />
        </div>

        <form onSubmit={handleSubmit} className="space-y-4 bg-gray-50 p-6 rounded-lg border border-gray-300 w-full">
          <h3 className="text-2xl font-bold text-center mb-2">Payment Details</h3>
          <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
            <input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleChange} className="w-full p-3 border border-gray-300 rounded-lg text-gray-800" required />
            <input type="tel" name="phone" placeholder="Phone" value={formData.phone} onChange={handleChange} className="w-full p-3 border border-gray-300 rounded-lg text-gray-800" required />
            <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} className="w-full p-3 border border-gray-300 rounded-lg text-gray-800" required />
            <input type="number" name="amount" placeholder="₹ Enter Amount" value={formData.amount} onChange={handleChange} className="w-full p-3 border border-gray-300 rounded-lg text-gray-800" required />
            <input type="text" name="pan" placeholder="PAN Number (Optional)" value={formData.pan} onChange={handleChange} className="w-full p-3 border border-gray-300 rounded-lg text-gray-800 md:col-span-2" />
            <textarea name="comments" placeholder="Comments (Optional)" value={formData.comments} onChange={handleChange} className="w-full p-3 border border-gray-300 rounded-lg text-gray-800 md:col-span-2" rows="3"></textarea>
          </div>

          <div className="flex flex-wrap justify-between items-center border-t pt-3 gap-4">
            <div className="flex space-x-3 text-2xl">
              <FaCcVisa className="text-[#1A1F71]" />
              <FaCcMastercard className="text-[#EB001B]" />
              <FaPaypal className="text-[#003087]" />
              <FaGooglePay className="text-[#4285F4]" />
              <FaUniversity className="text-[#34A853]" />
            </div>
            <button type="submit" className="bg-green-500 text-white py-3 px-8 rounded-lg font-semibold hover:bg-green-600 transition duration-300 shadow-lg w-full md:w-auto text-center">Pay ₹ {formData.amount || '0.00'}</button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default DonateContactForm;
