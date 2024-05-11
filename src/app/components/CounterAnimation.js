import React, { useEffect, useRef, useState } from 'react';

function CounterAnimation() {
  const projectsCounterRef = useRef(null);
  const teamCounterRef = useRef(null);
  const customerCounterRef = useRef(null);
  const [canAnimate, setCanAnimate] = useState(true);

  useEffect(() => {
    function handleScroll() {
      if (!canAnimate) return;

      const projectsCounter = projectsCounterRef.current;
      const teamCounter = teamCounterRef.current;
      const customerCounter = customerCounterRef.current;

      if (projectsCounter && isElementInViewport(projectsCounter)) {
        animateCounter(projectsCounter, 20); // Adjust the final value as needed
      }
      if (teamCounter && isElementInViewport(teamCounter)) {
        animateCounter(teamCounter, 15); // Adjust the final value as needed
      }
      if (customerCounter && isElementInViewport(customerCounter)) {
        animateCounter(customerCounter, 100); // Adjust the final value as needed
      }
    }

    function isElementInViewport(element) {
      const rect = element.getBoundingClientRect();
      return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
      );
    }

    function animateCounter(element, finalValue) {
      let currentValue = 0;
      const increment = Math.ceil(finalValue / 50); // Adjust the increment value as needed for smoother animation

      const interval = setInterval(() => {
        if (currentValue >= finalValue) {
          clearInterval(interval);
          setTimeout(() => setCanAnimate(true), 5000); // Allow animation after 5 seconds
          return;
        }
        currentValue += increment;
        if (currentValue > finalValue) {
          currentValue = finalValue;
        }
        element.textContent = currentValue;
      }, 20); // Adjust the interval duration for smoother animation
      setCanAnimate(false); // Prevent further animations until the current one finishes
    }

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [canAnimate]);

  return (
    <div className="mt-8 mb-10 max-h-screen py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h3 className="my-4 text-3xl leading-8 font-extrabold tracking-tight sm:text-4xl">
            Empowering businesses with technology, creative & strategic marketing solutions
          </h3>
          <p className="mt-4 max-w-7xl text-xl opacity-70 mx-auto">
            As a digital services provider, our website design & digital marketing services have been delivered for more than 20+ projects. Our goal is to achieve your goals no matter how long it takes!
          </p>
        </div>
        <div className="mt-10 grid gap-6 grid-cols-2 sm:gap-12 lg:grid-cols-3 lg:gap-8">
          <div>
            <h4 className="text-lg sm:text-xl font-semibold">
              Projects Completed
            </h4>
            <p className="mt-2 sm:mt-3 text-4xl sm:text-6xl font-bold text-blue-500">
              <span ref={projectsCounterRef} className="counter">0</span>+
            </p>
            <p className="mt-1 font-bold opacity-70">partner with CC Tech</p>
          </div>
          <div>
            <h4 className="text-lg sm:text-xl font-semibold">
              A team of
            </h4>
            <p className="mt-2 sm:mt-3 text-4xl sm:text-6xl font-bold text-blue-500">
              <span ref={teamCounterRef} className="counter">0</span>+
            </p>
            <p className="mt-1  font-bold opacity-70">working in CC Tech</p>
          </div>
          <div>
            <h4 className="text-lg sm:text-xl font-semibold">
              Happy customer
            </h4>
            <p className="mt-2 sm:mt-3 text-4xl sm:text-6xl font-bold text-blue-500">
              <span ref={customerCounterRef} className="counter">0</span>%
            </p>
            <p className="mt-1 font-bold opacity-70 ">this year alone</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CounterAnimation;
