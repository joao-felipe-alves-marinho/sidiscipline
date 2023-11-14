import axios from 'axios';
import { Environment } from '../../../environment';

const Api = axios.create({
    baseURL: Environment.URL_BASE
});

export { Api };