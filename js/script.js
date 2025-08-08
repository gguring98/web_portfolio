document.addEventListener('DOMContentLoaded', () => {

  const observes = document.querySelectorAll('.observer')

  const options = {
    threshold : 1
  };

  let intersectionObserver = new IntersectionObserver(function(ele) {

    ele.forEach(item => {
      if(item.isIntersecting){
        item.target.classList.add('show');
      } else {
        item.target.classList.remove('show');
      }
    }, options);
  });

  observes.forEach(item => {
    intersectionObserver.observe(item);
  });
});