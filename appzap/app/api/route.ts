import { API_ENDPOINT } from "@/constants";

export async function GET(req: Request) {
  const res = await fetch(`${API_ENDPOINT}/v3/stores/booking`);
  const data = await res.json();

  return Response.json(data.slice(0, 10));
}

export async function POST(req: Request) {
  const body = await req.json();
  const res = await fetch(`${API_ENDPOINT}/v4/create-booking`, {
    method: "POST",
    body: JSON.stringify(body),
    headers: {
      "Content-Type": "application/json",
    },
  });

  return Response.json({ status: "success", data: await res.json() });
}
