# Project decisions

- Keep TanStack Start file-based routes and route-local metadata; this preserves navigation and per-page search previews.
- Keep the website focused on fintech solutions; AI mentions belong only to fintech capabilities, not a separate AI product line.
- Store generated hero footage through a Lovable Assets pointer; this keeps large video files out of the repository.
- Contact and demo submissions use dedicated public server actions that validate, throttle, save first, and send fixed-recipient owner notices through the managed email helper; this protects recipient selection and preserves enquiries if email fails.
- Keep email rendering server-only and pin entities resolution in Vite; this prevents browser credential exposure and incompatible email-renderer imports.
