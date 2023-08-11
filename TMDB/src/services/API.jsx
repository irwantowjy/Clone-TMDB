import axios from "axios";

const baseUrl = import.meta.env.VITE_REACT_APP_BASEURL;
const apiKey = import.meta.env.VITE_REACT_APP_APIKEY;

async function API() {
  try {
    const respond = await axios.get(
      `${baseUrl}/discover/movie?api_key=${apiKey}`
    );
    return respond;
  } catch (err) {
    console.log("API Not Found");
  }
}

export default API;
