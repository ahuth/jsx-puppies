export default function fetchPups(breed) {
  return fetch(`https://dog.ceo/api/breed/${breed}/images`, {
    method: 'get'
  }).then(function (response) {
    return response.json();
  }).then(function (body) {
    return body.message;
  });
}
