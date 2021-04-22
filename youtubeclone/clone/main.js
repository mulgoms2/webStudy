const morebtn = document.querySelector('.infoAndupnext .info .metadata .morebtn');
const title = document.querySelector('.infoAndupnext .info .metadata .title');

morebtn.addEventListener('click', () => {
    morebtn.classList.toggle('clicked');
    title.classList.toggle('clamp');
});