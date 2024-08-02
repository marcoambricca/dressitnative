import axios from "axios";

export default async function apiCall(endpoint){
    const url = 'http://localhost:3000/api/' + endpoint;
    let result;
    try {
        result = await axios.get(url);
    }
    catch {
        console.log(error);
    }
    return result.data;
}