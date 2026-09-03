import React, { useRef, useState, useEffect } from 'react';
import styles from './HeroParallax.module.scss';

export interface HeroParallaxProps {
  headline: string;
  subHeadline?: string;
  ctaText: string;
  imageUrl: string;
}

const HeroParallax: React.FC<HeroParallaxProps> = ({
  headline,
  subHeadline,
  ctaText,
  imageUrl,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry && entry.isIntersecting && containerRef.current) {
          const rect = containerRef.current.getBoundingClientRect();
          // offset value ranges from 0 to 1 as element enters viewport
          const progress = 1 - rect.top / window.innerHeight;
          setOffset(progress * 30); // 30px max translate
        }
      },
      { threshold: [0, 0.5, 1] }
    );
    if (containerRef.current) {
      observer.observe(containerRef.current);
    }
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={containerRef}
      className={styles.hero}
      style={{
        backgroundImage: `url(${imageUrl})`,
        transform: `translateY(${offset}px)`
      }}
    >
      <img
        src={imageUrl}
        alt="hero background"
        loading="lazy"
        style={{ display: 'none' }}
      />
      <div className={styles.overlay} />
      <div className={styles.content}>
        <h1 className={styles.headline}>{headline}</h1>
        {subHeadline && <h2 className={styles.subHeadline}>{subHeadline}</h2>}
        <button className={styles.cta}>{ctaText}</button>
      </div>
    </section>
  );
};

export default HeroParallax;
