"use client";

import React, { useState, useEffect } from "react";
import { getallCalendarEvents } from "@/app/components/posts";

interface CalendarEvent {
  _id: string;
  date: string;
  title: string;
  timeFrom?: string;
  timeTo?: string;
  isHoliday?: boolean;
}

const CalendarPage = () => {
  return <div className="">Calendar Events</div>;
};

export default CalendarPage;
