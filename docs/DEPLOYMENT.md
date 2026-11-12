# Deployment runbook

> Engineering documentation maintained by [LX Obsidian Labs](https://lxobsidian.co.za). Project: Newton’s 4th Training Academy. Institutional content remains subject to academy approval and applicable rights.

1. Use Node.js 22. Install dependencies with npm ci when a lockfile is present; otherwise npm install.
2. Run npm run check and npm run build.
3. Configure Cloudflare Pages build command npm run build and output dist.
4. Deploy to a preview environment before production.
5. Smoke-test /, /programmes, /programme?course=Excavator, /visual-programmes, /compare, /learning, /student-planner, /resources, /admissions and /contact.
6. Confirm direct navigation and refresh work on every route; verify document links, mobile navigation and enquiry handoff.
7. Verify response headers and browser console. Record commit SHA, deployment URL and test results.

Rollback by promoting the last known-good Pages deployment. Re-run smoke tests. Never assume a GitHub commit proves successful deployment.

No production database migration is currently required. Future database changes require a separate migration and recovery plan.
