# ADR 0002 — Device-local learner preferences

Status: Accepted for current release

## Decision
Keep shortlist, preparation and introductory quiz completion in browser localStorage. Do not use these values as credentials, official results or enrolment evidence.

## Alternatives
Server persistence enables synchronisation but requires identity and data governance. Session storage loses preferences when the session ends.

## Consequences
No account required; shared devices may expose preferences; browser clearing removes progress. Validate parsed values, deduplicate entries and provide reset controls. Future authenticated migration must be opt-in and must not interpret local completion as verified achievement.
