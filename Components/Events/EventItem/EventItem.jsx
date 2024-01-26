import Link from "next/link";
import React from "react";
import classes from "./EventItem.module.css";

export default function EventItem({ item }) {
  console.log(item);
  const hummanReadableData = new Date(item.date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
  const formattedAddress = item.location.replace(", ", "\n");
  const exploreLink = `/evevnts/${item.id}`;
  return (
    <li className={classes.item}>
      <img src={`/${item.image}`} alt={item.title} />
      <div className={classes.content}>
        <div className={classes.summary}>
          <h2>{item.title}</h2>
          <div className={classes.date}>
            <time>{hummanReadableData}</time>
          </div>
          <div className={classes.address}>
            <address>{formattedAddress}</address>
          </div>
        </div>

        <div className={classes.actions}>
          <Link href={exploreLink}>Explore Event</Link>
        </div>
      </div>
    </li>
  );
}
