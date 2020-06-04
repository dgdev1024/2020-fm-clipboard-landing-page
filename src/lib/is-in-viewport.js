/**
 * @file lib/is-in-viewport.js
 * Function to check to see if a DOM element is within the current viewport.
 */

// Function
const isInViewport = (element) => {
  if (element.classList.contains('shown') === true) {
    return false;
  }
  
  const { top, bottom } = element.getBoundingClientRect();

  return (
    top <= (window.innerHeight || document.documentElement.clientHeight)
  );
};

// Export
export default isInViewport;