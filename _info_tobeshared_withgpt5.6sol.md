This is the evaluation from gptsol5.6 for the overcomplicated lexibridge project:

Created isolated worktree for branch `agents/multilingual-dictionary-design-assessment`

I’ll inspect the product structure, current UI, data flow, and every LLM integration, then run the app to judge the experience directly.

Track assessment work
Completed with input: {
  "description": "Track assessment work",
  "query": "INSERT OR REPLACE INTO todos (id, title, description, status) VALUES\n  ('map-system', 'Mapping the system', 'Inspect repository structure, documentation, dependencies, and deployment surfaces.', 'in_progress'),\n  ('audit-llm', 'Auditing LLM usage', 'Trace every LLM call, prompt, fallback, cost-sensitive path, and data flow.', 'pending'),\n  ('assess-ux', 'Assessing visual experience', 'Run and inspect the web application across core user journeys and responsive layouts.', 'pending'),\n  ('evaluate-architecture', 'Evaluating product architecture', 'Assess local PC use, personal iPhone installation, Google Cloud deployment, and App Store readiness.', 'pending'),\n  ('synthesize-roadmap', 'Synthesizing recommendations', 'Produce prioritized findings and a pragmatic implementation roadmap.', 'pending');\nINSERT OR REPLACE INTO todo_deps (todo_id, depends_on) VALUES\n  ('audit-llm', 'map-system'),\n  ('assess-ux', 'map-system'),\n  ('evaluate-architecture', 'map-system'),\n  ('synthesize-roadmap', 'audit-llm'),\n  ('synthesize-roadmap', 'assess-ux'),\n  ('synthesize-roadmap', 'evaluate-architecture');"
}

Read 
Completed with input: {
  "path": "/Users/kyokaen/dev/lexibridge.worktrees/multilingual-dictionary-design-assessment"
}

Search for `OpenAI|Anthropic|Gemini|LLM|AI SDK|generateText|streamText|chat\.completions|...`

Ran terminal command: git --no-pager status --short --branch && printf '\n--- tracked top-level ---\n' && git --no-pager ls-tree --name-only HEAD

Read 
Completed with input: {
  "path": "/Users/kyokaen/dev/lexibridge.worktrees/multilingual-dictionary-design-assessment/apps/web"
}

Read 
Completed with input: {
  "path": "/Users/kyokaen/dev/lexibridge.worktrees/multilingual-dictionary-design-assessment/apps/api"
}

Read 
Completed with input: {
  "path": "/Users/kyokaen/dev/lexibridge.worktrees/multilingual-dictionary-design-assessment/README.md"
}

Read 
Completed with input: {
  "path": "/Users/kyokaen/dev/lexibridge.worktrees/multilingual-dictionary-design-assessment/scripts"
}

Find files matching `apps/api/**/*`

Find files matching `apps/web/src/**/*`

The repository is a very small MVP, so I can trace the whole product rather than sampling it. Next I’m separating intentional product choices from unfinished implementation.

Read 
Completed with input: {
  "path": "/Users/kyokaen/dev/lexibridge.worktrees/multilingual-dictionary-design-assessment/apps/web/src/components/LanguagePickers.tsx"
}

Read 
Completed with input: {
  "path": "/Users/kyokaen/dev/lexibridge.worktrees/multilingual-dictionary-design-assessment/apps/web/package.json"
}

Read 
Completed with input: {
  "path": "/Users/kyokaen/dev/lexibridge.worktrees/multilingual-dictionary-design-assessment/apps/web/next.config.ts"
}

Read 
Completed with input: {
  "path": "/Users/kyokaen/dev/lexibridge.worktrees/multilingual-dictionary-design-assessment/apps/web/src/app/page.tsx"
}

Read 
Completed with input: {
  "path": "/Users/kyokaen/dev/lexibridge.worktrees/multilingual-dictionary-design-assessment/apps/web/src/app/globals.css"
}

Read 
Completed with input: {
  "path": "/Users/kyokaen/dev/lexibridge.worktrees/multilingual-dictionary-design-assessment/apps/web/src/app/manifest.ts"
}

Read 
Completed with input: {
  "path": "/Users/kyokaen/dev/lexibridge.worktrees/multilingual-dictionary-design-assessment/apps/web/src/app/layout.tsx"
}

Read 
Completed with input: {
  "path": "/Users/kyokaen/dev/lexibridge.worktrees/multilingual-dictionary-design-assessment/apps/web/src/components/SearchBar.tsx"
}

Read 
Completed with input: {
  "path": "/Users/kyokaen/dev/lexibridge.worktrees/multilingual-dictionary-design-assessment/apps/web/src/components/ResultCard.tsx"
}

Read 
Completed with input: {
  "path": "/Users/kyokaen/dev/lexibridge.worktrees/multilingual-dictionary-design-assessment/apps/web/src/lib/api.ts"
}

Read 
Completed with input: {
  "path": "/Users/kyokaen/dev/lexibridge.worktrees/multilingual-dictionary-design-assessment/apps/web/src/components/HistoryList.tsx"
}

Read 
Completed with input: {
  "path": "/Users/kyokaen/dev/lexibridge.worktrees/multilingual-dictionary-design-assessment/apps/web/src/lib/history.ts"
}

Read 
Completed with input: {
  "path": "/Users/kyokaen/dev/lexibridge.worktrees/multilingual-dictionary-design-assessment/apps/web/src/lib/types.ts"
}

Read 
Completed with input: {
  "path": "/Users/kyokaen/dev/lexibridge.worktrees/multilingual-dictionary-design-assessment/apps/api/models.py"
}

Read 
Completed with input: {
  "path": "/Users/kyokaen/dev/lexibridge.worktrees/multilingual-dictionary-design-assessment/apps/api/cache.py"
}

Read 
Completed with input: {
  "path": "/Users/kyokaen/dev/lexibridge.worktrees/multilingual-dictionary-design-assessment/apps/api/main.py"
}

Read 
Completed with input: {
  "path": "/Users/kyokaen/dev/lexibridge.worktrees/multilingual-dictionary-design-assessment/apps/api/providers/gemini.py"
}

Read 
Completed with input: {
  "path": "/Users/kyokaen/dev/lexibridge.worktrees/multilingual-dictionary-design-assessment/apps/api/config.py"
}

Read 
Completed with input: {
  "path": "/Users/kyokaen/dev/lexibridge.worktrees/multilingual-dictionary-design-assessment/apps/api/prompts.py"
}

Read 
Completed with input: {
  "path": "/Users/kyokaen/dev/lexibridge.worktrees/multilingual-dictionary-design-assessment/apps/api/providers/deepseek.py"
}

Read 
Completed with input: {
  "path": "/Users/kyokaen/dev/lexibridge.worktrees/multilingual-dictionary-design-assessment/apps/web/public"
}

Search for `TODO|FIXME|test|pytest|vitest|playwright|auth|rate.limit|quota|analytics|tele...`

Read 
Completed with input: {
  "path": "/Users/kyokaen/dev/lexibridge.worktrees/multilingual-dictionary-design-assessment/apps/web/src/components/ServiceWorkerRegistration.tsx"
}

Read 
Completed with input: {
  "path": "/Users/kyokaen/dev/lexibridge.worktrees/multilingual-dictionary-design-assessment/apps/web/AGENTS.md"
}

Read 
Completed with input: {
  "path": "/Users/kyokaen/dev/lexibridge.worktrees/multilingual-dictionary-design-assessment/apps/web/CLAUDE.md"
}

Read 
Completed with input: {
  "path": "/Users/kyokaen/dev/lexibridge.worktrees/multilingual-dictionary-design-assessment/apps/api/providers/__init__.py"
}

Read 
Completed with input: {
  "path": "/Users/kyokaen/dev/lexibridge.worktrees/multilingual-dictionary-design-assessment/apps/api/providers/base.py"
}

Read 
Completed with input: {
  "path": "/Users/kyokaen/dev/lexibridge.worktrees/multilingual-dictionary-design-assessment/apps/api/requirements.txt"
}

Read 
Completed with input: {
  "path": "/Users/kyokaen/dev/lexibridge.worktrees/multilingual-dictionary-design-assessment/apps/api/Dockerfile"
}

Read 
Completed with input: {
  "path": "/Users/kyokaen/dev/lexibridge.worktrees/multilingual-dictionary-design-assessment/scripts/lexi.sh"
}

Ran terminal command: git --no-pager log --oneline --decorate -12 && printf '\n--- ignored/untracked hints ---\n' && git --no-pager status --short --ignored | head -80

Read 
Completed with input: {
  "path": "/Users/kyokaen/dev/lexibridge.worktrees/multilingual-dictionary-design-assessment/apps/web/public/sw.js"
}

