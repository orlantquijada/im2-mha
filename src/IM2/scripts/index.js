const mainContent = document.querySelector(".main-content .container");

gsap.from(mainContent, {
  y: 50,
  opacity: 0,
  ease: "power2",
  duration: 1,
  delay: 0.1,
});
