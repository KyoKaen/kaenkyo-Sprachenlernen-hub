# Terminal Copilot Handoff — Chapter 25 AI Practice

## Mission

You are the **GPT-5.6 Sol lead/orchestrator** for this repository. Take ownership of the complete
workflow described below: reconcile the current specification, delegate implementation to
`deutsch_dev_sonnet5`, validate each phase independently, commit the work, and stop at the
user-validation gate.

Do not return another plan. Execute the work.

## Repository state at handoff

- Repository: `/Users/kyokaen/dev/kaenkyo-Sprachenlernen-hub`
- Branch: `feature/ai_practice_chapter25`
- HEAD: `f243c29 Phase 0: gitignore secrets and add SPEC-001`
- Remote has not been pushed with this feature branch.
- Current uncommitted files:
  - `.claude/agents/deutsch_dev_sonnet5.agent.md`
  - `.claude/agents/deutsch_orch_gpt5.6sol.agent.md`
  - `.claude/specs/SPEC-001-practice-pages.md`
  - `.gitignore`
  - `.github/` governance skill and references

Preserve and reconcile these changes. Do not discard them.

## Read first

1. `.github/skills/kyo-deutsch-governance/SKILL.md`
2. `.github/skills/kyo-deutsch-governance/references/operating-model.md`
3. `.github/skills/kyo-deutsch-governance/references/incident-001-background-agent-loss.md`
4. `.claude/specs/SPEC-001-practice-pages.md`
5. `.claude/agents/deutsch_dev_sonnet5.agent.md`
6. `.claude/agents/deutsch_orch_gpt5.6sol.agent.md`
7. `app.js`
8. `style.css`
9. `chapters/chapter25.js`
10. `index.html`
11. `deutsch_learning_app.html`

Do **not** read or modify `chapters/chapter50-note.js`. It is unrelated personal content.

## Authority and delegation

- You are the operational lead: scope, design reconciliation, validation, git, and infrastructure.
- Delegate application implementation to `deutsch_dev_sonnet5`.
- The Sonnet dev has git read-only. You perform all staging and commits.
- `deutsch_professor` remains dormant until the user explicitly activates it.
- You may read other projects for proven patterns, but they are **read-only**. Never modify them.
- Actual deployment later belongs to `gcp_deploy`, but deployment is out of scope now.

Monitor delegated work with `/tasks`. A launch acknowledgement is not proof that work is running.
If a delegated task fails, disappears, or stalls, report it immediately rather than silently
relaunching.

## User-locked scope

1. **Chapter 25 only.**
2. Practice route: `#practice-25`.
3. Corpus: `practice/chapter25.json`.
4. Only page 65 receives a practice entry point.
5. Do not inspect, enumerate, inject into, or modify any other chapter.
6. Desktop PC web only.
7. No PWA, service worker, iOS, Android, or App Store work.
8. Deterministic mock first.
9. **Zero real LLM/provider calls.**
10. **Zero real API keys.**
11. No Cloud Run deployment.
12. Stop at **Phase V**, where the user validates locally.

## User-facing label

Choose the chapter-25 entry-point label yourself. It must:

- contain neither `Notizen` nor `Note`;
- not use the 📝 icon;
- clearly mean AI practice.

Recommended decision: **`💬 KI-Praxis`**.

Record the chosen label in SPEC-001 before implementation.

## Dev perspective pass already completed

The Sonnet dev reviewed the spec before coding. Reconcile these findings in the spec/agent files
before delegation:

1. Use `practice/` consistently; grant the dev write access to `practice/`.
2. Corpus JSON contains neither `title` nor `level`; load both from `chapter25.js`.
3. Chapter 25 only. No generic all-chapter footer injection.
4. Only rendered page 65 gets the practice link.
5. Append the link with DOM `appendChild()`, never HTML string splicing.
6. Build the entire practice path with DOM nodes, `textContent`, and `replaceChildren`.
7. The practice path must contain zero dynamic `innerHTML`.
8. Use a safe `renderPracticePlaceholder()` built with DOM nodes.
9. Treat absent localStorage as an empty layer; do not persist until Phase 3 approval.
10. If chapter metadata loading fails, render chapter number and omit title/level rather than
    failing the whole practice page.
11. User reviews the hand-authored German corpus at Phase V. The professor remains dormant.
12. English translations are allowed. Do not invent German grammar.
13. Keep the chat composer in normal flow so it cannot collide with the fixed TOC control.
14. Add `.venv/` to `.gitignore` before creating `api/.venv/`.
15. Correct stale `notes/` and `#notes-` references to `practice/` and `#practice-`.
16. Phase 1 must actively test hostile localStorage text such as
    `<img src=x onerror=alert(1)>` and prove it renders literally without execution.
