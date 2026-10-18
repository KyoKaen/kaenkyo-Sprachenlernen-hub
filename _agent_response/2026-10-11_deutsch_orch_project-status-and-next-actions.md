# Project Status and Orchestration Readiness

**Date:** 2026-10-11

**Agent:** `deutsch_orch_gpt5.6sol`

**Scope:** First-session context acquisition, operating-model confirmation, and next-action planning

**Application implementation:** Not authorized and not started

## Outcome

The new orchestrator session has enough verified context to lead the project. The immediate
agent-migration issue is understood, the operating model is accepted, the current project and Git
state are known, and the next actions and approval gates are explicit.

This readiness does not authorize resuming SPEC-001. The orchestrator remains at the agent
continuity and verification boundary until the user explicitly advances the project.

## Why the Agent Migration Happened

The original session was opened with `/Users/kyokaen/dev` as its workspace root. VS Code therefore
treated the parent workspace as the customization scope and copied this project's agents into:

```text
/Users/kyokaen/dev/.github/agents/
```

That was incorrect because the German-learning agents are project-specific and should not be
exposed to sibling projects.

The repository-local `.claude/agents/` directory is a supported VS Code workspace location and is
already working. The problem was the original workspace boundary, not the `.claude/agents/`
format. The four renamed agents therefore remain canonical in this repository:

```text
.claude/agents/deutsch_orch_gpt5.6sol.agent.md
.claude/agents/deutsch_dev_sonnet5.agent.md
.claude/agents/deutsch_professor.agent.md
.claude/agents/deutsch_tech.agent.md
```

No repository `.github/agents/` directory should be added merely for convention. Duplicate
definitions would increase ambiguity without improving isolation.

The user will manually remove the four incorrect parent copies after confirming the project-root
workspace discovers the current repo-local agents. The original session remains available during
that verification and must not be deleted yet.

## Authority and Operating Model

| Role | Authority |
|---|---|
| User | Product owner; scope, UX, release, and approval authority |
| `deutsch_orch_gpt5.6sol` | Primary lead; scope, design, reconciliation, validation, Git, infrastructure, and deployment delegation |
| `deutsch_dev_sonnet5` | Implements locked application specs; no Git writes |
| `deutsch_tech` | Chapter digitization from supplied scans/transcripts; owns chapter and print work |
| `deutsch_professor` | Read-only German-language validation; dormant until explicitly activated |
| Claude Opus 5 | Optional independent reviewer, not operational lead |

The orchestrator may consult the original session when a real context gap appears. Consultations
must be targeted rather than substituting for independent judgment, and the relevant answer and
resulting decision must be persisted in `_agent_response/`.

## Current Repository State

- Repository root: `/Users/kyokaen/dev/kaenkyo-Sprachenlernen-hub`
- Branch: `feature/ai_practice_chapter25`
- HEAD at handoff verification: `8b3b002`
- Remote comparison after fetch: 0 behind and 4 ahead of `origin/main`
- No push or merge is authorized
- Commit and push both require an explicit user request
- The working tree is intentionally dirty

Known working-tree categories include:

- tracked deletion of the four old `kyo_`-prefixed agent filenames;
- untracked renamed agent definitions under `.claude/agents/`;
- governance-skill and operating-model updates;
- SPEC-001 edits and a possible duplicate spec requiring later comparison;
- `_agent_response/` communication artifacts;
- an untracked terminal guidance file.

These categories must be classified again before any future staging. Bulk staging is prohibited.

## Application and SPEC-001 Status

The application is a static German grammar learning app with 85 chapters, served through GitHub
Pages. Chapter content uses JavaScript modules and page scans remain reference material under
`print/`.

Phase 0 security and governance work exists. The Chapter 25 AI-practice implementation has not
started:

- no `practice/` directory;
- no `api/` directory;
- no `#practice-25` route;
- no practice entry point.

The locked pilot scope remains:

1. Chapter 25 only.
2. Route `#practice-25`.
3. Corpus `practice/chapter25.json`.
4. Page 65 is the only entry point.
5. Deterministic mock first.
6. No real provider call, provider adapter, SDK, or real key before user validation.
7. Desktop web only.
8. No PWA, mobile app, App Store, Cloud Run, push, or deployment in the pilot.
9. Phase V is a hard stop for user validation.
10. No practice work or inspection-driven integration for another chapter.
11. `chapters/chapter50-note.js` remains hands-off.

The canonical and duplicate SPEC-001 files must be compared and reconciled before implementation,
but they are not part of the current agent-migration operation.

## Next Actions

### 1. Finish agent continuity verification

1. Confirm the repository itself is the active VS Code workspace.
2. Confirm the picker exposes the four renamed repo-local agents with their intended roles/models.
3. Keep the original session available while confidence is established.
4. The user manually removes the four parent migration copies.
5. Reload the project workspace and confirm no incorrect or duplicate German-project agents remain.

### 2. Preserve context explicitly

If this orchestrator identifies a genuine ambiguity not answered by the handoff or repository,
request a focused consultation from the original session. Save the consultation result and its
effect on the plan in `_agent_response/`.

### 3. Resume SPEC-001 only after explicit approval

When the user explicitly authorizes resumption:

1. Re-verify Git and remote state.
2. Compare the canonical and duplicate spec files without deleting either first.
3. Record and reconcile the spec decision.
4. Obtain the required review-only perspective from `deutsch_dev_sonnet5`.
5. Resolve critical findings before implementation.
6. Delegate one bounded phase at a time.
7. Validate actual diffs, behavior, secrets, and scope independently.
8. Stop at Phase V for user validation.

## Agent Communication Convention

For this project, `_agent_response/` is the single persistent collaboration channel.

Store substantive:

- agent responses and replies;
- drafted briefs;
- consultation notes;
- review findings;
- decisions and reconciliations;
- task and session handoffs.

Use the exact output path supplied by a handoff. Otherwise use:

```text
_agent_response/YYYY-MM-DD_<agent>_<topic>.md
```

Never overwrite an existing artifact. Include scope, decisions, files changed, validation and
results, Git actions, blockers, approvals needed, and exact continuation instructions. Keep the
final chat response concise and point to the artifact.

The directory is currently untracked and not ignored. Do not stage or commit its contents unless
the user explicitly requests it.

## LexiBridge Pattern Review

A read-only review of `/Users/kyokaen/dev/lexibridge` informed the communication convention:
persist complete evidence, keep chat concise, never overwrite reports, and make workflow
continuation explicit.

The following LexiBridge-specific choices were deliberately not imported:

- separate `_agent_brief/` and `_agent_response/` roots;
- per-agent and runtime-model subdirectories;
- ignored/local-only report policy;
- LexiBridge-specific Git-agent roles;
- worktree-specific report routing.

This project keeps its existing, simpler `_agent_response/` convention unless the user explicitly
changes it.

## Blocked or Needs Approval

- No technical blocker prevents future leadership.
- The user still needs to complete and verify the manual parent-agent cleanup.
- SPEC-001 remains blocked on explicit user authorization to resume.
- No commit, push, merge, deployment, or destructive cleanup is authorized.

## Exact Next-Agent Instruction

Read `CURRENT_HANDOFF.md`, the latest dated response, and `_agent_response/README.md`. Treat the
repo-local `.claude/agents/` files as canonical. Preserve the original session until the user
confirms continuity. Do not resume SPEC-001, mutate Git, delete files, or create duplicate agent
definitions without explicit user direction.
