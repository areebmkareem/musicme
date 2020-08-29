import {baseUrl} from '../Config';
const {getAuthToken} = require('./getAuthToken');

class Requester {
  constructor() {
    this.baseUrl = baseUrl;
    this.routes = {
      register: '/users',
      getUserInfo: '/user',
      login: '/login',
      bulkInsertTracks: '/tracks',
    };
    this.token = null;
  }

  async get(url, params) {
    if (!this.token) this.token = await getAuthToken();
    let options = {
      headers: {
        'Content-Type': 'application/json',
        token: this.token,
      },
    };

    let response = await fetch(this.baseUrl + url, options);

    let data = await response.json();
    return data;
  }
  async post(url, body) {
    if (!this.token) this.token = await getAuthToken();
    let options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        token: this.token,
      },
      body: JSON.stringify(body),
    };
    let response = await fetch(this.baseUrl + url, options);
    let data = await response.json();

    return data;
  }
}

export default Requester;
