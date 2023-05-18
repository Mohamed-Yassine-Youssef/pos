const express = require("express");
const {
  createCalendar,
  getCalendar,
} = require("../controllers/CalendarController");
const CalendarRouter = express.Router();

CalendarRouter.post("/", createCalendar);
CalendarRouter.get("/getCalendar", getCalendar);
module.exports = CalendarRouter;
