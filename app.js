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
    "97": "partnerseite5_wechselpraepositionen",

    // ==========================================
    // ABSCHNITT: ADJEKTIVE 1 (SEITE 98 - 107)
    // ==========================================
    
    // 40 Ein netter Mann! Ich liebe den netten Mann (Nominativ und Akkusativ)
    "98": "chapter40",
    "99": "chapter40",

    // 41 Am ersten Mai (Nominativ, Akkusativ und Dativ)
    "100": "chapter41",
    "101": "chapter41",

    // 42 Schneller als ... (Komparativ und Vergleichssätze)
    "102": "chapter42",
    "103": "chapter42",

    // 43 Der kleinste Mann läuft am schnellsten (Superlativ)
    "104": "chapter43",
    "105": "chapter43",

    // Partnerseite 6: Adjektivdeklination (Würfelspiel)
    "106": "partnerseite6_adjektivdeklination",
    "107": "partnerseite6_adjektivdeklination",

    // ==========================================
    // ABSCHNITT: SÄTZE UND SATZVERBINDUNGEN 1 (SEITE 108 - 115)
    // ==========================================
    
    // 44 Und, aber, oder, denn (Hauptsätze verbinden (Position 0))
    "108": "chapter44",
    "109": "chapter44",

    // 45 Deshalb, sonst, dann, danach (Hauptsätze verbinden (Position 1))
    "110": "chapter45",
    "111": "chapter45",

    // 46 ..., weil ich Deutsch lernen möchte. (Nebensätze mit weil, wenn und dass)
    "112": "chapter46",
    "113": "chapter46",

    // Partnerseite 7: Nebensätze (Wechselspiel)
    "114": "partnerseite7_nebensaetze",
    "115": "partnerseite7_nebensaetze",

    // ==========================================
    // ABSCHNITT: WÖRTER UND WORTBILDUNG (SEITE 116 - 129)
    // ==========================================
    
    // 47 Kinderarzt oder Arztkinder? (Komposita)
    "116": "chapter47",
    "117": "chapter47",

    // 48 Ich bin dann mal weg (Zusammengesetzte Verben)
    "118": "chapter48",
    "119": "chapter48",

    // 49 Der, die oder das? (Genusregeln)
    "120": "chapter49",
    "121": "chapter49",

    // 50 Was heißt das denn? (Partikeln)
    "122": "chapter50",
    "123": "chapter50",

    // 51 -chen, -lein, -er, -in, -ung (Aus Wörtern neue Wörter machen)
    "124": "chapter51",
    "125": "chapter51",

    // 52 Nicht und nichts, noch nicht und nicht mehr (Negationswörter)
    "126": "chapter52",
    "127": "chapter52",

    // 53 Ich bin oben. Komm auch nach oben. (Lokale Adverbien: Position und Direktion)
    "128": "chapter53",
    "129": "chapter53"
    
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
