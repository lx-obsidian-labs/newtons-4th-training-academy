# Engineering continuity and successor handover

> Engineering documentation maintained by [LX Obsidian Labs](https://lxobsidian.co.za). Project: Newton’s 4th Training Academy.

## Start here
This repository is the source of truth for the static public training platform. Read the [architecture](ARCHITECTURE.md), [developer handbook](DEVELOPER-GUIDE.md), [data model](DATA-MODEL.md) and [deployment runbook](DEPLOYMENT.md). No original developer assistance should be required to build the application.

## Recovery procedure
1. Obtain authorised access to the organisation repository and hosting account through their respective owners. Do not use another person's credentials.
2. Clone the repository, inspect the latest commit and release history, install Node 22 and dependencies, run npm run check and npm run build.
3. Preview locally; verify all routes using the release checklist.
4. Recover Cloudflare Pages configuration from the authorised account: build command npm run build, output dist, production branch master (verify actual configuration).
5. Verify domain ownership, DNS, deployment permissions and external admissions contact details with the academy.
6. Deploy a preview, obtain approval, then promote to production. Record evidence and rollback target.

## Ownership and access register
Repository: lx-obsidian-labs/newtons-4th-training-academy. Hosting: Cloudflare Pages. Developer organisation: LX Obsidian Labs. Institutional owner: academy. Named successor, billing owner, recovery contacts and credential vault location must be recorded privately by authorised owners; they are not verified here. Never commit secrets.

## Maintenance invariants
Programme titles currently link catalogue, illustrations, learning topics and handbooks. Local preferences are not official records. Public materials are not protected documents. Admissions is an external enquiry handoff. Preserve attribution and third-party notices; verify rights before redistribution.

## Continuity drill
A successor should independently clone, build, preview, modify a synthetic programme entry on a branch, run checks, deploy a preview and demonstrate rollback. Record results and unresolved access dependencies. Repeat after major architecture changes. No drill has yet been verified.

## Escalation
For technical ownership use the authorised LX Obsidian Labs contact channel; for institutional facts use academy admissions. If either is unavailable, preserve the last known-good deployment and avoid publishing unverified changes.
