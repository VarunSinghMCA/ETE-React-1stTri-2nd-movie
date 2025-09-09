import dotenv from "dotenv";
import express from "express";
import cors from "cors";
// import cookieParser from "cookie-parser";

dotenv.config({
    path: "./.env"
});

const app = express();

// Enabling this for operations ->

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
}));

// Middlewares
// -----------------------------------------------------------------------------------------------------------------
// Middleware for express to get items in JSON format
app.use(express.json({ limit: "16kb" }));
// Middleware for parsing URL-encoded data
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
// Serve static files from the "public" folder
app.use(express.static("public"));
// Cookie parser middleware
// app.use(cookieParser()); 



// -----------------------------------------------------------------------------------------------------------------

// Routes Import
// Duplicate import removed
//---------------------------------------------------------------------
import movieRouter from "./routes/movie.routes.js";


// Routes Declaration
//---------------------------------------------------------------------
app.use("/api/v1/movies", movieRouter);



// Root endpoint to list all available endpoints
//---------------------------------------------------------------------
app.get("/", (req, res) => {
    res.json({
        message: "Welcome to the foodlicious API!",
        endpoints: {
            movies: "/api/v1/movies",
        },
    });
});

export default app;