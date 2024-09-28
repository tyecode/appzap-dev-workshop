import { API_ENDPOINT } from "@/constants";

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
