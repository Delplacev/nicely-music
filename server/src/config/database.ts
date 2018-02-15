import { Mockgoose } from "mockgoose";
import * as mongoose from "mongoose";

(mongoose as any).Promise = global.Promise;

if (process.env.NODE_ENV === "testing") {

    const mockgoose = new Mockgoose(mongoose);
    mockgoose.helper.setDbVersion("3.4.3");

    mockgoose.prepareStorage().then((): void => {
        mongoose.connect("mongodb://localhost/news", {});
    });

} else {

    mongoose.connect("mongodb://localhost/news", {});

}


mongoose.connection.on('error', function() {
    console.error('MongoDB Connection Error. Please make sure that MongoDB is running.');
});

export { mongoose };