# newtons-4th-training-academy — Documentation Verification Matrix

**Reviewed:** 2026-11-07  
**Scope:** Next.js 14 training academy website  
**Verification status:** Repository structure and package scripts inspected; runtime, CI and deployment not certified by this document.

## Reproducible local baseline

Use a clean checkout and the checked-in npm lockfile. Verify the supported Node version and required environment variable **names** first.

```bash
npm ci
npm run build
```

The manifest's `npm run lint` uses `next lint`; verify compatibility with the installed Next.js version before treating it as a gate.

## Acceptance matrix

| Area | Required evidence | Status |
| --- | --- | --- |
| Clean installation | Lockfile-respecting installation on supported Node version | Not executed here |
| Lint / type safety | Command output and dated CI link, if configured | Not verified |
| Build | Successful build output for reviewed SHA | Not verified |
| Key user flows | Browser tests with positive, negative and error cases | Not verified |
| Authorization and privacy | Access-control and data-handling review | Not verified |
| Mobile and accessibility | Keyboard, screen reader and viewport checks | Not verified |
| Deployment | Live URL, deployment ID and production smoke test | Not verified |
| Content and publication | Rights, attribution and owner approval | Not verified |

## Project-specific review

Review course content and accreditation claims, enrolment/contact flows, public business contact details and publication authorization.

## Release evidence form

```md
Commit SHA:
Reviewer and date:
Node/npm versions:
Environment variable names (never values):
Install result:
Lint/typecheck result:
Build result:
Browser/functional test result:
Security/privacy review:
Live deployment verification:
Publication permission:
Known blockers:
```

## Documentation maintenance

Update this matrix whenever the implementation, integrations, deployment or public claims change. Do not present a planned feature as shipped or a configured workflow as passing without a linked run.

[README](README.md) · [Portfolio documentation standard](https://github.com/lx-obsidian-labs/lx-obsidian-labs/blob/main/DOCUMENTATION_QUALITY_STANDARD.md)
