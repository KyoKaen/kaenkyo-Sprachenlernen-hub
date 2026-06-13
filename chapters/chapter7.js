// chapters/chapter7.js

export const chapter7 = {
    title: "Ich muss, ich soll, ich darf.\n(french: je dois, je devrais, j'ai l'autorisation.)",
    level: "A1",
    pages: {
        "22": `
            <div class="page-render-container">
                <div class="page-header-meta">
                    <div class="page-title-main"><span>A1 | 07</span> Modalverben</div>
                    <div style="font-weight: bold; font-size: 1.1rem; color: var(--brand-plum);">
                        Ich muss, ich soll, ich darf.<br>
                        <small style="font-size: 0.9rem; color: #666; font-weight: normal;">(french: je dois, je devrais, j'ai l'autorisation.)</small>
                    </div>
                </div>

                <div style="background: #fff8e1; border-left: 4px solid #ffb300; padding: 15px; margin-bottom: 25px; border-radius: 0 4px 4px 0; font-size: 0.95rem; line-height: 1.6;">
                    📌 <b>Gebrauch der Modalverben:</b><br>
                    • <b>müssen:</b> Notwendigkeit, Pflicht <i>(Ich muss arbeiten.)</i><br>
                    • <b>sollen:</b> Auftrag von einer anderen Person, Ratschlag <i>(Ich soll im Bett bleiben.)</i><br>
                    • <b>dürfen:</b> Erlaubnis, Verbot mit "nicht" <i>(Hier darf man parken.)</i>
                </div>

                <div class="grid-syntax-table" style="grid-template-columns: 1.2fr 1.3fr 1.3fr 1.3fr; margin-bottom: 25px; font-size: 0.95rem;">
                    <div class="grid-cell grid-header" style="background:#f5f5f5;">Pronomen</div>
                    <div class="grid-cell grid-header" style="background:#ffebee; color:#b71c1c;">müssen</div>
                    <div class="grid-cell grid-header" style="background:#e8f5e9; color:#2e7d32;">sollen</div>
                    <div class="grid-cell grid-header" style="background:#e3f2fd; color:#0d47a1;">dürfen</div>

                    <div class="grid-cell" style="font-weight:bold;">ich</div>
                    <div class="grid-cell" style="font-weight:bold; color:#b71c1c;">muss</div>
                    <div class="grid-cell" style="font-weight:bold; color:#2e7d32;">soll</div>
                    <div class="grid-cell" style="font-weight:bold; color:#0d47a1;">darf</div>

                    <div class="grid-cell" style="font-weight:bold;">du</div>
                    <div class="grid-cell">musst</div>
                    <div class="grid-cell">sollst</div>
                    <div class="grid-cell">darfst</div>

                    <div class="grid-cell" style="font-weight:bold;">er / sie / es</div>
                    <div class="grid-cell" style="font-weight:bold; color:#b71c1c;">muss</div>
                    <div class="grid-cell" style="font-weight:bold; color:#2e7d32;">soll</div>
                    <div class="grid-cell" style="font-weight:bold; color:#0d47a1;">darf</div>

                    <div class="grid-cell" style="font-weight:bold;">wir</div>
                    <div class="grid-cell">müssen</div>
                    <div class="grid-cell">sollen</div>
                    <div class="grid-cell">dürfen</div>

                    <div class="grid-cell" style="font-weight:bold;">ihr</div>
                    <div class="grid-cell">müsst</div>
                    <div class="grid-cell">sollt</div>
                    <div class="grid-cell">dürft</div>

                    <div class="grid-cell" style="font-weight:bold;">sie / Sie</div>
                    <div class="grid-cell">müssen</div>
                    <div class="grid-cell">sollen</div>
                    <div class="grid-cell">dürfen</div>
                </div>

                <div style="font-size: 0.9rem; background: #fafafa; padding: 10px; border-radius: 4px; margin-bottom: 25px; border: 1px dashed #ccc;">
                    ⚠️ <b>Achtung:</b> Die 1. und 3. Person Singular sind identisch! (ich muss = er muss / ich darf = sie darf)
                </div>

                <div class="exercise-headline">
                    <strong>1</strong> Ergänzen Sie <em>müssen</em> oder <em>dürfen</em>.<br>
                    <small style="font-weight: normal; color: #555; font-style: italic;">(french* Complétez avec müssen ou dürfen.)</small>
                </div>
                <div style="background: #fff; border: 1px solid #ddd; padding: 20px; border-radius: 6px; line-height: 2.4; margin-bottom: 25px;">
                    1 &nbsp; Hier ist ein absolutes Halteverbot. Sie <input type="text" class="inline-blank" style="width: 90px;"> hier nicht parken.<br>
                    2 &nbsp; Ich habe morgen eine schwere Prüfung. Ich <input type="text" class="inline-blank" style="width: 90px;"> heute viel lernen.<br>
                    3 &nbsp; Im Kino <input type="text" class="inline-blank" style="width: 90px;"> man nicht laut sprechen.<br>
                    4 &nbsp; Es ist schon sehr spät. Ich <input type="text" class="inline-blank" style="width: 90px;"> jetzt leider gehen.
                </div>

                <div class="exercise-headline">
                    <strong>2</strong> Was sagt der Arzt? Ergänzen Sie die Formen von <em>sollen</em>.<br>
                    <small style="font-weight: normal; color: #555; font-style: italic;">(french* Que dit le médecin ? Complétez avec les formes de sollen.)</small>
                </div>
                <div style="background: #fff; border: 1px solid #ddd; padding: 20px; border-radius: 6px; line-height: 2.4; margin-bottom: 25px;">
                    1 &nbsp; Herr Müller, Sie <input type="text" class="inline-blank" style="width: 90px;"> täglich viel Wasser trinken.<br>
                    2 &nbsp; Du <input type="text" class="inline-blank" style="width: 90px;"> nicht so viel arbeiten, Markus!<br>
                    3 &nbsp; Ihr <input type="text" class="inline-blank" style="width: 90px;"> die Tabletten regelmäßig nehmen.<br>
                    4 &nbsp; Sonja, du <input type="text" class="inline-blank" style="width: 90px;"> die nächsten Tage im Bett bleiben.
                </div>

                <div class="exercise-headline">
                    <strong>3</strong> Ratschläge geben. Bilden Sie Sätze mit <em>sollen</em>.<br>
                    <small style="font-weight: normal; color: #555; font-style: italic;">(french* Donner des conseils. Formez des phrases avec sollen.)</small>
                </div>
                <div style="background: #fff; border: 1px solid #ddd; padding: 20px; border-radius: 6px; line-height: 2.4;">
                    1 &nbsp; (ich / weniger Kaffee trinken) &rarr; <input type="text" class="full-width-blank" style="width: 70%;"><br>
                    2 &nbsp; (wir / den Chef anrufen) &rarr; <input type="text" class="full-width-blank" style="width: 70%;"><br>
                    3 &nbsp; (ihr / leise sein) &rarr; <input type="text" class="full-width-blank" style="width: 70%;">
                </div>

                <div class="page-navigation-footer" style="margin-top:25px;">
                    <div></div>
                    <a href="#page-23" class="nav-btn">Weiter zu Übungen S. 23 &rarr;</a>
                </div>
            </div>
        `,
        "23": `
            <div class="page-render-container">
                <div class="page-header-meta">
                    <div class="page-title-main"><span>A1 | 07</span> Übungen</div>
                </div>

                <div class="exercise-headline">
                    <strong>4</strong> Wählen Sie das richtige Modalverb (<em>müssen</em>, <em>sollen</em> oder <em>dürfen</em>).<br>
                    <small style="font-weight: normal; color: #555; font-style: italic;">(french* Choisissez le bon verbe modal (müssen, sollen ou dürfen).)</small>
                </div>
                <div style="background: #fff; border: 1px solid #eee; padding: 20px; border-radius: 6px; line-height: 2.5; margin-bottom: 25px;">
                    1 &nbsp; Hier ist das Fotografieren verboten! Sie <input type="text" class="inline-blank" style="width: 90px;"> hier keine Fotos machen.<br>
                    2 &nbsp; Meine Mutter sagt, ich <input type="text" class="inline-blank" style="width: 90px;"> am Wochenende mein Zimmer aufräumen.<br>
                    3 &nbsp; Der Arzt hat mir verboten aufzustehen. Ich <input type="text" class="inline-blank" style="width: 90px;"> im Bett bleiben.<br>
                    4 &nbsp; Entschuldigung, <input type="text" class="inline-blank" style="width: 90px;"> ich mich hierhin setzen? – Ja, klar, der Platz ist frei.
                </div>

                <div class="exercise-headline">
                    <strong>5</strong> Machen Sie Vorschläge mit <em>sollen</em>.<br>
                    <small style="font-weight: normal; color: #555; font-style: italic;">(french* Faites des propositions avec sollen.)</small>
                </div>
                <div style="background: #fff; border: 1px solid #eee; padding: 20px; border-radius: 6px; line-height: 2.5; margin-bottom: 25px;">
                    1 &nbsp; A: Es ist ziemlich kalt hier drin. &nbsp; B: <input type="text" class="inline-blank" style="width: 80px;"> ich das Fenster schließen?<br>
                    2 &nbsp; A: Wir haben leider keinen Wein mehr. &nbsp; B: <input type="text" class="inline-blank" style="width: 80px;"> ich neuen Wein kaufen?<br>
                    3 &nbsp; A: Der spannende Film fängt gleich an. &nbsp; B: <input type="text" class="inline-blank" style="width: 80px;"> wir schnell ins Kino gehen?
                </div>

                <div class="exercise-headline">
                    <strong>6</strong> Bilden Sie Sätze. Achten Sie auf die richtige Position der Verben.<br>
                    <small style="font-weight: normal; color: #555; font-style: italic;">(french* Formez des phrases. Faites attention à la bonne position des verbes.)</small>
                </div>
                <div style="background: #fafafa; border: 1px solid #ccc; padding: 20px; border-radius: 6px; line-height: 2.5; margin-bottom: 25px;">
                    1 &nbsp; (wir / heute / müssen / viel lernen) <br>&rarr; <input type="text" class="full-width-blank" style="width: 85%;"><br>
                    2 &nbsp; (du / im Krankenhaus / nicht / dürfen / rauchen) <br>&rarr; <input type="text" class="full-width-blank" style="width: 85%;"><br>
                    3 &nbsp; (ich / was / sollen / machen / ?) <br>&rarr; <input type="text" class="full-width-blank" style="width: 85%;"><br>
                    4 &nbsp; (ihr / am Wochenende / müssen / arbeiten / ?) <br>&rarr; <input type="text" class="full-width-blank" style="width: 85%;">
                </div>

                <div class="exercise-headline">
                    <strong>7</strong> Schreiben Sie Sätze mit den vorgegebenen Modalverben.<br>
                    <small style="font-weight: normal; color: #555; font-style: italic;">(french* Écrivez des phrases avec les verbes modaux indiqués.)</small>
                </div>
                <div style="background: #fff; border: 1px solid #ddd; padding: 20px; border-radius: 6px; line-height: 2.5;">
                    1 &nbsp; (dürfen / Kinder / Cola trinken / ?) <br>&rarr; <input type="text" class="full-width-blank" style="width: 85%;"><br>
                    2 &nbsp; (müssen / ich / den Bus nehmen) <br>&rarr; <input type="text" class="full-width-blank" style="width: 85%;"><br>
                    3 &nbsp; (sollen / du / mehr Sport machen) <br>&rarr; <input type="text" class="full-width-blank" style="width: 85%;">
                </div>

                <div class="page-navigation-footer" style="margin-top:25px;">
                    <a href="#page-22" class="nav-btn">&larr; Zurück zu S. 22</a>
                    <div></div>
                </div>
            </div>
        `
    }
};
