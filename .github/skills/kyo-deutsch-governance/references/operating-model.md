# Operating Model

## Authority matrix

| Role | Model | Authority |
|---|---|---|
| Product owner | User | Scope, UX decisions, release approval |
| Lead/orchestrator | GPT-5.6 Sol | Design, specs, reconciliation, validation, git, infra, deploy delegation |
| Implementer | Claude Sonnet 5 | Code against a locked spec; no git writes |
| Chapter tech | GPT-5.6 Terra | Chapter modules and print sources only |
| German professor | Claude Opus 4.8 | Dormant until explicitly activated |
| Independent reviewer | Claude Opus 5 | Optional review; no default lead authority |

## Repository access

- Dev, chapter tech, and professor: search/read/write only inside this repository and only within
  their declared file ownership.
- Sol lead and Opus reviewer: may read other projects to understand established patterns.
- Cross-project access is read-only. Never modify another project during this project's work.
- The Sol lead may contact `gcp_deploy` when deployment is explicitly approved.

## SPEC-001 current scope

- Chapter 25 only.
- Route: `#practice-25`.
- Corpus: `practice/chapter25.json`.
- Deterministic mock first; no provider call or key before user validation.
- Desktop web only.
- No changes, inspection-driven logic, or entry-point injection for any other chapter.
- The Sol lead selects a practice label that contains neither `Notizen` nor the 📝 icon.
- Hard stop at Phase V for user validation.

## Terminal Copilot CLI

For persistent implementation leadership:

1. `cd /Users/kyokaen/dev/kaenkyo-Sprachenlernen-hub`
2. Start `copilot`.
3. Run `/agent deutsch_orch_gpt5.6sol`.
4. Run `/model gpt-5.6-sol --repo` if the agent model is not already selected.
5. Use `/tasks` to monitor delegated work.
6. Use `/autopilot` only after the spec is locked and permissions are scoped to this repository.

Do not use `/allow-all` as a substitute for scoped permissions. Add only the repository directory;
grant outside paths read-only and only when the lead genuinely needs a pattern reference.
