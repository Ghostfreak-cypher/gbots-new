import TeamMember from "@/models/TeamMember";
import { NextResponse } from "next/server";
import dbConnect from "@/lib/db";
import mongoose from "mongoose";

export async function GET(request) {
  try {
    await dbConnect();

    const { searchParams } = new URL(request.url);
    const id = searchParams.get("id");
    const role = searchParams.get("role");
    const department = searchParams.get("department");
    const year = searchParams.get("year");
    const activity = searchParams.get("activity");

    // If ID is provided, fetch specific team member
    if (id) {
      if (!mongoose.Types.ObjectId.isValid(id)) {
        return NextResponse.json(
          { error: "Invalid team member ID" },
          { status: 400 }
        );
      }

      const teamMember = await TeamMember.findById(id);
      if (!teamMember) {
        return NextResponse.json(
          { error: "Team member not found" },
          { status: 404 }
        );
      }

      return NextResponse.json(
        {
          teamMember,
        },
        { status: 200 }
      );
    }

    // Build filter object for multiple records
    const filter = {};

    if (role) {
      if (!["HOD", "Coordinator", "Assistant Coordinator"].includes(role)) {
        return NextResponse.json(
          {
            error:
              "Invalid role. Must be HOD, Coordinator, or Assistant Coordinator",
          },
          { status: 400 }
        );
      }
      filter.Role = role;
    }

    if (department) {
      filter.department = department;
    }

    if (year) {
      const yearNum = parseInt(year);
      if (![1, 2, 3, 4].includes(yearNum)) {
        return NextResponse.json(
          { error: "Invalid year. Must be 1, 2, 3, or 4" },
          { status: 400 }
        );
      }
      filter.year = yearNum;
    }

    if (activity !== null && activity !== undefined) {
      filter.activity = activity === "true";
    }

    // Fetch team members with filters
    const teamMembers = await TeamMember.find(filter).sort({ createdAt: -1 });

    return NextResponse.json(
      {
        message: "Team members retrieved successfully",
        count: teamMembers.length,
        teamMembers,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error fetching team members:", error);

    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
