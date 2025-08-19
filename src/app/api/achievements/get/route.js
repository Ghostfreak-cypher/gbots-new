import Achievement from "@/models/Achievement";
import dbConnect from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET(request) {
  try {
    await dbConnect();

    const { searchParams } = new URL(request.url);
    const id = searchParams.get("id");
    const limit = searchParams.get("limit");
    const page = searchParams.get("page");

    // If ID is provided, fetch specific achievement
    if (id) {
      const achievement = await Achievement.findById(id);

      if (!achievement) {
        return NextResponse.json(
          { error: "Achievement not found" },
          { status: 404 }
        );
      }

      return NextResponse.json(
        {
          message: "Achievement retrieved successfully",
          achievement,
        },
        { status: 200 }
      );
    }

    // Fetch all achievements with optional pagination
    let query = Achievement.find().sort({ createdAt: -1 });

    if (limit) {
      const limitNum = parseInt(limit);
      const pageNum = parseInt(page) || 1;
      const skip = (pageNum - 1) * limitNum;

      query = query.skip(skip).limit(limitNum);
    }

    const achievements = await query;
    const total = await Achievement.countDocuments();

    return NextResponse.json(
      {
        message: "Achievements retrieved successfully",
        achievements,
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
    console.error("Error fetching achievements:", error);

    if (error.name === "CastError") {
      return NextResponse.json(
        { error: "Invalid achievement ID format" },
        { status: 400 }
      );
    }

    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
