import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/api/public/enquiries/contact")({
  server: {
    handlers: {
      POST: async ({ request }) => {
        const { handleEnquiry } = await import("@/lib/enquiry-action.server");
        return handleEnquiry(request, "contact");
      },
    },
  },
});