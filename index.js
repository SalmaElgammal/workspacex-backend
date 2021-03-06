const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors());
app.use(express.json());

app.use("/staff", require("./routes/staff"));
app.use("/customer", require("./routes/customer"));
app.use("/workspace", require("./routes/workspace"));
app.use("/checkin", require("./routes/check_in"));
app.use("/dashboard", require("./routes/staff_dashboard"));
app.use("/checkout", require("./routes/checkout"));
app.use("/approve", require("./routes/approve"));
app.use("/reject", require("./routes/reject"));
app.use("/review", require("./routes/review"));
app.use("/report", require("./routes/report"));
app.use("/room", require("./routes/room"));

const port = process.env.PORT || 5000;
const server = app.listen(port, () => {
  console.log("Listening on port " + port + "... ");
});

module.exports = server;
