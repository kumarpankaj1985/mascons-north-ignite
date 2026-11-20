import { describe, expect, it } from "vitest";

const origin = process.env.TEST_APP_ORIGIN || "http://localhost:8080";

describe("Legacy product links and public discovery", () => {
  it.each(["/card-management-solution", "/branchless-banking"])(
    "%s permanently redirects to the existing Solutions page",
    async (path) => {
      const response = await fetch(`${origin}${path}`, { redirect: "manual" });
      expect(response.status).toBe(301);
      const location = response.headers.get("Location");
      expect(location).not.toBeNull();
      expect(new URL(location || "", origin).pathname).toBe("/services");
      const destination = await fetch(new URL(location || "", origin));
      expect(destination.status).toBe(200);
    },
  );

  it("uses mascons.in for the robots sitemap directive", async () => {
    const response = await fetch(`${origin}/robots.txt`);
    expect(response.status).toBe(200);
    const text = await response.text();
    const directives = text.split(/\r?\n/).filter((line) => line.startsWith("Sitemap:"));
    expect(directives).toEqual(["Sitemap: https://mascons.in/sitemap.xml"]);
  });

  it("lists only the five current public pages on mascons.in", async () => {
    const response = await fetch(`${origin}/sitemap.xml`);
    expect(response.status).toBe(200);
    const text = await response.text();
    const urls = [...text.matchAll(/<loc>([^<]+)<\/loc>/g)].map((match) => match[1]);
    expect(urls).toEqual([
      "https://mascons.in/",
      "https://mascons.in/services",
      "https://mascons.in/about",
      "https://mascons.in/contact",
      "https://mascons.in/book-a-demo",
    ]);
  });

  it("keeps the deleted standalone AI page unavailable", async () => {
    const response = await fetch(`${origin}/agentic-ai`, { redirect: "manual" });
    expect(response.status).toBe(404);
  });
});