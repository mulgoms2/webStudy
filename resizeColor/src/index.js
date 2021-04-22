
const body = document.querySelector(".container");

window.addEventListener('resize', getSize);

function getSize(){
  const size = window.outerWidth;
  const bigBody = 'big';
  const smallBody = 'small';
  
  if (size <= 800) {
    body.classList.add(smallBody);
    } else if (size <= 1200) {
      body.classList.remove(smallBody);
      body.classList.remove(bigBody);
    } else if (size <= 1600) {
      body.classList.add(bigBody);
    }
}


