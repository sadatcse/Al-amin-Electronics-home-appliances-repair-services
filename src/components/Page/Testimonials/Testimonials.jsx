import React from 'react';
import bannerImage from '/pagebanner.jpg'
import Banner from '../../Universal/Banner';
const testimonials = [
    {
      id: 1,
      name: "Shhopon ahmed",
      comment: "Excellent service! Installed my AC unit efficiently and it's working perfectly.",
      service: "AC Installation",
      phoneNumber: "123-456-7890"
    },
    {
      id: 2,
      name: "Rana Talukder",
      comment: "Called them for an emergency repair, they arrived promptly and fixed my AC in no time.",
      service: "AC Repair",
      phoneNumber: "987-654-3210"
    },
    {
      id: 3,
      name: "Rakibuzzman",
      comment: "Rented an AC unit for a party, hassle-free service and affordable prices.",
      service: "AC Rental",
      phoneNumber: "555-555-5555"
    },
    {
      id: 4,
      name: "Nur Mohammad",
      comment: "Great experience with their AC installation service. Professional and reliable.",
      service: "AC Installation",
      phoneNumber: "111-222-3333"
    },
    {
      id: 5,
      name: "Salim khan",
      comment: "Needed a quick repair for my AC before summer, they fixed it the same day. Highly recommend!",
      service: "AC Repair",
      phoneNumber: "444-555-6666"
    },
    {
      id: 6,
      name: "Mahabub Rahman",
      comment: "Rented an AC unit for a week, smooth process from booking to return.",
      service: "AC Rental",
      phoneNumber: "777-888-9999"
    },
    {
      id: 7,
      name: "Robin Ahmad",
      comment: "Impressed with their AC installation service. The technicians were knowledgeable and friendly.",
      service: "AC Installation",
      phoneNumber: "123-123-1234"
    },
    {
      id: 8,
      name: "Tipu Munsi",
      comment: "Called for a repair, they diagnosed the issue quickly and fixed it efficiently.",
      service: "AC Repair",
      phoneNumber: "987-987-9876"
    },
    {
      id: 9,
      name: "Josim Khan",
      comment: "Smooth process renting an AC unit for a weekend event. Affordable prices too.",
      service: "AC Rental",
      phoneNumber: "555-123-4567"
    },
    {
      id: 10,
      name: "Nure Alam Babu",
      comment: "Had my AC installed by them, very satisfied with the service and the cooling performance.",
      service: "AC Installation",
      phoneNumber: "789-789-7890"
    },
    {
      id: 11,
      name: "Ali Reza Iftekha",
      comment: "Emergency repair service was excellent. My AC was back up and running in no time.",
      service: "AC Repair",
      phoneNumber: "123-456-7890"
    },
    {
      id: 12,
      name: "Dr. Toufic Ahmad Choudhury",
      comment: "Renting an AC unit for a month was hassle-free. Convenient and reliable service.",
      service: "AC Rental",
      phoneNumber: "555-555-5555"
    },
    {
      id: 13,
      name: "Gazi Md. Shakhawat Hossain",
      comment: "Their AC installation team was punctual and professional. Happy with the outcome.",
      service: "AC Installation",
      phoneNumber: "111-222-3333"
    },
    {
      id: 14,
      name: "Salina Ali",
      comment: "Quick response for AC repair. They knew exactly what the problem was and fixed it efficiently.",
      service: "AC Repair",
      phoneNumber: "444-444-4444"
    },
    {
      id: 15,
      name: "Md. Showkat Ali Chowdhury",
      comment: "Needed to rent an AC unit for a family gathering. Smooth process and great customer service.",
      service: "AC Rental",
      phoneNumber: "777-777-7777"
    }
  ];

const TestimonialCard = ({ testimonial }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-6 mb-4">
      <p className="text-gray-800 mb-2">{testimonial.comment}</p>
      <p className="text-gray-600 text-sm">- {testimonial.name}</p>
      <p className="text-gray-600 text-sm">{testimonial.service}</p>
      <p className="text-gray-600 text-sm">Contact: {testimonial.phoneNumber}</p>
    </div>
  );
};

const Testimonials = () => {
  return (
    <div className="container mx-auto">
       <Banner text="CLIENT TESTIMONIAL" image={bannerImage} />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {testimonials.map(testimonial => (
          <TestimonialCard key={testimonial.id} testimonial={testimonial} />
        ))}
      </div>
    </div>
  );
};

export default Testimonials;