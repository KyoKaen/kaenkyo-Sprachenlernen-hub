# Kapitel-Status / Chapter Build Status

Auto-generated tracking table for the digital edition of *Grammatik aktiv A1-B1*.

**Regenerate with:**

```bash
tools/make_status.sh                          # rewrites this file
python3 tools/validate_chapters.py --root .   # parse + routing + HTML checks
```

## Legend

| status | meaning | what you need to do |
|---|---|---|
| `JS_COMPLETE` | `chapters/chapterN.js` exists and defines every page routed in `app.js` | nothing - verify in the browser |
| `PARTIAL_JS` | module exists but is missing some routed pages | add the missing page(s) to the module |
| `MISSING_JS` | source material exists (photo and/or `.md`) but no module yet | build `chapters/chapterN.js` |
| `NEEDS_SOURCE` | no photo and no transcript | **you** add a photo to `print/chapter/cN/` and/or fill `print/chapter/cN/cN.md` |

Columns: `imgs` = page scans in `print/chapter/cN/`, `md` = non-empty transcript.

## What to supply next

**49 chapters still need work.** For `NEEDS_SOURCE` entries, add a photo to `print/chapter/cN/` (via `tools/import_page.sh`) and/or fill `print/chapter/cN/cN.md`.

### A. Routed in `app.js` - buildable as soon as source exists

| chapter | book pages | imgs | md | status |
|---|---|---|---|---|
| chapter1 | 10,11 | 0 | no | NEEDS_SOURCE |
| chapter2 | 12,13 | 0 | no | NEEDS_SOURCE |
| chapter3 | 14,15 | 0 | no | NEEDS_SOURCE |
| chapter4 | 16,17 | 0 | no | NEEDS_SOURCE |
| chapter5 | 18,19 | 0 | no | NEEDS_SOURCE |
| chapter6 | 20,21 | 0 | no | NEEDS_SOURCE |
| partnerseite1_konjugation | 28,29 | 0 | no | NEEDS_SOURCE |
| chapter10 | 30,31 | 0 | no | NEEDS_SOURCE |
| chapter11 | 32,33 | 0 | no | NEEDS_SOURCE |
| chapter13 | 36,37 | 0 | no | NEEDS_SOURCE |
| partnerseite2_fragen | 38,39 | 0 | no | NEEDS_SOURCE |
| chapter14 | 40,41 | 0 | no | NEEDS_SOURCE |
| chapter15 | 42,43 | 0 | no | NEEDS_SOURCE |
| chapter16 | 44,45 | 0 | no | NEEDS_SOURCE |
| chapter17 | 46,47 | 0 | no | NEEDS_SOURCE |
| chapter19 | 50,51 | 0 | no | NEEDS_SOURCE |
| chapter20 | 52,53 | 0 | no | NEEDS_SOURCE |
| chapter22 | 56,57 | 0 | no | NEEDS_SOURCE |
| chapter24 | 60,61 | 0 | no | NEEDS_SOURCE |
| partnerseite3_akkusativ_und_dativ | 62,63 | 0 | no | NEEDS_SOURCE |
| partnerseite4_perfekt | 78 | 0 | no | NEEDS_SOURCE |
| partnerseite5_wechselpraepositionen | 96,97 | 0 | no | NEEDS_SOURCE |
| partnerseite6_adjektivdeklination | 106,107 | 0 | no | NEEDS_SOURCE |
| partnerseite7_nebensaetze | 114,115 | 0 | no | NEEDS_SOURCE |
| chapter48 | 118,119 | 0 | no | NEEDS_SOURCE |

### B. Not yet routed in `app.js`

These have a TOC entry in `deutsch_learning_app.html` but no `pageToChapterMap` route yet, so a route must be added to `app.js` when the module is built.

`chapter57, chapter58, chapter59, chapter60, chapter61, chapter63, chapter64, chapter67, chapter68, chapter69, chapter70, chapter71, chapter72, chapter73, chapter74, chapter75, chapter76, chapter79, chapter80, chapter81, chapter82, chapter83, chapter84, chapter85`

## Cover & Inhalt

