import React from 'react';

const authors = [
  {
    name: "Andrew Terehin",
    title: "Partner / Managing Director",
    description:
      "Andrew is the Founder of Agente. The decade of experience in the UX design field, web development, and business development help him to find efficient solutions for clients and...",
    img: "https://randomuser.me/api/portraits/men/11.jpg",
    social: ["linkedin", "facebook", "twitter"],
  },
  {
    name: "Oleg Romeyko",
    title: "CTO / Partner",
    description:
      "During his 10 years in IT and its related disciplines, Oleg has accumulated a vast working knowledge of software architecture and development. He’s particularly passionate about LMS...",
    img: "https://randomuser.me/api/portraits/men/31.jpg",
    social: ["linkedin", "facebook", "twitter"],
  },
];

const BestAuthors = () => {
  return (
    <section className="w-full px-4 sm:px-6 md:px-12 lg:px-20 xl:px-32 py-12 bg-[#f5efda] -mt-20 mb-20">
      <h2 className="text-3xl font-bold text-center mb-10 text-gray-900">Best Authors</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {authors.map((author, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-xl p-6 flex flex-col md:flex-row items-start gap-6 transition-transform hover:scale-[1.02]"
          >
            <img
              src={author.img}
              alt={author.name}
              className="w-16 h-16 rounded-full object-cover"
            />
            <div>
              <p className="text-sm text-gray-500">{author.title}</p>
              <h3 className="font-semibold text-gray-800">{author.name}</h3>
              <p className="text-sm text-gray-600 mt-2">{author.description}</p>
              <div className="flex items-center mt-4 gap-4">
                {author.social.map((icon, i) => (
                  <a key={i} href="#" className="text-blue-400 hover:text-blue-600">
                    <i className={`fab fa-${icon}`}></i>
                  </a>
                ))}
              </div>
              <a
                href="/blogs"
                className="text-blue-500 text-sm font-semibold mt-4 inline-block hover:underline"
              >
                View All Posts →
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BestAuthors;
