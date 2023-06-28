const endPoint = "http://localhost:3005/images";

// This fucntion call backend to recieve images
export const fetchImages = (keyword) => {
  return fetch(`${endPoint}?tags=${encodeURIComponent(keyword)}`)
    .then((res) => res.json())
    .then((data) => data)
    .catch((err) => {
      console.error("Error from fetchImages", err);
      throw err;
    });
};
