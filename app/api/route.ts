import { API_ENDPOINT } from "@/constants";

export async function GET() {
  const res = await fetch(`${API_ENDPOINT}/v3/stores/booking`);
  const data = await res.json();

  return Response.json(data.slice(0, 10));
}
