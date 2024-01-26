import React from "react";
import EventItem from "../EventItem/EventItem";
import classes from "./EventList.module.css";

export default function EventList({ items }) {
  console.log("dd", items);
  return (
    <ul className={classes.list}>
      {items.map((item) => {
        return <EventItem item={item} />;
      })}
    </ul>
  );
}
