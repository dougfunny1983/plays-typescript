import express from "express";
import { test, users } from "./router";

const app = express();

app.use(express.json());
app.use('/', test);
app.use('/users', users);

export { app  }
