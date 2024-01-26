import React from "react";
import { getFeaturedEvents } from "../dummyData";
import EventList from "../Components/Events/EventList/EventList";

export default function HomePage() {
  const featuredEvents = getFeaturedEvents();
  console.log(featuredEvents)
  return (
    <div>
      <EventList items={featuredEvents} />
    </div>
  );
}
