import React, { useState } from 'react';
import { Star } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

// EDITABLE TESTIMONIALS DATA - Easy to modify and add more
const TESTIMONIALS_DATA = [
  {
    id: 1,
    name: 'Mukesh Kumar',
    age: 35,
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop',
    problem: 'Chronic Lower Back Pain',
    category: 'pain-management',
    duration: '8 weeks',
    rating: 5,
    story: 'After years of suffering from chronic lower back pain due to desk work, I could barely walk without discomfort. The expert team at Jan Seva diagnosed my postural issues and designed a personalized rehabilitation program. Within 8 weeks, I was pain-free and learned exercises to prevent recurrence. Now I can work without any discomfort and my quality of life has improved tremendously.',
    achievements: ['Pain reduction from 8/10 to 1/10', 'Improved posture and ergonomics', 'Regular exercise routine established'],
  },
  {
    id: 2,
    name: 'Pintu Yogi',
    age: 25,
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop',
    problem: 'ACL Tear & Knee Injury',
    category: 'sports-rehab',
    duration: '12 weeks',
    rating: 5,
    story: 'As a professional Athelete, my ACL tear seemed like the end of my career. I was devastated and couldn\'t imagine playing again. The sports rehabilitation team provided an intensive program combining electrotherapy, strengthening exercises, and sports-specific training. Not only did I recover fully, but I returned to competitive play stronger than before!',
    achievements: ['Full range of motion restored', 'Return to competitive sports', 'Enhanced injury prevention'],
  },
  {
    id: 3,
    name: 'Gyan Chand Jatolia',
    age: 52,
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop',
    problem: 'Cervical Spondylosis',
    category: 'orthopedic',
    duration: '4 weeks',
    rating: 5,
    story: 'Severe neck pain and constant headaches made my daily life miserable. After diagnosis of cervical spondylosis, I was worried about my future. The Jan Seva team used traction therapy, manual therapy, and prescribed home exercises. The improvement was remarkable - no more constant headaches and I can turn my neck freely!',
    achievements: ['Neck mobility increased by 80%', 'Headaches completely eliminated', 'Nerve compression significantly reduced'],
  },
  {
    id: 4,
    name: 'Meera Singh',
    age: 67,
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop',
    problem: 'Post-Stroke Rehabilitation',
    category: 'neurological',
    duration: '16 weeks',
    rating: 5,
    story: 'After a mild stroke, I lost mobility in my right side and feared I\'d never walk normally again. The specialized neurological rehabilitation team worked with me patiently through every step. With intensive therapy combining movement training, balance work, and encouragement, I regained my independence and can now walk without assistance.',
    achievements: ['Regained right side mobility', 'Independent walking restored', 'Confidence and self-esteem rebuilt'],
  },
  {
    id: 5,
    name: 'Vikram Reddy',
    age: 29,
    image: 'https://images.unsplash.com/photo-1507539332150-34c3aae59938?w=400&h=400&fit=crop',
    problem: 'Frozen Shoulder',
    category: 'orthopedic',
    duration: '10 weeks',
    rating: 5,
    story: 'My frozen shoulder made even basic tasks impossible - I couldn\'t lift my arm or dress myself. The physiotherapists used a combination of heat therapy, manual mobilization, and progressive stretching. The gradual improvement was incredible, and within 10 weeks, I had full range of motion back and could return to playing cricket.',
    achievements: ['Full shoulder mobility restored', 'Pain-free movement achieved', 'Return to sports activities'],
  },
  {
    id: 6,
    name: 'Anjali Verma',
    age: 52,
    image: 'https://images.unsplash.com/photo-1516846655773-5a6a0456b5b4?w=400&h=400&fit=crop',
    problem: 'Rheumatoid Arthritis',
    category: 'pain-management',
    duration: 'Ongoing',
    rating: 5,
    story: 'Living with RA meant chronic pain and severely reduced mobility. Jan Seva helped me manage my condition through gentle exercises, aquatic therapy, and pain management techniques. They taught me how to balance activity and rest properly. Now I\'m more active than I\'ve been in years and can enjoy quality time with my grandchildren!',
    achievements: ['Pain levels significantly reduced', 'Joint mobility substantially improved', 'Energy levels increased dramatically'],
  },
  {
    id: 7,
    name: 'Deepika Agarwal',
    age: 38,
    image: 'https://images.unsplash.com/photo-1516387938699-c52646db42da?w=400&h=400&fit=crop',
    problem: 'Pregnancy-Related Back Pain',
    category: 'wellness',
    duration: '6 weeks',
    rating: 5,
    story: 'During my pregnancy, severe back pain made daily activities extremely difficult. Jan Seva\'s pregnancy-safe physiotherapy program was life-changing. With gentle stretches, postural training, and relaxation techniques, my pain reduced significantly. Even after delivery, the postpartum exercises helped me regain strength quickly and get back to normal activities.',
    achievements: ['Pain reduced from 9/10 to 2/10', 'Improved posture during pregnancy', 'Quick postpartum recovery'],
  },
  {
    id: 8,
    name: 'Sanjay Gupta',
    age: 41,
    image: 'https://images.unsplash.com/photo-1507009349169-8a1be7dc247b?w=400&h=400&fit=crop',
    problem: 'Post-Operative Knee Surgery',
    category: 'orthopedic',
    duration: '12 weeks',
    rating: 5,
    story: 'After knee surgery, I was anxious about my recovery and progress. The post-operative rehabilitation program was comprehensive - starting with basic mobility and progressing to strengthening and functional activities. The team guided me through each phase carefully. I\'m now back to jogging and hiking without any concerns!',
    achievements: ['Surgical site healed optimally', 'Full range of motion achieved', 'Return to jogging and hiking'],
  },
  {
  id: 9,
  name: 'Ramesh Meena',
  age: 48,
  image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop',
  problem: 'Frozen Shoulder',
  category: 'orthopedic',
  duration: '10 weeks',
  rating: 5,
  story: 'Severe shoulder stiffness and pain made even basic movements like dressing and lifting impossible. The Jan Seva physiotherapy team identified restricted joint mobility and muscle tightness. Through a structured plan including heat therapy, manual mobilization, and progressive stretching, my shoulder gradually regained movement. Today, I can move my arm freely without pain.',
  achievements: [
    'Full shoulder mobility restored',
    'Pain reduced from severe to zero',
    'Independent daily activities resumed'
  ],
},
{
  id: 10,
  name: 'Vikram Reddy',
  age: 29,
  image: 'https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=400&h=400&fit=crop',
  problem: 'Frozen Shoulder',
  category: 'orthopedic',
  duration: '10 weeks',
  rating: 5,
  story: 'My frozen shoulder made even basic tasks impossible—I couldn’t lift my arm or dress myself. The physiotherapists used a combination of heat therapy, manual mobilization, and progressive stretching. The gradual improvement was incredible, and within 10 weeks, I had full range of motion back and could return to playing cricket.',
  achievements: [
    'Full shoulder mobility restored',
    'Pain-free movement achieved',
    'Return to sports activities'
  ],
},
{
  id: 11,
  name: 'Sanjay Gupta',
  age: 41,
  image: 'https://images.unsplash.com/photo-1544723795-3fb6469f5b39?w=400&h=400&fit=crop',
  problem: 'Post-Operative Knee Surgery Rehabilitation',
  category: 'post-surgery-rehab',
  duration: '12 weeks',
  rating: 5,
  story: 'After knee surgery, I was anxious about my recovery and long-term mobility. The post-operative rehabilitation program was carefully planned, starting with basic mobility and gradually progressing to strengthening and functional exercises. With consistent guidance and motivation, I regained confidence in my knee and returned to an active lifestyle.',
  achievements: [
    'Surgical site healed optimally',
    'Full range of knee motion achieved',
    'Return to jogging and hiking'
  ],
},
{
  id: 12,
  name: 'Sunita Devi',
  age: 56,
  image: 'https://images.unsplash.com/photo-1554151228-14d9def656e4?w=400&h=400&fit=crop',
  problem: 'Osteoarthritis of Knee',
  category: 'pain-management',
  duration: '8 weeks',
  rating: 5,
  story: 'Chronic knee pain due to osteoarthritis made walking and climbing stairs extremely painful. The Jan Seva team focused on pain relief, strengthening exercises, and lifestyle guidance. Within weeks, my pain reduced significantly, and I was able to walk comfortably without fear.',
  achievements: [
    'Pain levels reduced significantly',
    'Improved knee strength and stability',
    'Independent walking restored'
  ],
},
{
  id: 13,
  name: 'Ankit Sharma',
  age: 32,
  image: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=400&h=400&fit=crop',
  problem: 'Lumbar Disc Bulge',
  category: 'spine-care',
  duration: '6 weeks',
  rating: 5,
  story: 'Lower back pain radiating to my leg made sitting and working unbearable. After assessment, the physiotherapy team identified a lumbar disc bulge and started a focused spine rehabilitation program. With traction therapy, core strengthening, and posture correction, my pain reduced drastically and mobility improved.',
  achievements: [
    'Radiating pain eliminated',
    'Core strength significantly improved',
    'Return to normal work routine'
  ],
},
{
  id: 14,
  name: 'Mahesh Lalawat',
  age: 60,
  image: 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=400&h=400&fit=crop',
  problem: 'Balance & Gait Disorder',
  category: 'geriatric-rehab',
  duration: '6 weeks',
  rating: 5,
  story: 'Frequent imbalance and fear of falling limited my independence. The physiotherapy program focused on balance training, lower-limb strengthening, and coordination exercises. Over time, my confidence improved, and I can now walk independently without support.',
  achievements: [
    'Balance and coordination improved',
    'Reduced risk of falls',
    'Confidence in walking restored'
  ],
},
{
  id: 10,
  name: 'Neeraj Verma',
  age: 38,
  image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop',
  problem: 'Tennis Elbow',
  category: 'orthopedic',
  duration: '6 weeks',
  rating: 5,
  story: 'Persistent elbow pain affected my work and daily activities, especially lifting and gripping objects. The physiotherapy team diagnosed tennis elbow and started a targeted treatment plan including electrotherapy, stretching, and strengthening exercises. The pain gradually subsided, and strength returned steadily.',
  achievements: [
    'Elbow pain reduced significantly',
    'Grip strength restored',
    'Normal work activities resumed'
  ],
},
{
  id: 11,
  name: 'Kavita Agarwal',
  age: 44,
  image: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=400&h=400&fit=crop',
  problem: 'Plantar Fasciitis',
  category: 'pain-management',
  duration: '5 weeks',
  rating: 5,
  story: 'Heel pain made standing and walking extremely uncomfortable, especially in the mornings. The Jan Seva team focused on pain relief, soft tissue release, and foot strengthening exercises. Within a few weeks, walking became pain-free again.',
  achievements: [
    'Heel pain eliminated',
    'Improved foot flexibility',
    'Comfortable walking restored'
  ],
},
{
  id: 12,
  name: 'Rahul Singh',
  age: 27,
  image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=400&h=400&fit=crop',
  problem: 'Ankle Ligament Sprain',
  category: 'sports-rehab',
  duration: '4 weeks',
  rating: 5,
  story: 'A sports-related ankle injury restricted my movement and balance. The rehabilitation program included swelling control, strengthening, and proprioception training. With consistent therapy, my ankle regained full stability and strength.',
  achievements: [
    'Swelling and pain resolved',
    'Ankle stability restored',
    'Safe return to sports'
  ],
},
{
  id: 13,
  name: 'Suresh Patel',
  age: 62,
  image: 'https://images.unsplash.com/photo-1552058544-f2b08422138a?w=400&h=400&fit=crop',
  problem: 'Post-Stroke Shoulder Pain',
  category: 'neuro-rehab',
  duration: '8 weeks',
  rating: 5,
  story: 'After a stroke, severe shoulder pain limited my arm movement and daily function. The physiotherapists provided gentle mobilization, pain management techniques, and functional training. Gradually, movement improved and pain reduced.',
  achievements: [
    'Shoulder pain significantly reduced',
    'Improved arm mobility',
    'Enhanced daily independence'
  ],
},
{
  id: 14,
  name: 'Pooja Jain',
  age: 34,
  image: 'https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?w=400&h=400&fit=crop',
  problem: 'Post-Natal Back Pain',
  category: 'women-health',
  duration: '6 weeks',
  rating: 5,
  story: 'Post-delivery back pain affected my posture and daily routine. The physiotherapy program focused on core strengthening, posture correction, and gentle exercises. Within weeks, my pain reduced and strength returned.',
  achievements: [
    'Back pain relieved',
    'Core strength improved',
    'Postural balance restored'
  ],
},
{
  id: 15,
  name: 'Amit Joshi',
  age: 40,
  image: 'https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=400&h=400&fit=crop',
  problem: 'Sciatica',
  category: 'spine-care',
  duration: '7 weeks',
  rating: 5,
  story: 'Sharp pain radiating from my lower back to my leg made sitting and driving extremely painful. After proper assessment, the physiotherapy team initiated spine stabilization exercises and nerve mobilization techniques. The improvement was steady and lasting.',
  achievements: [
    'Radiating leg pain eliminated',
    'Improved spinal stability',
    'Comfortable sitting and walking restored'
  ],
},
{
  id: 16,
  name: 'Meena Sharma',
  age: 58,
  image: 'https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?w=400&h=400&fit=crop',
  problem: 'Shoulder Impingement Syndrome',
  category: 'orthopedic',
  duration: '6 weeks',
  rating: 5,
  story: 'Persistent shoulder pain restricted overhead movements and sleep. The physiotherapy approach focused on pain reduction, posture correction, and rotator cuff strengthening. Over time, movement became smooth and pain-free.',
  achievements: [
    'Shoulder pain resolved',
    'Overhead movement restored',
    'Improved sleep quality'
  ],
},
{
  id: 17,
  name: 'Rohit Malhotra',
  age: 31,
  image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop',
  problem: 'Recurrent Knee Pain (Runner’s Knee)',
  category: 'sports-rehab',
  duration: '5 weeks',
  rating: 5,
  story: 'Knee pain during running forced me to stop training. The physiotherapy team identified muscle imbalances and corrected my biomechanics through strengthening and stretching. I returned to running pain-free.',
  achievements: [
    'Knee pain eliminated',
    'Improved lower-limb alignment',
    'Safe return to running'
  ],
},
{
  id: 18,
  name: 'Bhagwati Devi',
  age: 65,
  image: 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=400&h=400&fit=crop',
  problem: 'Chronic Low Back Pain',
  category: 'geriatric-rehab',
  duration: '7 weeks',
  rating: 5,
  story: 'Long-standing back pain limited my mobility and independence. The therapy program focused on pain management, strengthening, and flexibility exercises suitable for my age. Gradually, movement became easier and pain reduced.',
  achievements: [
    'Pain intensity reduced significantly',
    'Improved mobility and flexibility',
    'Better quality of daily life'
  ],
},
{
  id: 19,
  name: 'Aditya Kulkarni',
  age: 23,
  image: 'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=400&h=400&fit=crop',
  problem: 'Post-Fracture Wrist Stiffness',
  category: 'post-surgery-rehab',
  duration: '4 weeks',
  rating: 5,
  story: 'After fracture healing, my wrist remained stiff and weak. The physiotherapy plan included mobilization, strengthening, and functional training. Gradually, flexibility and strength returned fully.',
  achievements: [
    'Wrist flexibility restored',
    'Grip strength improved',
    'Normal hand function achieved'
  ],
}

];

