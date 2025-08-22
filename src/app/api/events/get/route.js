import { NextResponse } from "next/server";
import { eventsData } from "@/data/events/eventsData";

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get("id");
    const limit = searchParams.get("limit");
    const page = searchParams.get("page");
    const status = searchParams.get("status");

    // If ID is provided, fetch specific event
    if (id) {
      const event = eventsData.events.find(e => e.id === parseInt(id));

      if (!event) {
        return NextResponse.json(
          { error: "Event not found" },
          { status: 404 }
        );
      }

      // Transform to admin format
      const transformedEvent = {
        id: event.id,
        name: event.title,
        description: event.description,
        startDate: event.date,
        endDate: event.date, // Using same date for now
        location: event.location,
        status: event.registered >= event.capacity ? 'Full' : 'Active',
        registrations: event.registered,
        maxCapacity: event.capacity,
        poster: event.image,
        subEvents: event.agenda ? event.agenda.map((item, index) => ({
          id: index + 1,
          name: item.topic,
          description: item.time,
          maxTeams: 10,
          registered: Math.floor(Math.random() * 10)
        })) : []
      };

      return NextResponse.json(
        {
          message: "Event retrieved successfully",
          event: transformedEvent,
        },
        { status: 200 }
      );
    }

    // Transform all events to admin format
    const transformedEvents = eventsData.events.map(event => ({
      id: event.id,
      name: event.title,
      description: event.description,
      startDate: event.date,
      endDate: event.date, // Using same date for now
      location: event.location,
      status: event.registered >= event.capacity ? 'Full' : 'Active',
      registrations: event.registered,
      maxCapacity: event.capacity,
      poster: event.image,
      subEvents: event.agenda ? event.agenda.map((item, index) => ({
        id: index + 1,
        name: item.topic,
        description: item.time,
        maxTeams: 10,
        registered: Math.floor(Math.random() * 10)
      })) : []
    }));

    // Apply status filter
    let filteredEvents = transformedEvents;
    if (status && status !== 'All') {
      filteredEvents = transformedEvents.filter(event => event.status === status);
    }

    // Apply pagination
    let paginatedEvents = filteredEvents;
    let total = filteredEvents.length;

    if (limit) {
      const limitNum = parseInt(limit);
      const pageNum = parseInt(page) || 1;
      const skip = (pageNum - 1) * limitNum;

      paginatedEvents = filteredEvents.slice(skip, skip + limitNum);
    }

    return NextResponse.json(
      {
        message: "Events retrieved successfully",
        events: paginatedEvents,
        total,
        ...(limit && {
          pagination: {
            page: parseInt(page) || 1,
            limit: parseInt(limit),
            totalPages: Math.ceil(total / parseInt(limit)),
          },
        }),
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error fetching events:", error);

    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
