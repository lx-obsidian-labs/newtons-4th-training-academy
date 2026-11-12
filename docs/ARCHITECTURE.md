# Architecture and engineering decisions

## Current system

Browser → Cloudflare Pages static assets → React application → public document resources or external WhatsApp enquiry.

The application uses pathname-based presentation and query parameters for programme selection. Course data, introductory topics and visual metadata are bundled with the application. Shortlists, preparation and quiz progress use localStorage. No credentials or official student records should be stored there.

## Design decisions

- Static hosting minimises operational complexity and avoids collecting personal data on the site.
- SVG equipment illustrations are lightweight, accessible and independent of external image hosts.
- Public resources are printable; they are not access-controlled.
- Admissions enquiries are external handoffs, not confirmed registrations.

## Known technical debt

Extract catalogue data, routes, reusable components and learning logic from main.tsx. Introduce behavioural tests and typed domain models. Replace CSS-based route visibility with explicit route rendering after regression testing. Verify every course against academy-approved content.

## Proposed future architecture (not implemented)

Pages Functions for validated API requests; D1 for applications, enrolments and assessment metadata; private R2 for restricted documents; identity provider and server-side role enforcement; Turnstile for abuse prevention. Require data retention policy, audit logging, backup and restore testing, consent and institutional approval before collecting personal information.

## Threat boundaries

Treat query parameters and localStorage as untrusted. Never put secrets in Vite environment variables exposed to the browser. Do not rely on client-side role checks. Validate all future API inputs and authorisation server-side.
