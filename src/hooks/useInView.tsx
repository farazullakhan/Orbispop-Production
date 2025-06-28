import { useState, useEffect, RefObject } from 'react';

interface UseInViewOptions {
  threshold?: number;
  rootMargin?: string;
  once?: boolean;
}

export const useInView = (
  ref: RefObject<Element>,
  options: UseInViewOptions = {}
): boolean => {
  const { threshold = 0, rootMargin = '0px', once = false } = options;
  const [isIntersecting, setIntersecting] = useState<boolean>(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Update our state when observer callback fires
        if (entry.isIntersecting) {
          setIntersecting(true);
          
          // If once is true, unobserve the element after it becomes visible
          if (once && ref.current) {
            observer.unobserve(ref.current);
          }
        } else if (!once) {
          setIntersecting(false);
        }
      },
      {
        rootMargin,
        threshold,
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [ref, threshold, rootMargin, once]);

  return isIntersecting;
};