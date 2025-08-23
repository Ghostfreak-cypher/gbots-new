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
    const batch = searchParams.get("batch");
    const isAlumni = searchParams.get("isAlumni");
    const isActive = searchParams.get("isActive");

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
      filter.role = role;
    }

    if (department) {
      filter.department = department;
    }

    if (batch) {
      filter.batch = batch;
    }

    if (isAlumni !== null && isAlumni !== undefined) {
      filter.isAlumni = isAlumni === "true";
    }

    if (isActive !== null && isActive !== undefined) {
      filter.isActive = isActive === "true";
    }

    // Default to showing active members if no specific filter
    if (Object.keys(filter).length === 0) {
      filter.isActive = true;
    }

    // Fetch team members with filters and add ID field
    const teamMembers = await TeamMember.find(filter)
      .sort({ batch: -1, _id: 1 }) // Sort by batch descending, then by ID ascending
      .lean() // Convert to plain objects for better performance
      .exec();

    // Add ID field to each member for frontend sorting
    const membersWithId = teamMembers.map(member => ({
      ...member,
      id: member._id.toString(), // Convert ObjectId to string
      _id: member._id.toString() // Also keep _id as string for compatibility
    }));

    return NextResponse.json(
      {
        message: "Team members retrieved successfully",
        count: membersWithId.length,
        teamMembers: membersWithId,
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
