function getTweets(page = 1) {
  const url = 'https://6456da1e5f9a4f23614d2d7b.mockapi.io/tweets';
  const options = 'limit=3';
  return fetch(`${url}?page=${page}&${options}`).then(res => {
    if (res.ok) return res.json();
    else return Promise.reject(new Error('No response from server'));
  });
}

function updateUser() {
  const url = 'https://6456da1e5f9a4f23614d2d7b.mockapi.io/tweets';
}

const api = {
  getTweets,
};

export default api;
