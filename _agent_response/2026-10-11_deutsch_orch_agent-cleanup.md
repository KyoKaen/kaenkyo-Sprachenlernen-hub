# Agent Cleanup Result

**Date:** 2026-10-11  
**Agent:** `deutsch_orch_gpt5.6sol`  
**Scope:** Section 1 of `CURRENT_HANDOFF.md` only

## Decision

Keep the four project agents in the repository's existing `.claude/agents/` directory. Do not
duplicate them under `.github/agents/`.

Current VS Code documentation supports both workspace locations:

- `.github/agents/` is the default Copilot/VS Code workspace location.
- `.claude/agents/` is the supported Claude-format workspace location.

Both locations are project-local when they are inside this repository. The unwanted sibling-project
exposure came from copies under `/Users/kyokaen/dev/.github/agents/`, not from the repository's
`.claude/agents/` location. Keeping identical agents in both repo-local locations would introduce
duplicate or ambiguous discovery without improving isolation.

Reference:
<https://code.visualstudio.com/docs/agent-customization/custom-agents#_custom-agent-file-locations>

## Canonical Agent Paths

- `.claude/agents/deutsch_orch_gpt5.6sol.agent.md`
- `.claude/agents/deutsch_dev_sonnet5.agent.md`
- `.claude/agents/deutsch_professor.agent.md`
- `.claude/agents/deutsch_tech.agent.md`

No `.github/agents/` directory was created.

## Parent Duplicates

The four parent migration copies remain unchanged:

- `/Users/kyokaen/dev/.github/agents/kyo_deutsch_orche_gpt5sol.agent.md`
- `/Users/kyokaen/dev/.github/agents/kyo_deutsch_dev_sonnet5.agent.md`
- `/Users/kyokaen/dev/.github/agents/kyo_deutsch_professor.agent.md`
- `/Users/kyokaen/dev/.github/agents/kyo_deutsch_tech.agent.md`

No parent file was modified or deleted. The user will control any deletion.

## Validation Results

- Workspace root: `/Users/kyokaen/dev/kaenkyo-Sprachenlernen-hub`
- Branch: `feature/ai_practice_chapter25`
- Remote refreshed with `git fetch --prune origin`
- Remote comparison: `origin/main...HEAD` = 0 behind, 4 ahead
- YAML frontmatter parsed successfully for all four canonical agents
- Each frontmatter `name` matches its renamed filename
- Every agent has a non-empty `description` and `model`
- No stale `kyo_deutsch*` identity or parent-agent path remains in the four canonical files
- The current Copilot SDK session lists all four renamed agents
- A review-only invocation of `deutsch_dev_sonnet5` resolved successfully; it created no files
- Repository `.github/agents/` is absent, avoiding duplicate definitions

No application checks were run because SPEC-001 and application work were explicitly excluded.

## Files Changed by This Operation

- `_agent_response/2026-10-11_deutsch_orch_agent-cleanup.md` — created

The four agent definitions were validated but not edited. A proposed copy operation was rejected
before application and changed no files.

## Git

- Commit created: none
- Push performed: none
- No staging was performed
- Commit and push require an explicit user request

The working tree already contained agent renames and unrelated handoff/spec/governance changes
before this operation. They remain uncommitted and were not altered here.

## Unresolved Cleanup

The parent `/Users/kyokaen/dev/.github/agents/kyo_deutsch_*` copies remain. They can expose these
project-specific agents when `/Users/kyokaen/dev` is opened as a workspace. Removal is intentionally
left to the user.

## Recommended Next Step

1. The user may manually remove the four parent migration copies.
2. Reload the repository workspace and confirm only the four renamed project agents appear.
3. Do not resume SPEC-001 until the user explicitly approves that next phase.

## Exact Next-Agent Instruction

Read `CURRENT_HANDOFF.md` and this response. Treat `.claude/agents/` as the canonical supported
project-agent location. Do not recreate `.github/agents/`, do not delete parent files, and do not
start SPEC-001 without explicit user approval.
