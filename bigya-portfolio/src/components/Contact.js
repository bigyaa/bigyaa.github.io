import React from 'react';

function Contact({ contact }) {
  return (
    <section id="contact" className="p-8">
      <h2 className="text-2xl font-semibold mb-4">Contact</h2>
      <p className="text-gray-700">Phone: {contact.phone}</p>
      <p className="text-gray-700">
        Email: <a className="text-blue-500 hover:underline" href={`mailto:${contact.email}`}>{contact.email}</a>
      </p>
      <p className="text-gray-700">
        LinkedIn: <a className="text-blue-500 hover:underline" href={contact.linkedin} target="_blank" rel="noopener noreferrer">Profile</a>
      </p>
      <p className="text-gray-700">
        GitHub: <a className="text-blue-500 hover:underline" href={contact.github} target="_blank" rel="noopener noreferrer">Projects</a>
      </p>
    </section>
  );
}

export default Contact;