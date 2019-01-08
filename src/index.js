import express from 'express'
import {ApolloServer} from 'apollo-server-express'
import {typeDefs} from "./schema";
import {RestAPI} from "./datasources/rest-openapi";
import {resolvers} from "./resolvers";

const AirPollutionInfoList = [
    {
        sidoName: "서울",
        airPollutionDataList: [
            {
                "stationName": "중구",
                "mangName": "도시대기",
                "dataTime": "2018-12-23 13:00",
                "so2Value": 0.005,
                "coValue": 0.5,
                "o3Value": 0.038,
                "no2Value": 0.014,
                "pm10Value": 48,
                "pm10Value24": 54,
                "pm25Value": 25,
                "pm25Value24": 32,
                "khaiValue": 92,
                "khaiGrade": 2,
                "so2Grade": 1,
                "coGrade": 1,
                "o3Grade": 2,
                "no2Grade": 1,
                "pm10Grade": 2,
                "pm25Grade": 2,
                "pm10Grade1h": 2,
                "pm25Grade1h": 2
            },
            {
                "stationName": "한강대로",
                "mangName": "도로변대기",
                "dataTime": "2018-12-23 13:00",
                "so2Value": 0.006,
                "coValue": 0.6,
                "o3Value": 0.030,
                "no2Value": 0.036,
                "pm10Value": 62,
                "pm10Value24": 60,
                "pm25Value": 29,
                "pm25Value24": 37,
                "khaiValue": 80,
                "khaiGrade": 2,
                "so2Grade": 1,
                "coGrade": 1,
                "o3Grade": 1,
                "no2Grade": 2,
                "pm10Grade": 2,
                "pm25Grade": 3,
                "pm10Grade1h": 2,
                "pm25Grade1h": 2
            },

        ]
    },
    {
        sidoName : "인천",
        airPollutionDataList : [
            {
                "stationName" : "신흥",
                "mangName" : "도시대기",
                "dataTime" : "2018-12-23 13:00",
                "so2Value" : 0.005,
                "coValue" : 0.5,
                "o3Value" : 0.0386,
                "no2Value" : 0.010,
                "pm10Value" : 43,
                "pm10Value24" : 52,
                "pm25Value" : 14,
                "pm25Value24" : 22,
                "khaiValue" : 72,
                "khaiGrade" : 2,
                "so2Grade" : 1,
                "coGrade" : 1,
                "o3Grade" : 2,
                "no2Grade" : 1,
                "pm10Grade" : 2,
                "pm25Grade" : 2,
                "pm10Grade1h" : 2,
                "pm25Grade1h" : 1
            }
        ],
    },
];



const server = new ApolloServer({
    typeDefs,
    resolvers,
    dataSources: () => ({
      restApi: new RestAPI()
    })
});


const app = express();
server.applyMiddleware({app});

app.listen(3000, () => {
    console.log('Example app listening on port 3000!');
});