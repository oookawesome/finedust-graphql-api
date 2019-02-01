import * as config from "../../config";

const BASE_URL = 'http://openapi.airkorea.or.kr/openapi/services/rest/ArpltnInforInqireSvc';

class RestURL {

    constructor(path, searchParams) {
        this.baseUrl = BASE_URL;
        this.path = path;
        this.searchParams = searchParams;
    }

    getUrl() {
        const sp = this.searchParams.length === 0 ? '' : encodeQueryData(this.searchParams);
        return this.baseUrl + this.path + '?serviceKey=' + config.serviceKey + sp;
    }
}

const encodeQueryData = (data) => {
    const ret = [];
    for (let d in data)
        ret.push('&' + encodeURIComponent(d) + '=' + encodeURIComponent(data[d]));
    return ret.join('');
};

export {RestURL}