import axios from 'axios';

// function that makes the api request and returns a Promise for response
export default function fetchData(params) {
    return fetch(params.url)
      .then(res => res.json())
      .then(posts => posts);
  }

  export function postData(payload) {
    console.log('payload : ', payload);
    return axios.post(payload.url, payload.data)
    .then(function (response) {
      console.log('opstData resp : ', response);
      return response.data;
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  //POST_REGISTER_DATA