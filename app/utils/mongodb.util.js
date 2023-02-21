const { MongoClient } = require("mongodb");

class MongoDB {
    static connect = async (uri) => {
        this.client = await MongoClient.connect(uri);
        return this.client;
    };
}

module.exports = MongoDB;