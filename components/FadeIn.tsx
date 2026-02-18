import React, { useRef, useEffect, useState } from 'react';

interface Props {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
  fullWidth?: boolean;
}

const FadeIn: React.FC<Props> = ({ 
  children, 
  className = '', 
  delay = 0, 
  direction = 'up',
  fullWidth = false
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (domRef.current) observer.unobserve(domRef.current);
        }
      });
    }, { threshold: 0.1 });

    if (domRef.current) observer.observe(domRef.current);

    return () => {
      if (domRef.current) observer.unobserve(domRef.current);
    };
  }, []);

  const getTransform = () => {
    if (isVisible) return 'translate(0, 0)';
    switch (direction) {
      case 'up': return 'translateY(30px)';
      case 'down': return 'translateY(-30px)';
      case 'left': return 'translateX(-30px)';
      case 'right': return 'translateX(30px)';
      default: return 'translate(0, 0)';
    }
  };

  return (
    <div
      ref={domRef}
      className={`${className} transition-all duration-1000 cubic-bezier(0.16, 1, 0.3, 1) ${fullWidth ? 'w-full' : ''}`}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: getTransform(),
        transitionDelay: `${delay}ms`
      }}
    >
      {children}
    </div>
  );
};

export default FadeIn;