Read 
Completed with input: {
  "path": "/Users/kyokaen/dev/lexibridge.worktrees/multilingual-dictionary-design-assessment/apps/web/public/icon.svg"
}

Read 
Completed with input: {
  "path": "/Users/kyokaen/dev/lexibridge.worktrees/multilingual-dictionary-design-assessment/.gitignore"
}

Read 
Completed with input: {
  "path": "/Users/kyokaen/dev/lexibridge.worktrees/multilingual-dictionary-design-assessment/apps/web/.gitignore"
}

Advance assessment phases
Completed with input: {
  "description": "Advance assessment phases",
  "query": "UPDATE todos SET status='done' WHERE id='map-system';\nUPDATE todos SET status='in_progress' WHERE id IN ('audit-llm','assess-ux','evaluate-architecture');\nSELECT id, title, status FROM todos ORDER BY created_at;"
}

Ran terminal command: du -sh apps/web/node_modules apps/api/.venv 2>/dev/null || true; test -f apps/api/.env && echo 'api env present' || echo 'api env absent'; test -f apps/web/.env.local && echo 'web env present' || echo 'web env absent'

The main architectural risk is already visible: the model is generating the dictionary’s factual core, not merely enriching verified lexical data. I’ll now validate the implementation and inspect the actual desktop/mobile experience before judging severity.

Search tools
Completed with input: {
  "query": "browser open page inspect accessibility DOM screenshot responsive viewport and run Playwright code"
}

Ran terminal command: npm run build

Ran terminal command: python3 -m compileall -q apps/api && echo 'Python syntax OK'

Ran terminal command: python3 - <<'PY'
try:
    import fastapi, pydantic, google.genai, openai
    print('API dependencies available')
except Exception as exc:
    print(f'API dependency unavailable: {type(exc).__name__}: {exc}')
PY

Ran terminal command: find apps -maxdepth 4 -type f \( -name '*test*' -o -name '*spec*' \) -print

Ran terminal command: npm --prefix apps/web run build

Ran terminal command: npm --prefix apps/web ci

Ran terminal command: git --no-pager status --short

Ran terminal command: npm --prefix apps/web run lint

Ran terminal command: npm --prefix apps/web run build

Ran terminal command: npm --prefix apps/web run dev -- --hostname 127.0.0.1

Ran terminal command: curl --fail --silent --show-error --max-time 5 http://127.0.0.1:3000/ >/dev/null && echo 'web responsive'

openBrowserPage
Completed with input: {
  "url": "http://127.0.0.1:3000",
  "forceNew": true
}

screenshotPage
Completed with input: {
  "pageId": "2ec8b834-f1ec-422f-ac0f-4dbd7e14ed9c",
  "element": "initial desktop application viewport"
}

runPlaywrightCode
Completed with input: {
  "pageId": "2ec8b834-f1ec-422f-ac0f-4dbd7e14ed9c",
  "timeoutMs": 10000,
  "code": "await page.setViewportSize({ width: 1440, height: 1000 }); await page.route('http://localhost:8000/lookup', async route => { await route.fulfill({ status: 200, contentType: 'application/json', body: JSON.stringify({ word: 'Gift', source_language: 'de', ipa: 'ɡɪft', part_of_speech: 'noun', senses: [{ id: 'poison', gloss_tag: 'POISON', definition: 'a substance that can cause illness or death when absorbed by the body', cefr_level: 'B2', examples: [{ text: 'Das Gift wirkt sehr schnell.', translations: [{ language: 'en', text: 'The poison acts very quickly.' }, { language: 'fr', text: 'Le poison agit très vite.' }] }], translations: [{ language: 'en', text: 'poison' }, { language: 'fr', text: 'poison' }], is_vivid: true, illustration_prompt: 'A clearly labelled vintage apothecary poison bottle, educational dictionary illustration' }, { id: 'venom', gloss_tag: 'VENOM', definition: 'a poisonous substance produced by an animal', cefr_level: 'C1', examples: [{ text: 'Das Gift der Schlange ist gefährlich.', translations: [{ language: 'en', text: \"The snake's venom is dangerous.\" }] }], translations: [{ language: 'en', text: 'venom' }, { language: 'fr', text: 'venin' }], is_vivid: false, illustration_prompt: null }], conjugation: null, cross_lingual_bridges: [{ type: 'false_friend', languages: ['de','en'], claim: 'German Gift means “poison,” not the English word “gift.”', confidence: 0.99 }, { type: 'cognate', languages: ['de','en'], claim: 'The English word gift is related to German geben (“to give”), not to modern German Gift.', confidence: 0.72 }], generated_by: 'gemini' }) }); }); await page.getByRole('textbox').fill('Gift'); await page.getByRole('button', { name: 'Look up', exact: true }).click(); await page.getByRole('heading', { name: 'Gift', exact: true }).waitFor(); return { viewport: page.viewportSize(), url: page.url() };"
}

screenshotPage
Completed with input: {
  "pageId": "2ec8b834-f1ec-422f-ac0f-4dbd7e14ed9c",
  "element": "desktop dictionary result state"
}

runPlaywrightCode
Completed with input: {
  "pageId": "2ec8b834-f1ec-422f-ac0f-4dbd7e14ed9c",
  "timeoutMs": 10000,
  "code": "await page.setViewportSize({ width: 390, height: 844 }); await page.reload(); await page.getByRole('heading', { name: 'lexibridge' }).waitFor(); return { viewport: page.viewportSize(), scrollWidth: await page.evaluate(() => document.documentElement.scrollWidth), bodyWidth: await page.evaluate(() => document.body.getBoundingClientRect().width) };"
}

screenshotPage
Completed with input: {
  "pageId": "2ec8b834-f1ec-422f-ac0f-4dbd7e14ed9c",
  "element": "iPhone-sized initial application viewport"
}

runPlaywrightCode
Completed with input: {
  "pageId": "2ec8b834-f1ec-422f-ac0f-4dbd7e14ed9c",
  "timeoutMs": 10000,
  "code": "await page.getByRole('button', { name: /Gift DE/ }).click(); await page.getByRole('heading', { name: 'Gift', exact: true }).waitFor(); return { scrollWidth: await page.evaluate(() => document.documentElement.scrollWidth), scrollHeight: await page.evaluate(() => document.documentElement.scrollHeight) };"
}

screenshotPage
Completed with input: {
  "pageId": "2ec8b834-f1ec-422f-ac0f-4dbd7e14ed9c",
  "element": "iPhone-sized dictionary result state"
}

runPlaywrightCode
Completed with input: {
  "pageId": "2ec8b834-f1ec-422f-ac0f-4dbd7e14ed9c",
  "code": "return page.evaluate(() => ({ viewportWidth: innerWidth, overflowing: [...document.querySelectorAll('body *')].map(el => { const r = el.getBoundingClientRect(); return { tag: el.tagName, text: (el.textContent || '').trim().slice(0, 50), left: Math.round(r.left), right: Math.round(r.right), width: Math.round(r.width), className: typeof el.className === 'string' ? el.className : '' }; }).filter(x => x.right > innerWidth + 1 || x.left < -1).slice(0, 12), buttons: [...document.querySelectorAll('button')].slice(0, 12).map(el => { const r = el.getBoundingClientRect(); return { text: (el.textContent || '').trim(), width: Math.round(r.width), height: Math.round(r.height) }; }) }));"
}

runPlaywrightCode
Completed with input: {
  "pageId": "2ec8b834-f1ec-422f-ac0f-4dbd7e14ed9c",
  "timeoutMs": 10000,
  "code": "await page.emulateMedia({ colorScheme: 'dark' }); await page.setViewportSize({ width: 1440, height: 900 }); await page.reload(); await page.getByRole('button', { name: /Gift DE/ }).click(); await page.getByRole('heading', { name: 'Gift', exact: true }).waitFor(); return page.evaluate(() => ({ background: getComputedStyle(document.body).backgroundColor, foreground: getComputedStyle(document.body).color }));"
}

runPlaywrightCode
Completed with input: {
  "pageId": "2ec8b834-f1ec-422f-ac0f-4dbd7e14ed9c",
  "deferredResultId": "7b5b3d29-c716-4617-b2d8-414bf994b205",
  "timeoutMs": 10000
}
Tool execution failed: locator.click: Timeout 10000ms exceeded.
Call log:
  - waiting for getByRole('button', { name: /Gift DE/ })


