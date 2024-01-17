import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://1f56-2804-14c-de87-83e7-dd52-c986-92de-4d1b.ngrok-free.app/api/v1',
});