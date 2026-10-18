# Handoff to `deutsch_orch_gpt5.6sol`

**Prepared:** 2026-10-11  
**Repository:** `/Users/kyokaen/dev/kaenkyo-Sprachenlernen-hub`  
**Required workspace root:** this repository itself, **not** `/Users/kyokaen/dev`

## 1. Immediate mission: agent-location cleanup

The user noticed VS Code migrating project agents from the repository's legacy `.claude/agents/`
location into the parent workspace:

```text
/Users/kyokaen/dev/.github/agents/
```

That parent location is wrong for these project-specific agents because it exposes them to sibling
projects. The desired final state is:

```text
kaenkyo-Sprachenlernen-hub/.github/agents/
```

The current session deliberately did **not** delete or modify parent copies. Handle cleanup only
after verifying the new workspace root and obtaining any needed user approval for modifying the
parent directory.

### Parent migration copies currently observed

```text
/Users/kyokaen/dev/.github/agents/kyo_deutsch_dev_sonnet5.agent.md
/Users/kyokaen/dev/.github/agents/kyo_deutsch_orche_gpt5sol.agent.md
/Users/kyokaen/dev/.github/agents/kyo_deutsch_professor.agent.md
/Users/kyokaen/dev/.github/agents/kyo_deutsch_tech.agent.md
```

These were read only. Do not assume they are canonical merely because VS Code placed them there.

### Renamed repo-local legacy agents

The user requested removal of the `kyo_` prefix before opening the new orchestrator session:

```text
.claude/agents/deutsch_orch_gpt5.6sol.agent.md
.claude/agents/deutsch_dev_sonnet5.agent.md
.claude/agents/deutsch_professor.agent.md
.claude/agents/deutsch_tech.agent.md
```

Their internal `name:` values and repository references were updated to match.

### Recommended cleanup sequence

1. Confirm VS Code's workspace root is this repository.
2. Read the four renamed repo-local agents and validate YAML frontmatter.
3. Compare them with the parent migration copies.
4. Move/copy the renamed canonical versions into this repository's official workspace location:

   ```text
   .github/agents/
   ```

5. Confirm all four are discoverable from the agent picker in the repository workspace.
6. Only after successful discovery:
   - remove the legacy repo `.claude/agents/` copies;
   - ask the user before removing the four parent `/Users/kyokaen/dev/.github/agents/kyo_deutsch_*`
     duplicates.
7. Do not touch any non-German parent agent.
8. Record the cleanup in a dated `_agent_response` file.

The official VS Code workspace location is `.github/agents/*.agent.md`.

## 2. Agent roles after rename

| Agent | Model | Role |
|---|---|---|
| `deutsch_orch_gpt5.6sol` | GPT-5.6 Sol | Lead/orchestrator: scope, design, validation, git, infrastructure |
| `deutsch_dev_sonnet5` | Claude Sonnet 5 | Implementation from locked specs; no git writes |
| `deutsch_tech` | GPT-5.6 Terra | Chapter digitization from scans/transcripts |
| `deutsch_professor` | Claude Opus 4.8 | Read-only German validation; dormant until user activates it |

Claude Opus 5 is an optional independent reviewer, not the operational lead.

## 3. Git state

At handoff preparation:

```text
branch: feature/ai_practice_chapter25
HEAD:   8b3b002 Reconcile Chapter 25 practice governance
```

The branch was observed as **4 commits ahead of `origin/main` and 0 behind**.

Important local commits:

```text
8b3b002 Reconcile Chapter 25 practice governance
f243c29 Phase 0: gitignore secrets and add SPEC-001
f9b2ead Add repo-local agent harness
2acf14e Add chapter 48 module and page scans
044b9bb Fix mismatched content in chapters 51 and 53
```

Do not push or merge without explicit user authorization.

### Working tree

The working tree is intentionally dirty because of VS Code migration, agent renaming, and handoff
creation. Inspect `git status --short` before any staging. Expected categories include:

- deletions/renames under `.claude/agents/`;
- new renamed repo-local agents;
- project-reference updates;
- `_agent_response/`;
- legacy/untracked handoff or duplicate spec files that require review.

Do not bulk-stage with `git add -A` until every unexpected file has been classified.

## 4. Application status

- Chapter validator baseline: **45 modules, 0 problems**.
- No AI-practice implementation exists yet:
  - no `practice/` directory;
  - no `api/` directory;
  - no `#practice-25` integration.
- Phase 0 security/governance work exists; implementation Phases 1–3 are **not started**.
- The prior automatic delegation attempts failed or were cancelled. Do not infer implementation
  from specs or plans.

## 5. Current SPEC-001 scope

Canonical spec:

```text
.claude/specs/SPEC-001-practice-pages.md
```

Before implementation, resolve any stale duplicate spec such as:

```text
.claude/specs/SPEC-001-note-pages-ai-practice.md
```

Do not delete a duplicate until comparing it with the canonical spec and recording the decision.

### User-locked scope

1. Chapter 25 only.
2. Route `#practice-25`.
3. Corpus `practice/chapter25.json`.
4. Only page 65 receives a practice entry point.
5. Deterministic mock first.
6. Zero real LLM/provider calls and zero real keys before user validation.
7. Desktop web only.
8. No PWA, iOS, Android, App Store, Cloud Run, push, or deployment in the pilot.
9. Stop at Phase V for user validation.
10. Do not inspect or modify other chapters for practice integration.
11. `chapters/chapter50-note.js` is unrelated personal content and is hands-off.

Suggested button label already accepted in governance context: `💬 KI-Praxis`.

## 6. Project conventions and standing rules

- Chapter modules contain formatted content only, with no embedded images.
- Page scans stay in `print/` as references.
- `tools/validate_chapters.py` enforces parse/export/routing/HTML/no-image rules.
- Use `tools/import_page.sh` for page photos.
- Preserve the book's title structure and design as closely as possible.
- Strip the user's filled practice answers from digitized exercises.
- Fetch and compare with remote before diagnosing or committing.
- Never add a `Co-authored-by: Copilot` trailer.
- Commit does not imply push.
- Do not verify a live site unless asked.
- Do not propose or execute out-of-scope chapter work.
- Other projects may be read by the orchestrator for patterns but must never be modified.
- The dev, tech, and professor agents are confined to this repository.

## 7. Later dictionary direction — not current scope

The user wants a German-learning dictionary later, after the practice pilot is validated.

- Explanations may use Chinese, Japanese, English, and French.
- Word-class-specific facts matter: noun gender/plural; verb conjugation, auxiliary,
  separability, governed case; adjective comparison; preposition case.
- LexiBridge exists but is considered overcomplicated.
- Its assessment is stored in `_info_tobeshared_withgpt5.6sol.md`.
- Key lesson: deterministic/licensed lexical data should own facts; LLM should provide personal
  cross-language explanations, mnemonics, and bridges.
- Do not implement dictionary work now.

## 8. Communication protocol

Read `_agent_response/README.md`.

For the first new session:

1. Verify workspace and git state.
2. Complete the agent-location cleanup first.
3. Write:

   ```text
   _agent_response/2026-10-11_deutsch_orch_agent-cleanup.md
   ```

4. Report exactly:
   - canonical agent paths;
   - parent duplicates remaining or removed;
   - validation results;
   - files changed;
   - commit created, if any;
   - recommended next step.

Do not start SPEC-001 implementation in the same operation unless the user explicitly approves
after reviewing the cleanup result.

