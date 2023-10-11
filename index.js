import express from "express";
const app = express();
import cors from "cors";
import morgan from "morgan";
import { config } from "dotenv";
import bodyParser from "body-parser";

//------------------------ Routers ------------------------
import authRouter from "./routers/auth.js";
import decorRouter from "./routers/decor.js";
import selectedDecorRouter from "./routers/selectedDecor.js";
import newsRouter from "./routers/news.js";
import blogRouter from "./routers/blog.js";
import contactMe from "./routers/contactMe.js";
import referenceRouter from "./routers/references.js";
import vacancyRouter from "./routers/vacancies.js";
import userRouter from "./routers/user.js";
import writeToUs from "./routers/writeToUs.js";
import search from "./routers/search.js";
import doorRouter from "./routers/door.js";
import aboutRouter from "./routers/about.js";
import backImageRouter from "./routers/backImageChange.js";
import { checkAdmin } from "./middleware/checkAdmin.js";
// --------------------------------------------------------

//------------------------- Morgan ------------------------
app.use(morgan("dev"));
// --------------------------------------------------------

//-------------------------- .env -------------------------
config();
// --------------------------------------------------------

//-------------------- Express js server Config -----------
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ limit: "100mb", extended: true }));
app.use(
  cors({
    credentials: true,
    origin: [
      "https://adminpanel.armarium.az",
      "https://armarium.az",
      "http://localhost:5173",
      "https://armarium.netlify.app",
    ],
  })
);

app.use("/images", express.static("images"));

// --------------------------------------------------------

//------------------------- User Routes -------------------
// , express.static("images")
app.use("/auth", authRouter);
app.use("/decor", decorRouter);
app.use("/selectedDecor", selectedDecorRouter);
app.use("/news", newsRouter);
app.use("/blog", blogRouter);
app.use("/contactMe", contactMe);
app.use("/reference", referenceRouter);
app.use("/vacancy", vacancyRouter);
app.use("/user", userRouter);
app.use("/writeToUs", writeToUs);
app.use("/door", doorRouter);
app.use("/search", search);
app.use("/backImage", backImageRouter);
app.use("/about", aboutRouter);
app.use("/checkAdmin", checkAdmin);
// --------------------------------------------------------

//--------------------- Express js Server -----------------
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`URL: http://localhost:${port}`);
});
// --------------------------------------------------------

//-------------------- DataBase mongoDB -------------------
import { connectionDB } from "./config/DB.js";
connectionDB();
// --------------------------------------------------------
