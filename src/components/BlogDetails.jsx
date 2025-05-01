import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import nature from "../assets/nature.jpg";
import banner from "../assets/banner.jpeg";
import { ChevronRight, ChevronLeft } from "lucide-react";

const blogTitles = [
  "Beautiful Nature",
  "Wildlife Wonders",
  "Mountain Escapes",
  "Tropical Paradise",
  "Forest Retreat",
  "Deep",
];

const blogContent = {
  "Essential Vitamins To Improve Male Fertility": {
    image: nature,
    content: `Fertility concerns are evolving at a faster rate. On a rough scale, one in five couples is facing infertility due to various reasons that can be solved with lifestyle modifications. On an average scale, an equal percentage is contributed by both genders incapable of conceiving. Infertility is termed as failure to develop after a full year of unprotected intercourse. Couples at this point need professional assistance, and crucial support from a doctor is highly required to improve the chance of conception.

The following are the possible causes of male infertility:

The urologist’s evaluation determines the problem when the semen analysis is abnormal:
• Varicocele, where the testicular veins are swollen and dilated
• Infections of prostate or epididymis
• Uncontrolled sperm production due to hormonal imbalance
• Genetic abnormalities
• The presence of reactive oxygen in semen causes oxidative stress
• Blockage of sperm flow
• Side effects of certain medications and treatment

Beneficial nutritional supplements
Specific scientific evidence significantly suggests that nutritional supplements improve male fertility issues. A recent Cochrane Review determines the levels of antioxidants during pregnancy and birth rates improving sperm motility in sub-fertile males.

Vitamin C and vitamin E
Vitamin C and E are essential antioxidants protecting cellular damage during oxidative stress and free radical formations. Vitamin C is the most abundant antioxidant in the semen of a fertile male. It helps to maintain the health of sperm by protecting the sperm’s DNA from damage from free radicals.`,
  },

  "A Comprehensive Guide Into Men’s Sexual Health": {
    image: nature,
    content: `Fertility concerns are evolving at a faster rate. On a rough scale, one in five couples is facing infertility due to various reasons that can be solved with lifestyle modifications. On an average scale, an equal percentage is contributed by both genders incapable of conceiving. Infertility is termed as failure to develop after a full year of unprotected intercourse. Couples at this point need professional assistance, and crucial support from a doctor is highly required to improve the chance of conception. 

The following are the possible causes of male infertility

The urologist’s evaluation determines the problem when the semen analysis is abnormal

Varicocele, where the testicular veins are swollen and dilated
Infections of prostate or epididymis
Uncontrolled sperm production due to hormonal imbalance
Genetic abnormalities
The presence of reactive oxygen in semen causes oxidative stress
Blockage of sperm flow
Side effects of certain medications and treatment`,
  },

  "Discover The Ultimate Secret To Staying Fit In Your 40s!": {
    image: nature,
    content: `Fertility concerns are evolving at a faster rate. On a rough scale, one in five couples is facing infertility due to various reasons that can be solved with lifestyle modifications. On an average scale, an equal percentage is contributed by both genders incapable of conceiving. Infertility is termed as failure to develop after a full year of unprotected intercourse. Couples at this point need professional assistance, and crucial support from a doctor is highly required to improve the chance of conception. 

The following are the possible causes of male infertility

The urologist’s evaluation determines the problem when the semen analysis is abnormal

Varicocele, where the testicular veins are swollen and dilated
Infections of prostate or epididymis
Uncontrolled sperm production due to hormonal imbalance
Genetic abnormalities
The presence of reactive oxygen in semen causes oxidative stress
Blockage of sperm flow
Side effects of certain medications and treatment`,
  },

  "A Guide To The Dietary Needs Of Men": {
    image: nature,
    content: `Fertility concerns are evolving at a faster rate. On a rough scale, one in five couples is facing infertility due to various reasons that can be solved with lifestyle modifications. On an average scale, an equal percentage is contributed by both genders incapable of conceiving. Infertility is termed as failure to develop after a full year of unprotected intercourse. Couples at this point need professional assistance, and crucial support from a doctor is highly required to improve the chance of conception. 

The following are the possible causes of male infertility

The urologist’s evaluation determines the problem when the semen analysis is abnormal

Varicocele, where the testicular veins are swollen and dilated
Infections of prostate or epididymis
Uncontrolled sperm production due to hormonal imbalance
Genetic abnormalities
The presence of reactive oxygen in semen causes oxidative stress
Blockage of sperm flow
Side effects of certain medications and treatment`,
  },

  "Discover The Secret To Aging Gracefully!": {
    image: nature,
    content: `Fertility concerns are evolving at a faster rate. On a rough scale, one in five couples is facing infertility due to various reasons that can be solved with lifestyle modifications. On an average scale, an equal percentage is contributed by both genders incapable of conceiving. Infertility is termed as failure to develop after a full year of unprotected intercourse. Couples at this point need professional assistance, and crucial support from a doctor is highly required to improve the chance of conception. 

The following are the possible causes of male infertility

The urologist’s evaluation determines the problem when the semen analysis is abnormal

Varicocele, where the testicular veins are swollen and dilated
Infections of prostate or epididymis
Uncontrolled sperm production due to hormonal imbalance
Genetic abnormalities
The presence of reactive oxygen in semen causes oxidative stress
Blockage of sperm flow
Side effects of certain medications and treatment`,
  },
  "deep mhabdi": {
    image: nature,
    content: `Fertility concerns are evolving at a faster rate. On a rough scale, one in five couples is facing infertility due to various reasons that can be solved with lifestyle modifications. On an average scale, an equal percentage is contributed by both genders incapable of conceiving. Infertility is termed as failure to develop after a full year of unprotected intercourse. Couples at this point need professional assistance, and crucial support from a doctor is highly required to improve the chance of conception. 

The following are the possible causes of male infertility

The urologist’s evaluation determines the problem when the semen analysis is abnormal

Varicocele, where the testicular veins are swollen and dilated
Infections of prostate or epididymis
Uncontrolled sperm production due to hormonal imbalance
Genetic abnormalities
The presence of reactive oxygen in semen causes oxidative stress
Blockage of sperm flow
Side effects of certain medications and treatment`,
  },

  "Beautiful Nature": {
    image: nature,
    content: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet officia beatae incidunt cum eos quasi ea iste assumenda, ipsam ad velit quia dolorem ullam voluptas ipsum aliquid dolore explicabo deleniti.
    Tenetur cumque consequatur numquam mollitia eaque quidem id, minima distinctio dolorum quia facilis odit veniam, delectus quis quaerat dignissimos natus optio perferendis laboriosam architecto voluptates enim a. Sint, minima molestias!
    Suscipit commodi aliquid id voluptatibus iure incidunt magnam porro accusantium rerum placeat cum labore quisquam, nemo hic consectetur alias omnis magni officia, reiciendis maxime. Assumenda nesciunt sed quos praesentium autem?
    Optio esse officia facilis. Labore, facilis, accusamus minima magni amet nihil vero facere nisi non est culpa, omnis minus veritatis illum voluptas ullam iure commodi dolor enim? Illum, at quos.
    Reprehenderit tempore, sapiente cupiditate assumenda aperiam corporis optio asperiores repellendus voluptatibus, ab deserunt? Minus beatae blanditiis doloremque odit! Aliquid accusamus vitae doloremque nesciunt, id dolorem excepturi necessitatibus repellat quam obcaecati!
    Facilis fuga commodi fugiat tenetur veritatis id debitis deserunt sunt iusto earum minus maxime autem magni odio sit, doloremque, deleniti sequi quasi aut ipsam non consectetur optio blanditiis fugit? Fuga!`,
  },
  "Wildlife Wonders": {
    image: nature,
    content: `Discover the fascinating world of wildlife. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptates aperiam accusantium repellendus alias, dolores possimus dignissimos deserunt culpa quisquam nam assumenda reiciendis? Quisquam rerum facere aut maiores itaque sint cum!
    Minus veniam quis commodi quaerat, nemo optio totam ullam praesentium impedit officia, omnis voluptas accusantium qui officiis corporis? Repudiandae excepturi nesciunt hic, consequuntur recusandae vero similique nostrum dolore optio animi?
    Ratione quod hic animi quos illum illo ipsum. Nostrum, deleniti sint! Tempore earum, numquam est saepe architecto tempora quam expedita molestias. Enim, omnis magni. Tempore quasi id nobis nostrum sit!
    Qui, deleniti. Nihil itaque cupiditate accusantium porro voluptas eos ab cum laborum at quis minus, vitae incidunt veritatis magnam laboriosam distinctio unde animi necessitatibus eveniet recusandae illo consectetur omnis consequuntur!
    Alias, quidem quae perspiciatis placeat maiores, asperiores autem ratione, repellat veniam assumenda architecto nisi! Molestiae illo a, at voluptatibus officia non, obcaecati, officiis maiores eius ipsa voluptatum sed qui adipisci?`,
  },
  "Mountain Escapes": {
    image: nature,
    content: `Escape to the serene mountains. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugit accusamus quae a neque autem? Dicta nesciunt assumenda, tempora eum ducimus, autem quidem reprehenderit vitae quae placeat minus rerum tenetur quas!
    Ad magni officia eos deserunt incidunt quaerat eius consequuntur velit maxime quia distinctio fugit, recusandae quam exercitationem cumque modi. Ipsum quisquam officiis, illum maiores consequatur perferendis assumenda voluptas quam libero!
    Eos blanditiis minus inventore iusto pariatur. Pariatur temporibus eligendi cumque labore fugiat. Rerum molestiae dicta perspiciatis quasi expedita perferendis. Quasi deleniti fugiat aliquid soluta et reprehenderit, voluptatibus illum qui fuga.
    Delectus excepturi at iusto asperiores cum officiis obcaecati recusandae voluptatem unde! Ut ab possimus reiciendis expedita, reprehenderit atque minus tempora, perferendis fugiat dicta laudantium sunt culpa, quam quibusdam est illo!
    Recusandae placeat perspiciatis minima sunt accusamus, rem, cupiditate quidem eligendi sed ab eveniet! Voluptatum earum labore ducimus possimus! Ex odio amet recusandae reprehenderit eligendi eos ipsum voluptate tempore iusto dicta.`,
  },
  "Tropical Paradise": {
    image: nature,
    content: `Unwind in tropical locations. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem dolorem non debitis quis quidem molestias, illum sapiente voluptatem facere repellat in sed. Soluta quidem voluptatibus ipsam repudiandae quaerat accusamus dolor.
    Hic soluta, provident totam voluptatibus expedita unde cumque reprehenderit veniam deserunt aliquid debitis? Doloremque aperiam doloribus rem culpa maiores voluptate saepe. Facere odio nemo praesentium dolorum sint earum, iusto ipsam.
    Excepturi labore cum iusto eos inventore laudantium quaerat. Fugiat, nesciunt. Quam iusto reprehenderit quibusdam odit magnam ex in exercitationem adipisci asperiores, magni veritatis atque alias laboriosam ipsa molestias id commodi.
    Praesentium nihil earum in voluptates maxime perferendis quo natus, distinctio incidunt velit beatae ad, veniam maiores corrupti tenetur temporibus ab mollitia pariatur expedita sint repellendus? Possimus perspiciatis hic fugit impedit!
    Impedit, nostrum. Ullam consectetur alias aperiam ipsum quis quia vitae veniam sint, voluptates distinctio. Optio deleniti cupiditate dignissimos laborum natus ipsa culpa, nulla enim voluptatum fugiat ut nam explicabo accusamus!`,
  },
  "Forest Retreat": {
    image: nature,
    content: `Rejuvenate your spirit in quiet forests. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde amet omnis in consequuntur repellendus tenetur rem! Labore, nam totam, non illo vero minima quaerat rem placeat soluta, ab at ipsum.
    Dignissimos mollitia, officiis labore animi quas maiores totam accusantium possimus. Numquam error culpa esse non fuga obcaecati eaque beatae reiciendis, itaque architecto. Delectus ipsa nesciunt eaque cupiditate quaerat quod qui.
    Veniam, dicta. Dolorum ipsum vitae ipsam officia, veritatis ex autem inventore quae enim dignissimos aperiam eius labore in perferendis quidem expedita, voluptatem magni voluptates. Consequatur obcaecati odio dolorum ratione excepturi?
    Repellat incidunt nostrum minima a, ab rerum officia vel culpa provident labore explicabo, doloremque harum voluptates dolore maxime dicta perferendis sequi voluptatibus recusandae id, dolorem fuga quo consectetur? Earum, cum?
    Iure labore saepe unde dolor accusantium voluptates fugit aliquam sint accusamus id, totam, consequatur ipsam voluptate architecto dolorem eveniet illum maiores itaque perspiciatis repudiandae ab. Tempore similique officia corrupti et?`,
  },
  Deep: {
    image: nature,
    content: `Rejuvenate your spirit in quiet forests. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde amet omnis in consequuntur repellendus tenetur rem! Labore, nam totam, non illo vero minima quaerat rem placeat soluta, ab at ipsum.
    Dignissimos mollitia, officiis labore animi quas maiores totam accusantium possimus. Numquam error culpa esse non fuga obcaecati eaque beatae reiciendis, itaque architecto. Delectus ipsa nesciunt eaque cupiditate quaerat quod qui.
    Veniam, dicta. Dolorum ipsum vitae ipsam officia, veritatis ex autem inventore quae enim dignissimos aperiam eius labore in perferendis quidem expedita, voluptatem magni voluptates. Consequatur obcaecati odio dolorum ratione excepturi?
    Repellat incidunt nostrum minima a, ab rerum officia vel culpa provident labore explicabo, doloremque harum voluptates dolore maxime dicta perferendis sequi voluptatibus recusandae id, dolorem fuga quo consectetur? Earum, cum?
    Iure labore saepe unde dolor accusantium voluptates fugit aliquam sint accusamus id, totam, consequatur ipsam voluptate architecto dolorem eveniet illum maiores itaque perspiciatis repudiandae ab. Tempore similique officia corrupti et?`,
  },
};

const BlogDetails = () => {
  const { blogTitle } = useParams();
  const [blog, setBlog] = useState({});
  const navigate = useNavigate();
  const [showSidebar, setShowSidebar] = useState(false);

  useEffect(() => {
    const decodedTitle = decodeURIComponent(blogTitle || "Beautiful Nature");
    const selectedBlog = blogContent[decodedTitle];
    setBlog(
      selectedBlog || {
        image: nature,
        content: "No content available for this blog.",
      }
    );
  }, [blogTitle]);

  const handleBlogClick = (title) => {
    setShowSidebar(false);
    navigate(`/blogs/${encodeURIComponent(title)}`);
  };

  return (
    <section className="min-h-screen w-screen bg-gray-100 flex flex-col md:flex-row relative">
      {/* Sidebar */}
      <div
        className={`bg-white shadow-md w-64 p-4 transform transition-transform duration-300 ease-in-out 
        ${showSidebar ? "translate-x-0" : "-translate-x-full"} 
        fixed z-50 h-full top-0 left-0`}
      >
        <div className="flex justify-end mb-2">
          <button
            onClick={() => setShowSidebar(false)}
            className="text-gray-600 hover:text-red-500 text-xl"
          >
            ✖
          </button>
        </div>
        <h2 className="text-lg font-bold mb-4 text-gray-800">Other Blogs</h2>
        <ul className="space-y-2">
          {blogTitles.map((title, index) => (
            <li
              key={index}
              className="cursor-pointer text-blue-600 hover:underline"
              onClick={() => handleBlogClick(title)} // Call handleBlogClick
            >
              {title}
            </li>
          ))}
        </ul>
      </div>

      <div className="w-full flex justify-start px-4 mt-4 z-40 fixed top-16 left-0">
        <button
          onClick={() => setShowSidebar(!showSidebar)}
          className="bg-white rounded-full p-2 shadow-md"
        >
          {showSidebar ? <ChevronLeft size={24} /> : <ChevronRight size={24} />}
        </button>
      </div>

      <div className="flex-1 flex flex-col items-center py-10 px-4 md:px-10 mt-20 md:mt-0">
        <h1 className="text-3xl font-bold mb-4 text-gray-800 text-center">
          {decodeURIComponent(blogTitle)}
        </h1>
        <div className="w-full md:w-3/4 h-[300px] md:h-[500px] bg-white shadow-lg rounded-lg overflow-hidden">
          <img
            src={blog?.image}
            alt={blogTitle}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="w-full md:w-3/4 mt-6 bg-white shadow-md rounded-lg p-6">
          <p className="text-gray-600 text-base">{blog?.content}</p>
        </div>
      </div>
    </section>
  );
};

export default BlogDetails;
