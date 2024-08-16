import axios from "axios";

export default async function apiCall(endpoint){
    const url = 'http://localhost:3030/api/' + endpoint;
    let result;
    try {
        result = await axios.get(url);
        console.log(result);
    }
    catch (e){
        console.log(e);
    }
    return result.data;
}