# Threat model

Scope: static React application, public assets, browser storage and external enquiry handoff.

| Threat | Existing control | Residual risk / action |
|---|---|---|
| Malicious query parameter | Catalogue lookup and React text escaping | Test malformed and unknown course names |
| Local storage tampering | Defensive parsing in preference features | Treat all local values as untrusted; never authorise with them |
| SVG injection | Bundled source-controlled shapes | Review every visual change; never accept user SVG markup |
| Clickjacking | X-Frame-Options DENY | Verify deployed headers |
| Dependency compromise | Pinned direct dependencies and CI build | Review lockfile and run dependency audit |
| Personal data exposure | No official records collected by app | External messaging privacy and future backend require review |
| Misleading training claims | Confirmation notices | Academy approval and periodic review |

Future API threat modelling must cover authentication, object-level authorisation, injection, abuse, upload validation and audit integrity before release.
