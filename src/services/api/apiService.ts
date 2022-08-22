import axios, { Method, AxiosInstance } from 'axios';
import { APIErrorMsg, APINwErrorMsg } from '../../app/constants/apiConstants';
import { setJWTToken, getJWTToken } from '../../utilities/auth/tokenUtility';

type ErrorType = {
    status: string;
    message: string;
    details: string;
};

type HeaderType = {
    'Content-Type': string;
    Authorization: string;
};

type RequestObjectType = {
    method: Method;
    url: string;
    responseType: any;
    data: any;
    headers: HeaderType;
};

class ApiService {
    private service: AxiosInstance;
    private currentUrl: string;

    constructor() {
        const service = axios.create({
            headers: {}
        });
        this.service = service;
        this.currentUrl = '';
    }

    get(path: string, params: any) {
        this.currentUrl = path;
        return this.service
            .request({
                method: 'GET',
                url: path,
                params: params,
                headers: this.getHeader()
            })
            .then((response) => {
                response?.data?.token && setJWTToken(response?.data?.token);
                return response.data || response;
            })
            .catch((e) => this.handleError(e));
    }

    put(path: string, payload: any, options = {}) {
        return this.service
            .request(this.getRequestObject('PUT', path, payload, options))
            .then((response) => response.data || response)
            .catch((e) => this.handleError(e));
    }

    patch(path: string, payload: any, options = {}) {
        return this.service
            .request(this.getRequestObject('PATCH', path, payload, options))
            .then((response) => response.data || response)
            .catch((e) => this.handleError(e));
    }

    post(path: string, payload: any, options = {}, contentType = null) {
        return this.service
            .request(this.getRequestObject('POST', path, payload, options, contentType))
            .then((response) => {
                response?.data?.token && setJWTToken(response?.data?.token);
                return response?.data || response;
            })
            .catch((e) => {
                return this.handleError(e?.error);
            });
    }

    getHeader = (contentType?: string | null): any => {
        if (contentType === 'multipart/form-data') {
            return {
                'Content-Type': 'multipart/form-data',
                Authorization: getJWTToken()
            };
        } else {
            return {
                'Content-Type': 'application/json;charset=UTF-8',
                Authorization: getJWTToken()
            };
        }
    };

    getRequestObject = (
        method: Method,
        path: string,
        payload: any,
        options: any,
        contentType?: null
    ): RequestObjectType => {
        this.currentUrl = path;
        return {
            method: method,
            url: path,
            responseType: options?.responseType || 'json',
            data: payload,
            headers: this.getHeader(contentType)
        };
    };

    handleError = (error: any): Promise<never> => {
        return Promise.reject(this.getFormattedError(error));
    };

    getFormattedError = (err: any): any => {
        try {
            if (err.response && err.response.data) {
                if (err.response.data.error) {
                    return {
                        status: err.response.data.error.type,
                        message: err.response.data.error.message,
                        details: err.response.data.error.details || err.response.data.error.data
                    };
                } else if (err.response.data.message) {
                    return {
                        status: err.response.data,
                        message: err.response.data.message,
                        details: err.response.data.message
                    };
                }
            } else {
                return {
                    status: 'error',
                    message: APIErrorMsg,
                    Error: err.message
                };
            }
        } catch (e) {
            return {
                status: 'error',
                message: APIErrorMsg,
                details: APINwErrorMsg
            };
        }
    };
}

const apiServiceInst = new ApiService();

export default apiServiceInst;
