// app.js

const workspace = document.getElementById('content-display');

/**
 * Enterprise Routing Map
 * Links single page requests directly to their isolated chapter container module.
 * When you add Chapter 45, just extend this index map.
 */

const pageToChapterMap = {
    // ==========================================
    // ABSCHNITT: VERBEN 2 (SEITE 64 - 78)
    // ==========================================
    
    // 25 Ich war, ich hatte (Präteritum: sein und haben)
    "64": "chapter25",
    "65": "chapter25",

    // 26 Was hast du gestern gemacht? (Perfekt mit haben)
    "66": "chapter26",
    "67": "chapter26",

    // 27 Ich bin gekommen, ich habe gelacht (Perfekt mit sein)
    "68": "chapter27",
    "69": "chapter27",

    // 28 Gesehen – eingekauft – bezahlt (Partizip Perfekt (Partizip 2))
    "70": "chapter28",
    "71": "chapter28",

    // 29 Ich konnte, ich musste, ich wollte (Präteritum: Modalverben)
    "72": "chapter29",
    "73": "chapter29",

    // 30 Gestern hatte er Zeit und hat Sport gemacht (Zeitengebrauch)
    "74": "chapter30",
    "75": "chapter30",

    // 31 Sie wäscht sich (Reflexive (und reziproke) Verben)
    "76": "chapter31",
    "77": "chapter31",

    // Partnerseite 4: Perfekt (Würfelspiel)
    "78": "partnerseite4_perfekt",

    // ==========================================
    // ABSCHNITT: PRÄPOSITIONEN 1 (SEITE 80 - 96)
    // ==========================================
    
    // 32 Im, am, um, von ... bis, nach, vor (Temporale Präpositionen)
    "80": "chapter32",
    "81": "chapter32",

    // 33 Aus, bei, mit, nach, seit, von, zu (Präpositionen mit Dativ)
    "82": "chapter33",
    "83": "chapter33",

    // 34 Für, um, durch, ohne, gegen (Präpositionen mit Akkusativ)
    "84": "chapter34",
    "85": "chapter34",

    // 35 Wo? Im Kino (Wechselpräpositionen mit Dativ)
    "86": "chapter35",
    "87": "chapter35",

    // 36 Im Kino oder ins Kino? (Wechselpräpositionen mit Dativ und Akkusativ)
    "88": "chapter36",
    "89": "chapter36",

    // 37 Ich gehe zum Arzt und auf den Markt (Lokale Präpositionen: Wohin?)
    "90": "chapter37",
    "91": "chapter37",

    // 38 Ich war beim Arzt und bin jetzt auf dem Markt (Lokale Präpositionen: Wo?)
    "92": "chapter38",
    "93": "chapter38",

    // 39 Ich komme aus den Bergen vom Skifahren (Lokale Präpositionen: Woher?)
    "94": "chapter39",
    "95": "chapter39",

    // Partnerseite 5: Wechselpräpositionen (Malspiel)
    "96": "partnerseite5_wechselpraepositionen",
    
    // Chapter 44 Map
    "108": "chapter44",
    "109": "chapter44"
};

window.addEventListener('hashchange', async () => {
    const hash = window.location.hash;
    if (!hash.startsWith('#page-')) return;
    
    const pageNum = hash.replace('#page-', '');
    const chapterName = pageToChapterMap[pageNum];
    
    if (!chapterName) {
        renderPlaceholder(pageNum, "Modulbereitstellung ausstehend", "Der strukturelle Daten-Slot ist registriert. Fügen Sie das Kapitelmodul im Ordner /chapters hinzu.");
        return;
    }

    try {
        // Dynamic asynchronous import (Lazy Loading)
        const module = await import(`./chapters/${chapterName}.js`);
        const chapterData = module[chapterName];
        
        if (chapterData && chapterData.pages[pageNum]) {
            workspace.innerHTML = chapterData.pages[pageNum];
        } else {
            renderPlaceholder(pageNum, "Inhalt fehlt", "Die Seite ist innerhalb des Kapitelmoduls nicht definiert.");
        }
    } catch (error) {
        console.error("Critical module loading error:", error);
        renderPlaceholder(pageNum, "Fehler beim Laden", "Das Kapitelmodul konnte nicht über das CDN/GitHub geladen werden.");
    }
    
    workspace.scrollIntoView({ behavior: 'smooth' });
});

function renderPlaceholder(pageNum, statusTitle, statusBody) {
    workspace.innerHTML = `
        <div class="placeholder-box">
            <h3>Seite ${pageNum}</h3>
            <p style="color: var(--brand-orange); font-weight: bold; margin-top: 5px;">${statusTitle}</p>
            <p style="font-size: 0.9rem; margin-top: 8px; max-width: 500px; margin-left: auto; margin-right: auto;">${statusBody}</p>
        </div>
    `;
}

// Fire routing calculation on fresh load if target pointer is active
if (window.location.hash) {
    window.dispatchEvent(new Event('hashchange'));
}
