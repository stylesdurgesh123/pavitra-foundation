import React from 'react';
import teamEvent from "../../assests/images/WhatsApp Image.jpg";

const AboutofFounder = () => {
    return (
        <div className="max-w-4xl mx-auto py-16 px-6">
            <div className="flex flex-col items-center space-y-8">
                <img 
                    src={teamEvent} 
                    alt="Er. Luv Dixit" 
                    className="w-96 h-96 object-center rounded-full border-4 border-white-500 shadow-xl"
                    style={{ objectFit: 'cover', objectPosition: 'top' }}
                />
                <div className="text-center">
                    <h2 className="text-3xl font-bold text-[black]"><span className="text-4xl text-red-500">E</span>r. <span className='text-green-600'>Luv Dixit</span></h2>
                    <p className="text-md text-gray-600 mt-2 italic">Software Engineer & Founder of <span className="font-semibold">Pavitra Foundation</span></p>
                </div>
            </div>
            <div className="mt-10 text-center">
                <h3 className="text-3xl font-extrabold text-gray-800 mb-6">🌟 About Luv Dixit 🌟</h3>
                <p className="text-gray-700 text-lg leading-relaxed px-4 lg:px-12">
                    <span className="text-2xl font-bold text-green-500">E</span>r. Luv Dixit is a skilled Software Engineer who has made significant contributions to the field of technology. With a passion for problem-solving and innovation, he pursued his engineering journey with determination and excellence. Beyond his professional achievements, Luv Dixit is also the visionary founder of <span className="font-semibold">Pavitra Foundation</span>. Driven by a sense of social responsibility, he established this organization to promote environmental sustainability and cultural preservation, ensuring that traditional practices like idol immersion are conducted with care and respect for nature.
                </p>
                <p className="text-gray-700 text-lg leading-relaxed px-4 lg:px-12 mt-4">
                    His dual role as an engineer and social entrepreneur reflects his commitment to making a positive impact both in the tech industry and in the community. Through Pavitra Foundation, Luv Dixit continues to inspire others to embrace both technological progress and environmental stewardship, creating a harmonious balance between modernity and tradition.
                </p>
            </div>
        </div>
    );
};

export default AboutofFounder;
