# Operations and incident response

> Engineering documentation maintained by [LX Obsidian Labs](https://lxobsidian.co.za). Project: Newton’s 4th Training Academy. Institutional content remains subject to academy approval and applicable rights.

## Ownership
Academy: programme facts, fees, accreditation, educational approval and admissions. Developer: application code, deployment and technical remediation. Assign named operational owners before launch.

## Incident triage
P1: site unavailable or suspected data exposure. P2: admissions or core navigation broken. P3: isolated content or cosmetic defect. Record detection time, affected routes, commit, impact and actions. Do not include personal data in issue logs.

## Response
Confirm impact, inspect deployment and CI logs, reproduce using synthetic data, mitigate or roll back to last known-good deployment, verify smoke tests, communicate to academy owner, document root cause and preventive action.

## Routine maintenance
Review dependencies monthly, verify external links and programme facts before each intake, check accessibility after UI changes, and review ownership/contact details. Proposed cadence requires owner approval.
