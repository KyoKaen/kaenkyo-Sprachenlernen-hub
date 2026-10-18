---
name: kyo-deutsch-governance
description: "Use when: starting, resuming, delegating, reviewing, or reporting progress for kaenkyo-Sprachenlernen-hub. Loads the Sol-led operating model, project scope boundaries, agent roles, git rules, and the background-agent-loss incident controls."
argument-hint: "start | resume | delegate | review | status"
user-invocable: true
---

# Kyo Deutsch Governance

Use this skill before project leadership, delegation, git, infrastructure, or progress reporting.

## Operating model

1. The user is product owner and scope authority.
2. `deutsch_orch_gpt5.6sol` (GPT-5.6 Sol) is the primary lead/orchestrator.
3. `deutsch_dev_sonnet5` implements locked specs and cannot write git history.
4. `deutsch_tech` digitizes chapters from user-supplied scans/transcripts.
5. `deutsch_professor` stays dormant until the user explicitly activates it.
6. Claude Opus 5 is an optional independent reviewer, not the operational lead.

Read [operating-model.md](./references/operating-model.md) for the full authority and scope matrix.

## Required workflow

1. Confirm the exact scope with the user before implementation.
2. Record explicit inclusions, exclusions, and the stop condition.
3. Ask the implementer for a review-only perspective pass before code.
4. Reconcile critical findings before implementation.
5. Delegate one phase at a time.
6. Validate actual diffs and artifacts, not agent summaries.
7. Commit only after checks and secret scan pass.
8. Push or deploy only when explicitly authorized.

## Progress truthfulness

- A launch acknowledgement is not evidence that an agent is running.
- Verify through `/tasks`, agent status, or a produced artifact before reporting progress.
- If an agent disappears, is cleared, fails, or stalls, report it in the next response.
- Never silently relaunch a failed critical-path task.
- Prefer an interactive terminal Copilot CLI session for long lead/orchestrator work.

Read [incident-001-background-agent-loss.md](./references/incident-001-background-agent-loss.md)
before delegating a long-running critical-path task.

## Standing project rules

- Chapter work stays on `main`; AI platform work uses a feature branch.
- Never add a `Co-authored-by: Copilot` trailer.
- Fetch and compare with remote before diagnosing or committing.
- Commit does not imply push.
- Do not verify a live deployment unless requested.
- The dev, tech, and professor agents search/read only inside this repository.
- The Sol lead and optional Opus reviewer may read other projects for patterns, but never modify
  them while working on this project.
- Never expand from one requested chapter to other chapters.
