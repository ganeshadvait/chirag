import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // Add current timestamp if not provided
    const leadData = {
      ...body,
      date_time: body.date_time || new Date().toISOString(),
    };

    const apiUrl = "https://chiragapis.onrender.com/api/leads/submit";

    const response = await fetch(apiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(leadData),
    });

    const data = await response.json();

    if (!response.ok) {
      return NextResponse.json(
        { error: "Failed to submit lead", details: data },
        { status: response.status }
      );
    }

    return NextResponse.json(data, { status: 200 });
  } catch (error) {
    console.error("Lead submission proxy error:", error);
    return NextResponse.json(
      { error: "Internal server error", message: (error as Error).message },
      { status: 500 }
    );
  }
}

export async function GET() {
  return NextResponse.json(
    { message: "Use POST method to submit leads" },
    { status: 405 }
  );
}