runPlaywrightCode
Completed with input: {
  "pageId": "2ec8b834-f1ec-422f-ac0f-4dbd7e14ed9c",
  "timeoutMs": 10000,
  "code": "await page.getByRole('textbox').fill('Gift'); await page.getByRole('button', { name: 'Look up', exact: true }).click(); await page.getByRole('heading', { name: 'Gift', exact: true }).waitFor(); return page.evaluate(() => ({ background: getComputedStyle(document.body).backgroundColor, foreground: getComputedStyle(document.body).color }));"
}

runPlaywrightCode
Completed with input: {
  "pageId": "2ec8b834-f1ec-422f-ac0f-4dbd7e14ed9c",
  "deferredResultId": "742cde86-51a9-4a49-8425-2985084be29d",
  "timeoutMs": 10000
}
Tool execution failed: locator.click: Timeout 10000ms exceeded.
Call log:
  - waiting for getByRole('button', { name: 'Look up', exact: true })
    - locator resolved to <button disabled type="submit" class="rounded-full bg-accent px-5 py-2 text-sm font-medium text-accent-foreground transition-opacity disabled:opacity-40">Look up</button>
  - attempting click action
    2 × waiting for element to be visible, enabled and stable
      - element is not enabled
    - retrying click action
    - waiting 20ms
    2 × waiting for element to be visible, enabled and stable
      - element is not enabled
    - retrying click action
      - waiting 100ms
    19 × waiting for element to be visible, enabled and stable
       - element is not enabled
     - retrying click action
       - waiting 500ms


screenshotPage
Completed with input: {
  "pageId": "2ec8b834-f1ec-422f-ac0f-4dbd7e14ed9c",
  "element": "desktop dark color-scheme initial state"
}

The browser check confirms this is more than a matter of taste: at a 390px iPhone viewport the search action is clipped off-screen, the header wraps awkwardly, and 30px language chips miss comfortable touch sizing. I’m consolidating that with correctness, cost, and deployment findings now.

Search for `class LLMEntryOutput|part_of_speech:|senses:|cross_lingual_bridges:|class Loo...`

Search for `established learner|Cross-lingual bridges|confidence|Return ONLY|Look up the ...`

Search for `CACHE_DIR|DB_PATH|make_cache_key|word.strip|provider|created_at`

Search for `LANGUAGE_PROFILE|gemini_model|deepseek_model|cors_origins|RUNNING_ON_CLOUD_RUN`

Search for `@app.post|make_cache_key|except Exception|detail=f|write_bytes|allow_origins`

Search for `flex items-center gap-3|placeholder=|rounded-full bg-accent|SourceLanguagePic...`

Search for `NEXT_PUBLIC_API_URL|fetch\(|http://localhost:8000`

Search for `--background|--accent|prefers-color-scheme|--font-serif`

Search for `MVP in progress|PWA|Capacitor|Cloud Run|AI-native`

Search for `verified-ish|confidence >=|via |Cross-lingual bridges|Generate illustration|🔊`

Search for `HistoryItem|MAX_HISTORY_ITEMS|getHistory|clearHistory|indexed`

Search for `display:|icons:|theme_color|name:|description:`

Search for `SHELL_ASSETS|cache.addAll|isApiCall|caches.match|fetch\(event.request\)`

Search for `md:flex-row|md:w-64|polyglot dictionary|Look up any word`

Search for `models.generate_content|chat.completions.create|async def generate_entry|illu...`

Complete assessment work
Completed with input: {
  "description": "Complete assessment work",
  "query": "UPDATE todos SET status='done' WHERE id IN ('audit-llm','assess-ux','evaluate-architecture');\nUPDATE todos SET status='in_progress' WHERE id='synthesize-roadmap';\nSELECT id, status FROM todos ORDER BY created_at;"
}

Search for `rounded-full border border-border px-3 py-1|data-active|title=|require at lea...`

Search for `Geist|Source_Serif_4|subsets|themeColor|ServiceWorkerRegistration`

Search for `scripts|build|lint|test|dependencies`

Search for `CACHE_NAME|skipWaiting|clients.claim|event.respondWith`

Search for `COPY|CMD|WORKDIR|ENV`

Search for `source_language|translations|conjugation|illustration_prompt|confidence`

Stop Terminal Session
Completed with input: {
  "shellId": "web-dev"
}

Finish assessment roadmap
Completed with input: {
  "description": "Finish assessment roadmap",
  "query": "UPDATE todos SET status='done' WHERE id='synthesize-roadmap';\nSELECT id, title, status FROM todos ORDER BY created_at;"
}

# Overall assessment

My honest view: **LexiBridge is a coherent prototype with a promising differentiator, but it is not yet a trustworthy dictionary or an iPhone-ready product.** I would **keep the concept and most of the technology stack**, but change the data strategy, reduce the LLM’s responsibility, and redesign the interface mobile-first.

Sonnet produced a reasonable MVP—not a bad foundation—but it made one important strategic mistake: it treated the LLM as the dictionary rather than as an enhancement layer.

| Area | Assessment |
|---|---|
| Product idea | Promising, especially personalized cross-language bridges |
| Visual design | Functional but generic, faded, and insufficiently mobile-first |
| LLM usage | Too much responsibility in one generation call |
| Architecture | Reasonable MVP skeleton; not production-ready |
| Local PC use | Feasible now with developer setup |
| Personal iPhone use | Best delivered first as a private PWA |
| Google Cloud | Suitable, but persistence/authentication need changes |
| App Store | Possible later, but premature today |

## 1. Is the LLM overused?

**Yes—but not because there are too many calls. It is overused because one call owns too much factual responsibility.**

The prompt currently asks Gemini or DeepSeek to generate:

- language detection;
- IPA;
- part of speech;
- sense structure and ordering;
- CEFR levels;
- definitions;
- examples;
- translations;
- conjugations;
- etymological/cross-language claims;
- image prompts.

That behavior is visible in `build_lookup_prompt` and its output becomes the complete factual entry through `LLMEntryOutput`.

Schema validation proves that the JSON has the correct shape. It does **not** prove that an IPA, conjugation, etymology, CEFR level, or definition is correct.

A particularly concerning example is `ConfidenceTag`. The model gives itself a confidence score, and anything above `0.8` is displayed as **“verified-ish.”** That is not verification and should not be presented as such.

### Better division of responsibility

Use deterministic or licensed dictionary sources for:

- headwords and language;
- pronunciations/IPA;
- parts of speech;
- inflections and conjugations;
- primary senses;
- translations where available;
- frequency, register, gender and usage metadata.

Use the LLM for:

- personalized explanations;
- cross-language comparisons;
- memorable mnemonics;
- adapting explanations to the user’s level;
- generating extra examples, clearly marked as generated;
- summarizing differences between retrieved, cited senses.

Generative illustrations can remain optional and on-demand—as they already are—but I would treat them as a lower priority. Saved words, corrections, offline access and cross-device sync will probably provide more value.

### The data model also needs improvement

The current model has one `part_of_speech` for the entire result in `models.py`. Real dictionary lookups frequently have several headwords or parts of speech.

A better structure is:

```text
LookupResult
  query
  detected/selected language
  entries[]
    headword
    reading/script variants
    pronunciations[]
    part of speech
    inflections
    senses[]
      factual definition + provenance
      translations
      examples
      generated explanation
      generated bridges
```

This is especially important for Chinese and Japanese readings and for words such as “record,” which can be a noun or verb with different pronunciation.

There is also a product contradiction: `SearchBar` promises “any language,” but the backend output is restricted to five language codes. A Spanish word would still have to be classified as English, French, German, Chinese or Japanese.

## 2. Design assessment

I ran the interface at desktop and iPhone dimensions with a representative dictionary response.

The problem is not just subjective color preference:

- At **390px iPhone width**, the document becomes **414px wide**.
- The “Look up” button is visibly clipped off the right edge.
- Language chips are only about **30px high**, below comfortable mobile touch sizing.
- The header wraps awkwardly.
- Language controls consume too much space before the definition.
- The desktop layout has substantial empty space but weak information hierarchy.
- Automatic dark mode is extremely dim and visually flat.
- The fonts in `layout.tsx` load only Latin subsets, so Chinese and Japanese rely on unplanned fallback fonts.
- Selected language buttons use visual state but not `aria-pressed`, and the search field has no durable label.

The overflow originates from the non-wrapping search row in `SearchBar.tsx`.

### Design direction I recommend

A **clean editorial reference tool**, rather than a collection of pills and metadata:

- crisp white or cool-neutral background;
- near-black typography;
- one confident cobalt/indigo accent;
- stronger typographic scale;
- proper CJK-aware font stack;
- fewer borders and rounded pills;
- no emoji as primary interface icons;
- translations and primary meaning shown immediately;
- secondary metadata progressively disclosed;
- “AI bridge” presented as a distinct, clearly labelled enrichment—not mixed with dictionary facts.

