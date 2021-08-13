let paypal = document.createElement('script');
paypal.src = 'https://www.paypalobjects.com/api/checkout.js';
paypal.async = true;
document.getElementsByTagName('head')[0].appendChild(paypal);