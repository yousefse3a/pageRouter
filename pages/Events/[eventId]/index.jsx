import { useRouter } from "next/router";
import React from "react";
import { getEventById } from "../../../dummyData";
import EventSummary from "../../../Components/event-detail/event-summary";
import LogisticsItem from "../../../Components/event-detail/logistics-item";
import EventContent from "../../../Components/event-detail/event-content";
import EventLogistics from "../../../Components/event-detail/event-logistics";
import ErrorAlert from "../../../Components/event-detail/error-alert";

export default function EventDetailPage() {
  const router = useRouter();
  const event = getEventById(router.query.eventId);
  if (!event) {
    return (
      <ErrorAlert>
        <p>Not event found</p>
      </ErrorAlert>
    );
  }
  return (
    <>
      <EventSummary title={event.title} />
      <EventLogistics
        date={event.date}
        address={event.location}
        image={event.image}
        imageAlt={event.title}
      />
      <EventContent>
        <p>{event.description}</p>
      </EventContent>
    </>
  );
}
