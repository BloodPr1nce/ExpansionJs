const apiUrl = 'https://jsonplaceholder.typicode.com/posts';

fetch(apiUrl, {
  method: 'POST', // HTTP method
  headers: {
    'Content-Type': 'application/json', // Specify JSON payload
  },
  body: JSON.stringify({
    title: 'foo',
    body: 'bar',
    userId: 1,
  }),
})
  .then((response) => response.json())
  .then((data) => console.log('Posted Data:', data))
  .catch((error) => console.error('Error making the POST request:', error));
