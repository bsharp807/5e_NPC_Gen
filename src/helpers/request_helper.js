class RequestHelper{

  static get(url) {
    return fetch(url)
      .then((res) => res.json());
  }

  static post(url, payload) {
    return fetch(url, {
      method: 'POST',
      body: JSON.stringify(payload),
      headers: { 'Content-Type': 'application/json' }
    })
      .then((response) => response.json());
  }


  static put(url, payload) {
    return fetch(url, {
      method: 'PUT',
      body: JSON.stringify(payload),
      headers: { 'Content-Type': 'application/json' }
    })
      .then((response) => response.json());
  }

  static delete(url, payload) {
    return fetch(url, {
      method: 'DELETE',
      body: JSON.stringify(payload),
      headers: { 'Content-Type': 'application/json' }
    })
      .then((response) => response.json());
  }

}

module.exports = RequestHelper;
