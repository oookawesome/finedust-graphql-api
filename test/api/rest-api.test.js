import * as restApi from '../../src/api/rest-api'
import {INCHEON} from "../../src/constants";

test('sample', () => {
    expect(restApi.getRealTimePollutionBySidoName(INCHEON)).toBe(true);
});