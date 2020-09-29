import axios from "axios";

const instance = axios.create({
    // The API (cloud function) URL for test version.
    // baseURL: 'http://localhost:5001/clone-31550/us-central1/api'  
    // The API (cloud function) URL for published version.
    baseURL: 'https://us-central1-clone-31550.cloudfunctions.net/api'
});

export default instance;