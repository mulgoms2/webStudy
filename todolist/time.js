'use strict';
const options = {weekday: "long", month:"short", day: "numeric"};
const dateBox = document.getElementById('date');
let today = new Date();

dateBox.innerHTML = today.toLocaleDateString("kr", options);

