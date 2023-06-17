import axios, { AxiosError } from "axios";

export function useHttp() {
    const baseUrl = "/api/v1/";

    function httpPost(url, body) {
        return axios.post(baseUrl + url, body);
    }

    function httpError(err: AxiosError) {
        if (err) {
            return err.response?.data;
        }
    }

    return {
        httpPost,
        httpError,
    };
}
