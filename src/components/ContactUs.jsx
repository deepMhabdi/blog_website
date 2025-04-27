import React from 'react';

const ContactUs = () => {
  return (
    <section className="py-12 px-6 bg-gray-100">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-6 text-center">Contact Us</h2>
        <div className="flex flex-col md:flex-row bg-white shadow-md rounded-lg overflow-hidden">
          <div className="md:w-1/2 p-8">
            <h3 className="text-xl font-semibold mb-4">Get in Touch</h3>
            <p className="text-gray-600 mb-6">Fill the form and we will get back to you soon!</p>
            <form className="flex flex-col gap-4">
              <input type="text" placeholder="Name" className="border p-2 rounded" />
              <input type="email" placeholder="Email" className="border p-2 rounded" />
              <textarea placeholder="Message" rows="4" className="border p-2 rounded"></textarea>
              <button type="submit" className="bg-gray-900 text-white py-2 rounded hover:bg-gray-700 transition">
                Send Message
              </button>
            </form>
          </div>
          <div className="md:w-1/2 bg-gray-200 p-8 flex flex-col justify-center">
            <p className="text-gray-700 mb-2"><strong>Address:</strong> 1234 Street Name, City, State</p>
            <p className="text-gray-700 mb-2"><strong>Email:</strong> info@example.com</p>
            <p className="text-gray-700"><strong>Phone:</strong> +91 9876543210</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