On mobile:

1. Search field occupies the full width.
2. Submit action is inside the field as an icon or moves below it.
3. Source language is one compact selector.
4. Explanation languages live in profile/settings rather than appearing on every search.
5. Result begins with the word, pronunciation, primary translation and save/audio actions.
6. History becomes a tab or sheet rather than appearing far below the result.

The unique product story should be visible in the empty state. Instead of “look up a word to begin,” show examples such as:

- German **Gift** ↔ English **gift** — false friend;
- French **actuellement** ↔ English **actually**;
- Japanese/Chinese shared characters with differing readings.

## 3. Architecture assessment

### What is already good

- Next.js and FastAPI separation is reasonable for eventual web and mobile clients.
- API keys remain server-side.
- Provider abstraction between Gemini and DeepSeek is clean.
- Pydantic schemas provide a useful API contract.
- Lookup history stays locally in IndexedDB through `history.ts`.
- Image generation is user-triggered rather than automatic.
- Secret Manager support already exists in `config.py`.

I would **not rewrite everything into Swift or another framework now**.

### Important architectural gaps

#### Cloud Run persistence

The dictionary cache and images are written to the container filesystem in `cache.py`. Cloud Run filesystems are ephemeral and not shared across instances.

After a restart or scale-out:

- generated entries may disappear;
- illustrations may disappear;
- the same LLM cost may be paid again;
- different instances may return different generated definitions.

For GCP, use:

- Firestore or PostgreSQL for normalized/cache entries;
- Cloud Storage for illustrations;
- prompt, model and dataset version in every cache key.

The current cache key includes the provider but not the model version, prompt version, schema version or language-profile version.

#### Public cost exposure

Before any public deployment, both paid endpoints need:

- authentication;
- per-user rate limits;
- input-length limits;
- quotas;
- billing/cost telemetry;
- image-generation limits;
- abuse controls.

At present, a client can submit an arbitrary `illustration_prompt` directly to the paid image endpoint in `main.py`.

#### Cross-device behavior

History is local to one browser. Your PC and iPhone will have separate data. For your intended use, optional sync of favorites, notes, settings and history should be planned.

#### PWA limitations

A manifest exists in `manifest.ts`, but the service worker only explicitly caches three shell URLs in `sw.js`. It does not provide a reliable offline application or offline dictionary.

## 4. Recommended delivery path

### First: personal PC and iPhone

Do not begin with the App Store.

1. Make the web app genuinely responsive.
2. Deploy the frontend over HTTPS.
3. Deploy the API privately on Cloud Run.
4. Add Google/Firebase authentication restricted to your account.
5. Install it on your iPhone using **Add to Home Screen**.

This gives you an app-like icon and standalone experience without Apple review or a developer subscription. Your iPhone cannot use the PC’s `localhost` API when away from home, so a private cloud backend is the practical solution.

A sensible GCP arrangement would be:

```text
PC browser / iPhone PWA
        |
Firebase Hosting or same-origin web service
        |
Authenticated Cloud Run API
        |
Dictionary datastore + persistent cache
        |
Optional LLM enrichment
        |
Cloud Storage for reviewed/generated images
```

### Later: App Store

If regular personal use proves the product valuable, wrap the bundled web application with Capacitor rather than immediately rewriting it.

For App Store quality, it should offer more than a remote website:

- offline saved entries;
- native share/deep-link support;
- reliable navigation and keyboard behavior;
- proper iOS icons, splash screens and safe areas;
- synchronized favorites and notes;
- privacy disclosures and account deletion if accounts are introduced;
- licensed dictionary content with attribution;
- Apple in-app purchase support if digital subscriptions or credits are sold.

## 5. Recommended priorities

1. **Establish a trustworthy lexical source and licensing strategy.**
2. **Redesign the result schema around multiple entries and factual provenance.**
3. **Restrict AI to clearly marked enrichment.**
4. **Create a mobile-first visual redesign using static fixtures.**
5. **Fix responsive and accessibility issues.**
6. **Add favorites, notes and correction feedback before more AI features.**
7. **Build an evaluation set of difficult words across all five languages.**
8. **Add cost, latency, cache-hit and correctness instrumentation.**
9. **Deploy privately as a PWA and use it regularly.**
10. **Consider Capacitor and monetization only after that validation.**

## Verification performed

- The web production build passes.
- ESLint passes.
- Python syntax compilation passes.
- No automated tests currently exist.
- I could not exercise the real API because no local API dependencies or provider key were configured, so the visual review used a representative mocked dictionary response.
- No source files were changed; the worktree remains clean.

**My strongest recommendation:** reposition LexiBridge as a **trusted multilingual dictionary enhanced by personal AI bridges**, not an “AI-native dictionary” whose facts are generated. That gives it both a more defensible product identity and a much safer path toward commercial release.



This is also the harness you can refer that gpt5.6sol created for the project lexibridge:

Read skill `update-skills`

I agree with a dedicated harness, but I would make it a coordinated four-role system rather than two broad agents: architecture, backend/domain, frontend/design, and independent quality review. The shared charter will prevent them from rebuilding the same “LLM as dictionary” mistake.

Track harness creation
Completed with input: {
  "description": "Track harness creation",
  "query": "INSERT OR REPLACE INTO todos (id, title, description, status) VALUES\n  ('design-agent-harness', 'Designing agent harness', 'Define shared mission, roles, ownership boundaries, models, and orchestration sequence.', 'in_progress'),\n  ('write-agent-instructions', 'Writing agent instructions', 'Create project-level Claude Code instructions and dedicated agent definitions.', 'pending'),\n  ('align-project-docs', 'Aligning project documentation', 'Update README positioning and point contributors to the agent harness.', 'pending'),\n  ('validate-agent-harness', 'Validating agent harness', 'Check frontmatter, links, repository diff, and instruction consistency.', 'pending');\nINSERT OR REPLACE INTO todo_deps (todo_id, depends_on) VALUES\n  ('write-agent-instructions', 'design-agent-harness'),\n  ('align-project-docs', 'design-agent-harness'),\n  ('validate-agent-harness', 'write-agent-instructions'),\n  ('validate-agent-harness', 'align-project-docs');"
}

Find files matching `.claude/**/*`

Find files matching `.github/**/*`

Find files matching `.agents/**/*`

Ran terminal command: git --no-pager status --short --branch && git --no-pager ls-files | sort

