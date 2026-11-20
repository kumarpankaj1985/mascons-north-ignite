import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/branchless-banking")({
  beforeLoad: () => {
    throw redirect({ to: "/services", statusCode: 301 });
  },
});