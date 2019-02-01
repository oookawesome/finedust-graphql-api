import {GraphQLScalarType} from "graphql";
import {Kind} from "graphql/language/kinds";

const resolvers = {

    Date: new GraphQLScalarType({
        name: 'Date',
        description: 'custom Date type',
        parseValue(value) {
            return new Date(value);
        },
        parseLiteral(ast) {
            if (ast.kind === Kind.STRING) {
                return new Date(ast.value);
            }
            return null;
        },
        serialize(value) {
            return value;
        }
    }),

    Query: {
        AirPollutionInfoByStationName: async (_, {stationName, dataTerm}, {dataSources}) => {
            return dataSources.restApi.getRealTimePollutionByStationName(stationName, dataTerm);
        },
        StationInfoAtBadAirCondition: async (_, {}, {dataSources}) => {
            return dataSources.restApi.getStationInfoAtBadAirCondition();
        },
        AirPollutionInfoBySidoName: async (_, {sidoName}, {dataSources}) => {
            return dataSources.restApi.getRealTimePollutionBySidoName(sidoName);
        },
        ForecastInfo: async (_, {searchDate, informCode}, {dataSources}) => {
            return dataSources.restApi.getForecastInfo(searchDate, informCode);
        },
        RegionalAverageInfo: async (_, {itemCode, dataGubun, searchCondition}, {dataSources}) => {
            return dataSources.restApi.getRegionalAverageInfo(itemCode, dataGubun, searchCondition);
        },
        RegionalAverageInfoBySidoName: async(_, {sidoName, searchCondition}, {dataSources}) => {
            return dataSources.restApi.getRegionalAverageInfoBySidoName(sidoName, searchCondition);
        }
    },
};

export {resolvers}