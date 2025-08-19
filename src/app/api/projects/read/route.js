import Project from "@/models/projects";
import { NextResponse } from "next/server";
import dbConnect from "@/lib/db";
import mongoose from "mongoose";

export async function GET(request) {
  try {
    await dbConnect();

    const { searchParams } = new URL(request.url);
    const id = searchParams.get("id");
    const slug = searchParams.get("slug");
    const category = searchParams.get("category");
    const year = searchParams.get("year");
    const weightClass = searchParams.get("weightClass");
    const search = searchParams.get("search");
    const page = parseInt(searchParams.get("page")) || 1;
    const limit = parseInt(searchParams.get("limit")) || 10;

    // If ID is provided, fetch specific project
    if (id) {
      if (!mongoose.Types.ObjectId.isValid(id)) {
        return NextResponse.json(
          { error: "Invalid project ID" },
          { status: 400 }
        );
      }

      const project = await Project.findById(id);
      if (!project) {
        return NextResponse.json(
          { error: "Project not found" },
          { status: 404 }
        );
      }

      return NextResponse.json(
        {
          success: true,
          project,
        },
        { status: 200 }
      );
    }

    // If slug is provided, fetch project by slug
    if (slug) {
      const project = await Project.findOne({ slug: slug.toLowerCase() });
      if (!project) {
        return NextResponse.json(
          { error: "Project not found" },
          { status: 404 }
        );
      }

      return NextResponse.json(
        {
          success: true,
          project,
        },
        { status: 200 }
      );
    }

    // Build filter object for multiple records
    const filter = {};

    if (category) {
      filter.category = new RegExp(category, "i");
    }

    if (year) {
      const yearNum = parseInt(year);
      if (!isNaN(yearNum)) {
        filter.year = yearNum;
      }
    }

    if (weightClass) {
      filter.weightClass = new RegExp(weightClass, "i");
    }

    // Add search functionality
    if (search) {
      filter.$or = [
        { name: new RegExp(search, "i") },
        { slug: new RegExp(search, "i") },
        { category: new RegExp(search, "i") },
        { weightClass: new RegExp(search, "i") },
        { shortDescription: new RegExp(search, "i") },
        { description: new RegExp(search, "i") },
      ];
    }

    // Calculate pagination
    const skip = (page - 1) * limit;

    // Fetch projects with filters and pagination
    const projects = await Project.find(filter)
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(limit);

    // Get total count for pagination
    const totalCount = await Project.countDocuments(filter);
    const totalPages = Math.ceil(totalCount / limit);

    // Get statistics
    const stats = {
      totalProjects: await Project.countDocuments(),
      categories: await Project.distinct("category"),
      weightClasses: await Project.distinct("weightClass"),
      years: await Project.distinct("year"),
    };

    return NextResponse.json(
      {
        success: true,
        message: "Projects retrieved successfully",
        data: {
          projects,
          pagination: {
            page,
            limit,
            total: totalCount,
            pages: totalPages,
            hasNext: page < totalPages,
            hasPrev: page > 1,
          },
          stats,
        },
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error fetching projects:", error);

    return NextResponse.json(
      { success: false, error: "Internal server error" },
      { status: 500 }
    );
  }
}