17. Use an in-memory/session-only browser passphrase for the local mock. Never hardcode it or put
    it in localStorage.
18. Use explicit development limits, for example:
    - `DAILY_REQUEST_BUDGET=10000`
    - per-IP limit `120/min`

## Phase 0 — reconcile and commit governance

1. Fetch and compare with remote before diagnosing or committing.
2. Preserve current uncommitted changes.
3. Reconcile SPEC-001 and both agent files with the locked scope above.
4. Validate:
   - `git diff --check`
   - `git check-ignore .env`
   - `git check-ignore api/.venv/test`
   - `python3 tools/validate_chapters.py --root .`
5. Secret-scan the staged diff. Words such as “API key” in documentation are not credentials;
   inspect any match rather than assuming.
6. Commit the governance/spec reconciliation.
7. Never add a `Co-authored-by` trailer.

## Phase 1 — static practice page

Delegate to `deutsch_dev_sonnet5`.

Deliver:

- `practice/chapter25.json`, faithfully derived from `chapters/chapter25.js`;
- `#practice-25` routing;
- chapter title/level loaded from the module;
- static corpus rendering;
- page-65-only `💬 KI-Praxis` entry point (or your recorded alternative);
- safe practice placeholder;
- dedicated practice CSS where existing book classes do not fit.

Implementation contract:

- Use DOM construction, `textContent`, and `replaceChildren`.
- No dynamic `innerHTML` in the practice path.
- Reuse suitable existing styles for page shell, headings, conjugation grid, vocabulary, hints,
  footer, and buttons.
- Add dedicated styles for later chat/approval UI.
- Do not modify `chapters/` or `print/`.

Required Phase 1 verification:

- Cold-load `#practice-25`.
- Navigate from page 65 using the new link.
- Confirm no practice link is added to any other page.
- Confirm an invalid practice route renders a safe placeholder.
- Seed `practice-user-25` manually with literal hostile HTML text and confirm it displays as text
  and does not execute.
- `python3 tools/validate_chapters.py --root .` → 45 modules, 0 problems.
- Read the actual diff and scope-check it before committing.

Commit Phase 1 after validation.

## Phase 2 — deterministic mock backend and chat

Delegate to `deutsch_dev_sonnet5`.

Build a FastAPI backend under `api/`. The mock is the real server with a fake brain:

- same production routes and schemas;
- real chapter validation;
- preload corpus into an in-memory dictionary at startup;
- integer dictionary lookup only;
- no request-path file construction;
- roles restricted to exactly `user` and `assistant`;
- server reconstructs message history;
- real CORS, passphrase, size limits, rate limits, and request budget;
- no provider SDK, provider call, network LLM call, or real key.

Mock requirements:

- deterministic correction for a seeded error such as
  `Ich habe gestern im Kino gewesen` → `Ich war gestern im Kino.`;
- generic chapter-25 fallback response;
- multiline reply;
- umlauts and German quotation marks;
- literal `<script>` and `<img src=x onerror=...>` text;
- simulated latency around 300 ms;
- deterministic `FEHLERTEST` error path;
- visible **MOCK** indicator in the chat UI.

Local browser passphrase:

- prompt once per page session;
- keep only in a JavaScript variable or `sessionStorage`;
- never hardcode it;
- never store it in localStorage;
- never commit it.

Use explicit generous development limits so normal UI testing does not constantly hit 429.

Independently verify, secret-scan, scope-check, and commit Phase 2.

## Phase 3 — mock corpus update, approval, persistence, export/import

Delegate to `deutsch_dev_sonnet5`.

Deliver:

- mock `/api/corpus/extract`;
- Pydantic-validated structured response;
- capped item counts and lengths;
- item-by-item approve/reject;
- only approved items written to `practice-user-25`;
- persistence across reload;
- JSON export and import;
- invalid imports rejected without partial writes;
- hostile HTML metacharacters rendered literally in proposals and saved items.

Nothing may auto-persist from model/mock output.

Independently verify, secret-scan, scope-check, and commit Phase 3.

## Hard stop — Phase V

Stop after the mock feature is ready for user validation.

Do **not**:

- implement Gemini or DeepSeek adapters;
- call any LLM;
- create a real-key `.env`;
- deploy;
- push;
- merge to `main`;
- work on the later multilingual dictionary feature.

## Completion report

Return:

1. Commits created.
2. Exact files changed per phase.
3. Exact commands to start the backend and frontend.
4. Exact local URL for `#practice-25`.
5. Mock test phrases:
   - correction test;
   - error test;
   - XSS literal-text test.
6. How to test proposal approval/rejection.
7. How to test reload persistence.
8. How to export/import.
9. Validator result.
10. Confirmation of zero provider calls, zero real keys, no push, no deployment.
