# SPEC-001 — Practice Pages with AI

**Version:** 6 (v2 security review; v3 user amendments; v4 naming; v5 Sol-led/chapter-25-only; v6 handoff reconciliation)
**Status:** LOCKED — dev perspective pass completed; all handoff findings reconciled below
**Lead / Reviewer:** GPT-5.6 Sol · **Independent reviewer on request:** Claude Opus 5
**Implementer:** Claude Sonnet 5
**Branch:** `feature/ai_practice_chapter25` (created; `main` stays deployable)

---

## 0. USER AMENDMENTS (v3) — these override anything below

**A1 — Mock first. No LLM call until the user has verified the feature.**
Build the complete feature against a **deterministic mock backend**. The mock implements the real
API contract exactly — same routes, same request/response shapes, same validation, same error
cases — but returns canned German responses with **zero network calls to any provider**. The real
provider adapter is written only after the user has validated the mock. This means the entire UI,
corpus rendering, chat flow, approval flow, and persistence are provable **before any key, any
cost, or any provider dependency exists**.

**A2 — Scope is chapter 25 only.** One corpus, one practice page. Do not author corpora for other
chapters. Only page 65 receives a practice entry point. Do not enumerate, inspect, inject into, or
modify any other chapter, including chapter 50. The route may be structured for later extension,
but this spec accepts only chapter 25 and ships only `practice/chapter25.json`.

**A3 — PC web only. Drop iOS from scope.** The user will validate on desktop browser first and
consider an iOS app later (Duolingo-style web + iOS; **no Android**). Consequences:
- **The PWA phase is removed from this spec.** It becomes a later, separate piece of work.
- **B1 (iOS `localStorage` eviction) no longer blocks anything** — it is a desktop-stable store.
  Export/import stays in Phase 3 anyway: it is ~20 lines, it is the migration path to a future iOS
  client, and it protects against a cleared browser profile.

**A5 — Naming: "practice", never "note".** The page is a **practice page**, routed `#practice-<N>`,
with its corpus in `practice/chapterN.json` and its renderer `renderPracticePage()`. This is
deliberate: `chapters/chapter50-note.js` is the user's own personal *note* page, and reusing "note"
for this feature would make the two permanently confusable in filenames, routes, and conversation.
The only places "note" survives are references to that existing hands-off file. The user-facing
heading may read *Praxis & Notizen*; every identifier says **practice**.

**A6 — User-facing label.** The final chapter-25 entry-point label is **`💬 KI-Praxis`**. Use that
exact label on page 65. It contains neither `Notizen` nor `Note` and does not use the 📝 icon,
because those belong to the user's separate personal-note concept.

**A4 — The dev gets a perspective pass before implementing.** Even with lead and reviewer agreed,
`deutsch_dev_sonnet5` reviews this spec and raises concerns **before** writing code. If it
raises something **critical**, the lead and reviewer must reconcile and re-investigate rather than
wave it through. Trivial points both already agree on may be noted and passed over. This is a third
independent model family on the design.

> **v2 changelog.** The reviewer found a critical vulnerability (S1) inside §6.2 — the section v1
> was most confident about — plus a reproduced bug (D1) that would have written into the user's
> hands-off personal note page, and a governance gap (D4) where `.env` gitignoring was asserted as
> a check but assigned to no one who was permitted to do it. All six MUST-FIX items and all
> secondary fixes are incorporated below. No locked decision was reopened.

---

## 1. Goal

Chapter 25 gains a **practice page**. It holds a chapter-specific **corpus** (grammar, vocabulary,
and phrases), a **free-form chat** with a deterministic mock constrained to that corpus, and an
**Update corpus** action that folds what the user practiced into their user corpus layer after
explicit per-item approval.

