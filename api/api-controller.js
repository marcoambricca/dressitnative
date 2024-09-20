import axios from 'axios';
import { NGROKTUNNEL } from './config';
import { Platform } from 'react-native';

export async function apiCall(endpoint) {
    const url = NGROKTUNNEL + endpoint;
    let response = [];
    
    try {
        const result = await axios.get(url, { 'headers': { 'ngrok-skip-browser-warning': '1' } }); // Header to disable SSL Auth
        if (result.data) {
            console.log('fetch success')
            response = result.data;
        }
    } catch (e) {
        console.log(e);
        response = [];
    }
    return response;
}

export async function apiPost(endpoint, payload){
    const url = NGROKTUNNEL + endpoint;
    let response = null;
    try {
        result = await axios.post(url, {
            params: payload,
            headers: {
                'ngrok-skip-browser-warning': '1'
            }
        });
        if (result.data) {
            console.log('fetch success')
            response = result.data;
        }
    }
    catch (error){
        console.log(error);
    }
    return response;
}