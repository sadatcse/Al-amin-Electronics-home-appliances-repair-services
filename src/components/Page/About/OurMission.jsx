



import React from 'react';
import mission from "../../../assets/Header/mission.jpg"

const OurMission = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <img src={mission} />

      {/* Mission Section */}
      <section className="py-8 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
          <p className="text-lg">
          Al-Amin Electronics provides products and services in the field of high-quality engineering technology and consultancy. The high quality of our product and service is based on the long tradition of innovation acquired through a decade of research and development. It constitutes our permanent completive advantage and is a guarantee for the customer that they are getting a technologically superior product and service. The expectation of our customers is fulfilled through complete control of our business process and comprehensive product offerings. Al-Amin Electronics participates in its environment in a socially responsible manner through, its actions, it aims to develop and strengthen a positive. Recognizable identity and solidify the company’s reputation
          </p>
        </div>
      </section>

      {/* Service Section */}
      <section className="py-8 px-6 bg-gray-200">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-4">Reactive Service & Planned Maintenance</h2>
          <p className="text-lg">
          Al-Amin Electronics provides a 24/7 emergency breakdown service offering clients up to a 4-hour response from the time of call receipt. This enables the engineers to work to the very best of their ability whilst meeting the requirements of the customer’s contract. The engineers are managed by the administration team based in Dhaka. Who selects the most appropriate engineer according to location skills and ability for the problem at hand? Al-Amin Electronics has recently implemented the use of electronic job sheets for the management of day-to-day calls allowing the engineers to reduce time spent completing paperwork and other administrative tasks, planned maintenance regimes are managed by the service department and date all types of PPM are agreed through communication directly with the client. Our dedicated PPM engineers complete all identified visual and physical checks as required by the individual place of equipment. The flexible approach of the department allows for any adjustment to the client's needs should they arise 
          </p>
        </div>
      </section>
    </div>
  );
};

export default OurMission;