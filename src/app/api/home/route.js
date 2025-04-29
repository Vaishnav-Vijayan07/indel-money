import axios from "axios";

export async function GET() {
  try {
    const response = await axios.get(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/web/home`, { timeout: 5000 });
    console.log("response", response);
    
    return new Response(JSON.stringify({ status: "success", data: response.data.data }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    return new Response(
      JSON.stringify({ status: "error", message: error.response?.data?.message || "Failed to fetch home data" }),
      {
        status: error.response?.status || 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
}
