import { useRouter } from "next/router";
import React from "react";

export default function EventDetailPage() {
  const router = useRouter();
  return <div>event Detail page {router.query.eventId}</div>;
}
