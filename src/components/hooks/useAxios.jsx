import axios from "axios";

const getLink = axios.create({
    baseURL:'http://localhost:5000'
})
const useAxios = () => {
    return getLink; 
};

export default useAxios;
