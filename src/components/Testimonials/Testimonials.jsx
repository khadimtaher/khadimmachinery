import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

// testimonials Profiles picture
import styles from "./Testimonials.module.css";
import dp1 from "../../Images/testimonialDp/dp1.jpg";
import dp2 from "../../Images/testimonialDp/dp2.jpg";
import dp3 from "../../Images/testimonialDp/dp3.jpg";
import dp4 from "../../Images/testimonialDp/dp4.jpg";
import dp5 from "../../Images/testimonialDp/dp5.jpg";
import dp6 from "../../Images/testimonialDp/dp6.jpg";
import dp7 from "../../Images/testimonialDp/dp7.jpg";




const testimonials = [
  {
    name: "Rahul Verma",
    feedback:
      "Excellent and quick service! My submersible pump was fixed the same day. Very satisfied with the professionalism.",
    image: dp1,
    rating: 5,
  },
  {
    name: "Amit Sharma",
    feedback:
      "They repaired our Kirloskar generator used in our factory. Great workmanship and honest pricing!",
    image: dp2,
    rating: 4,
  },
  {
    name: "Imran Shaikh",
    feedback:
      "Best workshop for motor rewinding and pipe threading. Highly reliable and experienced staff.",
    image: dp3,
    rating: 5,
  },
 
  {
    name: "Arjun Patil",
    feedback:
      "Their dam project maintenance support is top-class. Truly professionals in mechanical services.",
    image: dp4,
    rating: 5,
  },
  {
    name: "Deepak Joshi",
    feedback:
      "We contacted them for engine repair of our Maindra setup — excellent work and quick turnaround!",
    image: dp5,
    rating: 5,
  },
  {
    name: "Farhan Qureshi",
    feedback:
      "I’ve been taking generator service from them for 3 years now. Always on time and value for money.",
    image: dp1,
    rating: 4,
  },
  {
    name: "Sneha Patkar",
    feedback:
      "Professional service with friendly communication. My workshop equipment runs perfectly after their repair.",
    image: dp7,
    rating: 5,
  },
   {
    name: "Priya Deshmukh",
    feedback:
      "Superb experience! They maintain my farm motor regularly — never faced any issues.",
    image: dp6,
    rating: 4,
  },
];

const Testimonials = () => {
  return (
    <section className={styles.testimonialsSection}>
      <h2>What Our Clients Say</h2>
      <p className={styles.subtext}>
        Trusted by industries, farmers, and dam projects across regions.
      </p>

      <Swiper
        modules={[Autoplay, Pagination]}
        spaceBetween={30}
        slidesPerView={1}
        pagination={{ clickable: true }}
        autoplay={{ delay: 3500, disableOnInteraction: false }}
        breakpoints={{
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        className={styles.testimonialSwiper}
      >
        {testimonials.map((t, index) => (
          <SwiperSlide key={index}>
            <div className={styles.card}>
              <div className={styles.imageBox}>
                <img src={t.image} alt={t.name} />
              </div>
              <h4>{t.name}</h4>
              <p className={styles.feedback}>"{t.feedback}"</p>
              <div className={styles.rating}>
                {"★".repeat(t.rating)}
                {"☆".repeat(5 - t.rating)}
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Testimonials;
