import { gql } from 'apollo-server-express'

const typeDefs = gql`
    type Query {
        AirPollutionInfoList: [AirPollutionInfo],
        AirPollutionInfo(sidoName: String): AirPollutionInfo
    }
    
    type AirPollutionInfo {
        sidoName: String,
        airPollutionDataList: [AirPollutionData]
    }
    
    type AirPollutionData {
        stationName: String
        mangName: String
        dataTime: String
        so2Value: Float
        coValue: Float
        o3Value: Float
        no2Value: Float
        pm10Value: Int
        pm10Value24: Int
        pm25Value: Int
        pm25Value24: Int
        khaiValue: Int
        khaiGrade: Int
        so2Grade: Int
        coGrade: Int
        o3Grade: Int
        no2Grade: Int
        pm10Grade: Int
        pm25Grade: Int
        pm10Grade1H: Int
        pm25Grade1H: Int
    
    }
`;

export { typeDefs }


