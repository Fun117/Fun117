import { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";

export const useInviewAnimation = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [animation, setAnimation] = useState(false);

  useEffect(() => {
    if (inView) {
      setAnimation(true);
    }
  }, [inView]);

  return [ref, animation];
};