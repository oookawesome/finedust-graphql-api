import {RESTDataSource} from "apollo-datasource-rest";
import * as config from "../../config";
import {INCHEON} from "../constants";

const BASE_URL = 'http://openapi.airkorea.or.kr/openapi/services/rest';
const REAL_TIME_POLLUTION_URL = BASE_URL + '/ArpltnInforInqireSvc/getCtprvnRltmMesureDnsty?serviceKey=' + config.serviceKey +
    '&numOfRows=10&pageSize=10&pageNo=1&startPage=1&ver=1.3' + '&sidoName=' + INCHEON + '&_returnType=json';

const uuREAL_TIME_POLLUTION_URL = new URL(BASE_URL + '/ArpltnInforInqireSvc/getCtprvnRltmMesureDnsty');

uuREAL_TIME_POLLUTION_URL.searchParams.append('serviceKey', config.serviceKey);
uuREAL_TIME_POLLUTION_URL.searchParams.append('numOfRows', '10');
uuREAL_TIME_POLLUTION_URL.searchParams.append('pageSize', '10');
uuREAL_TIME_POLLUTION_URL.searchParams.append('pageNo', '1');
uuREAL_TIME_POLLUTION_URL.searchParams.append('startPage', '1');
uuREAL_TIME_POLLUTION_URL.searchParams.append('ver', '1.3');
uuREAL_TIME_POLLUTION_URL.searchParams.append('sidoName', '인천');
uuREAL_TIME_POLLUTION_URL.searchParams.append('_returnType', 'json');

class RestAPI extends RESTDataSource {

    constructor() {
        super();
        this.baseURL = uuREAL_TIME_POLLUTION_URL.href;
    }

    async getRealTimePollutionBySidoName(sidoName) {
        const res = await this.get('');
        return res && res.length ? this.restReducer(sidoName, res) : [];
    }

    restReducer(sidoName, launch) {
        const items = JSON.parse(launch)['list'];
        return {
            sidoName: sidoName,
            airPollutionDataList : items.map(item => {
                return {
                    stationName: item.stationName,
                    mangName: item.mangName,
                    dataTime: item.dataTime,
                    so2Value: item.so2Value,
                    coValue: item.coValue,
                    o3Value: item.o3Value,
                    no2Value: item.no2Value,
                    pm10Value: item.pm10Value,
                    pm10Value24: item.pm10Value24,
                    pm25Value: item.pm25Value,
                    pm25Value24: item.pm25Value24,
                    khaiValue: item.khaiValue,
                    khaiGrade: item.khaiGrade,
                    so2Grade: item.so2Grade,
                    coGrade: item.coGrade,
                    o3Grade: item.o3Grade,
                    no2Grade: item.no2Grade,
                    pm10Grade: item.pm10Grade,
                    pm25Grade: item.pm25Grade,
                    pm10Grade1H: item.pm10Grade1h,
                    pm25Grade1H: item.pm25Grade1h
                }
            }),
        }
    }
}

export {RestAPI}