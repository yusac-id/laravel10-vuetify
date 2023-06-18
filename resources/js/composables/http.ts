import axios, { AxiosError } from "axios";

export function useHttp() {
    const baseUrl = "/api/v1/";

    function httpPost(url, body) {
        return new Promise(async (resolve, reject) => {
            try {
                const res = await axios.post(baseUrl + url, body);
                resolve(res.data);
            } catch (e) {
                reject(e);
            }
        });
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
