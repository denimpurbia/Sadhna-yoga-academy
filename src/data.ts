import { url } from "inspector/promises";
import { StatItem, AwardItem, GalleryItem, TestimonialItem } from "./types";
import { title } from "process";

export const STATS_DATA: StatItem[] = [
  { id: "stat-1", value: "500+", label: "Lives Transformed" },
  { id: "stat-2", value: "20+", label: "Retreats Conducted" },
  { id: "stat-3", value: "10+", label: "Years Experience" },
  { id: "stat-4", value: "5", label: "Countries Reached" }
];

export const AWARDS_DATA: AwardItem[] = [
  {
    id: "award-1",
    title: "WORLD RECORD – MAD LIST",
    organization: "Vajrasana Yoga Hold 30 Minutes 30 Seconds",
    year: "2024",
    description: "Recognized for exceptional endurance and discipline by successfully holding Vajrasana Yoga Pose continuously for 30 minutes and 30 seconds, earning a prestigious world record achievement."
  },
  {
    id: "award-2",
    title: "MAHKUM WORLD RECORD – 2023",
    organization: "1001 Deep Mahkum Challenge",
    year: "2023",
    description: "Official World Record Holder for achieving the 1001 Deep Mahkum milestone, showcasing extraordinary dedication, perseverance, and commitment to excellence."
  },
  {
    id: "award-3",
    title: "PROFESSIONAL QUALIFICATIONS",
    organization: "Yoga & Wellness Specialist ",
    year: "2022",
    description: "• PG Diploma in Yoga • Diploma in Diet & Nutrition • M.A. Physical Education  "
  },
  {
    id: "award-4",
    title: "Certified Sports Coach",
    organization: "NIS PATIALA, PUNJAB",
    year: "2026",
    description: "Professionally trained and certified coach from the National Institute of Sports (NIS), Patiala, one of India's leading sports education institutions."
  }
];

export const GALLERY_DATA: GalleryItem[] = [
  {
    id: "gallery-1",
    url: "self yoga/gallery1.jpg",
    title: "Guided wellness sessions with international yoga practitioners in Udaipur.",
    category: "International Yoga Retreat"
  },
  {
    id: "gallery-2",
    url: "self yoga/gallery2.jpeg",
    title: "Celebrating excellence, awards, and student achievements in yoga.",
    category: "Yoga Championship"
  },
  {
    id: "gallery-3",
    url: "self yoga/gallery3.jpg",
    title: "Group yoga training focused on balance, flexibility, and mindfulness.",
    category: "Outdoor Yoga Workshop"
  },
  {
    id: "gallery-4",
    url: "self yoga/gallery4.jpg",
    title: "Promoting health, wellness, and yoga among people of all ages.",
    category: "Community Yoga Awareness Program"
  },
  {
    id: "gallery-5",
    url: "self yoga/gallery5.jpeg",
    title: "Honoring dedication, learning, and excellence in yoga education.",
    category: "Recognition & Certification Ceremony"
  },
  {
    id: "gallery-6",
    url: "self yoga/gallery6.jpg",
    title: "Large-scale public yoga sessions inspiring healthy living and unity.",
    category: "International Day of Yoga Celebration"
  },
  {
    id: "gallery-7",
    url: "self yoga/gallery7.jpg",
    title: "Practicing yoga in peaceful natural surroundings, connecting body and mind.",
    category: "Heritage Yoga Session"
  },
  {
    id: "gallery-8",
    url: "self yoga/gallery8.jpg",
    title: "Leading hundreds of participants in a large-scale sunrise yoga celebration.",
    category: "Surya Namaskar Mega Event"
  },
  {
    id: "gallery-9",
    url: "self yoga/gallery9.jpeg",
    title: "Group yoga sessions focused on strength, flexibility, and mindfulness.",
    category: "Outdoor Wellness Training"
  },
  {
    id: "gallery-10",
    url: "self yoga/gallery10.jpg",
    title: "Finding inner peace through meditation amidst waterfalls and natural beauty.",
    category: "Meditation in Nature"
  },
  {
    id: "gallery-11",
    url: "self yoga/gallery11.jpeg",
    title: "Successfully completed professional coaching certification from Netaji Subhas National Institute of Sports (NIS), Patiala, Punjab.",
    category: "National Institute of Sports Certification"
  },
  {
    id: "gallery-12",
    url: "self yoga/gallery12.jpeg",
    title: "Inspiring communities through large outdoor yoga and wellness initiatives.",
    category: "Mass Yoga Awareness Program"
  },
  {
    id: "gallery-13",
    url: "self yoga/gallery13.jpeg",
    title: "Celebrating unity, wellness, and conscious living through the power of yoga.",
    category: "INTERNATIONAL YOGA DAY — 2025"
  },
  {
    id: "gallery-14",
    url: "self yoga/gallery14.jpeg",
    title: "Advanced partner yoga showcasing balance, coordination, and connection.",
    category: "Harmony in Motion "
  },
   {
    id: "gallery-15",
    url: "self yoga/gallery15.jpeg",
    title: "Celebrating dedication and excellence in advanced yoga postures.",
    category: "Peak Asana Mastery"
  },
];

