// chapters/chapter12.js

export const chapter12 = {
    title: "Am Abend essen wir Pizza (Position 2 im Satz)",
    level: "A1",
    pages: {
        "34": `
            <div class="page-render-container">
                <div class="page-header-meta">
                    <div class="page-title-main"><span>A1 | 12</span> Am Abend essen wir Pizza</div>
                    <div style="font-weight: bold; font-size: 1.1rem; color: var(--brand-plum);">Position 2 im Satz (S. 34)</div>
                </div>

                <div style="background: #e3f2fd; border-left: 4px solid #1976d2; padding: 15px; margin-bottom: 25px; font-size: 0.95rem; line-height: 1.7;">
                    📍 <strong>Grundregel:</strong> Im Aussagesatz und in der W-Frage steht das konjugierte Verb immer auf <strong>Position 2</strong>.<br>
                    Das Subjekt steht links <em>oder</em> rechts vom Verb.
                </div>

                <!-- Aussagesatz -->
                <div style="font-weight: bold; color: var(--brand-plum); margin-bottom: 8px;">Aussagesatz</div>
                <div class="grid-syntax-table" style="grid-template-columns: 1.4fr 0.9fr 2fr; margin-bottom: 22px; font-size: 0.92rem;">
                    <div class="grid-cell grid-header" style="background:#f4f4f4;">Position 1</div>
                    <div class="grid-cell grid-header" style="background:#FFE0B2; color:#E65100;">Position 2<br>Verb</div>
                    <div class="grid-cell grid-header" style="background:#f4f4f4;">Rest</div>

                    <div class="grid-cell">Ich</div>
                    <div class="grid-cell" style="font-weight:bold; color:#E65100;">komme</div>
                    <div class="grid-cell">aus Spanien.</div>

                    <div class="grid-cell">Meine Mutter</div>
                    <div class="grid-cell" style="font-weight:bold; color:#E65100;">kommt</div>
                    <div class="grid-cell">aus China.</div>

                    <div class="grid-cell">Wir</div>
                    <div class="grid-cell" style="font-weight:bold; color:#E65100;">essen</div>
                    <div class="grid-cell">am Abend Pizza.</div>

                    <div class="grid-cell" style="background:#FFF8E1;">Am Abend</div>
                    <div class="grid-cell" style="font-weight:bold; color:#E65100; background:#FFF8E1;">essen</div>
                    <div class="grid-cell" style="background:#FFF8E1;"><strong>wir</strong> Pizza.</div>
                </div>

                <!-- Fragen -->
                <div style="font-weight: bold; color: var(--brand-plum); margin-bottom: 8px;">Fragen und Imperativ</div>
                <div class="grid-syntax-table" style="grid-template-columns: 1.2fr 1fr 2.2fr; margin-bottom: 22px; font-size: 0.92rem;">
                    <div class="grid-cell grid-header" style="background:#f4f4f4;">Satztyp</div>
                    <div class="grid-cell grid-header" style="background:#f4f4f4;">Verbposition</div>
                    <div class="grid-cell grid-header" style="background:#f4f4f4;">Beispiel</div>

                    <div class="grid-cell" style="font-weight:bold; color:#01579B;">W-Frage</div>
                    <div class="grid-cell">Position 2</div>
                    <div class="grid-cell">Woher <b>kommen</b> Sie? &nbsp;|&nbsp; Was <b>machen</b> Sie in Ihrer Freizeit?</div>

                    <div class="grid-cell" style="font-weight:bold; color:#2E7D32;">Ja-/Nein-Frage</div>
                    <div class="grid-cell">Position 1</div>
                    <div class="grid-cell"><b>Spielen</b> Sie Tennis? &nbsp;|&nbsp; <b>Möchten</b> Sie Yoga lernen?</div>

                    <div class="grid-cell" style="font-weight:bold; color:#C62828;">Imperativ</div>
                    <div class="grid-cell">Position 1</div>
                    <div class="grid-cell"><b>Gehen</b> Sie doch ins Fitnessstudio! &nbsp;|&nbsp; <b>Trink</b> eine Tasse Kaffee!</div>
                </div>

                <div class="tip-box-lightbulb" style="background-color: #fdf8e3; border-left: 4px solid #f0ad4e; margin-bottom: 25px;">
                    <strong>Zeit und Ort im Satz</strong><br>
                    • Die <strong>Zeit</strong> (<em>Wann? Wie lange? Wie oft?</em>) steht links im Satz, oft auf Position 1.<br>
                    • Der <strong>Ort</strong> (<em>Wo? Wohin? Woher?</em>) steht meistens rechts im Satz.<br><br>
                    <em>Ich wohne <span style="color:#01579B;">seit zwei Monaten</span> <span style="color:#2E7D32;">in Deutschland</span>.</em><br>
                    <em><span style="color:#01579B;">Seit zwei Monaten</span> wohne ich <span style="color:#2E7D32;">in Deutschland</span>.</em>
                </div>

                <!-- Exercise 1 -->
                <div class="exercise-headline"><strong>1</strong> Schreiben Sie Sätze. Achten Sie auf Position 2.</div>
                <div style="background: #fdfdfd; border: 1px solid #eee; padding: 15px; border-radius: 6px; line-height: 2.2; margin-bottom: 22px;">
                    1 &nbsp; er • heißen • Peter Schmidt<br>
                    <input type="text" class="full-width-blank" style="width: 92%;" placeholder="Er heißt Peter Schmidt."><br>
                    2 &nbsp; Peter und seine Frau Anne • wohnen • jetzt • in Heidelberg<br>
                    <input type="text" class="full-width-blank" style="width: 92%;"><br>
                    3 &nbsp; ihre Adresse • sein • Auerstraße 12<br>
                    <input type="text" class="full-width-blank" style="width: 92%;"><br>
                    4 &nbsp; Anne • sein • von Beruf • Ingenieurin<br>
                    <input type="text" class="full-width-blank" style="width: 92%;"><br>
                    5 &nbsp; sie • arbeiten • im Krankenhaus<br>
                    <input type="text" class="full-width-blank" style="width: 92%;">
                </div>

                <!-- Exercise 2 -->
                <div class="exercise-headline"><strong>2</strong> Schreiben Sie W-Fragen.</div>
                <div style="background: #fdfdfd; border: 1px solid #eee; padding: 15px; border-radius: 6px; line-height: 2.2;">
                    1 &nbsp; <input type="text" class="full-width-blank" style="width: 60%;" placeholder="Woher kommen Sie?"> – Aus Peru.<br>
                    2 &nbsp; <input type="text" class="full-width-blank" style="width: 60%;"> – Ich bin Ingenieurin.<br>
                    3 &nbsp; <input type="text" class="full-width-blank" style="width: 60%;"> – Ich wohne jetzt in Heidelberg.<br>
                    4 &nbsp; <input type="text" class="full-width-blank" style="width: 60%;"> – Heute Abend gehe ich ins Kino.
                </div>

                <div class="page-navigation-footer" style="margin-top:20px;">
                    <div></div>
                    <a href="#page-35" class="nav-btn">Weiter zu Übungen S. 35 &rarr;</a>
                </div>
            </div>
        `,
        "35": `
            <div class="page-render-container">
                <div class="page-header-meta">
                    <div class="page-title-main"><span>A1 | 12</span> Übungen</div>
                    <div style="font-weight: bold; font-size: 1.1rem; color: var(--exercise-blue);">Position 2 im Satz (S. 35)</div>
                </div>

                <!-- Exercise 3 -->
                <div class="exercise-headline"><strong>3</strong> W-Frage oder Ja-/Nein-Frage? Ergänzen Sie das Fragewort oder das Verb.</div>
                <div style="background: #fdfdfd; border: 1px solid #eee; padding: 15px; border-radius: 6px; line-height: 2.3; margin-bottom: 22px;">
                    1 &nbsp; <input type="text" class="inline-blank" style="width: 90px;"> kommt Paloma? – Aus Peru.<br>
                    2 &nbsp; <input type="text" class="inline-blank" style="width: 90px;"> Paloma aus Chile? – Nein, aus Peru.<br>
                    3 &nbsp; <input type="text" class="inline-blank" style="width: 90px;"> ist sie von Beruf? – Mechanikerin.<br>
                    4 &nbsp; <input type="text" class="inline-blank" style="width: 90px;"> sie Mechanikerin von Beruf? – Ja.<br>
                    5 &nbsp; <input type="text" class="inline-blank" style="width: 90px;"> ihr Mann Carlos? – Nein.<br>
                    6 &nbsp; <input type="text" class="inline-blank" style="width: 90px;"> heißt ihr Mann? – Luis.
                </div>

                <!-- Exercise 4 -->
                <div class="exercise-headline"><strong>4</strong> Schreiben Sie Fragen.</div>
                <div style="background: #fdfdfd; border: 1px solid #eee; padding: 15px; border-radius: 6px; line-height: 2.2; margin-bottom: 22px;">
                    1 &nbsp; heute • müde • sein • Sie<br>
                    <input type="text" class="full-width-blank" style="width: 92%;" placeholder="Sind Sie heute müde?"><br>
                    2 &nbsp; wie lange • schlafen • Sie • normalerweise<br>
                    <input type="text" class="full-width-blank" style="width: 92%;"><br>
                    3 &nbsp; morgens • duschen • Sie • warm oder kalt<br>
                    <input type="text" class="full-width-blank" style="width: 92%;"><br>
                    4 &nbsp; was • trinken • Sie • am Morgen<br>
                    <input type="text" class="full-width-blank" style="width: 92%;">
                </div>

                <!-- Exercise 5 -->
                <div class="exercise-headline"><strong>5</strong> FEHLERSÄTZE. Korrigieren Sie die Wortposition (Verb auf Position 2).</div>
                <div style="background: #fff3e0; border: 1px solid #ffcc80; padding: 15px; border-radius: 6px; line-height: 2.1; margin-bottom: 22px;">
                    1 &nbsp; <s>Ich vor dem Frühstück mache ein bisschen Yoga.</s><br>
                    &rarr; <input type="text" class="full-width-blank" style="width: 85%;"><br>
                    2 &nbsp; <s>Am Morgen ich muss unbedingt eine Tasse Kaffee trinken.</s><br>
                    &rarr; <input type="text" class="full-width-blank" style="width: 85%;"><br>
                    3 &nbsp; <s>Viele Leute morgens trinken lieber Tee.</s><br>
                    &rarr; <input type="text" class="full-width-blank" style="width: 85%;"><br>
                    4 &nbsp; <s>Zum Mittagessen ich gehe in ein Bistro.</s><br>
                    &rarr; <input type="text" class="full-width-blank" style="width: 85%;"><br>
                    5 &nbsp; <s>Am Nachmittag wir essen gerne ein Stück Kuchen.</s><br>
                    &rarr; <input type="text" class="full-width-blank" style="width: 85%;"><br>
                    6 &nbsp; <s>Du abends bestellst oft eine Pizza.</s><br>
                    &rarr; <input type="text" class="full-width-blank" style="width: 85%;">
                </div>

                <!-- Exercise 6 -->
                <div class="exercise-headline"><strong>6</strong> Schreiben Sie Sätze im Imperativ (Sie-Form).</div>
                <div style="background: #fdfdfd; border: 1px solid #eee; padding: 15px; border-radius: 6px; line-height: 2.2; margin-bottom: 22px;">
                    1 &nbsp; kommen &rarr; <input type="text" class="inline-blank" style="width: 220px;" placeholder="Kommen Sie!"><br>
                    2 &nbsp; Platz nehmen &rarr; <input type="text" class="inline-blank" style="width: 220px;"><br>
                    3 &nbsp; die Geschichte hören &rarr; <input type="text" class="inline-blank" style="width: 220px;"><br>
                    4 &nbsp; jetzt nichts sagen &rarr; <input type="text" class="inline-blank" style="width: 220px;"><br>
                    5 &nbsp; Ihren Freunden die Geschichte erzählen &rarr; <input type="text" class="full-width-blank" style="width: 70%;">
                </div>

                <!-- Exercise 7 -->
                <div class="exercise-headline"><strong>7</strong> ZEIT UND ORT. Schreiben Sie die Sätze neu und beginnen Sie mit der Zeitangabe.</div>
                <div style="background: #f9f9f9; border: 1px solid #ddd; padding: 15px; border-radius: 6px; line-height: 2.1;">
                    1 &nbsp; Ich arbeite seit zwei Jahren in Frankfurt.<br>
                    &rarr; <input type="text" class="full-width-blank" style="width: 85%;" placeholder="Seit zwei Jahren arbeite ich in Frankfurt."><br>
                    2 &nbsp; Ich fahre jeden Montag von Heidelberg nach Frankfurt.<br>
                    &rarr; <input type="text" class="full-width-blank" style="width: 85%;"><br>
                    3 &nbsp; Ich wohne von Montag bis Freitag bei meiner Cousine.<br>
                    &rarr; <input type="text" class="full-width-blank" style="width: 85%;"><br>
                    4 &nbsp; Ich arbeite von 9 bis 18 Uhr im Büro.<br>
                    &rarr; <input type="text" class="full-width-blank" style="width: 85%;"><br>
                    5 &nbsp; Ich esse in der Mittagspause in der Kantine.<br>
                    &rarr; <input type="text" class="full-width-blank" style="width: 85%;"><br>
                    6 &nbsp; Ich gehe zweimal pro Woche ins Fitnessstudio.<br>
                    &rarr; <input type="text" class="full-width-blank" style="width: 85%;"><br>
                    7 &nbsp; Ich bin von Freitagabend bis Montagmorgen zu Hause.<br>
                    &rarr; <input type="text" class="full-width-blank" style="width: 85%;">
                </div>

                <div class="page-navigation-footer" style="margin-top:20px;">
                    <a href="#page-34" class="nav-btn">&larr; Zurück zur Erklärung S. 34</a>
                    <div></div>
                </div>
            </div>
        `
    }
};
