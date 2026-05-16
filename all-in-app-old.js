/**
 * Local Data Engine containing fixed lesson ranges and exercise content.
 */
const pagesData = {
    "108": `
        <div class="page-render-container">
            <div class="page-header-meta">
                <div class="page-title-main"><span>A1 | 44</span> Hauptsätze verbinden: <em>und, aber, oder, denn</em></div>
                <div style="font-weight: bold; font-size: 1.1rem; color: var(--brand-plum);">Erklärung (S. 108)</div>
            </div>

            <p>Zwei Hauptsätze können mit den Konjunktionen <strong>und, aber, oder, denn</strong> verbunden werden. Diese Wörter stehen auf <strong>Position 0</strong>. Das bedeutet, sie beeinflussen die Wortstellung im Satz nicht.</p>

            <div class="grid-syntax-table">
                <div class="grid-cell grid-header">Hauptsatz 1</div>
                <div class="grid-cell grid-header grid-cell-pos0">Position 0</div>
                <div class="grid-cell grid-header">Hauptsatz 2 (Position 1 - Position 2...)</div>

                <div class="grid-cell">Heute habe ich keine Zeit,</div>
                <div class="grid-cell grid-cell-pos0">aber</div>
                <div class="grid-cell">wir können morgen ins Kino gehen.</div>

                <div class="grid-cell">Ich möchte morgen ins Kino gehen,</div>
                <div class="grid-cell grid-cell-pos0">denn</div>
                <div class="grid-cell">da läuft ein guter Film.</div>

                <div class="grid-cell">Ich möchte mit dir essen gehen</div>
                <div class="grid-cell grid-cell-pos0">und</div>
                <div class="grid-cell">(ich möchte mit dir) einen Film sehen.</div>

                <div class="grid-cell">Möchtest du lieber ins Kino (gehen)</div>
                <div class="grid-cell grid-cell-pos0">oder</div>
                <div class="grid-cell">(möchtest du lieber) ins Theater gehen?</div>
            </div>

            <p style="font-size: 0.95rem; margin: 15px 0; color: var(--text-dark);">
                Bei <em>und, oder</em> und <em>aber</em> kann man doppelte Satzteile weglassen:<br>
                <span style="font-style: italic; color: var(--text-muted);">Ich möchte mit dir essen gehen und (ich möchte mit dir) einen Film sehen.</span>
            </p>

            <div class="grid-syntax-table" style="grid-template-columns: 1fr 1.5fr 3fr; margin-top: 20px;">
                <div class="grid-cell" style="font-weight:bold; color:#C62828;">aber</div><div class="grid-cell" style="font-weight:500;">Kontrast</div><div class="grid-cell">Wir haben kein Auto, <strong>aber</strong> wir haben zwei Fahrräder.</div>
                <div class="grid-cell" style="font-weight:bold; color:#C62828;">denn</div><div class="grid-cell" style="font-weight:500;">Grund</div><div class="grid-cell">Wir haben zwei Fahrräder, <strong>denn</strong> wir fahren gerne Fahrrad.</div>
                <div class="grid-cell" style="font-weight:bold; color:#C62828;">und</div><div class="grid-cell" style="font-weight:500;">Addition</div><div class="grid-cell">Ich habe ein Rennrad <strong>und</strong> mein Mann hat ein Mountainbike.</div>
                <div class="grid-cell" style="font-weight:bold; color:#C62828;">oder</div><div class="grid-cell" style="font-weight:500;">Alternative</div><div class="grid-cell">Möchtest du mein Rennrad <strong>oder</strong> willst du dein Mountainbike?</div>
            </div>

            <div class="exercise-headline"><strong>1</strong> ESSEN. Ergänzen Sie die Konjunktionen.</div>
            <div class="options-bank-box">aber • aber • und • und • denn • oder</div>

            <div class="exercise-input-line">1. Ich esse viel Gemüse, <input type="text" class="inline-blank"> ich möchte gesund leben.</div>
            <div class="exercise-input-line">2. Ich möchte schlank sein, <input type="text" class="inline-blank"> ich habe große Lust zu essen.</div>
            <div class="exercise-input-line">3. Ich liebe Schokolade <input type="text" class="inline-blank"> ich esse auch sehr gerne Eis.</div>
            <div class="exercise-input-line">4. Ich mache eine Obstdiät <input type="text" class="inline-blank"> ich mache eine Eierdiät.</div>
            <div class="exercise-input-line">5. Ich esse kein Fleisch, <input type="text" class="inline-blank"> ich esse manchmal Fisch.</div>
            <div class="exercise-input-line">6. Essen ist wichtig für mich <input type="text" class="inline-blank"> es macht Spaß.</div>

            <div class="exercise-headline"><strong>2</strong> DAS WOCHENENDE. Schreiben Sie Sätze.</div>
            <div class="exercise-input-line">
                <p>1. Am Samstag geht Lisa einkaufen • und • besucht • sie • am Sonntag • ihre Freunde • .</p>
                <input type="text" class="full-width-blank" value="Am Samstag geht Lisa einkaufen und am Sonntag besucht sie ihre Freunde.">
            </div>
            <div class="exercise-input-line">
                <p>2. Sie geht mit ihren Freunden in den Park • sehen • sie • einen Film im Kino • oder • .</p>
                <input type="text" class="full-width-blank" placeholder="Schreiben Sie den Satz...">
            </div>
            <div class="exercise-input-line">
                <p>3. Am Samstag scheint die Sonne • am Sonntag • aber • es • regnet • .</p>
                <input type="text" class="full-width-blank" placeholder="Schreiben Sie den Satz...">
            </div>
            <div class="exercise-input-line">
                <p>4. An diesem Sonntag gehen sie ins Kino • schlecht • denn • ist • das Wetter • .</p>
                <input type="text" class="full-width-blank" placeholder="Schreiben Sie den Satz...">
            </div>
            <div class="exercise-input-line">
                <p>5. Der Film gefällt ihnen nicht, das Popcorn • gut • schmeckt • aber • .</p>
                <input type="text" class="full-width-blank" placeholder="Schreiben Sie den Satz...">
            </div>
            <div class="exercise-input-line">
                <p>6. Nach dem Kino gehen sie in einen Club, müde • noch nicht • denn • sie • sind • .</p>
                <input type="text" class="full-width-blank" placeholder="Schreiben Sie den Satz...">
            </div>

            <div class="page-navigation-footer">
                <div></div>
                <a href="#page-109" class="nav-btn">Weiter zu Übungen S. 109 &rarr;</a>
            </div>
        </div>
    `,
    "109": `
        <div class="page-render-container">
            <div class="page-header-meta">
                <div class="page-title-main"><span>A1 | 44</span> Übungen (S. 109)</div>
                <div style="font-weight: bold; font-size: 1.1rem; color: var(--exercise-blue);">Übungsbuch</div>
            </div>

            <div class="exercise-headline"><strong>3</strong> STÄDTE IN DEUTSCHLAND. Ergänzen Sie die Konjunktionen.</div>
            <div class="options-bank-box">aber • und • denn • oder • denn • und</div>
            
            <div class="exercise-input-line">1. Frankfurt ist nicht so groß wie Berlin, <input type="text" class="inline-blank"> Frankfurt hat einen größeren Flughafen.</div>
            <div class="exercise-input-line">2. Berlin hat die meisten Museen <input type="text" class="inline-blank"> die meisten Theater.</div>
            <div class="exercise-input-line">3. Viele Leute wollen in Berlin arbeiten <input type="text" class="inline-blank"> viele Touristen kommen nach Berlin.</div>
            <div class="exercise-input-line">4. Viele Leute kommen nach Berlin, <input type="text" class="inline-blank"> Berlin ist die Hauptstadt von Deutschland.</div>
            <div class="exercise-input-line">5. Morgens um 5 Uhr können Sie in Hamburg noch auf die Reeperbahn gehen <input type="text" class="inline-blank"> Sie besuchen den Fischmarkt.</div>
            <div class="exercise-input-line">6. Ich wohne gerne in München, <input type="text" class="inline-blank"> dort kann ich im Winter in die Alpen zum Skifahren.</div>

            <div class="exercise-headline"><strong>4</strong> Verbinden Sie die Sätze mit <em>und</em>. Was kann man weglassen?</div>
            <div class="exercise-sub-instruction">(Manchmal kann man nichts weglassen!)</div>
            
            <div class="flex-exercise-row">
                <div class="flex-exercise-main">
                    <div class="exercise-input-line">
                        <p>1. Ich gehe gerne ins Kino. Ich gehe gerne ins Theater.</p>
                        <input type="text" class="full-width-blank" value="Ich gehe gerne ins Kino und (ich gehe gerne) ins Theater.">
                    </div>
                    <div class="exercise-input-line">
                        <p>2. Er kauft ein neues Handy. Er kauft einen neuen Laptop.</p>
                        <input type="text" class="full-width-blank" placeholder="Antwort schreiben...">
                    </div>
                    <div class="exercise-input-line">
                        <p>3. Sie geht heute schwimmen. Sie spielt heute Tennis.</p>
                        <input type="text" class="full-width-blank" placeholder="Antwort schreiben...">
                    </div>
                    <div class="exercise-input-line">
                        <p>4. Mein Bruder mag gerne Jazzmusik. Ich mag gerne klassische Musik.</p>
                        <input type="text" class="full-width-blank" placeholder="Antwort schreiben...">
                    </div>
                    <div class="exercise-input-line">
                        <p>5. Wir wollen zusammen für die Prüfung lernen. Wir wollen zusammen in Urlaub fahren.</p>
                        <input type="text" class="full-width-blank" placeholder="Antwort schreiben...">
                    </div>
                </div>
                <div class="example-hint-tag">
                    <strong>Beispiel 1:</strong><br> Ich gehe gerne ins Kino und (ich gehe gerne) ins Theater.
                </div>
            </div>

            <div class="exercise-headline"><strong>5</strong> Verbinden Sie die Fragen mit <em>oder</em>. Was kann man weglassen?</div>
            <div class="exercise-sub-instruction">(Manchmal kann man nichts weglassen!)</div>

            <div class="flex-exercise-row">
                <div class="flex-exercise-main">
                    <div class="exercise-input-line">
                        <p>1. Gehen Sie am Samstagabend ins Kino? Gehen Sie am Samstagabend ins Theater?</p>
                        <input type="text" class="full-width-blank" value="Gehen Sie am Samstagabend ins Kino oder (gehen Sie am Samstagabend) ins Theater?">
                    </div>
                    <div class="exercise-input-line">
                        <p>2. Essen Sie gerne Schokolade? Essen Sie lieber Pizza?</p>
                        <input type="text" class="full-width-blank" placeholder="Antwort schreiben...">
                    </div>
                    <div class="exercise-input-line">
                        <p>3. Möchten Sie einen Kaffee? Möchten Sie einen Tee?</p>
                        <input type="text" class="full-width-blank" placeholder="Antwort schreiben...">
                    </div>
                    <div class="exercise-input-line">
                        <p>4. Möchten Sie den Kaffee mit Zucker? Möchten Sie den Kaffee ohne Zucker?</p>
                        <input type="text" class="full-width-blank" placeholder="Antwort schreiben...">
                    </div>
                    <div class="exercise-input-line">
                        <p>5. Soll ich das Fenster aufmachen? Ist es Ihnen zu kalt?</p>
                        <input type="text" class="full-width-blank" placeholder="Antwort schreiben...">
                    </div>
                </div>
                <div class="example-hint-tag">
                    <strong>Beispiel 1:</strong><br> Gehen Sie am Samstagabend ins Kino oder (gehen Sie am Samstagabend) ins Theater?
                </div>
            </div>

            <div class="exercise-headline"><strong>6</strong> SHOPPING. Schreiben Sie den Text neu. Verbinden Sie die Sätze mit <em>denn, und, oder, aber</em>.</div>
            
            <div class="flex-exercise-row">
                <div class="flex-exercise-main">
                    <div class="exercise-input-line">
                        <p>1. Ich gehe in die Stadt. Ich möchte einkaufen.</p>
                        <input type="text" class="full-width-blank" placeholder="Satz verbinden...">
                    </div>
                    <div class="exercise-input-line">
                        <p>2. Ich möchte eine Hose kaufen. Ich möchte eine Bluse kaufen.</p>
                        <input type="text" class="full-width-blank" placeholder="Satz verbinden...">
                    </div>
                    <div class="exercise-input-line">
                        <p>3. Die rote Bluse ist sehr schön. Sie ist zu teuer.</p>
                        <input type="text" class="full-width-blank" placeholder="Satz verbinden...">
                    </div>
                    <div class="exercise-input-line">
                        <p>4. Soll ich die blaue nehmen? Soll ich die grüne nehmen?</p>
                        <input type="text" class="full-width-blank" placeholder="Satz verbinden...">
                    </div>
                    <div class="exercise-input-line">
                        <p>5. Mir gefällt die blaue. Mir gefällt die grüne.</p>
                        <input type="text" class="full-width-blank" placeholder="Satz verbinden...">
                    </div>
                    <div class="exercise-input-line">
                        <p>6. Leider kann ich nur eine Bluse kaufen. Ich habe nicht so viel Geld dabei.</p>
                        <input type="text" class="full-width-blank" placeholder="Satz verbinden...">
                    </div>
                </div>
                
                <div class="tip-box-lightbulb">
                    <div style="font-size: 1.5rem;">💡</div>
                    <div>
                        <strong>Immer Position 0</strong><br>
                        aber – und – denn – oder<br>
                        <strong>&rarr; AUDO</strong>
                    </div>
                </div>
            </div>

            <div class="page-navigation-footer">
                <a href="#page-108" class="nav-btn">&larr; Zurück zur Erklärung S. 108</a>
                <div></div>
            </div>
        </div>
    `
};

/**
 * Client-Side Router Routing Implementation Engine
 */
window.addEventListener('hashchange', () => {
    const hash = window.location.hash;
    const workspace = document.getElementById('content-display');
    
    if (hash.startsWith('#page-')) {
        const pageNum = hash.replace('#page-', '');
        
        if (pagesData[pageNum]) {
            workspace.innerHTML = pagesData[pageNum];
        } else {
            workspace.innerHTML = `
                <div class="placeholder-box">
                    <h3>Seite ${pageNum}</h3>
                    <p style="color: var(--brand-orange); font-weight: bold;">Strukturelles Modul bereit</p>
                    <p style="font-size: 0.9rem; margin-top: 10px;">Der Daten-Spread für diese Seite ist im Router registriert. Reichen Sie die Grafik-Scans ein, um die Live-DOM-Inhalte einzuhängen.</p>
                </div>
            `;
        }
        workspace.scrollIntoView({ behavior: 'smooth' });
    }
});

// Initialize router state if hash loaded directly
if (window.location.hash) {
    window.dispatchEvent(new Event('hashchange'));
}
