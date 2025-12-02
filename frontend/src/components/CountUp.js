import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';

export default function CountUp({ end, duration = 2000, prefix = '', suffix = '', decimals = 0 }) {
  const [count, setCount] = useState(0);
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  useEffect(() => {
    if (!inView) return;

    let startTime;
    const startValue = 0;
    const endValue = typeof end === 'string' ? parseFloat(end.replace(/[^0-9.-]/g, '')) : end;

    const animate = (currentTime) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      
      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      const currentValue = startValue + (endValue - startValue) * easeOutQuart;
      
      setCount(currentValue);

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setCount(endValue);
      }
    };

    requestAnimationFrame(animate);
  }, [inView, end, duration]);

  const formatNumber = (num) => {
    if (decimals === 0) {
      return Math.round(num).toLocaleString('pt-BR');
    }
    return num.toFixed(decimals).replace('.', ',');
  };

  return (
    <span ref={ref}>
      {prefix}{formatNumber(count)}{suffix}
    </span>
  );
}
