import axios from "axios";

export default axios.create({
    baseURL: "https://moviemania-production.up.railway.app",
    headers: { "ngrok-skip-browser-warning": "true" },
});
