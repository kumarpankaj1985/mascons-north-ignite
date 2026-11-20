import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/card-management-solution")({
  beforeLoad: () => {
    throw redirect({ to: "/services", statusCode: 301 });
  },
});