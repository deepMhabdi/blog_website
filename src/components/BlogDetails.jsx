import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import nature from "../assets/nature.jpg";
import fertility from "../assets/fertility.jpg";
import { ChevronRight, ChevronLeft } from "lucide-react";

const blogTitles = [
  "Essential Vitamins To Improve Male Fertility",
  "A Comprehensive Guide Into Men’s Sexual Health",
  "Discover The Ultimate Secret To Staying Fit In Your 40s!",
  "A Guide To The Dietary Needs Of Men",
  "Discover The Secret To Aging Gracefully!",
  "Top 7 Habits To Boost Men’s Mental Health",
  "AI and Healthcare: Transforming Men's Wellness",
  "Budget-Friendly Nutrition Plans For Men",
  "How Startups Are Innovating Men's Fitness Gear",
  "Mastering Work-Life Balance: Tips For Modern Men",
];

const blogContent = {
  "Essential Vitamins To Improve Male Fertility": {
    content: `Essential Vitamins to Improve Male Fertility
Fertility concerns are becoming increasingly prevalent in today's fast-paced and stressful world. According to various studies, nearly one in every five couples globally faces challenges in conceiving, often leading to emotional distress, anxiety, and financial strain. While infertility was traditionally perceived as a female-centric issue, modern research reveals that male factors contribute to nearly 50% of all infertility cases.
Infertility is typically defined as the inability to achieve pregnancy after one year of regular, unprotected sexual intercourse. At this stage, it is essential for both partners—especially the male partner—to undergo a complete fertility assessment. Seeking medical assistance from a qualified urologist or fertility specialist can help identify the root causes and implement an appropriate treatment strategy. Alongside medical treatments, lifestyle changes and nutritional support play a significant role in enhancing male reproductive health.

Common Causes of Male Infertility
When a semen analysis reveals abnormal results, the urologist or fertility expert investigates several underlying conditions, which may include:
Varicocele: A condition characterized by swollen and dilated veins in the scrotum, which increases testicular temperature and negatively impacts sperm production.
Infections: Bacterial or viral infections in the prostate gland or epididymis can lead to inflammation, blockages, or damage to the sperm-producing organs.
Hormonal Imbalances: Abnormal levels of hormones such as testosterone, LH, and FSH can disrupt sperm production and quality.
Genetic Disorders: Chromosomal anomalies like Klinefelter syndrome or Y chromosome microdeletions may impair fertility.
Oxidative Stress: The presence of high levels of reactive oxygen species (ROS) in semen leads to oxidative damage, affecting sperm motility, morphology, and DNA integrity.
Blockages in Sperm Transport: Obstructions in the vas deferens or ejaculatory ducts prevent sperm from being ejaculated properly.
Side Effects of Medications: Certain drugs used to treat hypertension, depression, cancer, or infections can adversely affect sperm production and libido.

The Role of Nutrition in Male Fertility
While medical intervention is often necessary, a growing body of scientific evidence supports the role of nutritional supplementation in improving sperm quality and fertility outcomes. A comprehensive Cochrane Review has demonstrated that antioxidant supplements can lead to increased sperm motility and higher pregnancy rates among sub-fertile men.
Key Vitamins to Boost Male Fertility
1. Vitamin C
Function: A powerful water-soluble antioxidant that protects sperm cells from oxidative stress.

Benefits:
Neutralizes harmful free radicals in the seminal fluid.
Prevents sperm DNA fragmentation.
Improves sperm count, morphology, and motility.
Sources: Citrus fruits (oranges, lemons), strawberries, kiwi, bell peppers, broccoli, and spinach.

2. Vitamin E
Function: A fat-soluble antioxidant that protects the sperm’s cell membrane from oxidative damage.

Benefits:
Enhances sperm motility and reduces sperm death.
Improves fertilization potential by maintaining membrane integrity.
Works synergistically with Vitamin C.
Sources: Nuts (almonds, hazelnuts), sunflower seeds, vegetable oils, spinach, and avocados.
Additional Fertility-Supporting Nutrients
While Vitamins C and E are particularly crucial, male fertility can also be significantly enhanced with the following nutrients:

3. Zinc
Function: Vital for testosterone production and sperm development.

Benefits: Improves sperm concentration and morphology.
Sources: Oysters, pumpkin seeds, red meat, chickpeas, and dairy products.

4. Selenium
Function: A trace mineral with antioxidant properties.

Benefits: Boosts sperm motility and protects sperm from DNA damage.
Sources: Brazil nuts, eggs, tuna, and whole grains.

5. Coenzyme Q10 (CoQ10)
Function: Supports cellular energy production in sperm cells.

Benefits: Improves sperm density and motility.
Sources: Meat, fish, nuts, and CoQ10 supplements.

6. Folate (Vitamin B9)
Function: Essential for DNA synthesis and repair.

Benefits: Reduces the risk of chromosomal abnormalities in sperm.
Sources: Leafy greens, legumes, citrus fruits, and fortified cereals.

7. L-Carnitine
Function: Aids in transporting fatty acids into the mitochondria for energy.

Benefits: Enhances sperm motility and overall vitality.
Sources: Red meat, dairy, avocados, and supplements.

Conclusion
Male infertility is a multifactorial issue influenced by genetic, environmental, lifestyle, and nutritional factors. While medical diagnostics and interventions are essential in identifying the root cause, nutrition plays a foundational role in improving reproductive health and increasing the chances of natural conception.

Vitamins such as C, E, and other antioxidants, when combined with a healthy diet, regular physical activity, adequate sleep, stress management, and avoidance of harmful substances (like tobacco, alcohol, and recreational drugs), can significantly enhance male fertility.

If you or your partner are facing fertility challenges, it’s always best to consult a fertility specialist. At the same time, consider adopting a fertility-friendly lifestyle that includes the right supplements to support your journey to parenthood.`,
  },
  "A Comprehensive Guide Into Men’s Sexual Health": {
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
  "Top 7 Habits To Boost Men’s Mental Health": {
    content: `In today’s fast-paced world, men often bear the brunt of societal expectations — to be strong, reliable, and emotionally unshakeable. But mental health is just as important as physical health. Adopting small but powerful habits can make a significant difference. Here are 7 habits every man should build to enhance mental well-being:

1. Start Your Day With Purpose
Begin each morning with a few minutes of quiet reflection or journaling. Write down your goals, gratitudes, or thoughts. This sets a positive tone for the day and keeps you focused.

2. Move Your Body
Regular physical activity — whether it’s walking, hitting the gym, or playing a sport — boosts mood by releasing endorphins. Even 30 minutes a day can reduce anxiety and improve self-esteem.

3. Talk It Out
Bottling emotions can lead to long-term stress and depression. Find a trusted friend, mentor, or therapist to talk to. Real strength lies in vulnerability and open conversations.

4. Sleep Like a King
Lack of sleep affects mood, focus, and emotional control. Aim for 7–9 hours of quality sleep. Build a wind-down routine and limit screens before bed.

5. Limit Screen Time & Social Media
Constant comparison on social media can hurt self-worth. Take digital breaks. Focus on offline hobbies like reading, gardening, or cooking.

6. Fuel Your Brain With the Right Food
Your mental state is deeply tied to what you eat. Include foods rich in Omega-3, magnesium, and B vitamins. Stay hydrated and cut down on processed foods and alcohol.

7. Practice Mindfulness or Meditation
Just 5–10 minutes of mindfulness a day can lower stress levels. Apps like Headspace or Calm can help you get started. Breathing exercises also work wonders during tense moments.

Final Thoughts
Building better mental health doesn’t mean a total life overhaul. It starts with small steps taken consistently. Be kind to yourself, and remember — seeking help is a sign of strength, not weakness.`,
  },
  "AI and Healthcare: Transforming Men's Wellness": {
    content: `Men’s health has long been a topic shrouded in silence. From skipping regular check-ups to hesitating to seek help for mental health issues, men often face unique challenges in managing their wellness. Fortunately, Artificial Intelligence (AI) is stepping in to revolutionize healthcare and offer smarter, more personalized solutions for men’s well-being.

1. Early Detection, Smarter Prevention
AI-powered diagnostic tools are now capable of analyzing vast datasets — such as blood tests, genetic profiles, or imaging scans — to detect potential health risks before symptoms even arise. This has huge implications for men, who statistically tend to delay seeking medical attention.

Example: AI can detect early signs of prostate cancer, heart disease, or diabetes, prompting early intervention and reducing long-term health complications.

2. Mental Health Support Through AI
Men are often less likely to seek therapy or talk about emotional struggles. AI-driven mental health apps offer an anonymous and judgment-free space for users to:

Track moods

Access cognitive behavioral therapy (CBT) techniques

Get AI-powered mental wellness coaching

Apps like Wysa or Woebot are helping break the stigma by putting mental support right in men’s pockets.

3. Personalized Health Plans with Machine Learning
Thanks to AI, healthcare providers can now customize fitness, nutrition, and treatment plans based on an individual's health data, lifestyle, and even genetic makeup.

AI considers sleep patterns, exercise levels, stress data (from wearables), and more

It suggests proactive steps to improve energy, focus, and long-term health outcomes

This approach transforms wellness from generic advice to data-backed personal care.

4. Smart Wearables & Real-Time Monitoring
Wearable tech like smartwatches and fitness bands equipped with AI algorithms can now:

Monitor heart rate variability

Track sleep quality

Alert for irregularities such as atrial fibrillation or oxygen drops

These insights encourage men to stay engaged with their health on a daily basis — not just when something goes wrong.

5. Reducing Medical Gaps in Rural Areas
In remote or underserved areas, access to doctors is limited. AI-powered chatbots and virtual assistants are filling that gap by:

Providing instant medical advice

Recommending local health services

Guiding users through symptom assessments

For men working in isolated or high-demand environments, this can be life-changing.

Conclusion
AI is not just changing healthcare — it’s empowering men to take control of their health like never before. By offering personalized, accessible, and preventive care solutions, AI is bridging gaps that traditional systems often missed.

As we continue to innovate, the future of men’s wellness looks smarter, stronger, and more proactive than ever.`,
  },
  "Budget-Friendly Nutrition Plans For Men": {
    content: `Eating healthy doesn’t have to break the bank. For many men, balancing nutritious meals with a tight budget can seem challenging, but with smart planning and simple swaps, it’s entirely doable. This guide shares practical tips and meal ideas that promote wellness without stretching your wallet.

1. Plan Your Meals Ahead
Creating a weekly meal plan helps you avoid impulsive buying and food waste. Focus on affordable staples like beans, rice, oats, and seasonal vegetables, which provide great nutrition for less.

2. Prioritize Protein Without Overspending
Protein is essential for muscle health and recovery, but expensive cuts of meat aren’t your only option:

Eggs, canned tuna, and lentils are wallet-friendly and protein-rich

Buying in bulk and freezing portions can reduce costs

3. Embrace Plant-Based Foods
Vegetables, fruits, whole grains, nuts, and seeds offer essential vitamins, fiber, and antioxidants. Many plant-based options are budget-friendly and versatile in recipes.

4. Cook at Home More Often
Homemade meals are generally cheaper and healthier than eating out. Batch cooking and using leftovers smartly can save time and money.

5. Smart Grocery Shopping Tips
Shop at local markets for fresh, affordable produce

Use store brands and look out for discounts or coupons

Avoid processed foods and sugary snacks, which add cost and less nutrition

6. Sample Budget-Friendly Meal Ideas
Breakfast: Oatmeal with banana and peanut butter

Lunch: Lentil soup with whole grain bread

Dinner: Stir-fried vegetables with brown rice and scrambled eggs

Snack: Carrot sticks with hummus`,
  },
  "How Startups Are Innovating Men's Fitness Gear": {
    content: `The fitness industry is rapidly evolving, and startups are at the forefront of revolutionizing men’s fitness gear. Combining cutting-edge technology with sleek design, these new products aim to make workouts more efficient, enjoyable, and personalized.

1. Smart Wearables Beyond Tracking
While fitness trackers have been around for years, startups are pushing boundaries by integrating advanced sensors that monitor muscle activity, hydration levels, and even stress. This data helps men optimize workouts and recovery.

2. AI-Powered Fitness Equipment
From smart weights that adjust resistance automatically to AI coaches embedded in home gyms, these innovations personalize fitness routines based on real-time feedback and goals.

3. Eco-Friendly and Sustainable Materials
Startups are embracing sustainability by developing fitness gear made from recycled plastics, organic fabrics, and biodegradable components, appealing to environmentally conscious consumers.

4. Connected Gear for Social Motivation
Many new products incorporate social features, allowing users to compete with friends, share progress, and join virtual fitness communities — fostering motivation and accountability.

5. Wearable Tech for Injury Prevention
Advanced gear now includes features that detect improper form or muscle strain early, helping men avoid injuries and maintain consistent progress.

Conclusion
Startups are transforming men’s fitness gear with innovation that blends technology, sustainability, and social engagement. As these trends grow, men have more tools than ever to achieve their fitness goals safely and effectively.`,
  },
  "Mastering Work-Life Balance: Tips For Modern Men":{
    content: `In today’s fast-paced world, many men find themselves juggling demanding careers, family responsibilities, and personal goals — all while trying to maintain their health and happiness. Achieving a healthy work-life balance isn’t just about managing time; it’s about creating boundaries, making intentional choices, and nurturing yourself both physically and mentally. This guide offers practical tips to help modern men reclaim their time and find harmony in life.

1. Set Clear and Firm Boundaries
Start by defining when your workday begins and ends. Resist the temptation to check emails or finish tasks outside these hours. Clear boundaries help protect your personal time and reduce stress, allowing you to be fully present at home and at work.

2. Prioritize Self-Care Like a Pro
Self-care isn’t a luxury — it’s a necessity. Schedule regular exercise, hobbies, and downtime just as you would meetings or deadlines. Whether it’s a morning jog, reading a book, or practicing mindfulness, these moments recharge your mind and body, boosting productivity and overall well-being.

3. Master the Art of Saying No
Overcommitting can quickly lead to burnout. Learn to evaluate your workload and social obligations realistically. Saying no when needed helps you focus on what truly matters without spreading yourself too thin.

4. Harness Technology—But Don’t Become Its Slave
Use apps and tools to organize your tasks and set reminders, but be mindful of digital distractions. Set specific times to check social media or messages so that technology supports your goals instead of undermining them.

5. Communicate Openly and Honestly
Share your work-life balance goals with your employer, colleagues, and family. Transparent communication fosters understanding, allows for flexible arrangements, and builds a support system that encourages balance.

6. Schedule Quality Time with Loved Ones
Just as you schedule work, block out time for family, friends, and yourself. Engage in activities that deepen connections and provide joy — from simple dinners to weekend adventures. These moments enrich your life and provide emotional fuel.`
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
        className={`bg-white w-72 p-6 transition-transform duration-300 ease-in-out
    fixed z-50 h-full top-0 left-0 rounded-tr-3xl rounded-br-3xl border-r border-gray-200
    transform ${showSidebar ? "translate-x-0" : "-translate-x-full"} 
    overflow-y-auto scrollbar-hide`}
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
      <div className="flex-1 flex flex-col items-center py-10 px-4 md:px-12 md:pl-20 mt-20 md:mt-0 z-10">
        <h1 className="text-3xl md:text-4xl font-bold mb-6 text-center text-[#333] leading-snug tracking-wide">
          {decodeURIComponent(blogTitle)}
        </h1>

        {/* Blog Content */}
        <div className="w-full md:w-3/4 p-6 md:p-8 leading-relaxed text-gray-700 text-[18px] whitespace-pre-line">
          {blog?.content}
        </div>
      </div>
    </section>
  );
};

export default BlogDetails;
