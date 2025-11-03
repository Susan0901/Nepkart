import dotenv from "dotenv";

dotenv.config();

export const ENV = {
    APP_NAME: process.env.APP_NAME,
    APP_EMAIL: process.env.APP_EMAIL,
    PORT: process.env.PORT,
    MONGO_URL: process.env.MONGO_URL,
    NODE_ENV: process.env.NODE_ENV,
    JWT_ACCESS_SECRET: process.env.JWT_ACCESS_SECRET,
    JWT_REFRESH_SECRET: process.env.JWT_REFRESH_SECRET,
    CLIENT_DEV_URL: process.env.CLIENT_DEV_URL,
    CLIENT_PROD_URL: process.env.CLIENT_PROD_URL,
}