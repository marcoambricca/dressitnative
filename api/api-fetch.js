import axios from 'axios';
import { NGROKTUNNEL } from './config';

export default async function apiCall(endpoint) {
    const url = NGROKTUNNEL + endpoint;
    let response = [];
    
    try {
        const result = await axios.get(url, { 'headers': { 'ngrok-skip-browser-warning': '1' } }); // Header to disable SSL Auth
        if (result.data && result.data.length > 0) {
            response = result.data;
        }
    } catch (e) {
        console.log(e);
        response = [];
    }
    return response;
}