export const TESTIMONIALS_DATA: TestimonialItem[] = [
  {
    id: "test-1",
    name: "VINOD GATTANI",
    role: "MEDICAL STAFF MEMBER",
    videoThumbUrl: "thumbnail/review1.png",
    videoEmbedUrl: "review/review1.mp4", // Standard placeholder link or a beautiful soothing video
    rating: 5,
    duration: "2:30",
    quote: "disease Saika pain three day, 90% relief.It is not about golden fittings but about pure, uninterrupted connection with natural rhythms.",
  },
  {
    id: "test-2",
    name: "Hardi bhat",
    role: "Wellness Consultant",
    videoThumbUrl: "thumbnail/review2.png",
    videoEmbedUrl: "review/review2.mp4",
    duration: "3:15",
     rating: 5,
    quote: "The retreats completely redefine luxury. It is not about golden fittings but about pure, uninterrupted connection with natural rhythms.",
  },
  {
    id: "test-3",
    name: "Sonal jani",
    role: "bussinesswoman",
    videoThumbUrl: "thumbnail/review3.png",
    videoEmbedUrl: "review/review3.mp4",
    duration: "2:45",
    rating: 5,
    quote: "I learned how to fully ground myself. The premium posture workshops are incredible and deeply scientific in their anatomical details.",
  },
  {
    id: "test-4",
    name: "priti patel",
    role: "Housewife & Mother",
    videoThumbUrl: "thumbnail/review4.png",
    videoEmbedUrl: "review/review4.mp4",
    duration: "2:30",
    rating: 5,
    quote: "wonderful experience, the personalized attention and holistic approach to wellness truly sets this academy apart from any other I've encountered.",
  },
   {
    id: "test-5",
    name: "Vinita Katani",
    role: "Housewife & Mother",
    videoThumbUrl: "thumbnail/review5.png",
    videoEmbedUrl: "review/review5.mp4",
    duration: "2:30",
    rating: 5,
    quote: "Knee pain back pain long-term relief three days, 90% .The mental clarity and physical openness achieved here is unmatched in conventional wellness academies.",
  },
  {
    id: "test-6",
    name: "Manish Dave",
    role: "businessman",
    videoThumbUrl: "thumbnail/review6.png",
    videoEmbedUrl: "review/review6.mp4",
    duration: "2:30",
    rating: 5,
    quote: "The mental clarity and physical openness achieved here is unmatched in conventional wellness academies.",
  },
  {
    id: "test-7",
    name: "Naina Dave",
    role: "Housewife and Ricky  expert",
    videoThumbUrl: "thumbnail/review7.png",
    videoEmbedUrl: "review/review7.mp4",
    duration: "2:30",
    rating: 5,
    quote: "The stress relief and mental clarity I experienced here is unparalleled. The personalized approach to wellness truly sets this academy apart from any other I've encountered.",
    
  },
  {
    id: "test-8",
    name: "chandrika",
    role: "hotel industry professional",
    videoThumbUrl: "thumbnail/review8.png",
    videoEmbedUrl: "review/review8.mp4",
    duration: "2:30",
    rating: 5,
    quote: "The mental clarity and physical openness achieved here is unmatched in conventional wellness academies.",
  }
];

export const BIO_DATA = {
  name: "SHUBHAM PURBIA",
  title: "Namaste, I’m Shubham",
  aboutText: "For years, I have dedicated my life to the practice, teaching, and promotion of yoga, physical wellness, and holistic health. My journey is built upon discipline, continuous learning, and a passion for helping individuals achieve balance in mind, body, and spirit.",
  extendedText: "My academic qualifications include a PG Diploma in Yoga, Diploma in Diet & Nutrition, and M.A. in Physical Education, providing a strong foundation in yoga science, fitness, nutrition, and wellness. I am also a Certified Coach from NIS Patiala, Punjab, one of India's most respected sports coaching institutions.Through Sadhna Yoga Academy, my mission is to guide individuals toward healthier lifestyles through yoga, meditation, breathwork, fitness training, and mindful living. Whether you are a beginner or an experienced practitioner, my goal is to help you unlock your full potential and experience lasting physical, mental, and spiritual well-being."
};
