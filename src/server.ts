import express from "express";
import { serverConfig } from "./config/index";
import v1Router from "./routers/v1/index.router";
import v2Router from "./routers/v2/index.router";
import { genericErrorHandler } from "./middlewares/error.middleware";
import { attachCorrelationIdMiddleware } from "./middlewares/correlation.middleware";

const app = express();
app.use(express.json());

app.use(attachCorrelationIdMiddleware);

app.use("/api/v1", v1Router);
app.use("/api/v2", v2Router);

app.use(genericErrorHandler);

app.listen(serverConfig.PORT, () => {
  console.log(`Server is running on port ${serverConfig.PORT}`);
});
