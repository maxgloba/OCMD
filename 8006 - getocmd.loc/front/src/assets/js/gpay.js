const gpay = document.createElement('script');
gpay.src = 'https://pay.google.com/gp/p/js/pay.js';
gpay.async = true;
window.addEventListener("load", event => {
  document.getElementsByTagName('head')[0].appendChild(gpay);
});