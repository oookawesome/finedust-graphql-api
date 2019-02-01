import {gql} from 'apollo-server-express'

const typeDefs = gql`
    scalar Date
   
    type Query {
        AirPollutionInfoByStationName(stationName: String!, dataTerm: DataTerm = DAILY): [AirPollutionInfo]
        StationInfoAtBadAirCondition: [StationInfo]
        AirPollutionInfoBySidoName(sidoName: String!): [AirPollutionInfo],
        ForecastInfo(searchDate: Date, informCode: InformCode): [ForecastInfo]
        RegionalAverageInfo(itemCode: ItemCode!, dataGubun: DataGubun = HOUR, searchCondition: SearchCondition = MONTH): [RegionalAverageInfo]
        RegionalAverageInfoBySidoName(sidoName: String!, searchCondition: DataGubun = DAILY): [AverageAirPollutionInfo]
    }
    
    type AirPollutionInfo {
        stationName: String
        mangName: String
        dataTime: String
        so2Value: Float
        coValue: Float
        o3Value: Float
        no2Value: Float
        pm10Value: Float
        pm10Value24: Float
        pm25Value: Float
        pm25Value24: Float
        khaiValue: Float
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
    
    type StationInfo {
        stationName: String
        addr: String
    }
    
    type ForecastInfo {
        dataTime: String
        informCode: InformCode
        informOverall: String
        informCause: String
        informGrade: String
        imageUrl1: String
        imageUrl2: String
        imageUrl3: String
        imageUrl4: String
        imageUrl5: String
        imageUrl6: String
        informData: Date
    }
    
    type RegionalAverageInfo {
        dataTime: String
        itemCode: Int
        dataGubun: String
        seoul: Float
        busan: Float
        daegu: Float
        incheon: Float
        gwangju: Float
        daejeon: Float
        ulsan: Float
        gyeonggi: Float
        gangwon: Float
        chungbuk: Float
        chungnam: Float
        jeonbuk: Float
        jeonnam: Float
        gyeongbuk: Float
        gyeongnam: Float
        jeju: Float
        sejong: Float
    }
    
    type AverageAirPollutionInfo {
        dataTime: String
        cityName: String
        so2Value: Float
        coValue: Float
        o3Value: Float
        no2Value: Float
        pm10Value: Float
        pm25Value: Float
    }
    
    enum DataTerm {
        DAILY
        MONTH
    } 
    
    enum InformCode {
        PM10
        PM25
        O3
    }
    
    enum ItemCode {
        SO2 
        CO 
        O3 
        NO2 
        PM10 
        PM25 
    }
    
    enum DataGubun {
        HOUR
        DAILY
    }
    
    enum SearchCondition {
        WEEK
        MONTH
    }
`;

export { typeDefs }


