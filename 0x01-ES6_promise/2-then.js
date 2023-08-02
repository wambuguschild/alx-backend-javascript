export default function handleResponseFromAPI(promise) {
  const body = { status: 200, body: 'success' };

  return promise
    .then(() => body)
    .catch(() => Error())
    .finally(() => {
      console.log('Got a response from the API');
    });
}
