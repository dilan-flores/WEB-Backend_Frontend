import mongoose from 'mongoose';
// Conexion de la base de datos atlas
const { DBUSER, DBPASSWORD, DBNAME } = process.env;
const MONGOOSE_URI = `mongodb+srv://${DBUSER}:${DBPASSWORD}@cluster0.sqjgg9c.mongodb.net/${DBNAME}`;
const connection = async () => {
    try {
        await mongoose.connect(MONGOOSE_URI, {
            useUnifiedTopology: true,
            useNewUrlParser: true
        });
        console.log("LA BASE ESTA CONECTADA!");
    } catch (error) {
        console.log(error);
    }
};

export default connection;