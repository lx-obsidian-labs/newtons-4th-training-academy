# ADR 0001 — Static-first delivery

> Engineering documentation maintained by [LX Obsidian Labs](https://lxobsidian.co.za). Project: Newton’s 4th Training Academy. Institutional content remains subject to academy approval and applicable rights.

Status: Accepted for current release

## Context
The academy needs accessible programme discovery and learning resources without collecting official student records.

## Decision
Use React/Vite on Cloudflare Pages; keep public learning content static and use WhatsApp for enquiries. Store only non-sensitive preferences locally.

## Alternatives
A full LMS offers central records but introduces identity, privacy and operational obligations. A CMS simplifies editing but adds publishing governance and hosting complexity.

## Consequences
Low operational overhead and offline-printable resources; no authenticated academic records or cross-device synchronisation. Revisit when institutional approval, data ownership and backend funding are established.

## Verification
Run catalogue checks, production build and route smoke tests. Confirm external handoff and absence of sensitive local storage.
