import React, { useState } from 'react';
import { Star } from 'lucide-react';

// COMPLETE TESTIMONIALS DATA - All 46 patients
const TESTIMONIALS_DATA = [
  {
    id: 1,
    name: 'Mukesh Kumar',
    age: 32,
    image: '/public/images/mu',
    problem: 'Chronic Lower Back Pain',
    category: 'pain-management',
    duration: '4 weeks',
    rating: 5,
    story: 'After years of suffering from chronic lower back pain due to desk work, I could barely walk without discomfort. The expert team diagnosed my postural issues and designed a personalized rehabilitation program. Within 8 weeks, I was pain-free and learned exercises to prevent recurrence.',
    achievements: ['Pain reduction from 8/10 to 1/10', 'Improved posture and ergonomics', 'Regular exercise routine established'],
  },
  {
    id: 2,
    name: 'Pintu Yogi',
    age: 25,
    image: 'https://via.placeholder.com/400x300?text=Pintu',
    problem: 'ACL Tear & Knee Injury',
    category: 'sports-rehab',
    duration: '8 weeks',
    rating: 5,
    story: 'As a professional athlete, my ACL tear seemed like the end of my career. The sports rehabilitation team provided an intensive program combining electrotherapy, strengthening exercises, and sports-specific training. Not only did I recover fully, but I returned to competitive play stronger than before!',
    achievements: ['Full range of motion restored', 'Return to competitive sports', 'Enhanced injury prevention'],
  },
  {
    id: 3,
    name: 'Gyan Chand Jatolia',
    age: 28,
    image: 'https://via.placeholder.com/400x300?text=Gyan',
    problem: 'Cervical Spondylosis',
    category: 'orthopedic',
    duration: '4 weeks',
    rating: 5,
    story: 'Severe neck pain and constant headaches made my daily life miserable. After diagnosis, the team used traction therapy, manual therapy, and prescribed home exercises. The improvement was remarkable - no more constant headaches and I can turn my neck freely!',
    achievements: ['Neck mobility increased by 80%', 'Headaches completely eliminated', 'Nerve compression significantly reduced'],
  },
  {
    id: 4,
    name: 'Akhtar Husain',
    age: 65,
    image: 'https://via.placeholder.com/400x300?text=Akhtar',
    problem: 'Post-Stroke Rehabilitation',
    category: 'neurological',
    duration: '12 weeks',
    rating: 5,
    story: 'After a mild stroke, I lost mobility in my right side and feared I would never walk normally again. The specialized neurological rehabilitation team worked with me patiently through every step. With intensive therapy, I regained my independence and can now walk without assistance.',
    achievements: ['Regained right side mobility', 'Independent walking restored', 'Confidence and self-esteem rebuilt'],
  },
  {
    id: 5,
    name: 'Bindia Devi',
    age: 52,
    image: 'https://via.placeholder.com/400x300?text=Bindia',
    problem: 'Frozen Shoulder',
    category: 'orthopedic',
    duration: '10 weeks',
    rating: 5,
    story: 'My frozen shoulder made even basic tasks impossible - I could not lift my arm or dress myself. The physiotherapists used heat therapy, manual mobilization, and progressive stretching. Within 10 weeks, I had full range of motion back and could return to playing cricket.',
    achievements: ['Full shoulder mobility restored', 'Pain-free movement achieved', 'Return to sports activities'],
  },
  {
    id: 6,
    name: 'Pushpa Devi',
    age: 70,
    image: 'https://via.placeholder.com/400x300?text=Pushpa',
    problem: 'Rheumatoid Arthritis',
    category: 'pain-management',
    duration: '6 weeks',
    rating: 5,
    story: 'Living with RA meant chronic pain and severely reduced mobility. The team helped me manage my condition through gentle exercises, aquatic therapy, and pain management techniques. Now I am more active than I have been in years!',
    achievements: ['Pain levels significantly reduced', 'Joint mobility substantially improved', 'Energy levels increased dramatically'],
  },
  {
    id: 7,
    name: 'Vijay Shree Soni',
    age: 32,
    image: 'https://via.placeholder.com/400x300?text=Vijay',
    problem: 'Pregnancy-Related Back Pain',
    category: 'others',
    duration: 'ongoing',
    rating: 5,
    story: 'During my pregnancy, severe back pain made daily activities extremely difficult. The pregnancy-safe physiotherapy program was life-changing. With gentle stretches and postural training, my pain reduced significantly. Even after delivery, postpartum exercises helped me regain strength quickly.',
    achievements: ['Pain reduced from 9/10 to 2/10', 'Improved posture during pregnancy', 'Quick postpartum recovery'],
  },
  {
    id: 8,
    name: 'Sitaram Kumawat',
    age: 70,
    image: 'https://via.placeholder.com/400x300?text=Sitaram',
    problem: 'Post-Operative Knee Surgery',
    category: 'orthopedic',
    duration: '8 weeks',
    rating: 5,
    story: 'After knee surgery, I was anxious about my recovery. The post-operative rehabilitation program was comprehensive - starting with basic mobility and progressing to strengthening. The team guided me through each phase carefully. I am now back to jogging and hiking!',
    achievements: ['Surgical site healed optimally', 'Full range of motion achieved', 'Return to jogging and hiking'],
  },
  {
    id: 9,
    name: 'Jhutaram Gurjar',
    age: 68,
    image: 'https://via.placeholder.com/400x300?text=Jhutaram',
    problem: 'Frozen Shoulder',
    category: 'orthopedic',
    duration: '8 weeks',
    rating: 5,
    story: 'Severe shoulder stiffness made basic movements impossible. Through a structured plan including heat therapy and progressive stretching, my shoulder gradually regained movement. Today, I can move my arm freely without pain.',
    achievements: ['Full shoulder mobility restored', 'Pain reduced from severe to zero', 'Independent daily activities resumed'],
  },
  {
    id: 10,
    name: 'Munsi Ji',
    age: 41,
    image: 'https://via.placeholder.com/400x300?text=Munsi',
    problem: 'ACL Reconstruction Rehabilitation',
    category: 'sports-rehab',
    duration: '6 weeks',
    rating: 5,
    story: 'After knee surgery, I was anxious about my recovery and long-term mobility. The post-operative rehabilitation was carefully planned, starting with basic mobility and progressing to strengthening. I regained confidence and returned to an active lifestyle.',
    achievements: ['Surgical site healed optimally', 'Full range of knee motion achieved', 'Return to jogging and hiking'],
  },
  {
    id: 11,
    name: 'Varsha Bajaj',
    age: 32,
    image: 'https://via.placeholder.com/400x300?text=Varsha',
    problem: 'Osteoarthritis of Knee',
    category: 'pain-management',
    duration: '4 weeks',
    rating: 5,
    story: 'Chronic knee pain made walking extremely painful. The team focused on pain relief, strengthening exercises, and lifestyle guidance. Within weeks, my pain reduced significantly and I could walk comfortably.',
    achievements: ['Pain levels reduced significantly', 'Improved knee strength and stability', 'Independent walking restored'],
  },
  {
    id: 12,
    name: 'Kunal Jangid',
    age: 32,
    image: 'https://via.placeholder.com/400x300?text=Kunal',
    problem: 'Lumbar Disc Bulge',
    category: 'pain-management',
    duration: '6 weeks',
    rating: 5,
    story: 'Lower back pain radiating to my leg made sitting unbearable. The physiotherapy team identified a lumbar disc bulge and started focused spine rehabilitation. With traction therapy and core strengthening, my pain reduced drastically.',
    achievements: ['Radiating pain eliminated', 'Core strength significantly improved', 'Return to normal work routine'],
  },
  {
    id: 13,
    name: 'Sukhdev Ram',
    age: 60,
    image: 'https://via.placeholder.com/400x300?text=Sukhdev',
    problem: 'Balance & Gait Disorder',
    category: 'neurological',
    duration: '6 weeks',
    rating: 5,
    story: 'Frequent imbalance and fear of falling limited my independence. The physiotherapy program focused on balance training and strengthening. Over time, my confidence improved and I can now walk independently.',
    achievements: ['Balance and coordination improved', 'Reduced risk of falls', 'Confidence in walking restored'],
  },
  {
    id: 14,
    name: 'Suman Sharma',
    age: 35,
    image: 'https://via.placeholder.com/400x300?text=Suman',
    problem: 'Tennis Elbow',
    category: 'orthopedic',
    duration: '3 weeks',
    rating: 5,
    story: 'Persistent elbow pain affected my work and daily activities. The physiotherapy team diagnosed tennis elbow and started targeted treatment including electrotherapy and strengthening. The pain gradually subsided.',
    achievements: ['Elbow pain reduced significantly', 'Grip strength restored', 'Normal work activities resumed'],
  },
  {
    id: 15,
    name: 'Madhusudhan Sharma',
    age: 60,
    image: 'https://via.placeholder.com/400x300?text=Madhusudhan',
    problem: 'Plantar Fasciitis',
    category: 'pain-management',
    duration: '5 weeks',
    rating: 5,
    story: 'Heel pain made standing and walking extremely uncomfortable. The team focused on pain relief, soft tissue release, and foot strengthening. Within a few weeks, walking became pain-free again.',
    achievements: ['Heel pain eliminated', 'Improved foot flexibility', 'Comfortable walking restored'],
  },
  {
    id: 16,
    name: 'Test Patient',
    age: 27,
    image: 'https://via.placeholder.com/400x300?text=Test',
    problem: 'Ankle Ligament Sprain',
    category: 'sports-rehab',
    duration: '3 weeks',
    rating: 5,
    story: 'A sports-related ankle injury restricted my movement and balance. The rehabilitation program included swelling control and proprioception training. My ankle regained full stability and strength.',
    achievements: ['Swelling and pain resolved', 'Ankle stability restored', 'Safe return to sports'],
  },
  {
    id: 17,
    name: 'Ashok Prajapat',
    age: 36,
    image: 'https://via.placeholder.com/400x300?text=Ashok',
    problem: 'Slip Disc (Lumbar Disc Herniation)',
    category: 'pain-management',
    duration: '8 weeks',
    rating: 5,
    story: 'Severe lower back pain with leg radiation made movement extremely painful. The physiotherapy program focused on pain relief and core stabilization. The radiating pain reduced and normal movement returned without surgery.',
    achievements: ['Radiating leg pain eliminated', 'Core and spinal stability improved', 'Return to pain-free daily activities'],
  },
  {
    id: 18,
    name: 'Munni Devi',
    age: 38,
    image: 'https://via.placeholder.com/400x300?text=Munni',
    problem: 'Sciatica',
    category: 'pain-management',
    duration: '4 weeks',
    rating: 5,
    story: 'Sharp pain radiating from my lower back to my leg made sitting and driving extremely painful. The physiotherapy team initiated spine stabilization exercises and nerve mobilization techniques. The improvement was steady and lasting.',
    achievements: ['Radiating leg pain eliminated', 'Improved spinal stability', 'Comfortable sitting and walking restored'],
  },
  {
    id: 19,
    name: 'Kailash Chand Sharma',
    age: 57,
    image: 'https://via.placeholder.com/400x300?text=Kailash',
    problem: 'Shoulder Impingement Syndrome',
    category: 'orthopedic',
    duration: '3 weeks',
    rating: 5,
    story: 'Persistent shoulder pain restricted overhead movements and sleep. The physiotherapy approach focused on pain reduction and rotator cuff strengthening. Over time, movement became smooth and pain-free.',
    achievements: ['Shoulder pain resolved', 'Overhead movement restored', 'Improved sleep quality'],
  },
  {
    id: 20,
    name: 'Narendra Singh',
    age: 19,
    image: 'https://via.placeholder.com/400x300?text=Narendra',
    problem: 'Recurrent Knee Pain (Runner\'s Knee)',
    category: 'sports-rehab',
    duration: '1 week',
    rating: 5,
    story: 'Knee pain during running forced me to stop training. The physiotherapy team corrected my biomechanics through strengthening and stretching. I returned to running pain-free.',
    achievements: ['Knee pain eliminated', 'Improved lower-limb alignment', 'Safe return to running'],
  },
  {
    id: 21,
    name: 'Tabbasum Bano',
    age: 42,
    image: 'https://via.placeholder.com/400x300?text=Tabbasum',
    problem: 'Chronic Low Back Pain',
    category: 'pain-management',
    duration: '4 weeks',
    rating: 5,
    story: 'Long-standing back pain limited my mobility and independence. The therapy program focused on pain management, strengthening, and flexibility exercises. Gradually, movement became easier and pain reduced.',
    achievements: ['Pain intensity reduced significantly', 'Improved mobility and flexibility', 'Better quality of daily life'],
  },
  {
    id: 22,
    name: 'Pawan Khetan',
    age: 55,
    image: 'https://via.placeholder.com/400x300?text=Pawan',
    problem: 'Post-Stroke Shoulder Pain',
    category: 'neurological',
    duration: 'ongoing',
    rating: 5,
    story: 'After a stroke, severe shoulder pain limited my arm movement and daily function. The physiotherapists provided gentle mobilization, pain management techniques, and functional training. Gradually, movement improved and pain reduced.',
    achievements: ['Shoulder pain significantly reduced', 'Improved arm mobility', 'Enhanced daily independence'],
  },
  {
    id: 23,
    name: 'Pawan Saini',
    age: 33,
    image: 'https://via.placeholder.com/400x300?text=Pawan2',
    problem: 'Post-Fracture Wrist Stiffness',
    category: 'orthopedic',
    duration: '4 weeks',
    rating: 5,
    story: 'After fracture healing, my wrist remained stiff and weak. The physiotherapy plan included mobilization, strengthening, and functional training. Gradually, flexibility and strength returned fully.',
    achievements: ['Wrist flexibility restored', 'Grip strength improved', 'Normal hand function achieved'],
  },
  {
    id: 24,
    name: 'Umardeen',
    age: 64,
    image: 'https://via.placeholder.com/400x300?text=Umardeen',
    problem: 'Parkinson\'s Disease – Mobility Issues',
    category: 'neurological',
    duration: 'ongoing',
    rating: 5,
    story: 'Progressive stiffness and slow movements were affecting my independence. The neuro-physiotherapy program focused on balance training, gait correction, and functional movement practice. With regular therapy, my walking speed and confidence improved significantly.',
    achievements: ['Improved walking speed and coordination', 'Better balance and posture control', 'Increased independence in daily activities'],
  },
  {
    id: 25,
    name: 'Munni Devi (Bhima)',
    age: 35,
    image: 'https://via.placeholder.com/400x300?text=Munni2',
    problem: 'Pelvic Floor Dysfunction',
    category: 'others',
    duration: '6 weeks',
    rating: 5,
    story: 'I experienced discomfort and bladder control issues after childbirth. The physiotherapy team provided pelvic floor strengthening and breathing techniques in a very supportive environment. The improvement was gradual but life-changing.',
    achievements: ['Pelvic muscle strength restored', 'Bladder control improved', 'Improved confidence and comfort'],
  },
  {
    id: 26,
    name: 'Bhagirath Ram',
    age: 60,
    image: 'https://via.placeholder.com/400x300?text=Bhagirath',
    problem: 'Chronic Obstructive Pulmonary Disease (COPD)',
    category: 'others',
    duration: '6 weeks',
    rating: 5,
    story: 'Shortness of breath made even small activities exhausting. Pulmonary physiotherapy helped me learn breathing techniques, endurance training, and energy conservation methods. I can now walk longer distances comfortably.',
    achievements: ['Improved breathing efficiency', 'Increased exercise tolerance', 'Reduced breathlessness during activities'],
  },
  {
    id: 27,
    name: 'Manguram Jaat',
    age: 61,
    image: 'https://via.placeholder.com/400x300?text=Manguram',
    problem: 'Postural Kyphosis',
    category: 'pain-management',
    duration: '5 weeks',
    rating: 5,
    story: 'Long hours of desk work caused rounded shoulders and upper back pain. Physiotherapy focused on posture correction, strengthening weak muscles, and ergonomic education. I now feel taller, stronger, and pain-free.',
    achievements: ['Corrected spinal posture', 'Upper back pain eliminated', 'Improved work ergonomics'],
  },
  {
    id: 28,
    name: 'Bhawri Devi',
    age: 55,
    image: 'https://via.placeholder.com/400x300?text=Bhawri',
    problem: 'Shoulder Post Rotator Cuff Surgery',
    category: 'orthopedic',
    duration: '6 weeks',
    rating: 5,
    story: 'Post-surgery stiffness and weakness made me anxious about recovery. The rehabilitation program progressed step-by-step from mobility to strengthening. Today, my shoulder feels stable and strong.',
    achievements: ['Full shoulder range regained', 'Strength restored safely', 'Return to normal daily activities'],
  },
  {
    id: 29,
    name: 'Nisha Jain',
    age: 36,
    image: 'https://via.placeholder.com/400x300?text=Nisha',
    problem: 'Migraine & Tension Headaches',
    category: 'pain-management',
    duration: '4 weeks',
    rating: 5,
    story: 'Frequent headaches affected my productivity and sleep. Physiotherapy identified neck tightness and posture-related triggers. Manual therapy and relaxation exercises reduced both frequency and intensity.',
    achievements: ['Reduced headache frequency', 'Neck muscle relaxation achieved', 'Improved sleep quality'],
  },
  {
    id: 30,
    name: 'Deepak Yadav',
    age: 21,
    image: 'https://via.placeholder.com/400x300?text=Deepak',
    problem: 'Sports-Related Hamstring Strain',
    category: 'sports-rehab',
    duration: '3 weeks',
    rating: 5,
    story: 'A sudden hamstring injury stopped my football training. The rehab program included pain control, flexibility work, and gradual strengthening. I returned to sports safely without fear.',
    achievements: ['Muscle flexibility restored', 'Pain-free sprinting achieved', 'Safe return to competitive sports'],
  },
  {
    id: 31,
    name: 'Kamla Devi',
    age: 72,
    image: 'https://via.placeholder.com/400x300?text=Kamla',
    problem: 'Osteoporosis – Fall Prevention',
    category: 'others',
    duration: '6 weeks',
    rating: 5,
    story: 'Fear of falling made me avoid movement. Physiotherapy focused on balance training, gentle strengthening, and confidence building. I feel safer and more active now.',
    achievements: ['Improved balance and stability', 'Reduced fall risk', 'Increased movement confidence'],
  },
  {
    id: 32,
    name: 'Ritu Malviya',
    age: 33,
    image: 'https://via.placeholder.com/400x300?text=Ritu',
    problem: 'Work-From-Home Neck & Shoulder Pain',
    category: 'others',
    duration: '4 weeks',
    rating: 5,
    story: 'Continuous laptop work caused stiffness and shoulder pain. Physiotherapy corrected my posture, improved flexibility, and taught desk exercises. Working long hours is now comfortable.',
    achievements: ['Neck and shoulder pain relieved', 'Posture awareness improved', 'Comfortable long-duration work'],
  },
  {
    id: 33,
    name: 'Arjun Saini',
    age: 14,
    image: 'https://via.placeholder.com/400x300?text=Arjun',
    problem: 'Flat Foot (Pediatric)',
    category: 'others',
    duration: '8 weeks',
    rating: 5,
    story: 'Foot pain and imbalance affected my sports activities. Pediatric physiotherapy focused on foot strengthening, balance drills, and corrective exercises. My walking pattern improved greatly.',
    achievements: ['Improved foot arch support', 'Better balance and posture', 'Pain-free sports participation'],
  },
  {
    id: 34,
    name: 'Prakash Soni',
    age: 48,
    image: 'https://via.placeholder.com/400x300?text=Prakash',
    problem: 'Thoracic Back Pain',
    category: 'pain-management',
    duration: '5 weeks',
    rating: 5,
    story: 'Mid-back pain caused stiffness and discomfort while sitting and sleeping. Physiotherapy focused on spinal mobility, breathing mechanics, and posture correction. Gradually, stiffness reduced and movement became comfortable.',
    achievements: ['Thoracic mobility improved', 'Pain-free sitting achieved', 'Improved posture awareness'],
  },
  {
    id: 35,
    name: 'Neha Khandelwal',
    age: 35,
    image: 'https://via.placeholder.com/400x300?text=Neha',
    problem: 'Diastasis Recti',
    category: 'others',
    duration: '8 weeks',
    rating: 5,
    story: 'Post-pregnancy abdominal weakness affected my posture and confidence. Physiotherapy included core stabilization and breathing control exercises. The results were gradual but effective.',
    achievements: ['Abdominal muscle separation reduced', 'Core strength improved', 'Better posture and confidence'],
  },
  {
    id: 36,
    name: 'Iqbal Khan',
    age: 59,
    image: 'https://via.placeholder.com/400x300?text=Iqbal',
    problem: 'Post-COVID Breathlessness',
    category: 'others',
    duration: '6 weeks',
    rating: 5,
    story: 'After recovering from COVID, breathlessness and fatigue persisted. Pulmonary physiotherapy helped rebuild my lung capacity through breathing exercises and endurance training.',
    achievements: ['Improved lung capacity', 'Reduced fatigue levels', 'Return to daily activities'],
  },
  {
    id: 37,
    name: 'Rohini Sharma',
    age: 42,
    image: 'https://via.placeholder.com/400x300?text=Rohini',
    problem: 'Carpal Tunnel Syndrome',
    category: 'orthopedic',
    duration: '4 weeks',
    rating: 5,
    story: 'Hand numbness and wrist pain affected my office work. Physiotherapy included nerve gliding, wrist strengthening, and ergonomic advice. Relief came faster than expected.',
    achievements: ['Hand numbness resolved', 'Grip strength improved', 'Pain-free typing restored'],
  },
  {
    id: 38,
    name: 'Manoj Yadav',
    age: 34,
    image: 'https://via.placeholder.com/400x300?text=Manoj',
    problem: 'Groin Muscle Strain',
    category: 'sports-rehab',
    duration: '3 weeks',
    rating: 5,
    story: 'Sudden groin pain during sports limited movement. Rehabilitation focused on flexibility, controlled strengthening, and gradual sports re-entry.',
    achievements: ['Pain-free hip movement', 'Muscle strength restored', 'Safe return to sports'],
  },
  {
    id: 39,
    name: 'Shanti Bai',
    age: 74,
    image: 'https://via.placeholder.com/400x300?text=Shanti',
    problem: 'Age-Related Muscle Weakness',
    category: 'others',
    duration: '6 weeks',
    rating: 5,
    story: 'Weakness made daily tasks tiring. Physiotherapy focused on gentle strengthening, balance, and endurance training suitable for my age.',
    achievements: ['Improved muscle strength', 'Better endurance', 'Increased independence'],
  },
  {
    id: 40,
    name: 'Sahil Gupta',
    age: 26,
    image: 'https://via.placeholder.com/400x300?text=Sahil',
    problem: 'Postural Neck Pain',
    category: 'others',
    duration: '4 weeks',
    rating: 5,
    story: 'Continuous mobile and laptop usage caused neck stiffness. Physiotherapy corrected posture and introduced mobility exercises.',
    achievements: ['Neck stiffness relieved', 'Improved posture habits', 'Reduced screen-related discomfort'],
  },
  {
    id: 41,
    name: 'Kiran Patil',
    age: 45,
    image: 'https://via.placeholder.com/400x300?text=Kiran',
    problem: 'Shoulder Adhesive Capsulitis (Early Stage)',
    category: 'orthopedic',
    duration: '6 weeks',
    rating: 5,
    story: 'Early shoulder stiffness was identified before severe restriction. Timely physiotherapy prevented progression and restored mobility.',
    achievements: ['Shoulder stiffness reversed', 'Pain controlled early', 'Normal range maintained'],
  },
  {
    id: 42,
    name: 'Vikas Malhotra',
    age: 39,
    image: 'https://via.placeholder.com/400x300?text=Vikas',
    problem: 'Lumbar Muscle Spasm',
    category: 'pain-management',
    duration: '3 weeks',
    rating: 5,
    story: 'Sudden lower back spasm made movement difficult. Manual therapy and relaxation techniques provided fast relief.',
    achievements: ['Muscle spasm released', 'Pain-free bending achieved', 'Normal movement restored'],
  },
  {
    id: 43,
    name: 'Aarti Mishra',
    age: 31,
    image: 'https://via.placeholder.com/400x300?text=Aarti',
    problem: 'Pelvic Girdle Pain (Pregnancy)',
    category: 'others',
    duration: 'ongoing',
    rating: 5,
    story: 'Pelvic pain during pregnancy affected walking and sleep. Pregnancy-safe physiotherapy helped manage pain and improve mobility.',
    achievements: ['Pelvic pain reduced', 'Improved walking comfort', 'Better sleep quality'],
  },
  {
    id: 44,
    name: 'Dinesh Verma',
    age: 57,
    image: 'https://via.placeholder.com/400x300?text=Dinesh',
    problem: 'Peripheral Neuropathy',
    category: 'neurological',
    duration: '8 weeks',
    rating: 5,
    story: 'Tingling and weakness in feet affected balance. Physiotherapy focused on nerve stimulation, balance drills, and strengthening.',
    achievements: ['Improved foot sensation', 'Better balance control', 'Reduced fall risk'],
  },
  {
    id: 45,
    name: 'Riya Meena',
    age: 11,
    image: 'https://via.placeholder.com/400x300?text=Riya',
    problem: 'Knock Knees (Pediatric)',
    category: 'others',
    duration: '10 weeks',
    rating: 5,
    story: 'Knee alignment affected walking and running. Pediatric physiotherapy focused on corrective exercises and posture training.',
    achievements: ['Improved knee alignment', 'Better walking pattern', 'Enhanced lower-limb strength'],
  },
  {
    id: 46,
    name: 'Ravindra Lal',
    age: 54,
    image: 'https://via.placeholder.com/400x300?text=Ravindra',
    problem: 'Spinal Compression Fracture (Post-Trauma)',
    category: 'pain-management',
    duration: '12 weeks',
    rating: 5,
    story: 'After a fall, I was diagnosed with a spinal compression fracture and had severe back pain with fear of movement. Once medically stable, physiotherapy began with pain management, posture support, and gradual mobility exercises. The team focused on safe strengthening and spinal protection techniques. Over time, my confidence improved and daily movements became comfortable again.',
    achievements: ['Pain levels reduced significantly', 'Safe spinal mobility restored', 'Improved posture and confidence in movement'],
  },
];

