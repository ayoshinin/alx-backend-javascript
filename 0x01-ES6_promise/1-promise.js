
export default function getResponseFromAPI(success) {
  return new Promise((resolve, reject) => {
    if (success) {
      resolve({
        status: 200,
        body: 'success',
      });
    }
    reject(new Error('The fake API is not working currently'));
  });
}

