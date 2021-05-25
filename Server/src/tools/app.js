const ex = require("express");
const app = ex();
const cors = require("cors");
const bodyParser = require("body-parser");
app.set("PORT", process.env.PORT || 3030);
//Middlewares
app.use(cors());
app.use(ex.json());
app.use(ex.urlencoded({ extended: false }));
app.use(
  bodyParser.json({
    limit: "500mb",
  })
);
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

//Routes
app.use(require("../routes/GET/index"));
app.use(require("../routes/POST/index"));
app.use(require("../routes/PUT/index"));
app.use(require("../routes/DELETE/index"));
module.exports = app;
