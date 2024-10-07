"use client";

const ContactInformation = () => {
  return (
    <section className="py-20 bg-gray-100" id="contact-info">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-gray-800 mb-4">
            Contact Information
          </h2>
          <p className="text-lg text-gray-600">
            Get in touch with us through the following channels.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <h3 className="text-2xl font-bold text-gray-800 mb-2">Phone</h3>
            <p className="text-gray-600">+2519-032-805-11</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <h3 className="text-2xl font-bold text-gray-800 mb-2">Email</h3>
            <p className="text-gray-600">info@teymtechnologies.com</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <h3 className="text-2xl font-bold text-gray-800 mb-2">Address</h3>
            <p className="text-gray-600">Addis Ababa, Ethiopia</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactInformation;
