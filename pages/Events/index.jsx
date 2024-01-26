import React from "react";
import { getAllEvents } from "../../dummyData";
import EventList from "../../Components/Events/EventList/EventList";
import EventSearch from "../../Components/Events/EventSearch/EventSearch";
import { useRouter } from "next/router";

export default function Eventspage() {
  const events = getAllEvents();
  const router = useRouter();
  function findEventshandler(year, month) {
    const fullPath = `/Events/${year}/${month}`;
    router.push(fullPath);
  }
  return (
    <div>
      <EventSearch onSearch={findEventshandler} />
      <EventList items={events} />
    </div>
  );
}
