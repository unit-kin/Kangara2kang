import axios from "axios";

const instance = axios.create({
    baseURL:'http://localhost:5001/shoe-c3679/us-central1/api'  /* api url (cloud function ) */
})

export default instance;