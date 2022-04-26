import http from 'k6/http';
import { sleep } from 'k6';

export const options = {
    insecureSkipTLSVerify: true,
}

const params = {
    headers: {
      'Content-Type': 'application/json',
    },
};

export default function () {
  http.get('https://127.0.0.1:3000/checkout', params, options);
  sleep(1);
}