| item | status | note |
|---|---|---|
| Cover | DONE | static markup in `deutsch_learning_app.html` (`.book-cover`); scan at `print/cover/cover.jpg` |
| Inhalt (ch. 1-34) | DONE | scan at `print/inhalt/inhalt_p1.jpg`; TOC markup complete |
| Inhalt (ch. 35-67) | DONE | scan at `print/inhalt/inhalt_p2.jpg`; TOC markup complete |
| Inhalt (ch. 68-85 + Anhang) | TOC OK / SCAN MISSING | TOC markup already covers these; photo of the printed Inhalt still to be supplied |

## Per-chapter status

| chapter | routed_pages | js | export | js_pages | missing_pages | imgs | md | status | next_action |
|---|---|---|---|---|---|---|---|---|---|
| chapter1 | 10,11 | no | - | - | 10,11 | 0 | no | NEEDS_SOURCE | add photo or .md transcript |
| chapter2 | 12,13 | no | - | - | 12,13 | 0 | no | NEEDS_SOURCE | add photo or .md transcript |
| chapter3 | 14,15 | no | - | - | 14,15 | 0 | no | NEEDS_SOURCE | add photo or .md transcript |
| chapter4 | 16,17 | no | - | - | 16,17 | 0 | no | NEEDS_SOURCE | add photo or .md transcript |
| chapter5 | 18,19 | no | - | - | 18,19 | 0 | no | NEEDS_SOURCE | add photo or .md transcript |
| chapter6 | 20,21 | no | - | - | 20,21 | 0 | no | NEEDS_SOURCE | add photo or .md transcript |
| chapter7 | 22,23 | yes | esm | 22,23 | - | 0 | no | JS_COMPLETE | verify in browser |
| chapter8 | 24,25 | yes | esm | 24,25 | - | 0 | no | JS_COMPLETE | verify in browser |
| chapter9 | 26,27 | yes | esm | 26,27 | - | 0 | no | JS_COMPLETE | verify in browser |
| partnerseite1_konjugation | 28,29 | no | - | - | 28,29 | 0 | no | NEEDS_SOURCE | add photo or .md transcript |
| chapter10 | 30,31 | no | - | - | 30,31 | 0 | no | NEEDS_SOURCE | add photo or .md transcript |
| chapter11 | 32,33 | no | - | - | 32,33 | 0 | no | NEEDS_SOURCE | add photo or .md transcript |
| chapter12 | 34,35 | yes | esm | 34,35 | - | 0 | yes | JS_COMPLETE | verify in browser |
| chapter13 | 36,37 | no | - | - | 36,37 | 0 | no | NEEDS_SOURCE | add photo or .md transcript |
| partnerseite2_fragen | 38,39 | no | - | - | 38,39 | 0 | no | NEEDS_SOURCE | add photo or .md transcript |
| chapter14 | 40,41 | no | - | - | 40,41 | 0 | no | NEEDS_SOURCE | add photo or .md transcript |
| chapter15 | 42,43 | no | - | - | 42,43 | 0 | no | NEEDS_SOURCE | add photo or .md transcript |
| chapter16 | 44,45 | no | - | - | 44,45 | 0 | no | NEEDS_SOURCE | add photo or .md transcript |
| chapter17 | 46,47 | no | - | - | 46,47 | 0 | no | NEEDS_SOURCE | add photo or .md transcript |
| chapter18 | 48,49 | yes | esm | 48,49 | - | 0 | no | JS_COMPLETE | verify in browser |
| chapter19 | 50,51 | no | - | - | 50,51 | 0 | no | NEEDS_SOURCE | add photo or .md transcript |
| chapter20 | 52,53 | no | - | - | 52,53 | 0 | no | NEEDS_SOURCE | add photo or .md transcript |
| chapter21 | 54,55 | yes | esm | 54,55 | - | 0 | no | JS_COMPLETE | verify in browser |
| chapter22 | 56,57 | no | - | - | 56,57 | 0 | no | NEEDS_SOURCE | add photo or .md transcript |
| chapter23 | 58,59 | yes | esm | 58,59 | - | 0 | no | JS_COMPLETE | verify in browser |
| chapter24 | 60,61 | no | - | - | 60,61 | 0 | no | NEEDS_SOURCE | add photo or .md transcript |
| partnerseite3_akkusativ_und_dativ | 62,63 | no | - | - | 62,63 | 0 | no | NEEDS_SOURCE | add photo or .md transcript |
| chapter25 | 64,65 | yes | esm | 64,65 | - | 0 | no | JS_COMPLETE | verify in browser |
| chapter26 | 66,67 | yes | esm | 66,67 | - | 2 | yes | JS_COMPLETE | verify in browser |
| chapter27 | 68,69 | yes | esm | 68,69 | - | 2 | yes | JS_COMPLETE | verify in browser |
| chapter28 | 70,71 | yes | esm | 70,71 | - | 0 | no | JS_COMPLETE | verify in browser |
| chapter29 | 72,73 | yes | esm | 72,73 | - | 0 | no | JS_COMPLETE | verify in browser |
| chapter30 | 74,75 | yes | esm | 74,75 | - | 2 | yes | JS_COMPLETE | verify in browser |
| chapter31 | 76,77 | yes | esm | 76,77 | - | 0 | no | JS_COMPLETE | verify in browser |
| partnerseite4_perfekt | 78 | no | - | - | 78 | 0 | no | NEEDS_SOURCE | add photo or .md transcript |
| chapter32 | 80,81 | yes | esm | 80,81 | - | 2 | yes | JS_COMPLETE | verify in browser |
| chapter33 | 82,83 | yes | esm | 82,83 | - | 0 | no | JS_COMPLETE | verify in browser |
| chapter34 | 84,85 | yes | esm | 84,85 | - | 0 | no | JS_COMPLETE | verify in browser |
| chapter35 | 86,87 | yes | esm | 86,87 | - | 0 | no | JS_COMPLETE | verify in browser |
| chapter36 | 88,89 | yes | esm | 88,89 | - | 0 | no | JS_COMPLETE | verify in browser |
| chapter37 | 90,91 | yes | esm | 90,91 | - | 2 | no | JS_COMPLETE | verify in browser |
| chapter38 | 92,93 | yes | esm | 92,93 | - | 2 | no | JS_COMPLETE | verify in browser |
| chapter39 | 94,95 | yes | esm | 94,95 | - | 2 | no | JS_COMPLETE | verify in browser |
| partnerseite5_wechselpraepositionen | 96,97 | no | - | - | 96,97 | 0 | no | NEEDS_SOURCE | add photo or .md transcript |
| chapter40 | 98,99 | yes | esm | 98,99 | - | 2 | yes | JS_COMPLETE | verify in browser |
| chapter41 | 100,101 | yes | esm | 100,101 | - | 0 | no | JS_COMPLETE | verify in browser |
| chapter42 | 102,103 | yes | esm | 102,103 | - | 0 | no | JS_COMPLETE | verify in browser |
| chapter43 | 104,105 | yes | esm | 104,105 | - | 0 | no | JS_COMPLETE | verify in browser |
| partnerseite6_adjektivdeklination | 106,107 | no | - | - | 106,107 | 0 | no | NEEDS_SOURCE | add photo or .md transcript |
| chapter44 | 108,109 | yes | esm | 108,109 | - | 0 | no | JS_COMPLETE | verify in browser |
| chapter45 | 110,111 | yes | esm | 110,111 | - | 0 | no | JS_COMPLETE | verify in browser |
| chapter46 | 112,113 | yes | esm | 112,113 | - | 2 | yes | JS_COMPLETE | verify in browser |
| partnerseite7_nebensaetze | 114,115 | no | - | - | 114,115 | 0 | no | NEEDS_SOURCE | add photo or .md transcript |
| chapter47 | 116,117 | yes | esm | 116,117 | - | 2 | yes | JS_COMPLETE | verify in browser |
| chapter48 | 118,119 | no | - | - | 118,119 | 0 | no | NEEDS_SOURCE | add photo or .md transcript |
| chapter49 | 120,121 | yes | esm | 120,121 | - | 2 | yes | JS_COMPLETE | verify in browser |
| chapter50 | 122,123 | yes | unknown | 122,123 | - | 0 | yes | JS_COMPLETE | verify in browser |
| chapter51 | 124,125 | yes | esm | 124,125 | - | 2 | yes | JS_COMPLETE | verify in browser |
| chapter52 | 126,127 | yes | esm | 126,127 | - | 0 | yes | JS_COMPLETE | verify in browser |
| chapter53 | 128,129 | yes | esm | 128,129 | - | 2 | yes | JS_COMPLETE | verify in browser |
| chapter54 | 130,131 | yes | unknown | 130,131 | - | 0 | yes | JS_COMPLETE | verify in browser |
| chapter55 | 132,133 | yes | unknown | 132,133 | - | 0 | no | JS_COMPLETE | verify in browser |
| chapter56 | 134,135 | yes | esm | 134,135 | - | 2 | no | JS_COMPLETE | verify in browser |
| chapter62 | 146,147 | yes | esm | 146,147 | - | 2 | yes | JS_COMPLETE | verify in browser |
| chapter65 | 152,153 | yes | unknown | 152,153 | - | 2 | yes | JS_COMPLETE | verify in browser |
| chapter66 | 154,155 | yes | unknown | 154,155 | - | 2 | no | JS_COMPLETE | verify in browser |
| chapter77 | 180,181 | yes | esm | 180,181 | - | 0 | no | JS_COMPLETE | verify in browser |
| chapter78 | 182,183 | yes | esm | 182,183 | - | 0 | no | JS_COMPLETE | verify in browser |
| chapter50-note | 123-note | yes | global | 123-note | - | 0 | yes | JS_COMPLETE | verify in browser |
| chapter57 | - | no | - | - | - | 0 | no | NEEDS_SOURCE | add photo or .md transcript |
| chapter58 | - | no | - | - | - | 0 | no | NEEDS_SOURCE | add photo or .md transcript |
| chapter59 | - | no | - | - | - | 0 | no | NEEDS_SOURCE | add photo or .md transcript |
| chapter60 | - | no | - | - | - | 0 | no | NEEDS_SOURCE | add photo or .md transcript |
| chapter61 | - | no | - | - | - | 0 | no | NEEDS_SOURCE | add photo or .md transcript |
| chapter63 | - | no | - | - | - | 0 | no | NEEDS_SOURCE | add photo or .md transcript |
| chapter64 | - | no | - | - | - | 0 | no | NEEDS_SOURCE | add photo or .md transcript |
| chapter67 | - | no | - | - | - | 0 | no | NEEDS_SOURCE | add photo or .md transcript |
| chapter68 | - | no | - | - | - | 0 | no | NEEDS_SOURCE | add photo or .md transcript |
| chapter69 | - | no | - | - | - | 0 | no | NEEDS_SOURCE | add photo or .md transcript |
| chapter70 | - | no | - | - | - | 0 | no | NEEDS_SOURCE | add photo or .md transcript |
| chapter71 | - | no | - | - | - | 0 | no | NEEDS_SOURCE | add photo or .md transcript |
| chapter72 | - | no | - | - | - | 0 | no | NEEDS_SOURCE | add photo or .md transcript |
| chapter73 | - | no | - | - | - | 0 | no | NEEDS_SOURCE | add photo or .md transcript |
| chapter74 | - | no | - | - | - | 0 | no | NEEDS_SOURCE | add photo or .md transcript |
| chapter75 | - | no | - | - | - | 0 | no | NEEDS_SOURCE | add photo or .md transcript |
| chapter76 | - | no | - | - | - | 0 | no | NEEDS_SOURCE | add photo or .md transcript |
| chapter79 | - | no | - | - | - | 0 | no | NEEDS_SOURCE | add photo or .md transcript |
| chapter80 | - | no | - | - | - | 0 | no | NEEDS_SOURCE | add photo or .md transcript |
| chapter81 | - | no | - | - | - | 0 | no | NEEDS_SOURCE | add photo or .md transcript |
| chapter82 | - | no | - | - | - | 0 | no | NEEDS_SOURCE | add photo or .md transcript |
| chapter83 | - | no | - | - | - | 0 | no | NEEDS_SOURCE | add photo or .md transcript |
| chapter84 | - | no | - | - | - | 0 | no | NEEDS_SOURCE | add photo or .md transcript |
| chapter85 | - | no | - | - | - | 0 | no | NEEDS_SOURCE | add photo or .md transcript |