Pilot: **chapter 25** (*Ich war, ich hatte* — Präteritum of *sein*/*haben*, A1, pages 64–65).

## 2. Routing — clean, chapter-scoped

Route: **`#practice-<chapter>`** — chapter 25's practice page is `#practice-25`.

Chapter-scoped rather than page-scoped: a practice corpus belongs to the **chapter**, not a book
page.

`app.js` currently handles only hashes starting `#page-`. Add a **parallel branch** for `#practice-`.
Do **not** route practice pages through `pageToChapterMap`.

> **Validator constraint (verified).** `tools/validate_chapters.py` parses the `pageToChapterMap`
> literal out of `app.js` and enforces bidirectional page↔module agreement. Adding note entries to
> that map would **fail the validator** that §10 makes a gate. `#practice-` is therefore not merely
> cleaner — it is the only scheme that keeps the project's own Definition of Done satisfiable.

> **Hands off `chapters/chapter50-note.js`.** It is the user's own pre-existing personal note page
> (routed `"123-note"`, reachable at `#page-123-note`). **Not** a precedent, **not** a template,
> **not** part of this feature. Do not read it for patterns, do not modify it, do not migrate it.
> See **§5.2 D1** — there is a specific trap here that must be guarded against.

## 3. Architecture

```
Browser (static)                     Backend (Cloud Run, private key)
  deutsch_learning_app.html            POST /api/practice  → LLM
  index.html  (byte-identical twin)    POST /api/corpus/extract → proposal
  app.js    ── #practice- branch          GET  /api/health
  practice/chapter25.json  (seed corpus, version-controlled)
  localStorage         (user layer: additions, mistakes, session count)
```

**Two-layer corpus.** Seed ships in the repo (book truth); user additions live in `localStorage`.

> The repo is **public** and Pages-serves from `main`, so anything in `practice/*.json` is
> world-readable on a CDN. Keeping personal practice data out of the repo is therefore
> **load-bearing privacy**, not tidiness.

**No RAG, no vector DB.** A chapter corpus is ~1k tokens — inject it whole into the system prompt.

**The browser never calls an LLM provider directly.** That is the entire reason the backend exists.

## 4. Corpus schema — `practice/chapterN.json`

```json
{
  "chapter": 25,
  "pages": [64, 65],
  "grammar": [
    {
      "point": "Präteritum von sein",
      "explanation": "Für Vergangenheit benutzt man bei sein meistens Präteritum, nicht Perfekt.",
      "forms": { "ich": "war", "du": "warst", "er/sie/es": "war",
                 "wir": "waren", "ihr": "wart", "sie/Sie": "waren" },
      "examples": ["Ich war gestern im Kino.", "Wo warst du?"]
    }
  ],
  "vocabulary": [ { "de": "gestern", "en": "yesterday", "note": "Temporaladverb" } ],
  "phrases": ["Ich hatte keine Zeit.", "Wie war dein Wochenende?"],
  "practiceHints": ["war/hatte in Fragen und Antworten drillen"]
}
```

**B7 — no title or level drift.** The JSON carries neither `title` nor `level`. Both are read at
render time from the chapter module (`chapter25.js` exports
`title: "Ich war, ich hatte (Präteritum: sein und haben)"`). One source of truth.

**Source of truth:** derive corpus content from `chapters/chapter25.js`, which was built from the
page scans. English translations are allowed. Do not invent German grammar content.

**User layer (localStorage, key `practice-user-25`):**
```json
{ "chapter": 25, "added": { "vocabulary": [], "phrases": [] },
  "mistakes": [], "sessions": 0, "updatedAt": "ISO-8601" }
```

## 5. Frontend

### 5.1 Chapter-25 `#practice-` route
In `app.js`, add a `#practice-<N>` branch alongside the existing `#page-` branch. This spec accepts
only `N === 25`; every other value renders a safe practice placeholder. Fetch
`practice/chapter25.json`, treat an absent localStorage layer as empty without writing one, and
render via `renderPracticePage(corpus, userLayer)`.

- **B6 — parse guard.** Accept only the exact route `#practice-25`. Anything else renders
  `renderPracticePlaceholder()` built with DOM nodes and `textContent`. Never interpolate the raw
  hash into HTML (see §5.4).
- **B5 — registration order.** `app.js` loads as `type="module"` (deferred), and the trailing
  `dispatchEvent(new Event('hashchange'))` is the cold-load bootstrap. The `#practice-` branch must be
  registered **before** that dispatch, or a cold load of `#practice-25` (bookmark, shared link)
  renders nothing. **Add this to Phase 1 verification.**
- **B3 — honest placeholder.** Distinguish *404 / corpus not yet created* from *network failure*.
  Do not report one cause for the other.
- **B9 — metadata fallback.** If `chapter25.js` metadata cannot be loaded, still render the
  practice page with chapter number 25 and omit the unavailable title and level. Metadata failure
  must not discard an otherwise valid corpus.

### 5.2 Entry point — page 65 only

After page 65 of `chapter25` renders, locate its last `.page-navigation-footer` in the rendered DOM
and append one link node with `appendChild()`. Use the exact A6 label **`💬 KI-Praxis`**. Do not
string-splice HTML. Do not enumerate or inspect other chapters. Do not touch chapter modules on
disk.

### 5.3 Practice page layout
1. Header — chapter number, title and level **read from the chapter module** (B7)
2. Corpus panel — grammar / vocabulary / phrases; user additions visually distinct
3. Chat — message list, input, send; German-first, English on request
4. **Update corpus** button — disabled until the session has ≥ 5 exchanges
5. Footer — back to the chapter's book pages

Reuse the existing page, header, level, grammar-grid, vocabulary-bank, hint, footer, and button
classes where they fit. Add dedicated classes for chat transcript, bubbles, composer, status,
disabled controls, and approval UI. Keep the composer in normal flow so it does not collide with
the fixed table-of-contents control.

When the chat first needs authorization, prompt once per page session for the local mock
passphrase. Keep it only in a JavaScript variable or `sessionStorage`; never hardcode it and never
write it to `localStorage`.

### 5.4 Rendering contract — **S3, MUST FIX, established in Phase 1**

The app renders via `innerHTML` throughout. This feature introduces four untrusted sources: user
practice text, model replies, extract proposals, and persisted user-layer items.

Build the entire practice path with DOM nodes (`createElement`, `textContent`,
`replaceChildren`). The practice path contains **zero** `innerHTML`, so the contract is
mechanically checkable. Never use `innerHTML` for corpus items, chat messages, or proposals.

> Why this is not self-harm: a `<img src=x onerror=...>` vocabulary item persisted via §7 becomes
> **permanent stored XSS**, and the origin `kyokaen.github.io` is shared by **every GitHub Pages
> site on this account** — script execution there reads `localStorage` for all of them.

The contract is set in **Phase 1** (which already renders corpus JSON), not retrofitted in Phase 3.

## 6. Backend — `api/`

Python + FastAPI, containerized. Same code locally and on Cloud Run.

### 6.1 Provider-agnostic
One thin adapter behind `LLM_PROVIDER`. Switching provider is an **env change, never a code
change**.

**Decided (user): `LLM_PROVIDER=gemini`, `LLM_MODEL=gemini-2.5-flash`.** DeepSeek stays a
one-env-var swap. Both keys already exist on the user's machine.

> **D5 — three technical conditions, MUST FIX:**
> 1. **Disable thinking explicitly (budget 0).** `gemini-2.5-flash` thinks by default and thinking
>    tokens **bill as output**. v1's entire cost rationale was "input dominates because the corpus
>    is re-sent each turn" — true *only with thinking off*. Leaving it on inverts the cost model
>    and adds latency to "correct this A1 sentence."
> 2. **Per-provider passthrough** (`extra_body` or equivalent) so knob (1) is reachable without a
>    code change — otherwise "provider switch = env change" is only half true.
> 3. **Handle empty / safety-blocked candidates.** Gemini can finish with no text. Chapter 25 is
>    Präteritum of *sein* — *"Mein Großvater war Soldat"* is textbook-plausible A1. Return a
>    friendly German message; never pipe `undefined` into the chat.

**Cost note:** both providers are pocket change; price is not the deciding factor. **Do not derive
the budget threshold from the usage estimate** — set it in absolute dollars against the abuse case.
Verify current published prices at deploy time.

**Free-tier consent:** on Gemini's free tier, prompts may be used for product improvement; paid
tiers are excluded. This is personal learning data — surface the choice to the user before deploy.

### 6.2 Endpoints
| Endpoint | Body | Returns |
|---|---|---|
| `POST /api/practice` | `{chapter:int, messages[]}` | `{reply}` |
| `POST /api/corpus/extract` | `{chapter:int, messages[]}` | `{proposed:{vocabulary[],phrases[],mistakes[]}}` |
| `GET /api/health` | — | `{status, provider, model}` |

The server builds the system prompt. **The client never supplies corpus content.**

> **S1 — CRITICAL, MUST FIX. Path traversal → API key exfiltration.**
> v1 was correct that the client supplies no corpus *content* — but it supplies the *selector*, and
> specified no validation. The natural implementation is:
> ```python
> open(f"practice/chapter{chapter}.json")   # chapter from request body
> ```
> `chapter = "25/../../../../proc/self/environ"` yields arbitrary file read. On Cloud Run, Secret
> Manager is conventionally wired into an **environment variable** — so `/proc/self/environ`
> contains `LLM_API_KEY`. The endpoint that exists to keep the key from clients hands it to one.
> The repo is public, so an attacker reads `api/` to craft this exactly.
>
> **Fix — eliminate the class, do not filter it:**
> 1. **Preload every `practice/chapter*.json` into an in-memory dict at startup**, keyed by `int`
> 2. At request time: coerce `chapter` to `int`, bounds-check `1 ≤ n ≤ 85`, **dict lookup**
> 3. **No filesystem access on the request path at all**
> 4. Missing corpus → clean 404
>
> Secondary hardening: mount the secret as a **file volume** rather than an env var.

> **S2 — MUST FIX. Role injection defeats the grounding guarantee.**
> The client posts `messages[]`. If the server appends them unfiltered, a client sending
> `{"role":"system","content":"Ignore prior instructions…"}` writes directly into the prompt §6.2
> just promised it controlled. Gemini's compat layer accepts system turns — this is live.
> **Reject any message whose role is not exactly `user` or `assistant`, and reconstruct the turn
> list server-side rather than forwarding the client object.** Cap turn count and per-message
> length.

### 6.3 System prompt rules
- Stay within this chapter's grammar and vocabulary; never introduce later-chapter structures
- Correct errors gently, show the corrected form, name the rule
- Hold to the chapter's CEFR level
- Reply in German by default; English explanation on request

### 6.4 Security and spend control — **S4, MUST FIX**

> **Threat model.** The Cloud Run URL is hardcoded in client JS in a **public repo** — it is public
> by construction. **CORS is irrelevant to this threat** (`curl` doesn't implement CORS). The
> passphrase is the only access control; the question is what bounds the loss when it leaks.
>
> **Verdict:** passphrase + rate limit is **adequate** for a single-user personal app. Real auth
> (IAM / OIDC / Google Sign-In) is **not warranted now** — disproportionate friction for a
> one-person study tool defending a few dollars a month. Keep as the documented escalation path.

**A budget alert is a detector, not a control** — it notifies, billing data lags, nothing throttles.
The binding controls are:

1. **`--max-instances=1`** — caps concurrent spend, **and** is what makes the in-memory rate limiter
   mathematically valid. On an autoscaling service an in-memory per-IP counter is per-instance: the
   real limit becomes N×limit and resets on cold start. **These two are coupled — specify together.**
2. **Server-side daily request/token budget** returning **429** when exhausted. Worst case becomes
   arithmetic, not hope.
3. **Passphrase hygiene:** 32+ random chars (not memorable); compare with `hmac.compare_digest`;
   identical generic 401 for missing *and* wrong, so the endpoint isn't an oracle.
4. **Correct `X-Forwarded-For` handling** — behind Cloud Run's proxy, take the right position.
   Naive parsing lets an attacker rotate fake IPs via the header and nullify the limiter.
5. **Budget alert retained as a detector.**
6. **CORS** — allowlist only; see §6.5.
7. **Caps** — max messages per request, max body size, max output tokens.

Development defaults are deliberately generous enough for normal browser testing while remaining
explicit: `DAILY_REQUEST_BUDGET=10000` and `RATE_LIMIT_PER_MINUTE=120` per client IP.

### 6.5 Config
| Env | Dev | Prod |
|---|---|---|
| `LLM_PROVIDER` | **`mock`** (Phases 2–3) → `gemini` (Phase 4+) | `gemini` |
| `LLM_MODEL` | `gemini-2.5-flash` | same |
| `LLM_THINKING_BUDGET` | `0` | `0` |
| `LLM_API_KEY` | gitignored `.env` — **not needed while `mock`** | Secret Manager |
| `ALLOWED_ORIGINS` | `http://localhost:8899` | `https://kyokaen.github.io` |
| `APP_PASSPHRASE` | `.env` | Secret Manager |
| `DAILY_REQUEST_BUDGET` | `10000` | tuned |
| `RATE_LIMIT_PER_MINUTE` | `120` | tuned |

> **S6 — `ALLOWED_ORIGINS` is the *page* origin, not the API origin.** In dev the page is
> `:8899` and the API is `:8080`; the allowlist entry is **`:8899`**. Easy to get backwards.
> Note also that `https://kyokaen.github.io` is shared across all of this account's Pages sites,
> and CORS constrains browsers only — it prevents a random site spending quota via a victim's
> browser. That is all it is for.

Frontend picks the API base by hostname: `localhost` → `http://localhost:8080`, else the Cloud Run
URL. No build step.

### 6.6 Mock backend — **A1, Phases 2–3**

The backend ships **mock-first**. `LLM_PROVIDER=mock` is the default until the user validates.

**The mock is not a stub — it is the real server with a fake brain.** Everything except the
provider call is production code:

| Layer | Mock | Real |
|---|---|---|
| Routes, request/response shapes | identical | identical |
| `chapter` validation (S1: int, 1–85, dict lookup) | **real** | real |
| Role allowlist + turn reconstruction (S2) | **real** | real |
| Passphrase, rate limit, caps (S4) | **real** | real |
| CORS (S6) | **real** | real |
| Pydantic response validation (S5) | **real** | real |
| Corpus preload at startup (S1) | **real** | real |
| **Reply generation** | **canned, deterministic** | provider call |

So swapping to the real provider in Phase 4 touches **one function**. Every security control is
exercised and verifiable during mock testing.

**Mock behaviour — deterministic, no randomness** (reproducible bug reports):
- Keyed off the last user message, with a small rule table over chapter 25's content
- Recognises the chapter's forms (`war/warst/waren/hatte/hattest/hatten`) and responds in German
- Deliberately returns a **correction** when the user writes a seeded error (e.g. *"Ich habe
  gestern im Kino gewesen"* → corrects to *"Ich war gestern im Kino."* with the rule named)
- Falls back to a generic in-corpus German prompt-back
- **Must exercise the UI's hard cases**: a long multi-line reply, a reply containing German
  quotation marks and umlauts, and — to prove §5.4 — a reply containing literal `<script>` and
  `<img src=x onerror=...>` text that **must render as visible text, never execute**
- Simulated latency ~300 ms so loading states are real
- A **deterministic error trigger** (e.g. the word `FEHLERTEST`) returning the empty-candidate /
  safety-blocked path from D5.3, so error handling is provable without a provider

**Mock `/api/corpus/extract`** returns a fixed, schema-valid proposal including at least one item
with HTML metacharacters, so the approval UI's escaping is proven before real data exists.

**Phase V gate:** the user validates the full flow against the mock. Only then does Phase 4 add the
real adapter. `LLM_PROVIDER=mock` must remain permanently available afterwards — it is the offline
dev and regression path.

## 7. Update-corpus flow

Practice → **Update corpus** → `POST /api/corpus/extract` → AI proposes vocabulary, phrases, and
recurring mistakes → **user approves or rejects each item** → approved items persist to the user
layer. **Never auto-persist** — model-proposed entries folding in silently is how a study aid
quietly teaches wrong German.

> **S5 — MUST FIX. Schema contract.** Free-text parsing of model output into persisted data is how
> malformed entries become permanent notes. **Use provider structured output
> (`responseMimeType: application/json` + response schema), validate with Pydantic server-side, cap
> item count and per-item length, and on parse failure return a clean error rather than a partial
> object.** The client never sees unvalidated model output. Rendering still obeys §5.4.

**Export / import (Q2, Phase 3).** Whole user layer to/from a single JSON file. ~20 lines, no
backend, no new attack surface. Solves laptop↔future-iOS transfer and protects against a cleared
browser profile.

> **B1 — descoped by A3.** iOS Safari's ~7-day `localStorage` eviction was the original driver for
> treating the PWA as durability rather than polish. **Desktop-only for now**, so this no longer
> blocks anything. It returns the moment an iOS client is on the table — note it then.

## 8. Phases

| # | Deliverable | Owner | Gate |
|---|---|---|---|
| **0** | `.gitignore`: ignore secrets and `.venv/`; create branch | **lead** | `git check-ignore .env` and `git check-ignore api/.venv/` pass |
| 1 | Corpus schema + `practice/chapter25.json` + `#practice-25` route + static render + §5.4 escape contract | dev | Cold load works; page 65 alone has `💬 KI-Praxis`; seeded `<img src=x onerror=alert(1)>` localStorage text renders literally without execution |
| 2 | **Mock backend** (§6.6) + `/api/practice` + chat UI | dev | Chat works end to end against the mock; **zero provider calls** |
| 3 | **Mock** `/api/corpus/extract` + approval UI + persistence + export/import | dev | Survives reload; nothing persists unapproved |
| **V** | **USER VALIDATION — hard stop** | user | **User confirms the feature is right before any real LLM work** |
| 4 | Real provider adapter behind `LLM_PROVIDER` (§6.1) + `.env` key, local only | dev | Real German replies locally; **no key in any tracked file** |
| 5 | Dockerfile + Secret Manager + Cloud Run via `gcp_deploy` | orchestrator | User has tested locally and is satisfied |

> **A1 — Phases 1–3 make zero provider calls.** The mock is the backend until the user says
> otherwise. Phase V is a **hard stop**, not a checkpoint: no provider adapter, no key, no cost
> until the user has validated the feature on desktop.

> **D4 — Phase 0 is mandatory and lead-owned.** `.env` is ignored. Before FastAPI setup, `.venv/`
> is also ignored. The dev cannot change `.gitignore`.

> **A3 — the PWA phase is removed.** Desktop web only for now; iOS is later, separate work.

Phases 1–4 are entirely local. **Nothing deploys until the user says so.**

## 9. Out of scope
**Any chapter other than 25, including chapter 50**; `chapters/chapter50-note.js` (leave untouched);
**PWA, service worker, offline, iOS, Android (A3)**; multi-user
accounts; audio/TTS; progress analytics; consolidating the duplicated entry points.

> **B4 — but respect the duplication.** `index.html` and `deutsch_learning_app.html` are
> **byte-identical**, and the live URL is the latter. Any `<link>`, `<script>`, or manifest tag this
> feature adds must go into **both**, or they drift and one breaks.

The German corpus is reviewed by the user at Phase V. `deutsch_professor` remains dormant
until the user explicitly activates it.

## 10. Definition of done (per phase)
- Every numbered item implemented; nothing extra
- Dev ran its own checks; **orchestrator independently re-ran them**
- `python3 tools/validate_chapters.py --root .` exits 0
- Verified in a browser at `localhost:8899` — concretely, not "it works"
- **No secret in any tracked file; `git check-ignore .env` passes**
- **Untouched: `chapters/`, `print/`, `.gitignore`, Dockerfile, deploy configs** (B8 — the last
  three are orchestrator-owned)
- Dev leaves changes **uncommitted**; orchestrator reviews, scans for secrets, commits

## 11. Resolved questions
1. **Endpoint abuse** → passphrase + rate limit is enough; no real auth now. **But the budget alert
   is demoted to a detector**; enforced ceilings (`--max-instances=1` + daily budget → 429) are the
   binding controls. (§6.4)
2. **Storage** → accept `localStorage`; **add export/import in Phase 3**. Server-side would require
   auth, which we declined. Key layout `practice-user-<n>` + `updatedAt` keeps future sync a drop-in.
3. **Corpus seeding** → **hand-author the pilot.** `chapter25.js` is ~18 KB of presentation HTML
   with grammar living in `<div class="grid-cell">` layout, not data — extraction would be lossy
   and need full human review anyway. Automate at chapter 2+, as a draft generator. (B2)
4. **Route scheme** → `#practice-<chapter>` confirmed, and effectively forced by the validator (§2).
5. **Provider** → Gemini 2.5 Flash, with the three D5 conditions. (§6.1)
