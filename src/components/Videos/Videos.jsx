import React from 'react';
import styles from './Videos.module.css';
import { useRef } from 'react';

import video1 from "./videos/video1.mp4";
import video2 from "./videos/video2.mp4";
import video3 from "./videos/video3.mp4";
import video4 from "./videos/video4.mp4";

// 3D Card Component with Mouse Tilt
const TiltCard = ({ children, className = "" }) => {
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    const card = cardRef.current;
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateY = ((x - centerX) / centerX) * 15;
    const rotateX = ((centerY - y) / centerY) * 15;

    card.style.setProperty('--rotateX', `${rotateX}deg`);
    card.style.setProperty('--rotateY', `${rotateY}deg`);
    card.style.setProperty('--glow-opacity', '0.6');
  };

  const handleMouseLeave = () => {
    const card = cardRef.current;
    if (!card) return;

    card.style.setProperty('--rotateX', '0deg');
    card.style.setProperty('--rotateY', '0deg');
    card.style.setProperty('--glow-opacity', '0');
  };

  return (
    <div
      ref={cardRef}
      className={`${styles.hover3d} ${className}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        '--rotateX': '0deg',
        '--rotateY': '0deg',
        '--glow-opacity': '0'
      }}
    >
      {children}
    </div>
  );
};

// Apne video sources yahan daal do (local ya YouTube/any URL)
const videoData = [
  {
    id: 1,
    title: "Video Title 1",
    src: video1, // replace with your video
  },
  {
    id: 2,
    title: "Video Title 2",
    src: video2,
  },
  {
    id: 3,
    title: "Video Title 3",
    src: video3,
  },
  {
    id: 4,
    title: "Video Title 4",
    src: video4,
  },
];

function Videos() {
  return (
    <section className={styles.videosSection}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>Our Videos</h2>

        <div className={styles.videosGrid}>
          {videoData.map((video) => (
            <TiltCard key={video.id} className={styles.videoCard}>
              <div className={styles.videoWrapper}>
                <video
                  className={styles.video}
                  controls
                  poster="" // optional thumbnail
                  preload="metadata"
                >
                  <source src={video.src} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
              {/* <h3 className={styles.videoTitle}>{video.title}</h3> */}
            </TiltCard>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Videos;