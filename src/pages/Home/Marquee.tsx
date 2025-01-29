import { useEffect, useRef } from 'react';

const Marquee = () => {
  const tickerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tickerElement = tickerRef.current;
    if (!tickerElement) return;

    const marqueeSpeed = 1; // Speed of the marquee
    let position = 1000;
    const totalWidth = tickerElement.scrollWidth; // Total width of the text content

    const animateMarquee = (): void => {
      position -= marqueeSpeed;
      if (position <= -totalWidth) {
        position = 0; // Reset position to create the infinite loop
      }

      // Update the position of the text
      if (tickerElement) {
        tickerElement.style.transform = `translateX(${position}px)`;
      }

      // Use requestAnimationFrame with the callback function
      requestAnimationFrame(animateMarquee);
    };

    // Start the animation
    const animationFrameId = requestAnimationFrame(animateMarquee);

    // Cleanup on component unmount
    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  const textArray = new Array(8).fill("TomeTracker released!"); // Create an array of the repeated text

  return (
    <div className="ticker-container bg-gradient-to-b from-secondary/30 h-20 rotate-3 -me-16 flex overflow-visible">
      <div
        ref={tickerRef}
        className="ticker w-full flex gap-10 place-content-center text-center"
      >
        {/* Duplicate the text */}
        <div className="ticker-content flex gap-10">
          {textArray.map((text, index) => (
            <h4 key={index} className='h-fit my-auto ms-10 text-nowrap italic'>{text}</h4>
          ))}
        </div>

        {/* Duplicate the text again for continuous loop */}
        <div className="ticker-content flex gap-10">
          {textArray.map((text, index) => (
            <h4 key={index} className='h-fit my-auto ms-10 text-nowrap italic'>{text}</h4>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Marquee;