const CATEGORIES = [
  { id: 'all', label: 'All Patients', icon: '👥' },
  { id: 'orthopedic', label: 'Orthopedic', icon: '🦴' },
  { id: 'sports-rehab', label: 'Sports Rehab', icon: '⚽' },
  { id: 'pain-management', label: 'Pain Management', icon: '🎯' },
  { id: 'neurological', label: 'Neurological', icon: '🧠' },
  { id: 'others', label: 'Others', icon: '🌟' },
];

const TestimonialCard = ({ testimonial, isDarkMode }) => (
  <div className={`${isDarkMode ? 'bg-gray-800' : 'bg-white'} rounded-2xl shadow-lg transition-all duration-300 overflow-hidden border ${isDarkMode ? 'border-gray-700' : 'border-gray-200'} h-full flex flex-col group`}>
    <div className="relative aspect-square sm:aspect-video overflow-hidden cursor-pointer">
      <img 
        src={testimonial.image} 
        alt={testimonial.name}
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/50 group-hover:to-black/70 transition-colors duration-300"></div>
      
      <div className="absolute top-4 right-4 bg-yellow-400 text-yellow-900 px-3 py-1 rounded-full flex items-center gap-1 font-bold shadow-lg text-sm">
        <Star className="w-4 h-4 fill-current" />
        {testimonial.rating}.0
      </div>

      <div className="absolute bottom-4 left-4">
        <span className={`px-3 py-1 rounded-full text-xs font-semibold ${isDarkMode ? 'bg-teal-900/80 text-teal-200' : 'bg-teal-600/90 text-white'}`}>
          {testimonial.duration}
        </span>
      </div>
    </div>

    <div className="p-5 sm:p-6 flex flex-col grow">
      <h3 className={`text-xl font-bold mb-1 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
        {testimonial.name}
      </h3>
      <p className={`text-sm mb-4 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
        Age {testimonial.age}
      </p>

      <div className="mb-4">
        <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${isDarkMode ? 'bg-teal-900/40 text-teal-300' : 'bg-teal-100 text-teal-700'}`}>
          {testimonial.problem}
        </span>
      </div>

      <p className={`text-sm leading-relaxed mb-4 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
        {testimonial.story}
      </p>

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
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('all');

  const filteredTestimonials = selectedCategory === 'all' 
    ? TESTIMONIALS_DATA 
    : TESTIMONIALS_DATA.filter(t => t.category === selectedCategory);

  return (
    <div className={`min-h-screen ${isDarkMode ? 'bg-gray-900' : 'bg-gray-50'} py-16 px-4 sm:px-6 lg:px-8`}>
      <div className="max-w-7xl mx-auto mb-12">
        <div className="text-center mb-10">
          <h1 className={`text-4xl sm:text-5xl font-extrabold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
            Patient <span className={isDarkMode ? 'text-teal-400' : 'text-teal-600'}>Success Stories</span>
          </h1>
          <p className={`text-lg max-w-2xl mx-auto ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            Thousands of patients have transformed their lives. Here are inspiring stories from our community who have reclaimed their health and wellness.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-2">
          {CATEGORIES.map(cat => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 py-2 rounded-full font-medium text-sm transition-all duration-300 flex items-center gap-2 ${
                selectedCategory === cat.id
                  ? 'bg-teal-600 text-white shadow-lg'
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

      <div className={`max-w-4xl mx-auto mt-20 p-8 md:p-12 rounded-2xl text-center ${isDarkMode ? 'bg-gradient-to-r from-teal-900 to-teal-800' : 'bg-gradient-to-r from-teal-600 to-teal-700'} text-white`}>
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready for Your Own Success Story?</h2>
        <p className="text-lg mb-8 opacity-90">
          Join thousands of patients who have reclaimed their health, mobility, and quality of life.
        </p>
        <a
          href="/contact"
          className="inline-block px-8 py-4 rounded-lg font-semibold transition-all duration-300 bg-white text-teal-600 hover:bg-gray-100 hover:shadow-lg"
        >
          Schedule Your Free Consultation
        </a>
      </div>

      <div className="max-w-7xl mx-auto mt-20">
        <div className={`rounded-2xl p-8 md:p-12 ${isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} border`}>
          <h2 className={`text-3xl font-bold text-center mb-8 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
            Why Choose <span className={isDarkMode ? 'text-teal-400' : 'text-teal-600'}>Us?</span>
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