const CATEGORIES = [
  { id: 'all', label: 'All Patients', icon: '👥' },
  { id: 'orthopedic', label: 'Orthopedic', icon: '🦴' },
  { id: 'sports-rehab', label: 'Sports Rehab', icon: '⚽' },
  { id: 'pain-management', label: 'Pain Management', icon: '🎯' },
  { id: 'neurological', label: 'Neurological', icon: '🧠' },
  { id: 'wellness', label: 'Wellness', icon: '🌟' },
];

const TestimonialCard = ({ testimonial, isDarkMode }) => (
  <div className={`${isDarkMode ? 'bg-gray-800 hover:bg-gray-750' : 'bg-white hover:bg-gray-50'} rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border ${isDarkMode ? 'border-gray-700' : 'border-gray-200'} h-full flex flex-col`}>
    {/* Image */}
    <div className="relative h-70 overflow-hidden">
      <img 
        src={testimonial.image} 
        alt={testimonial.name}
        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
      />
      <div className="absolute inset-0 bg-linear-to-b from-transparent via-transparent to-black/50"></div>
      
      {/* Rating Badge */}
      <div className="absolute top-4 right-4 bg-yellow-400 text-yellow-900 px-3 py-1 rounded-full flex items-center gap-1 font-bold shadow-lg text-sm">
        <Star className="w-4 h-4 fill-current" />
        {testimonial.rating}.0
      </div>

      {/* Duration Badge */}
      <div className="absolute bottom-4 left-4">
        <span className={`px-3 py-1 rounded-full text-xs font-semibold ${isDarkMode ? 'bg-teal-900/80 text-teal-200' : 'bg-teal-600/90 text-white'}`}>
          {testimonial.duration}
        </span>
      </div>
    </div>

    {/* Content */}
    <div className="p-6 flex flex-col grow">
      {/* Name & Age */}
      <h3 className={`text-xl font-bold mb-1 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
        {testimonial.name}
      </h3>
      <p className={`text-sm mb-4 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
        Age {testimonial.age}
      </p>

      {/* Problem Tag */}
      <div className="mb-4">
        <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${isDarkMode ? 'bg-teal-900/40 text-teal-300' : 'bg-teal-100 text-teal-700'}`}>
          {testimonial.problem}
        </span>
      </div>

      {/* Story */}
      <p className={`text-sm leading-relaxed mb-4 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
        {testimonial.story}
      </p>

      {/* Achievements */}
      <div className="mt-auto">
        <h4 className={`font-bold text-sm mb-3 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
          Achievements:
        </h4>
        <div className="space-y-2">
          {testimonial.achievements.map((achievement, idx) => (
            <div key={idx} className="flex items-start gap-2">
              <span className={`flex shrink-0 font-bold text-lg mt-0.5 ${isDarkMode ? 'text-teal-400' : 'text-teal-600'}`}>✓</span>
              <p className={`text-xs ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                {achievement}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
);

const TestimonialsPage = () => {
  const { isDarkMode } = useTheme();
  const [selectedCategory, setSelectedCategory] = useState('all');

  const filteredTestimonials = selectedCategory === 'all' 
    ? TESTIMONIALS_DATA 
    : TESTIMONIALS_DATA.filter(t => t.category === selectedCategory);

  return (
    <div className={`min-h-screen ${isDarkMode ? 'bg-gray-900' : 'bg-gray-50'} py-16 px-4 sm:px-6 lg:px-8`}>
      {/* Header */}
      <div className="max-w-7xl mx-auto mb-12">
        <div className="text-center mb-10">
          <h1 className={`text-4xl sm:text-5xl font-extrabold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
            Patient <span className={isDarkMode ? 'text-teal-400' : 'text-teal-600'}>Success Stories</span>
          </h1>
          <p className={`text-lg max-w-2xl mx-auto ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            Thousands of patients have transformed their lives at Jan Seva. Here are inspiring stories from our community who've reclaimed their health and wellness.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2">
          {CATEGORIES.map(cat => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 py-2 rounded-full font-medium text-sm transition-all duration-300 flex items-center gap-2 ${
                selectedCategory === cat.id
                  ? isDarkMode
                    ? 'bg-teal-600 text-white shadow-lg'
                    : 'bg-teal-600 text-white shadow-lg'
                  : isDarkMode
                    ? 'bg-gray-800 text-gray-300 hover:bg-gray-700 border border-gray-700'
                    : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-300'
              }`}
            >
              <span>{cat.icon}</span>
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* Testimonials Grid */}
      <div className="max-w-7xl mx-auto">
        <div className={`mb-6 text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
          Showing {filteredTestimonials.length} of {TESTIMONIALS_DATA.length} patient stories
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredTestimonials.map(testimonial => (
            <TestimonialCard 
              key={testimonial.id} 
              testimonial={testimonial} 
              isDarkMode={isDarkMode}
            />
          ))}
        </div>

        {filteredTestimonials.length === 0 && (
          <div className={`text-center py-12 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            <p className="text-lg">No testimonials found for this category.</p>
          </div>
        )}
      </div>

      {/* CTA Section */}
      <div className={`max-w-4xl mx-auto mt-20 p-8 md:p-12 rounded-2xl text-center ${isDarkMode ? 'bg-linear-to-r from-teal-900 to-teal-800' : 'bg-linear-to-r from-teal-600 to-teal-700'} text-white`}>
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready for Your Own Success Story?</h2>
        <p className="text-lg mb-8 opacity-90">
          Join thousands of patients who have reclaimed their health, mobility, and quality of life at Jan Seva.
        </p>
        <a
          href="/contact"
          className="inline-block px-8 py-4 rounded-lg font-semibold transition-all duration-300 bg-white text-teal-600 hover:bg-gray-100 hover:shadow-lg"
        >
          Schedule Your Free Consultation
        </a>
      </div>

      {/* Why Choose Us Section */}
      <div className="max-w-7xl mx-auto mt-20">
        <div className={`rounded-2xl p-8 md:p-12 ${isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} border`}>
          <h2 className={`text-3xl font-bold text-center mb-8 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
            Why Choose <span className={isDarkMode ? 'text-teal-400' : 'text-teal-600'}>Jan Seva?</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: '🎯',
                title: 'Personalized Care',
                description: 'Every patient receives a customized treatment plan tailored to their specific condition and goals.'
              },
              {
                icon: '💪',
                title: 'Expert Therapists',
                description: 'Our team consists of highly qualified physiotherapists with years of clinical experience.'
              },
              {
                icon: '✨',
                title: 'Proven Results',
                description: '95% success rate with thousands of patients achieving their recovery goals and beyond.'
              }
            ].map((item, idx) => (
              <div key={idx} className="text-center">
                <div className="text-5xl mb-4">{item.icon}</div>
                <h3 className={`text-xl font-bold mb-3 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                  {item.title}
                </h3>
                <p className={isDarkMode ? 'text-gray-400' : 'text-gray-600'}>
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialsPage;
