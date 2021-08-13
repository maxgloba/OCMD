import axios from "axios"
const api = process.env.NODE_ENV === 'production' ? '' : 'http://localhost:8010';

export default {
  async charge(data) {
    let res = await axios.post(api+'/charge', {
      headers: {
        'Content-Type': 'application/json'
      },
      params: data
    });
    return res.data;
  },
  async upselling(data) {
    let res = await axios.post(api+'/upselling', {
      headers: {
        'Content-Type': 'application/json'
      },
      params: data
    });
    return res.data;
  },
  async paypal(data) {
    let res = await axios.post(api+'/paypal', {
      headers: {
        'Content-Type': 'application/json'
      },
      params: data
    });
    return res.data;
  },
  async paypalOrderCreate(data) {
    let res = await axios.post(api+'/paypal/order/create', {
      headers: {
        'Content-Type': 'application/json'
      },
      params: data
    });
    return res.data;
  },
  async paypalOrderCapture(data) {
    let res = await axios.post(api+'/paypal/order/capture', {
      headers: {
        'Content-Type': 'application/json'
      },
      params: data
    });
    return res.data;
  },
  async konnektivePaypalAdd(data) {
    let res = await axios.post(api+'/konnektive/paypal/add', {
      headers: {
        'Content-Type': 'application/json'
      },
      params: data
    });
    return res.data;
  },
  async konnektivePaypalConfirm(data) {
    let res = await axios.post(api+'/konnektive/paypal/confirm', {
      headers: {
        'Content-Type': 'application/json'
      },
      params: data
    });
    return res.data;
  },
  async konnektivePaypalUpsale(data) {
    let res = await axios.post(api+'/konnektive/paypal/upsale', {
      headers: {
        'Content-Type': 'application/json'
      },
      params: data
    });
    return res.data;
  },
  async konnektivePaypalUpsaleConfirm(data) {
    let res = await axios.post(api+'/konnektive/paypal/upsaleConfirm', {
      headers: {
        'Content-Type': 'application/json'
      },
      params: data
    });
    return res.data;
  },
  async klaviyoIdentify(data) {
    let res = await axios.post(api+'/klaviyo-identify', {
      headers: {
        'Content-Type': 'application/json'
      },
      params: data
    });
    return res.data;
  },
  async sendContact(data) {
    let res = await axios.post(api+'/nodemailer', {
      headers: {
        'Content-Type': 'application/json'
      },
      params: data
    });
    return res.data;
  },
  async orderConfirm(data) {
    let res = await axios.post(api+'/konnektive/order-confirm', {
      headers: {
        'Content-Type': 'application/json'
      },
      params: data
    });
    return res.data;
  }
}