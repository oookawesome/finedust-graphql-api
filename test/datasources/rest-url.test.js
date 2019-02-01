import {RestURL} from '../../src/datasources/rest-url'
import * as config from "../../config";

describe('RestURL', () => {

    test('will return REST API url with serviceKey and options when call getUrl', () => {
        const searchParams = {
            numOfRows: '10',
            pageSize: '10',
            pageNo: '1',
            startPage: '1',
            ver: '1.3',
            sidoName: '인천',
            _returnType: 'json'
        };

        expect(new RestURL('/ArpltnInforInqireSvc/getCtprvnRltmMesureDnsty', searchParams).getUrl())
            .toBe('http://openapi.airkorea.or.kr/openapi/services/rest/ArpltnInforInqireSvc/getCtprvnRltmMesureDnsty' +
                '?serviceKey=' + config.serviceKey +
                '&numOfRows=10&pageSize=10&pageNo=1&startPage=1&ver=1.3&sidoName=%EC%9D%B8%EC%B2%9C&_returnType=json');
    });

});
