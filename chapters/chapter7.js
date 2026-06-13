// chapters/chapter7.js

export const chapter7 = {
    title: "Imperativ: Machen Sie! Mach! Macht!",
    level: "A1",
    pages: {
        "22": `
            <div class="page-render-container">
                <div class="page-header-meta">
                    <div class="page-title-main"><span>A1 | 07</span> Der Imperativ</div>
                    <div style="font-weight: bold; font-size: 1.1rem; color: var(--brand-plum);">Aufforderungen, Bitten und Ratschläge (S. 22)</div>
                </div>

                <div style="background: #fff8e1; border-left: 4px solid #ffb300; padding: 15px; margin-bottom: 25px; border-radius: 0 4px 4px 0; font-size: 0.95rem; line-height: 1.6;">
                    📌 <strong>Formenbildung im Imperativ:</strong> Der Imperativ hat drei Formen, abhängig davon, wen man anspricht. Das Verb steht immer auf <strong>Position 1</strong>.
                    <br>• Höflichkeitsform (Sie): Infinitiv + Sie.
                    <br>• Plural (ihr): Ihr-Form ohne das Pronomen "ihr".
                    <br>• Singular (du): Du-Form ohne "-st" und ohne das Pronomen "du".
                </div>

                <div class="grid-syntax-table" style="grid-template-columns: 1.2fr 1.5fr 1.3fr 1.3fr; margin-bottom: 25px; font-size: 0.95rem;">
                    <div class="grid-cell grid-header" style="background:#f5f5f5;">Infinitiv</div>
                    <div class="grid-cell grid-header" style="background:#f5f5f5;">Sie (Höflich)</div>
                    <div class="grid-cell grid-header" style="background:#f5f5f5;">ihr (Plural)</div>
                    <div class="grid-cell grid-header" style="background:#f5f5f5;">du (Singular)</div>

                    <div class="grid-cell" style="font-weight:bold;">machen</div>
                    <div class="grid-cell"><b>Machen Sie</b> bitte das Fenster zu!</div>
                    <div class="grid-cell"><b>Macht</b> das Fenster zu!</div>
                    <div class="grid-cell"><b>Mach</b> das Fenster zu!</div>

                    <div class="grid-cell" style="font-weight:bold;">warten</div>
                    <div class="grid-cell"><b>Warten Sie</b> einen Moment!</div>
                    <div class="grid-cell"><b>Wartet</b> einen Moment!</div>
                    <div class="grid-cell"><b>Warte</b> einen Moment! <small>(+e)</small></div>

                    <div class="grid-cell" style="font-weight:bold;">mitkommen</div>
                    <div class="grid-cell"><b>Kommen Sie</b> bitte <b>mit</b>!</div>
                    <div class="grid-cell"><b>Kommt mit</b>!</div>
                    <div class="grid-cell"><b>Komm mit</b>!</div>
                </div>

                <blockquote>
                    ⚠️ <strong>Besonderheit bei "sein":</strong>
                    <br>• Sie ➔ <b>Seien Sie</b> vorsichtig!
                    <br>• ihr ➔ <b>Seid</b> leise!
                    <br>• du ➔ <b>Sei</b> glücklich!
                </blockquote>

                <div class="exercise-headline"><strong>1</strong> Bilden Sie den Imperativ in der <em>du-Form</em>.</div>
                <div style="background: #fff; border: 1px solid #ddd; padding: 20px; border-radius: 6px; line-height: 2.3;">
                    1 &nbsp; (fragen) &rarr; <input type="text" class="inline-blank" style="width: 100px;"> doch einfach mal den Lehrer!<br>
                    2 &nbsp; (zuhören) &rarr; <input type="text" class="inline-blank" style="width: 100px;"> mir bitte aufmerksam <input type="text" class="inline-blank" style="width: 50px;">!<br>
                    3 &nbsp; (trinken) &rarr; <input type="text" class="inline-blank" style="width: 100px;"> deinen heißen Tee aus.<br>
                    4 &nbsp; (entspannen) &rarr; <input type="text" class="inline-blank" style="width: 100px;"> dich am Wochenende!
                </div>

                <div class="page-navigation-footer" style="margin-top:20px;">
                    <div></div>
                    <a href="#page-23" class="nav-btn">Weiter zu Übungen S. 23 &rarr;</a>
                </div>
            </div>
        `,
        "23": `
            <div class="page-render-container">
                <div class="page-header-meta">
                    <div class="page-title-main"><span>A1 | 07</span> Übungen</div>
                    <div style="font-weight: bold; font-size: 1.1rem; color: var(--exercise-blue);">Imperativformen richtig anwenden (S. 23)</div>
                </div>

                <div class="exercise-headline"><strong>2</strong> Ergänzen Sie die Sätze in der jeweils geforderten Form.</div>
                <div style="background: #fff; border: 1px solid #eee; padding: 15px; border-radius: 6px; line-height: 2.4;">
                    1 &nbsp; <strong>(Sie-Form)</strong> Bitte <input type="text" class="inline-blank" style="width: 120px;"> Sie hier Ihren Namen <input type="text" class="inline-blank" style="width: 60px;">! (eintragen)<br>
                    2 &nbsp; <strong>(ihr-Form)</strong> Kinder, <input type="text" class="inline-blank" style="width: 100px;"> eure Hausaufgaben! (machen)<br>
                    3 &nbsp; <strong>(du-Form)</strong> <input type="text" class="inline-blank" style="width: 100px;"> nicht so traurig! (sein)<br>
                    4 &nbsp; <strong>(Sie-Form)</strong> <input type="text" class="inline-blank" style="width: 120px;"> Sie bitte pünktlich! (sein)
                </div>

                <div class="exercise-headline"><strong>3</strong> Wählen Sie die passende stilistische Variante.</div>
                <div style="background: #fafafa; border: 1px solid #ccc; padding: 15px; border-radius: 6px; line-height: 2.4;">
                    1 &nbsp; Herr Doktor, bitte helfen Sie mir! ➔ 
                    <select class="inline-blank"><option value="">---</option><option>Helfen Sie mir bitte!</option><option>Hilf mir bitte!</option></select>.<br>
                    2 &nbsp; Ihr müsst schneller laufen! ➔ 
                    <select class="inline-blank"><option value="">---</option><option>Lauft schneller!</option><option>Lauf schneller!</option></select>.<br>
                    3 &nbsp; Du musst den Salat essen! ➔ 
                    <select class="inline-blank"><option value="">---</option><option>Iss den Salat!</option><option>Esst den Salat!</option></select>.
                </div>

                <div class="page-navigation-footer" style="margin-top:20px;">
                    <a href="#page-22" class="nav-btn">&larr; Zurück zu S. 22</a>
                    <div></div>
                </div>
            </div>
        `
    }
};
