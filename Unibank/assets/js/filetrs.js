
const filterLinks = document.querySelectorAll(".filters a");

filterLinks.forEach(link => {
  link.addEventListener("click", () => {
      
    link.classList.add("active");
    
    
    filterLinks.forEach(otherLink => {
      if (otherLink !== link) {
        otherLink.classList.remove("active");
      }
    });
  });
});