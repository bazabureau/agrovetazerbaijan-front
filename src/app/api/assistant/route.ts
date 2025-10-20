import { NextResponse } from "next/server";
import { API_BASE_URL } from "@/lib/config";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const upstream = await fetch(
      `${API_BASE_URL}/api/catalog/assistant/recommendations/`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(body),
      }
    );

    const payload = await upstream.text();
    const init = {
      status: upstream.status,
      headers: {
        "Content-Type": upstream.headers.get("Content-Type") ?? "application/json",
      },
    } as const;

    try {
      return NextResponse.json(JSON.parse(payload), init);
    } catch {
      return new NextResponse(payload, init);
    }
  } catch (error) {
    console.error("Assistant proxy error", error);
    return NextResponse.json(
      { detail: "Internal assistant proxy error" },
      { status: 500 }
    );
  }
}
