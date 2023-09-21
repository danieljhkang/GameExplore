import axios from "axios";

export default axios.create({
    baseURL : 'https://api.rawg.io/api',
    params: {
        key: '55f72ecbb25a4d86a2d66eb3557937e0'
    }
})