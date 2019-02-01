import {RESTDataSource} from "apollo-datasource-rest";
import {RestURL} from "./rest-url";

class RestAPI extends RESTDataSource {

    constructor() {
        super();

        this.queryParams = {
            numOfRows: '10',
            ver: '1.3',
            pageNo: '1',
            _returnType: 'json'
        };
    }

    async getRealTimePollutionByStationName(stationName, dataTerm) {
        const additionalQueryParams = {
            stationName: stationName,
            dataTerm: dataTerm,
        };
        const queryParams = {...this.queryParams, ...additionalQueryParams};

        const res = await this.get(new RestURL('/getMsrstnAcctoRltmMesureDnsty', queryParams).getUrl());
        return res && res.length ? this.airPollutionDataReducer(res) : [];
    }

    async getStationInfoAtBadAirCondition() {
        const queryParams = this.queryParams;

        const res = await this.get(new RestURL('/getUnityAirEnvrnIdexSnstiveAboveMsrstnList', queryParams).getUrl());
        return res && res.length ? this.stationInfoReducer(res) : [];
    }

    async getRealTimePollutionBySidoName(sidoName) {
        const additionalQueryParams = {
            sidoName: sidoName,
        };
        const queryParams = {...this.queryParams, ...additionalQueryParams};

        const res = await this.get(new RestURL('/getCtprvnRltmMesureDnsty', queryParams).getUrl());
        return res && res.length ? this.airPollutionDataReducer(res) : [];
    }

    async getForecastInfo(searchDate, informCode) {
        const searchDateWithYYYYMMDD = searchDate.toISOString().slice(0, 10);

        const additionalQueryParams = {
            searchDate: searchDateWithYYYYMMDD,
            informCode: informCode
        };
        const queryParams = {...this.queryParams, ...additionalQueryParams};

        const res = await this.get(new RestURL('/getMinuDustFrcstDspth', queryParams).getUrl());
        return res && res.length ? this.forecastInfoReducer(res) : [];
    };

    async getRegionalAverageInfo(itemCode, dataGubun, searchCondition) {
        const additionalQueryParams = {
            itemCode: itemCode,
            dataGubun: dataGubun,
            searchCondition: searchCondition
        };
        const queryParams = {...this.queryParams, ...additionalQueryParams};

        const res = await this.get(new RestURL('/getCtprvnMesureLIst', queryParams).getUrl());
        return res && res.length ? this.regionalAverageInfoReducer(res) : [];
    };

    async getRegionalAverageInfoBySidoName(sidoName, searchCondition) {
        const additionalQueryParams = {
            sidoName: sidoName,
            searchCondition: searchCondition,
        };
        const queryParams = {...this.queryParams, ...additionalQueryParams};

        const res = await this.get(new RestURL('/getCtprvnMesureSidoLIst', queryParams).getUrl());
        return res && res.length ? this.regionalAverageInfoBySidoNameReducer(res) : [];
    };

    airPollutionDataReducer(res) {
        return JSON.parse(res)['list'].map(item => {
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
                pm25Grade1H: item.pm25Grade1h,
            }
        })
    }

    stationInfoReducer(res) {
        return JSON.parse(res)['list'].map(item => {
            return {
                stationName: item.stationName,
                addr: item.addr,
            }
        })
    }

    forecastInfoReducer(res) {
        return JSON.parse(res)['list'].map(item => {
            return {
                dataTime: item.dataTime,
                informCode: item.informCode,
                informOverall: item.informOverall,
                informCause: item.informCause,
                informGrade: item.informGrade,
                imageUrl1: item.imageUrl1,
                imageUrl2: item.imageUrl2,
                imageUrl3: item.imageUrl3,
                imageUrl4: item.imageUrl4,
                imageUrl5: item.imageUrl5,
                imageUrl6: item.imageUrl6,
                informData: item.informData,
            }
        });
    }

    regionalAverageInfoReducer(res) {
        return JSON.parse(res)['list'].map(item => {
            return {
                dataTime: item.dataTime,
                itemCode: item.itemCode,
                dataGubun: item.dataGubun,
                seoul: item.seoul,
                busan: item.busan,
                daegu: item.daegu,
                incheon: item.incheon,
                gwangju: item.gwangju,
                daejeon: item.daejeon,
                ulsan: item.ulsan,
                gyeonggi: item.gyeonggi,
                gangwon: item.gangwon,
                chungbuk: item.chungbuk,
                chungnam: item.chungnam,
                jeonbuk: item.jeonbuk,
                jeonnam: item.jeonnam,
                gyeongbuk: item.gyeongbuk,
                gyeongnam: item.gyeongnam,
                jeju: item.jeju,
                sejong: item.sejong,
            }
        });
    }

    regionalAverageInfoBySidoNameReducer(res) {
        return JSON.parse(res)['list'].map(item => {
            return {
                dataTime: item.dataTime,
                cityName: item.cityName,
                so2Value: item.so2Value,
                coValue: item.coValue,
                o3Value: item.o3Value,
                no2Value: item.no2Value,
                pm10Value: item.pm10Value,
                pm25Value: item.pm25Value,
            }
        });
    }
}

export {RestAPI}