# Agent Communication Folder

This folder is the persistent handoff channel between manually opened Copilot sessions for
`kaenkyo-Sprachenlernen-hub`.

All substantive inter-agent artifacts belong here, including responses, replies, consultation
results, drafted briefs, review findings, decisions, and handoffs. Do not create a separate
coordination root unless the user explicitly changes this convention.

## Why this exists

Automatic background delegation proved unreliable: tasks were cleared without producing work,
and progress could not be observed reliably. The user now opens each agent session manually.
Context must therefore travel through explicit repository files rather than hidden session state.

## Protocol

1. The user opens this repository itself as the VS Code workspace.
2. The new agent reads `CURRENT_HANDOFF.md` before investigating or modifying anything.
3. The agent verifies the repository state against the handoff.
4. The agent performs only the approved scope.
5. Before ending a substantive task, the agent writes the requested artifact or a dated response:

   ```text
   _agent_response/YYYY-MM-DD_<agent>_<topic>.md
   ```

   If a handoff supplies an exact output path, use that path. Never overwrite an existing artifact.

6. The artifact records:
   - decisions made;
   - explicit scope and exclusions;
   - files changed;
   - commands/checks and results;
   - commits created;
   - unresolved blockers;
   - exact next-agent instructions.
7. The next session reads both `CURRENT_HANDOFF.md` and the latest dated response.

## Chat handoff

Keep the final chat response concise. Put full evidence and reasoning in the artifact, then report:

- status or outcome;
- key decisions or findings;
- blockers or approval needed;
- the artifact path;
- the exact next action.

When the original session or another agent is consulted, persist the relevant question, answer,
decision, and resulting action here so the collaboration remains auditable.

## Rules

- Do not place credentials or personal secrets here.
- Do not treat a launch acknowledgement as evidence that work completed.
- Report failures, cleared tasks, or permission blocks immediately.
- Do not overwrite a prior dated response.
- Do not stage or commit communication artifacts without explicit user authorization.
- Keep `CURRENT_HANDOFF.md` concise enough to read at session start, but complete enough to resume
  without this chat history.
