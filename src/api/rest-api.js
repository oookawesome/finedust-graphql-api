import request from 'request'
import * as config from '../../config.json'

const BASE_URL = 'http://openapi.airkorea.or.kr/openapi/services/rest';
const REAL_TIME_POLLUTION_URL = BASE_URL + '/ArpltnInforInqireSvc/getCtprvnRltmMesureDnsty?serviceKey=' + config.serviceKey +
    '&numOfRows=10&pageSize=10&pageNo=1&startPage=1&ver=1.3&_returnType=json';

let options = {
    host: 'http://openapi.airkorea.or.kr/openapi/services/rest/ArpltnInforInqireSvc',
    port: 80,
    path: '/getCtprvnRltmMesureDnsty?serviceKey=QhgStLGsqovYamQSWAeWti7yWjoN1zJcqUHgDAN507siBS13S9Pl1xsXjLQVtJGp9nsjg%2F141ckV8uhcGdCuKg%3D%3D&numOfRows=10&pageSize=10&pageNo=1&startPage=1&sidoName=%EC%9D%B8%EC%B2%9C&ver=1.3',
    method: 'GET'
};

// http://openapi.airkorea.or.kr/openapi/services/rest/ArpltnInforInqireSvc/getCtprvnRltmMesureDnsty?serviceKey=QhgStLGsqovYamQSWAeWti7yWjoN1zJcqUHgDAN507siBS13S9Pl1xsXjLQVtJGp9nsjg%2F141ckV8uhcGdCuKg%3D%3D&numOfRows=10&pageSize=10&pageNo=1&startPage=1&sidoName=%EC%9D%B8%EC%B2%9C&ver=1.3
// http://openapi.airkorea.or.kr/openapi/services/rest/ArpltnInforInqireSvc/getMsrstnAcctoRltmMesureDnsty?serviceKey=QhgStLGsqovYamQSWAeWti7yWjoN1zJcqUHgDAN507siBS13S9Pl1xsXjLQVtJGp9nsjg%2F141ckV8uhcGdCuKg%3D%3D&numOfRows=10&pageSize=10&pageNo=1&startPage=1&stationName=%EC%A2%85%EB%A1%9C%EA%B5%AC&dataTerm=DAILY&ver=1.3
// http://openapi.airkorea.or.kr/openapi/services/rest/ArpltnInforInqireSvc/getUnityAirEnvrnIdexSnstiveAboveMsrstnList?serviceKey=QhgStLGsqovYamQSWAeWti7yWjoN1zJcqUHgDAN507siBS13S9Pl1xsXjLQVtJGp9nsjg%2F141ckV8uhcGdCuKg%3D%3D&numOfRows=10&pageSize=10&pageNo=1&startPage=1
// http://openapi.airkorea.or.kr/openapi/services/rest/ArpltnInforInqireSvc/getUnityAirEnvrnIdexSnstiveAboveMsrstnList?serviceKey=QhgStLGsqovYamQSWAeWti7yWjoN1zJcqUHgDAN507siBS13S9Pl1xsXjLQVtJGp9nsjg%2F141ckV8uhcGdCuKg%3D%3D&numOfRows=10&pageSize=10&pageNo=1&startPage=1

const getRealTimePollutionBySidoName = (sidoName) => {
    request(REAL_TIME_POLLUTION_URL + '&sidoName=' + sidoName, (err, res, body) => {
        // console.log('body :', body);
        const jbody = JSON.parse(body);
        const jp = JSON.stringify(jbody, null, 2);
        console.log(jp)

        // jbody['list'].map((item) => {
        //     // console.log('stationName :', item.stationName)
        // })
        //
        // return airPollutionInfoParser.parse(sidoName, body);
    })
};

export { getRealTimePollutionBySidoName };