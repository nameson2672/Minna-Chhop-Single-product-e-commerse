// Importing packages
import express from "express";
import cors from "cors";
import colors from "colors";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import mongoSanitize from 'express-mongo-sanitize';
import helmet from 'helmet';
import xss from 'xss-clean';
import path from 'path';

dotenv.config();

// Setup express server
const app = express();

// Body parser
app.use(bodyParser.json({ verify: (req, res, buffer) => (req['rawBody'] = buffer) }));

// sqcurity
app.use(mongoSanitize());
app.use(helmet());
app.use(xss());


// Cors middleware for cross site fatching
app.use(cors({origin: true}));

// Importing utils
import connectDB from "./config/db.js";

// Connect to db
connectDB();

// Import Rouetes
import UserRoute from "./Router/AuthRouter.js";

// Setup routes
app.use("/", UserRoute);

const __dirname = path.resolve();
if (process.env.STATUS === "production") {
  app.use(express.static(path.join(__dirname, "../app/build")))
  app.use('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../', 'app', 'build', 'index.html'))
  })
}

// Set lisner port
const port = 4000;
app.listen(
  port,
  console.log(`API is running on port ${port}`.green.bold.inverse)
);
