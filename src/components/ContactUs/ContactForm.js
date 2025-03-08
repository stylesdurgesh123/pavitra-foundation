import React, { useState } from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa';

const ContactForm = () => {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '', password: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    alert('Form submitted successfully!');
    setFormData({ name: '', email: '', phone: '', message: '', password: '' });
  };

  return (
    <div className="container mx-auto py-12 px-4 md:px-8 lg:px-16 grid grid-cols-1 lg:grid-cols-2 gap-10 items-start bg-white text-black">
      {/* Contact Form */}
      <div>
        <h2 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#117554] to-[#6EC207] mb-3">Contact Us</h2>
        <form className="space-y-3" onSubmit={handleSubmit}>
          {['Name', 'Email', 'Phone', 'Password'].map((field) => (
            <div key={field}>
              <label className="block font-semibold mb-1 text-lg">{field}</label>
              <input
                type={field === 'Email' ? 'email' : field === 'Phone' ? 'tel' : 'text' ? field === 'Password' : 'text'}
                name={field.toLowerCase()}
                value={formData[field.toLowerCase()]}
                onChange={handleChange}
                className="w-full border-b border-black py-1 focus:outline-none focus:border-[#6EC207] text-base bg-transparent"
                required
              />
            </div>
          ))}
          <div>
            <label className="block font-semibold mb-1 text-lg">Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="w-full border-b border-black py-1 focus:outline-none focus:border-[#6EC207] text-base bg-transparent"
              rows="3"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-[#6EC207] text-white py-3 px-8 font-bold rounded-lg text-lg hover:bg-[#117554] transition-all"
          >
            SUBMIT
          </button>
        </form>
      </div>

      {/* Contact Info */}
      <div className="space-y-10 text-center lg:text-left flex flex-col justify-between h-full">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 text-lg">
          {[
            { title: 'Address', content: ' 117 Q/61 ,R.K.H.S, Sharda Nagar  Near Parashuram Park, Kanpur' },
            { title: 'Phone', content: '+91-6392254219' },
            { title: 'Email', content: 'pavitrafoundation7@gmail.com' }
          ].map(({ title, content }) => (
            <div key={title}>
              <h3 className="text-2xl font-bold  text-transparent bg-clip-text bg-gradient-to-r from-[#117554] to-[#6EC207] mb-3">{title}</h3>
              <p className="text-sm whitespace-pre-line break-words">{content}</p>
            </div>
          ))}
        </div>

        {/* Social Icons */}
        <div className="flex justify-center lg:justify-start gap-3 mt-6 flex-wrap">
          {[
            { platform: 'Facebook', icon: <FaFacebookF size={28} />, link: 'https://www.facebook.com' },
            { platform: 'Twitter', icon: <FaTwitter size={28} />, link: 'https://www.twitter.com' },
            { platform: 'Instagram', icon: <FaInstagram size={28} />, link: 'https://www.instagram.com' },
            { platform: 'YouTube', icon: <FaYoutube size={28} />, link: 'https://www.youtube.com' }
          ].map(({ platform, icon, link }) => (
            <a
              key={platform}
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="border border-black p-3 w-20 h-20 text-center rounded-xl flex flex-col items-center justify-center cursor-pointer hover:bg-black hover:text-white transition-all"
            >
              {icon}
              <p className="text-sm mt-1 font-medium">{platform}</p>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
