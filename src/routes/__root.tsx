import { Outlet, Link, createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

import appCss from "../styles.css?url";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-gradient-brand">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-gradient-brand px-5 py-2.5 text-sm font-semibold text-brand-foreground shadow-glow hover:opacity-90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Mascons Canada — Intelligent Fintech & Agentic AI" },
      { name: "description", content: "White-labeled fintech platforms and Agentic AI solutions for Canada and the USA. Book a free AI audit today." },
      { name: "author", content: "Mascons" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:title", content: "Mascons Canada — Intelligent Fintech & Agentic AI" },
      { name: "twitter:title", content: "Mascons Canada — Intelligent Fintech & Agentic AI" },
      { property: "og:description", content: "White-labeled fintech platforms and Agentic AI solutions for Canada and the USA. Book a free AI audit today." },
      { name: "twitter:description", content: "White-labeled fintech platforms and Agentic AI solutions for Canada and the USA. Book a free AI audit today." },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/da3f3301-1563-4707-aff7-a20c8e74aade/id-preview-f638ce1c--8104feea-edda-49e5-824c-57cdf40578c3.lovable.app-1776599434562.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/da3f3301-1563-4707-aff7-a20c8e74aade/id-preview-f638ce1c--8104feea-edda-49e5-824c-57cdf40578c3.lovable.app-1776599434562.png" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <Outlet />
      </main>
      <SiteFooter />
    </div>
  );
}
