import axios from "axios";
export default axios.create({
  baseURL: "https://hackathon-the-ocean-webapi.azurewebsites.net",
  headers: {
    "Content-type": "application/json"
  }
});