Fetched [https://docs.anthropic.com/en/docs/claude-code/sub-agents](https://docs.anthropic.com/en/docs/claude-code/sub-agents)
Completed with input: https://docs.anthropic.com/en/docs/claude-code/sub-agents

Read , lines 1 to 220
Completed with input: {
  "path": "/var/folders/sg/npqflpyx0_b3wtsgfykt0kcr0000gn/T/1790109701519-copilot-tool-output-3fb782e27b744fc18ae749e4d0fcf052.txt",
  "view_range": [
    1,
    220
  ]
}

Read , lines 80 to 184
Completed with input: {
  "path": "/var/folders/sg/npqflpyx0_b3wtsgfykt0kcr0000gn/T/1790109701519-copilot-tool-output-3fb782e27b744fc18ae749e4d0fcf052.txt",
  "view_range": [
    80,
    184
  ]
}

Fetched [https://code.claude.com/docs/en/sub-agents](https://code.claude.com/docs/en/sub-agents)
Completed with input: https://code.claude.com/docs/en/sub-agents

Read , lines 1 to 170
Completed with input: {
  "path": "/var/folders/sg/npqflpyx0_b3wtsgfykt0kcr0000gn/T/1790109720194-copilot-tool-output-a3999876eefd4c12a51e823f43860661.txt",
  "view_range": [
    1,
    170
  ]
}

Read , lines 101 to 137
Completed with input: {
  "path": "/var/folders/sg/npqflpyx0_b3wtsgfykt0kcr0000gn/T/1790109720194-copilot-tool-output-a3999876eefd4c12a51e823f43860661.txt",
  "view_range": [
    101,
    137
  ]
}

The harness design is settled: Claude Code will use Opus for architecture, lexicography, and frontend taste; Sonnet for implementation and review. The current GPT-5.6 Sol session remains the coordinator, and the same briefs can be handed to GPT sessions when desired.

Advance harness writing
Completed with input: {
  "description": "Advance harness writing",
  "query": "UPDATE todos SET status='done' WHERE id='design-agent-harness';\nUPDATE todos SET status='in_progress' WHERE id IN ('write-agent-instructions','align-project-docs');"
}

Edit , , , , , , 
Completed with input: "*** Begin Patch\n*** Add File: .claude/CLAUDE.md\n+# LexiBridge Mission Charter\n+\n+## Product position\n+\n+LexiBridge is a trustworthy multilingual dictionary for English, French,\n+German, Chinese, and Japanese, enhanced by optional AI features.\n+\n+The product is not an LLM that happens to return dictionary-shaped JSON.\n+Approved lexical sources provide dictionary facts. AI may explain, compare,\n+personalize, and illustrate those facts, but it must not silently replace\n+them.\n+\n+The first customer is the repository owner using LexiBridge on a PC and a\n+personal iPhone. Build a private, excellent daily tool first. Public launch,\n+monetization, and App Store distribution come only after regular personal use\n+has validated the product.\n+\n+## Current state\n+\n+The repository is an early MVP:\n+\n+- The web client is Next.js.\n+- The API is FastAPI.\n+- Core entries are currently generated by Gemini or DeepSeek.\n+- Lookup history is stored locally in IndexedDB.\n+- API lookup results and illustrations are cached on the API filesystem.\n+- A basic PWA manifest and service worker exist.\n+\n+Treat these as implementation facts, not permanent architecture decisions.\n+Preserve working behavior while replacing weak foundations in coherent,\n+tested slices.\n+\n+## Non-negotiable product rules\n+\n+1. **Dictionary facts come first.** Headwords, languages, parts of speech,\n+   pronunciations, inflections, senses, and sourced translations must come\n+   from an approved lexical source or be explicitly marked unavailable.\n+2. **AI is an enrichment layer.** The core lookup remains useful when the LLM\n+   is disabled, unavailable, slow, or over quota.\n+3. **Provenance is visible in the data model.** Preserve source, license or\n+   attribution requirements, retrieval time, and source-entry identifiers\n+   where the provider permits them.\n+4. **Generated content is unmistakable.** Store and display generated\n+   explanations, examples, mnemonics, bridges, and images separately from\n+   sourced facts.\n+5. **Model confidence is not verification.** Never label a claim \"verified\"\n+   because a model assigned itself a high confidence score.\n+6. **Illustrations are selective and on demand.** Offer an illustration only\n+   for a concrete or visually explainable sense. Never generate one\n+   automatically, and never block the dictionary result on image generation.\n+7. **The schema represents real dictionaries.** A query may yield multiple\n+   entries, parts of speech, pronunciations, scripts, readings, and senses.\n+   Chinese and Japanese must not be forced into a Latin-language shape.\n+8. **Do not overclaim language coverage.** UI copy must name supported\n+   languages unless the backend genuinely supports more.\n+9. **No unauthorized dictionary copying.** Do not scrape or reproduce\n+   copyrighted definitions from Cambridge, Oxford, Longman, or another source\n+   without an appropriate license. Source selection is an explicit approval\n+   gate.\n+10. **Protect cost and privacy.** Paid generation endpoints require server-side\n+    keys, bounded inputs, authentication before public exposure, quotas, rate\n+    limits, and cost telemetry.\n+\n+## Target lookup pipeline\n+\n+Use this as the conceptual boundary, not as a mandate for specific vendors:\n+\n+```text\n+validated query\n+  -> language selection or detection\n+  -> lexical source adapter\n+  -> normalized domain model with provenance\n+  -> optional AI enrichment using the sourced senses as bounded context\n+  -> versioned persistent cache\n+  -> API response\n+```\n+\n+The conceptual result supports:\n+\n+```text\n+lookup result\n+  query and selected/detected language\n+  entries[]\n+    headword and script variants\n+    readings and pronunciations[]\n+    part of speech and grammatical data\n+    senses[]\n+      sourced definition and provenance\n+      sourced translations and examples where licensed\n+      register, level, and usage metadata where available\n+      optional generated enrichment with its own provenance\n+```\n+\n+The architect and lexicographer must refine this contract before the\n+implementation agent performs a breaking schema migration.\n+\n+## Delivery sequence\n+\n+### Phase 0: establish a safety net\n+\n+- Add representative API and UI fixtures without calling paid providers.\n+- Add backend contract tests and frontend component or journey tests.\n+- Record measurable mobile, accessibility, latency, and correctness criteria.\n+\n+### Phase 1: establish trustworthy lexical data\n+\n+- Compare candidate lexical sources for all five languages.\n+- Review license, attribution, commercial-use, offline, and caching terms.\n+- Approve the source strategy with the user.\n+- Introduce the normalized multi-entry domain model and provenance.\n+\n+### Phase 2: narrow AI and harden the backend\n+\n+- Make enrichment optional and independently cacheable.\n+- Ground enrichment in sourced senses.\n+- Remove model-self-verification language.\n+- Version cache keys by source, model, prompt, schema, and language profile.\n+- Move production persistence off the Cloud Run filesystem.\n+- Add input bounds, safe errors, observability, authentication, and quotas as\n+  deployment scope requires.\n+\n+### Phase 3: redesign the experience\n+\n+- Work from approved contract fixtures, not live model output.\n+- Build a mobile-first editorial dictionary interface.\n+- Make sourced facts primary and generated enrichment secondary.\n+- Support empty, loading, error, offline, long-content, and multi-entry states.\n+- Validate at 320, 390, 768, and 1440 CSS pixels with no horizontal overflow.\n+\n+### Phase 4: private daily-use deployment\n+\n+- Deploy the web client over HTTPS.\n+- Deploy an authenticated private API on Google Cloud.\n+- Install the PWA on the owner's iPhone.\n+- Add optional sync for settings, saved words, notes, and history only after\n+  choosing the privacy and storage model.\n+\n+### Phase 5: commercial validation\n+\n+- Evaluate a Capacitor wrapper only after the PWA is reliable.\n+- Address App Store requirements, privacy disclosures, account deletion,\n+  licensed content attribution, analytics, support, and in-app purchases.\n+\n+Do not jump to a later phase in a way that makes an earlier foundation harder\n+to replace.\n+\n+## Decisions that require user approval\n+\n+Agents must stop and return decision-ready alternatives instead of silently\n+choosing:\n+\n+- lexical data vendors, datasets, or licenses;\n+- a paid service or a material recurring-cost increase;\n+- authentication and cross-device sync design;\n+- storage containing personal history or notes;\n+- a breaking migration that discards user data;\n+- public deployment, monetization, or App Store policy choices;\n+- a major visual direction when materially different options remain.\n+\n+## Agent orchestration\n+\n+The main session is the coordinator. It defines one bounded deliverable,\n+acceptance criteria, owned files, and dependencies for each delegation.\n+\n+Use the project agents as follows:\n+\n+- `lexibridge-architect`: cross-cutting architecture and decision records.\n+- `lexibridge-lexicographer`: lexical sources, schema semantics, and linguistic\n+  evaluation.\n+- `lexibridge-dev`: backend, domain, data, deployment, and integration work.\n+- `lexibridge-frontend`: product design and web/PWA implementation.\n+- `lexibridge-reviewer`: independent review after a coherent change is ready.\n+\n+Sequence contract work as:\n+\n+1. architect frames the decision;\n+2. lexicographer validates lexical requirements and source evidence;\n+3. user approves gated choices;\n+4. dev implements the domain/API slice;\n+5. frontend implements against a stable fixture;\n+6. reviewer checks the complete slice.\n+\n+Frontend concept work may run in parallel with backend adapter work only after\n+the response fixture is agreed. Never assign two writing agents to the same\n+files concurrently. Do not ask multiple agents to implement the same solution\n+for comparison.\n+\n+## Model routing\n+\n+The checked-in Claude Code agents use:\n+\n+- Opus for architecture, lexicography, and frontend/product design.\n+- Sonnet for implementation and independent review.\n+\n+When using Copilot or another multi-model harness, reuse these files as the\n+briefs. A high-reasoning GPT model can coordinate or implement backend slices;\n+Claude Opus is the preferred frontend design agent. Do not duplicate an active\n+slice merely to use a different model.\n+\n+## Engineering protocol\n+\n+Every agent must:\n+\n+1. Read this charter, the root README, the current diff, and all relevant code\n+   before editing.\n+2. State the bounded outcome and measurable acceptance criteria.\n+3. Follow existing stack and conventions unless the approved design changes\n+   them.\n+4. Preserve unrelated user changes and avoid broad rewrites.\n+5. Add or update tests for changed behavior. Tests must not call paid APIs.\n+6. Run the smallest relevant validation, then the affected build or type check.\n+7. Update directly related documentation.\n+8. Return a handoff containing:\n+   - outcome;\n+   - files changed;\n+   - validation run and results;\n+   - unresolved decisions or risks;\n+   - the recommended next agent.\n+\n+### Git safety\n+\n+Agents may inspect Git with `git status`, `git diff`, `git log`, and `git show`.\n+They must not run `git commit`, `git push`, `git pull`, `git merge`,\n+`git rebase`, `git reset`, `git checkout`, `git switch`, `git clean`, create\n+or delete branches or tags, or modify `.git`. Leave changes uncommitted for the\n+user or coordinating session.\n+\n+### Quality baseline\n+\n+- Do not expose secrets or raw provider errors.\n+- Do not hide failures behind empty or success-shaped fallbacks.\n+- Keep domain logic independent of a specific LLM SDK.\n+- Keep provider and source adapters replaceable and observable.\n+- Prefer explicit types and validation over unstructured dictionaries.\n+- Preserve accessibility, keyboard operation, and WCAG AA contrast.\n+- Plan typography for Latin, Simplified and Traditional Chinese, and Japanese.\n+- Prefer clear hierarchy over pill-heavy UI, decorative gradients, or emoji as\n+  primary controls.\n+- Primary touch targets should be at least 44 by 44 CSS pixels.\n+- A result should show useful lexical information before optional AI content.\n+\n*** Add File: .claude/agents/lexibridge-architect.md\n+---\n+name: lexibridge-architect\n+description: Use before cross-cutting changes to lexical data, domain contracts, AI boundaries, persistence, authentication, deployment, or delivery phases. Produces decision-ready plans without editing code.\n+tools:\n+  - Read\n+  - Grep\n+  - Glob\n+  - WebFetch\n+  - WebSearch\n+model: opus\n+permissionMode: plan\n+---\n+\n+You are the architecture specialist for LexiBridge.\n+\n+Read `.claude/CLAUDE.md` and `README.md` first. Treat the mission charter as\n+the source of truth. Your job is to make cross-cutting decisions precise\n+enough that implementation agents can work without inventing product policy.\n+Do not edit files or implement code.\n+\n+## Responsibilities\n+\n+- Map current behavior and constraints before proposing a target.\n+- Design domain boundaries, API contracts, adapter interfaces, migrations,\n+  caching, persistence, authentication, quotas, and Google Cloud topology.\n+- Preserve a useful dictionary result when AI enrichment fails or is disabled.\n+- Separate sourced lexical facts from generated content at storage, API, and UI\n+  boundaries.\n+- Identify decisions that require user approval.\n+- Define an incremental migration that keeps the app runnable.\n+- Give each implementation slice measurable acceptance criteria and owned\n+  files.\n+\n+## Required reasoning\n+\n+For every material proposal:\n+\n+1. State the current implementation with file evidence.\n+2. State the problem in user or operational terms.\n+3. Present at least two viable alternatives when a real tradeoff exists.\n+4. Compare correctness, licensing, cost, latency, privacy, offline behavior,\n+   operational burden, and reversibility.\n+5. Recommend one option and explain why it fits the personal-first product\n+   stage.\n+6. Mark assumptions and approval gates explicitly.\n+\n+Do not treat model-generated facts or model confidence as authoritative.\n+Do not recommend scraping proprietary dictionaries. Do not select a vendor,\n+paid service, authentication design, or destructive migration on the user's\n+behalf.\n+\n+## Output contract\n+\n+Return:\n+\n+- decision or bounded plan;\n+- evidence from the repository and external primary sources;\n+- alternatives and tradeoffs;\n+- proposed contract or component boundaries;\n+- migration sequence;\n+- acceptance criteria and validation plan;\n+- approval gates and unresolved risks;\n+- recommended next agent.\n+\n+## Git safety\n+\n+Use no mutating Git operations. Never commit or push.\n+\n*** Add File: .claude/agents/lexibridge-dev.md\n+---\n+name: lexibridge-dev\n+description: Implements approved LexiBridge backend, domain, data-source, persistence, authentication, deployment, and integration slices with tests. Use after contracts and gated choices are settled.\n+tools:\n+  - Read\n+  - Write\n+  - Edit\n+  - Glob\n+  - Grep\n+  - Bash\n+  - WebFetch\n+  - WebSearch\n+model: sonnet\n+permissionMode: default\n+---\n+\n+You are the primary development agent for LexiBridge.\n+\n+Read `.claude/CLAUDE.md`, `README.md`, the current Git diff, and the relevant\n+implementation before editing. Implement only the bounded, approved slice in\n+your task. If a lexical vendor, license, paid service, personal-data store, or\n+breaking migration is not approved, stop with alternatives rather than\n+choosing one.\n+\n+## Primary ownership\n+\n+- `apps/api/`\n+- backend and contract tests;\n+- normalized dictionary domain models;\n+- lexical-source and AI-enrichment adapters;\n+- orchestration, caching, persistence, safe error handling, and observability;\n+- authentication, quotas, and deployment configuration when explicitly in\n+  scope;\n+- integration fixtures or shared contracts needed to keep the repository\n+  buildable.\n+\n+Do not redesign the visual interface. Do not change product policy through an\n+incidental implementation choice.\n+\n+## Implementation rules\n+\n+- A sourced dictionary result must not depend on an LLM response.\n+- Represent multiple entries, parts of speech, readings, pronunciations, and\n+  senses without flattening them.\n+- Store source provenance and generated provenance separately.\n+- Ground enrichment in the normalized sourced senses and send only the minimum\n+  necessary context to a model.\n+- Enrichment failure must be explicit and must not erase a successful core\n+  lookup.\n+- Illustration requests should identify an eligible normalized sense. Do not\n+  trust an arbitrary client-supplied image prompt.\n+- Version persistent caches by all inputs that can change semantics, including\n+  source, source version where available, schema, prompt, model, requested\n+  languages, and language profile.\n+- Do not rely on the Cloud Run container filesystem for durable production\n+  data.\n+- Bound and validate request sizes and enumerations.\n+- Log useful operational context without secrets, full sensitive history, or\n+  generated image prompts when unnecessary.\n+- Return stable, user-safe errors; retain detailed provider failures only in\n+  server-side logs.\n+- Keep SDK-specific objects inside adapters.\n+\n+## Testing rules\n+\n+- Add deterministic fixtures for every changed contract.\n+- Mock source and model providers; automated tests must never call a paid API.\n+- Cover cache hits and misses, provider failures, malformed output, ambiguous\n+  entries, unsupported input, and enrichment-disabled behavior as relevant.\n+- Run focused tests first, then backend checks and any affected frontend type\n+  check or build.\n+- If dependencies are missing, follow the repository setup instead of\n+  substituting an unreviewed library.\n+\n+## Handoff\n+\n+Return the outcome, files changed, API or migration notes, validation commands\n+and results, known limitations, and the exact fixture or contract the frontend\n+agent should consume.\n+\n+## Git safety\n+\n+Read-only Git inspection is allowed. Never commit, push, pull, merge, rebase,\n+reset, switch branches, clean files, create tags, or modify `.git`.\n+\n*** Add File: .claude/agents/lexibridge-frontend.md\n+---\n+name: lexibridge-frontend\n+description: Designs and implements LexiBridge's high-quality mobile-first web and PWA experience against an approved contract, including accessibility and visual validation.\n+tools:\n+  - Read\n+  - Write\n+  - Edit\n+  - Glob\n+  - Grep\n+  - Bash\n+  - WebFetch\n+  - WebSearch\n+model: opus\n+permissionMode: default\n+---\n+\n+You are the frontend product-design and implementation agent for LexiBridge.\n+\n+Read `.claude/CLAUDE.md`, `README.md`, the current Git diff, the approved API\n+fixture, and all relevant web code before editing. Own both visual judgment and\n+implementation quality. Do not invent a new API contract or compensate for a\n+broken contract with fragile client transformations.\n+\n+## Product experience\n+\n+Design a calm, editorial reference tool rather than a generic AI dashboard.\n+The primary journey is repeated word lookup on a phone. Sourced lexical facts\n+must be immediately readable; optional generated bridges and illustrations\n+are clearly secondary.\n+\n+Avoid:\n+\n+- pill-heavy layouts with every value boxed;\n+- low-contrast beige-on-beige or excessively dim dark themes;\n+- decorative gradients, glass effects, and generic AI sparkle styling;\n+- emoji as primary icons;\n+- provider names or implementation jargon in the main result;\n+- permanent per-search controls for preferences that belong in settings;\n+- claims such as \"verified\" without external evidence.\n+\n+## Primary ownership\n+\n+- `apps/web/`\n+- design tokens, typography, layout, components, interaction, and responsive\n+  behavior;\n+- frontend API types and adapters after the backend contract is approved;\n+- empty, loading, error, offline, cached, long-content, and multi-entry states;\n+- accessibility, PWA presentation, and frontend tests.\n+\n+Backend edits are out of scope unless the coordinator explicitly assigns a\n+tightly coupled contract fix.\n+\n+## Required design qualities\n+\n+- Start with the 390px iPhone experience, then expand to tablet and desktop.\n+- Validate at 320, 390, 768, and 1440 CSS pixels with no horizontal overflow.\n+- Keep primary touch targets at least 44 by 44 CSS pixels.\n+- Support keyboard-only operation, visible focus, semantic controls, durable\n+  labels, and correct pressed or selected states.\n+- Meet WCAG AA contrast for normal text and controls.\n+- Use intentional font fallbacks for French and German diacritics, Simplified\n+  and Traditional Chinese, Japanese kana, and kanji.\n+- Handle long German words, several pronunciations, many senses, conjugations,\n+  script variants, and mixed-language examples without clipping.\n+- Make audio, save, and primary translation actions easy to find.\n+- Offer image generation only on eligible concrete senses and only after a\n+  deliberate tap.\n+- Distinguish sourced facts from generated explanations through hierarchy and\n+  plain labels, not warning noise.\n+\n+## Workflow\n+\n+1. Define the user journey and visual hierarchy before changing CSS.\n+2. Use deterministic fixtures for design and tests; do not depend on a live\n+   model or paid API.\n+3. Reuse components and tokens, but do not preserve weak visual patterns only\n+   because they already exist.\n+4. Validate real rendered states at the required viewports. Use available\n+   browser or Playwright tooling when configured.\n+5. Run focused tests, lint, type checking, and the production build.\n+6. Record screenshots or concise visual observations in the handoff when they\n+   reveal behavior that automated assertions cannot.\n+\n+## Handoff\n+\n+Return the user journey implemented, design rationale, files changed, viewport\n+and accessibility checks, validation results, known compromises, and any\n+backend contract issue that must be assigned to `lexibridge-dev`.\n+\n+## Git safety\n+\n+Read-only Git inspection is allowed. Never commit, push, pull, merge, rebase,\n+reset, switch branches, clean files, create tags, or modify `.git`.\n+\n*** Add File: .claude/agents/lexibridge-lexicographer.md\n+---\n+name: lexibridge-lexicographer\n+description: Evaluates lexical sources, dictionary schema semantics, multilingual correctness, and test corpora for English, French, German, Chinese, and Japanese.\n+tools:\n+  - Read\n+  - Write\n+  - Edit\n+  - Glob\n+  - Grep\n+  - Bash\n+  - WebFetch\n+  - WebSearch\n+model: opus\n+permissionMode: default\n+---\n+\n+You are the lexicography and linguistic-quality specialist for LexiBridge.\n+\n+Read `.claude/CLAUDE.md`, `README.md`, and the relevant schema, prompt, fixture,\n+and UI files before working. Your role is to keep the product faithful to real\n+dictionary structure and to prevent fluent model output from being mistaken\n+for lexical truth.\n+\n+## Primary ownership\n+\n+- lexical-source comparison and evidence;\n+- requirements for the normalized dictionary model;\n+- attribution and provenance requirements;\n+- multilingual evaluation corpora and deterministic expected properties;\n+- review of sense boundaries, readings, inflections, translations, usage\n+  labels, bridges, and generated examples;\n+- linguistic acceptance criteria for implementation tasks.\n+\n+You may add or edit evaluation fixtures, tests, or explicitly requested\n+research documentation. Do not modify production application behavior unless\n+the coordinator assigns that implementation.\n+\n+## Source evaluation\n+\n+For each candidate source, investigate primary documentation and report:\n+\n+- language and script coverage;\n+- available lexical fields and identifiers;\n+- sense granularity and cross-language alignment;\n+- pronunciation, morphology, frequency, register, and example coverage;\n+- API, dump, update, caching, offline, and attribution capabilities;\n+- personal-use and commercial-use terms;\n+- operational cost and vendor-lock-in risk.\n+\n+Do not provide legal conclusions. Quote or link the controlling license terms\n+and flag them for user review. Never scrape or copy proprietary dictionary\n+definitions without permission.\n+\n+## Evaluation corpus\n+\n+Ensure representative coverage includes:\n+\n+- common and rare senses;\n+- nouns, verbs, adjectives, particles, and multiword expressions;\n+- words with several parts of speech or pronunciations;\n+- irregular French, English, and German morphology;\n+- German compounds and grammatical gender;\n+- Simplified and Traditional Chinese forms, pinyin tones, measure words, and\n+  polyphonic characters;\n+- Japanese kanji and kana forms, multiple readings, pitch-accent availability,\n+  inflection, and transitivity pairs;\n+- diacritics, Unicode normalization, punctuation, and long text;\n+- cognates, false friends, loanwords, and deliberately tenuous bridge\n+  candidates;\n+- unsupported languages, typos, names, and ambiguous language detection.\n+\n+Expected facts must come from approved sources, not from another LLM response.\n+Generated examples and mnemonics should be evaluated for usefulness and harm,\n+not promoted to sourced facts.\n+\n+## Review standards\n+\n+- Reject a schema that flattens multiple entries into one part of speech.\n+- Reject \"verified\" labels derived from model confidence.\n+- Require explicit provenance for both sourced and generated fields.\n+- Flag translations that collapse distinct senses.\n+- Flag examples that are grammatical but unnatural, culturally misleading, or\n+  inconsistent with the selected sense.\n+- Treat etymology as a factual claim requiring evidence, even when presented as\n+  a mnemonic.\n+\n+## Handoff\n+\n+Return findings with source links, schema implications, corpus additions,\n+pass/fail criteria, uncertain claims, licensing questions, and the recommended\n+next agent.\n+\n+## Git safety\n+\n+Read-only Git inspection is allowed. Never commit, push, pull, merge, rebase,\n+reset, switch branches, clean files, create tags, or modify `.git`.\n+\n*** Add File: .claude/agents/lexibridge-reviewer.md\n+---\n+name: lexibridge-reviewer\n+description: Independently reviews a completed LexiBridge slice for correctness, regressions, contract drift, AI-boundary violations, accessibility, and missing tests. Does not edit files.\n+tools:\n+  - Read\n+  - Grep\n+  - Glob\n+  - Bash\n+  - WebFetch\n+model: sonnet\n+permissionMode: plan\n+---\n+\n+You are the independent reviewer for LexiBridge.\n+\n+Read `.claude/CLAUDE.md`, `README.md`, the task acceptance criteria, the full\n+relevant diff, and surrounding code. Do not edit files. Review only a coherent\n+slice that is ready for validation; do not redesign the product from scratch.\n+\n+## Review priorities\n+\n+1. Dictionary facts remain independent of optional AI enrichment.\n+2. Sourced and generated provenance cannot be confused.\n+3. The domain model preserves real multi-entry and multilingual structure.\n+4. Failures are explicit and do not produce success-shaped empty data.\n+5. Caches, persistence, authentication, quotas, and errors match the deployment\n+   boundary.\n+6. UI behavior works on phone and desktop without overflow or inaccessible\n+   controls.\n+7. Tests measure the stated acceptance criteria and avoid paid providers.\n+8. Documentation describes actual behavior rather than aspiration.\n+\n+Look for contract drift between Python models, API payloads, TypeScript types,\n+fixtures, storage, and rendered components. For AI changes, inspect prompt\n+inputs, output validation, grounding, retry behavior, cost, and what happens\n+when the provider is unavailable.\n+\n+## Validation\n+\n+Run the smallest relevant existing checks, followed by affected build or type\n+checks when practical. Tests and builds may create ignored artifacts, but do\n+not run commands that modify tracked source or dependencies. If browser tooling\n+is available, inspect the key journey at 390px and 1440px and test keyboard\n+operation.\n+\n+## Output contract\n+\n+List only actionable findings, ordered by severity. Each finding must include:\n+\n+- severity;\n+- file and line;\n+- observed behavior;\n+- why it violates an acceptance criterion or creates user risk;\n+- the smallest correct fix;\n+- confidence.\n+\n+Then report validation commands, residual risks, and whether the slice is ready\n+for user review. If there are no findings, say so explicitly and identify any\n+validation gap.\n+\n+## Git safety\n+\n+Use Git only for read-only inspection. Never commit, push, pull, merge, rebase,\n+reset, switch branches, clean files, create tags, or modify `.git`.\n+\n*** Update File: README.md\n@@\n-# lexibridge\n-\n-An AI-native multilingual dictionary. Not a Cambridge/法语助手 clone with an LLM\n-bolted on — the two features that define this app are:\n-\n-1. **Cross-lingual bridge intelligence** — every lookup is checked against your\n-   own known-language profile (French, English, German, Chinese, Japanese) for\n-   cognates, false friends, and mnemonic bridges. No generic dictionary can do\n-   this, because it doesn't know your specific language graph.\n-2. **Generative illustration** — vivid/concrete senses get an actual generated\n-   image, not a stock photo, cached after first generation.\n+# lexibridge\n+\n+A multilingual dictionary designed to make useful connections across French,\n+English, German, Chinese, and Japanese.\n+\n+The target product is a trustworthy dictionary enhanced by AI, not an LLM that\n+acts as the dictionary. Approved lexical sources should provide headwords,\n+pronunciations, grammar, senses, and sourced translations. AI is reserved for\n+clearly labelled, optional enrichment:\n+\n+1. **Cross-lingual bridges** - personalized cognates, false friends, loanword\n+   relationships, and useful mnemonics across the user's language profile.\n+2. **Adaptive explanations and examples** - grounded in a selected sourced\n+   sense and separated from dictionary facts.\n+3. **On-demand illustration** - offered only for concrete or visually\n+   explainable senses and generated only after the user asks for it.\n+\n+The current repository is an early MVP and still generates the core lookup\n+entry with Gemini or DeepSeek. That is transitional behavior to replace\n+incrementally, with fixtures and tests preserving a runnable app during the\n+migration.\n@@\n apps/\n   api/   FastAPI backend — /lookup, /illustration\n   web/   Next.js frontend (PWA, Capacitor-wrappable later)\n ```\n+\n+## Agent harness\n+\n+The project mission, architectural boundaries, delivery phases, approval\n+gates, and quality rules live in [`.claude/CLAUDE.md`](.claude/CLAUDE.md).\n+Dedicated Claude Code agents live in [`.claude/agents/`](.claude/agents/):\n+\n+- `lexibridge-architect` - cross-cutting architecture and decision framing;\n+- `lexibridge-lexicographer` - source evaluation and linguistic quality;\n+- `lexibridge-dev` - backend, domain, data, deployment, and integration work;\n+- `lexibridge-frontend` - mobile-first product design and web/PWA work;\n+- `lexibridge-reviewer` - independent read-only review and validation.\n+\n+The agent definitions use Opus for architecture, lexicography, and frontend\n+design, and Sonnet for development and review. They can also be reused as\n+briefs when delegating to GPT-powered sessions. Agents must leave changes\n+uncommitted and must never push.\n@@\n-## Status\n-\n-MVP in progress. See `.claude/agents/` for the project's specialized build\n-agents (architect, backend, frontend, linguist QA, test, docs) and the\n-top-level `gcp_deploy` agent (shared across projects) for the eventual Cloud\n-Run deploy.\n+## Status\n+\n+MVP in progress. The next milestone is to add deterministic fixtures and tests,\n+approve a licensed lexical data strategy, and introduce a provenance-aware\n+multi-entry domain model before redesigning the interface against that stable\n+contract.\n*** End Patch\n"

The shared charter and five role definitions are now in place. I’m validating Claude Code frontmatter and checking that the role boundaries, model routing, README, and no-commit rules are internally consistent.

Read 
Completed with input: {
  "path": "/Users/kyokaen/dev/lexibridge.worktrees/multilingual-dictionary-design-assessment/.claude/agents"
}

Read 
Completed with input: {
  "path": "/Users/kyokaen/dev/lexibridge.worktrees/multilingual-dictionary-design-assessment/README.md"
}

Search for `LLM that|AI is an enrichment|Model confidence|Illustrations are selective|mul...`

Search for `git commit|git push|Never commit|must never push|never push`

Ran terminal command: git --no-pager diff --check && git --no-pager status --short && git --no-pager diff --stat

Ran terminal command: ruby -ryaml -e '
files = Dir[".claude/agents/*.md"].sort
abort "no agents found" if files.empty?
names = []
files.each do |file|
  text = File.read(file)
  match = text.match(/\A---\n(.*?)\n---\n/m) or abort "missing frontmatter: #{file}"
  data = YAML.safe_load(match[1])
  %w[name description].each { |key| abort "missing #{key}: #{file}" if data[key].to_s.empty? }
  expected = File.basename(file, ".md")
  abort "name mismatch: #{file}" unless data["name"] == expected
  abort "invalid model: #{file}" unless %w[opus sonnet].include?(data["model"])
  names << data["name"]
  puts "#{data["name"]}: #{data["model"]} (#{Array(data["tools"]).length} tools)"
end
abort "duplicate agent names" unless names.uniq.length == names.length
puts "Validated #{files.length} agent definitions"
'

Finish harness tracking
Completed with input: {
  "description": "Finish harness tracking",
  "query": "UPDATE todos SET status='done' WHERE id IN ('write-agent-instructions','align-project-docs','validate-agent-harness');\nSELECT id, title, status FROM todos WHERE id IN ('design-agent-harness','write-agent-instructions','align-project-docs','validate-agent-harness') ORDER BY created_at;"
}

Search for `[ \t]+$`

Ran terminal command: git --no-pager status --short --branch

Ran terminal command: ruby -e '
text = File.read("README.md")
links = text.scan(/\[[^\]]+\]\(([^)]+)\)/).flatten.reject { |link| link.match?(/\A(?:https?:|#)/) }
missing = links.reject { |link| File.exist?(link) }
abort "missing links: #{missing.join(", ")}" unless missing.empty?
puts "Validated #{links.length} local README links"
'

Added 2 artifacts or references
Completed with input: {
  "items": [
    {
      "type": "file",
      "label": "LexiBridge mission charter",
      "isArtifact": true,
      "uri": "file:///Users/kyokaen/dev/lexibridge.worktrees/multilingual-dictionary-design-assessment/.claude/CLAUDE.md"
    },
    {
      "type": "resource",
      "label": "LexiBridge dedicated agent definitions",
      "isArtifact": true,
      "uri": "file:///Users/kyokaen/dev/lexibridge.worktrees/multilingual-dictionary-design-assessment/.claude/agents/"
    }
  ]
}

## Harness created

I agree with your approach. The important part is not merely adding more agents, but giving them one shared product doctrine so they do not recreate the same architectural mistake.

The central charter is `.claude/CLAUDE.md`. It establishes:

- trustworthy dictionary first, AI enrichment second;
- optional, on-demand illustrations;
- a provenance-aware, multi-entry data model;
- explicit source/licensing approval gates;
- mobile-first quality requirements;
- private PWA before App Store work;
- sequencing and handoff rules between agents;
- explicit prohibition of commits, pushes, branch operations, and other mutating Git operations.

### Dedicated agents

Created under `.claude/agents/`:

- `lexibridge-architect.md`  
  **Opus** — architecture, domain contracts, storage, authentication, deployment and decision framing. Read-only.

- `lexibridge-lexicographer.md`  
  **Opus** — lexical sources, licensing evidence, multilingual schema requirements and linguistic evaluation.

- `lexibridge-dev.md`  
  **Sonnet** — backend, domain model, source adapters, AI enrichment, persistence, deployment and tests.

- `lexibridge-frontend.md`  
  **Opus** — visual direction, mobile-first UI, accessibility, PWA experience and rendered validation.

- `lexibridge-reviewer.md`  
  **Sonnet** — independent, read-only review of completed implementation slices.

I used standard kebab-case Claude agent names, so `lexibridge_dev` became `lexibridge-dev`, and corrected `lexibridge_frontent` to `lexibridge-frontend`.

Claude Code agent files only support Claude model routing, so GPT model names cannot be placed in their `model` field. The charter explains how the same briefs can be reused in Copilot sessions: GPT-5.6 Sol can coordinate, while Claude Opus is the preferred design agent. The `opus` alias intentionally follows the current Opus model rather than pinning an obsolete point release.

## Documentation aligned

The project positioning in `README.md` now reflects:

> A trustworthy dictionary enhanced by AI, not an LLM that acts as the dictionary.

It also documents the new harness and the next milestone.

## Correct execution sequence

The harness intentionally prevents immediate, uncoordinated implementation:

1. `lexibridge-architect` frames the source and target-schema decision.
2. `lexibridge-lexicographer` assesses viable lexical sources and licenses.
3. You approve the selected source strategy.
4. `lexibridge-dev` implements the domain/API migration.
5. `lexibridge-frontend` redesigns against an approved deterministic fixture.
6. `lexibridge-reviewer` validates the complete slice.

This is safer than launching backend and frontend implementation simultaneously before the dictionary contract is settled.

## Validation

- All five YAML frontmatters parsed successfully.
- Agent names are unique and match their filenames.
- Models and tool definitions validated.
- README links validated.
- No trailing whitespace or diff errors.
- No commit or push was performed.

Only `README.md` and the new `.claude/` harness are currently changed.