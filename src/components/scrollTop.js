import { useEffect, useState } from "react";
import './styles/scrollTop.css';

export default function ScrollToTop() {

  const [isVisible, setIsVisible] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  useEffect(() => {
    // Napin näkyvyys kun on scrollattu sivua X määrä
    const toggleVisibility = () => {
      if (window.pageYOffset > 250) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <>
      {isVisible && (
        <div className="scroll-to-top">
          <a className="scroll" href="#">Up</a>
        </div>
      )}
    </>
  );
}
