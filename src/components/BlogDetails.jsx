import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import nature from "../assets/nature.jpg";
import banner from "../assets/banner.jpeg";
import { ChevronRight, ChevronLeft } from "lucide-react";

const blogTitles = [
  "Essential Vitamins To Improve Male Fertility",
  "A Comprehensive Guide Into Men’s Sexual Health",
  "Discover The Ultimate Secret To Staying Fit In Your 40s!",
  "A Guide To The Dietary Needs Of Men",
  "Discover The Secret To Aging Gracefully!",
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
    content: `Sexual health, just like rest of the aspects of health need proper care. While most of the people around the globe are unaware of the strategies and tips that need to be followed in order to prevent from an unhealthy sexual life.
Here is the guide to the basic measures and strategies important to take care of sexual health for men.
Let’s dive into the ideas to keep it healthy for you.

Treatments for Erectile Dysfunctionality:
Erectile dysfunction is one of the most common concern faced by many men. There are a hundreds of treatments and daily adjustments in schedules and routines that can help in treating this issue. These include physical activities such as yoga for sexual health, erectile dysfunction exercises that are advised by the experts, medical interventions and therapies that can help get rid of erectile dysfunctionality.

Increasing sperm count naturally:
Nutrition plays a vital role in improving sexual health and it also enhances male fertility. In order to increase sperm count naturally, you need to take nutrients in your body to not just increase fertility but to also improve your all over health and well-being

Tested Methods for Staying in Bed Longer:
Early ejaculation can negatively affect  person’s sense of self and the pleasure they get from sharing intimate moments. This section provides doable advice and tried-and-true methods for increasing endurance and lengthening sex. By using these techniques, people may strengthen their relationships with their spouses and gain more confidence.`,
  },

  "Discover The Ultimate Secret To Staying Fit In Your 40s!": {
    image: nature,
    content: `Did you know that staying fit in your 40s is not only possible but can also be a lot of fun? Many think that once they hit middle age, staying active and healthy becomes an uphill battle. But the truth is, it’s never too late to start prioritizing your well-being and making positive changes in your lifestyle. In this blog post, we will delve into the secrets of staying fit in your 40s and beyond. So, let’s dive right in!

Embrace the Power of Regular Exercise:
Regular exercise is the foundation of staying fit at any age, and your 40s are no exception. Engaging in physical activity not only helps you maintain a healthy weight but also improves your cardiovascular health, strengthens your muscles, and boosts your overall mental well-being. Incorporating both cardiovascular exercises and strength training into your routine is crucial for reaping maximum benefits.

Cardiovascular Exercises: Get Your Heart Pumping!
When it comes to cardiovascular exercise, the options are endless! You can choose from activities like brisk walking, jogging, swimming, cycling, or even dancing. The key is to find something that you enjoy and can commit to regularly. Aim for at least 150 minutes of moderate-intensity aerobic activity every week, or 75 minutes of vigorous-intensity exercise if you want to kick it up a notch.

Strength Training: Build Muscles, Boost Metabolism:
As we age, our muscle mass naturally tends to decline. However, incorporating strength training exercises into your fitness routine can help combat this. Weightlifting, resistance band workouts, or bodyweight exercises like push-ups and squats are excellent choices to build muscle strength and promote bone health. Aim for at least two days of strength training each week, targeting all major muscle groups.

Prioritize Healthy Eating Habits:
In addition to exercise, maintaining a well-balanced diet is vital for staying fit in your 40s. Your body needs the right combination of nutrients to function optimally. Here are some essential tips to keep in mind:

Fuel Your Body with Nutrient-Dense Foods:
Focus on incorporating plenty of fruits, vegetables, lean proteins, whole grains, and healthy fats into your meals. These foods provide essential vitamins, minerals, and antioxidants that support your overall health and well-being.`,
  },

  "A Guide To The Dietary Needs Of Men": {
    image: nature,
    content: `Dietary needs are the requirements that are needed in one’s diet which reflect on the physical and mental wellness. Dietary needs vary according to different conditions which include gender, location, and weight etc. Moving on, dietary requirements can vary in genders due to many reasons and few of them are due to differences in physiology, hormonal profiles and nutritional needs. 
Men generally have a higher lean body mass and basal metabolic rate in comparison to women which makes their dietary requirements different than women. In order to support their fitness and well-being. There are some principles that revolve around the health and wellness of men which apply to the specific dietary needs that men need in their daily lives. These principles can help optimize energy levels, promote muscle growth and enhance the overall vitality.

Let’s discuss some specific and unique needs that are highly required in men’s diet.
1. Protein
We are all aware that the body mass of men in contrast to women is higher. They are said to be and proved to be more muscular than women which makes proteins an integral part of their growth. Protein is a crucial component to a healthy diet of men and in order to attain the required amount of proteins, men need to take in sources of meat such as, poultry, fish, lean meats, eggs and plan based intake of protein that include legumes. Another source that is rich in protein for men is tofu which most of the men are not aware of. These sources must be added in the daily meals of a men’s diet in order to fulfil the requirements and promote a healthy life for men.

2. Macronutrients
As important as proteins are, they do not suppress the need of carbohydrates and fats. Carbohydrates and fats remain an essential part of the wellbeing of men. For men who are used to working out intensely, energy is highly needed and to gain that amount of energy, men need to take in carbs and fats through whole grains, fruits and vegetables.

3. Vitamins and Minerals
Vitamins are immensely crucial, like vitamin D is needed to enhance bone health and lead to a healthy immune system. The biggest source of vitamin D is none other than sunlight. Morning walks are said to be very important to increase vitamin D in one’s body. Moreover, fatty fish, fortified foods, nuts, seeds and green leaves are biggest sources of vitamins and minerals that must be taken in my men to improve their diet every day.

Men have certain dietary demands that should be recognized and taken care of in order to preserve optimum health and wellbeing. A healthy and happy life is based on adopting a balanced diet that contains a range of nutrients from various food sources and engaging in frequent physical exercise. There is no one-size-fits-all method, so it’s critical to pay attention to your body’s signals and modify as necessary.`,
  },

  "Discover The Secret To Aging Gracefully!": {
    image: nature,
    content: `As the years go by, it’s only natural for us to wonder how we can age gracefully and maintain our youthful vigor. We see celebrities and influencers who seem to defy the hands of time, leaving us in awe of their healthy bodies and radiant skin. But what is their secret? Is it some magical potion or expensive treatment? Or is there something we can all do to age gracefully, regardless of our bank account? In this article, we will explore the secret to aging gracefully and how you can incorporate it into your everyday life.

The Power of a Healthy Lifestyle:
The foundation of aging gracefully lies in adopting a healthy lifestyle. This means taking care of your body from the inside out. As men above 30 years, it’s crucial to pay attention to what we eat, drink, and how we move.

Nourish Your Body with Good Nutrition:
A proper diet can work wonders for your body and contribute to aging gracefully. Focus on incorporating nutrient-dense foods into your meals and limit processed foods and sugary treats.

Fruits and vegetables – They are packed with vitamins, antioxidants, and fiber.
Whole grains – Opt for whole wheat bread, brown rice, and oats for sustained energy and fiber.
Lean proteins – Foods like chicken, fish, and beans are excellent sources of protein.
Healthy fats – Avocados, nuts, and olive oil provide essential fats for brain health and supple skin.
Hydration, the Fountain of Youth
Water is your secret weapon in the fight against aging. Staying hydrated helps maintain the elasticity of your skin, flushes out toxins, and keeps your body functioning optimally. Aim for at least 8 glasses of water each day.

Get Moving, Stay Active:
Regular physical activity is a key component of aging gracefully. Engaging in exercise helps maintain muscle strength, keeps your heart healthy, and promotes mental well-being. Find activities you enjoy, whether it’s jogging, swimming, yoga, or dancing, and aim for at least 150 minutes of moderate-intensity exercise each week.`,
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
    <section className="min-h-screen w-screen flex flex-col md:flex-row relative">
      {/* Sidebar */}
      <div
        className={`bg-white shadow-2xl w-72 p-6 transition-transform duration-300 ease-in-out
    fixed z-50 h-full top-0 left-0 rounded-tr-3xl rounded-br-3xl border-r border-gray-200
    transform ${showSidebar ? "translate-x-0" : "-translate-x-full"}`}
      >
        <div className="flex justify-end mb-4">
          <button
            onClick={() => setShowSidebar(false)}
            className="text-gray-600 hover:text-red-500 text-2xl font-bold transition-transform duration-200 hover:scale-125"
          >
            ✕
          </button>
        </div>
        <h2 className="text-2xl font-semibold mb-6 text-gray-800 border-b pb-2">
          Other Blogs
        </h2>
        <ul className="space-y-4">
          {blogTitles.map((title, index) => (
            <li
              key={index}
              className="cursor-pointer text-blue-600 hover:underline hover:text-blue-800 transition-all duration-200"
              onClick={() => handleBlogClick(title)}
            >
              • {title}
            </li>
          ))}
        </ul>
      </div>

      {/* Sidebar Toggle Button */}
      <div className="fixed top-20 left-4 z-50">
        <button
          onClick={() => setShowSidebar(!showSidebar)}
          className="bg-white rounded-full p-3 shadow-md hover:shadow-lg transition-transform duration-200 hover:scale-110"
        >
          {showSidebar ? <ChevronLeft size={24} /> : <ChevronRight size={24} />}
        </button>
      </div>

      {/* Optional: Overlay when sidebar is open */}
      {showSidebar && (
        <div
          className="fixed inset-0 bg-opacity-30 z-40"
          onClick={() => setShowSidebar(false)}
        ></div>
      )}

      {/* Main Blog Content */}
      <div className="flex-1 flex flex-col items-center py-10 px-4 md:px-12 mt-20 md:mt-0 z-10">
        <h1 className="text-3xl md:text-4xl font-bold mb-6 text-center text-[#333] leading-snug tracking-wide">
          {decodeURIComponent(blogTitle)}
        </h1>

        {/* Blog Image */}
        <div className="w-full md:w-3/4 h-[240px] md:h-[400px] bg-white shadow-xl rounded-3xl overflow-hidden mb-8 border border-gray-200 transition-transform hover:scale-[1.01] duration-200">
          <img
            src={blog?.image}
            alt={blogTitle}
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
          />
        </div>

        {/* Blog Content */}
        <div className="w-full md:w-3/4 bg-white shadow-lg rounded-3xl p-6 md:p-8 leading-relaxed text-gray-700 text-[16px] whitespace-pre-line border border-gray-100">
          {blog?.content}
        </div>
      </div>
    </section>
  );
};

export default BlogDetails;
