# Data dictionary and lifecycle

| Entity | Current representation | Constraints |
|---|---|---|
| Programme | category, title, description | Unique title; six disciplines |
| Visual | title-keyed alt, aliases, shape | One per programme; trusted source SVG |
| Learning topics | title-keyed three strings | Topic, risk, activity |
| Shortlist | newton-shortlist localStorage | Array of programme titles |
| Preparation | newton-prep-v1 localStorage | Integer task indices 0–7 |
| Practice progress | newton-learning-v1 localStorage | Programme titles; not grades |

Programme titles currently serve as keys; renaming requires coordinated migration of links and local preferences. Future stable identifiers should decouple display labels from identity.

No official student record is collected. Local data remains until cleared by the browser or user. WhatsApp handoff transfers control to an external service. Future admissions data requires a documented lawful basis, retention schedule, access policy and deletion process before launch.
