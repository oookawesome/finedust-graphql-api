const resolvers = {
    Query: {
        AirPollutionInfo: async (_, {sidoName}, {dataSources}) => {
            return dataSources.restApi.getRealTimePollutionBySidoName(sidoName);
        }
    },
};

export {resolvers}