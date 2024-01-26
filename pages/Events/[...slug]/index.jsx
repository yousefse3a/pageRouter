import React from "react";
import { getFilteredEvents } from "../../../dummyData";
import { useRouter } from "next/router";
import EventList from "../../../Components/Events/EventList/EventList";
import ResultsTitle from "../../../Components/Events/ResultsTitle/ResultsTitle";
import Button from "../../../Components/ui/Button/Button";
import ErrorAlert from "../../../Components/event-detail/error-alert";

export default function FilteredEventPage() {
  const router = useRouter();
  const filterData = router.query.slug;
  // const =getFilteredEvents({year:"",month:""})
  if (!filterData) {
    return <p className="center">loading...</p>;
  }
  const filterYear = router.query.slug[0];
  const filterMonth = router.query.slug[1];
  const numYear = +filterYear;
  const numMonth = +filterMonth;
  if (
    isNaN(numYear) ||
    isNaN(numMonth) ||
    numYear > 2030 ||
    numYear < 2021 ||
    numMonth < 1 ||
    numMonth > 12
  ) {
    return (
      <>
        <ErrorAlert>
          <p>Invaild filter. please adjust your values! </p>
          <div className="center">
            <Button link="/Events">Show All Events</Button>
          </div>
        </ErrorAlert>
      </>
    );
  }
  const filteredEvents = getFilteredEvents({
    year: numYear,
    month: numMonth,
  });
  if (!filteredEvents || filteredEvents.length === 0) {
    <>
      <ErrorAlert>
        <p>no events found for the chosen filter! </p>
        <div className="center">
          <Button link="/Events">Show All Events</Button>
        </div>
      </ErrorAlert>
    </>;
  }
  const date = new Date(numYear, numMonth - 1);
  return (
    <>
      <ResultsTitle date={date} />
      <EventList items={filteredEvents} />
    </>
  );
}
