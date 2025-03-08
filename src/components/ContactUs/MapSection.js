import React from 'react';

const MapSection = () => {
  return (
    <section className="py-10 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-6">Our Location</h2>
        <div className="w-full h-96 rounded-lg overflow-hidden shadow-lg">
          <iframe
            title="Google Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3570.98076735227!2d80.28473319999999!3d26.48856409999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399c3909a943da65%3A0xb44245eed03320cb!2sAdvocate%20Luv%20Dixit%20-%20Legal%20Consultant%20and%20IT%20Services%20(a%20wing%20of%20Pavitra%20Foundation)!5e0!3m2!1sen!2sin!4v1740414255212!5m2!1sen!2sin"
            className="w-full h-full border-none"
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default MapSection;
