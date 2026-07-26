// app.js

const workspace = document.getElementById('content-display');

/**
 * Enterprise Routing Map
 * Links single page requests directly to their isolated chapter container module.
 * When you add Chapter 45, just extend this index map.
 */

const pageToChapterMap = {
    // ==========================================
    // ABSCHNITT: VERBEN 1 (SEITE 10 - 29)
    // ==========================================
    
    // 1 Ich, du, er, sie, es, wir, ihr, sie und Sie (Personalpronomen)
    "10": "chapter1",
    "11": "chapter1",

    // 2 Ich komme, du kommst (Konjugation Präsens)
    "12": "chapter2",
    "13": "chapter2",

    // 3 Ich bin, du hast, er möchte (Sein, haben und besondere Verben)
    "14": "chapter3",
    "15": "chapter3",

    // 4 Ich esse wenig, aber du isst viel! (Verben mit Vokalwechsel)
    "16": "chapter4",
    "17": "chapter4",

    // 5 Ich muss, ich kann, ich will (Modalverben: Konjugation und Position im Satz)
    "18": "chapter5",
    "19": "chapter5",

    // 6 Ich kann, ich will, ich möchte (Modalverben: Gebrauch 1)
    "20": "chapter6",
    "21": "chapter6",

    // 7 Ich muss, ich soll, ich darf (Modalverben: Gebrauch 2)
    "22": "chapter7",
    "23": "chapter7",

    // 8 Ich kaufe im Supermarkt ein (Trennbare Verben)
    "24": "chapter8",
    "25": "chapter8",

    // 9 Helfen Sie mir! (Imperativ)
    "26": "chapter9",
    "27": "chapter9",

    // Partnerseite 1: Konjugation (Wechselspiel)
    "28": "partnerseite1_konjugation",
    "29": "partnerseite1_konjugation",

    // ==========================================
    // ABSCHNITT: SÄTZE UND FRAGEN (SEITE 30 - 39)
    // ==========================================
    
    // 10 Wer? Wie? Wo? Was? (Fragen mit Fragewort)
    "30": "chapter10",
    "31": "chapter10",

    // 11 Lernen Sie Deutsch? (Ja-/Nein-Fragen und Antworten)
    "32": "chapter11",
    "33": "chapter11",

    // 12 Am Abend essen wir Pizza (Position 2 im Satz)
    "34": "chapter12",
    "35": "chapter12",

    // 13 Ich gehe ... schwimmen (Zwei feste Positionen im Satz)
    "36": "chapter13",
    "37": "chapter13",

    // Partnerseite 2: Fragen (Wechselspiel)
    "38": "partnerseite2_fragen",
    "39": "partnerseite2_fragen",

    // ==========================================
    // ABSCHNITT: PRONOMEN, NOMEN UND ARTIKEL (SEITE 40 - 63)
    // ==========================================
    
    // 14 Die Männer, die Frauen, die Babys (Nomen: Plural)
    "40": "chapter14",
    "41": "chapter14",

    // 15 Der, das die – ein, ein, eine (Artikel: definit, indefinit, kein Artikel)
    "42": "chapter15",
    "43": "chapter15",

    // 16 Ich koche nicht. Ich habe keine Zeit. (Negation)
    "44": "chapter16",
    "45": "chapter16",

    // 17 Der Mann isst den Fisch (Akkusativ)
    "46": "chapter17",
    "47": "chapter17",

    // 18 Ich fahre mit dem Auto (Dativ)
    "48": "chapter18",
    "49": "chapter18",

    // 19 Mein, dein, unser (Possessivartikel)
    "50": "chapter19",
    "51": "chapter19",

    // 20 Welcher? – Dieser! (Artikel: interrogativ und demonstrativ)
    "52": "chapter20",
    "53": "chapter20",

    // 21 Nur mit dir – nie ohne dich (Personalpronomen: Akkusativ und Dativ)
    "54": "chapter21",
    "55": "chapter21",

    // 22 Ich kaufe meinem Sohn einen Ball (Verben mit Akkusativ und Dativ)
    "56": "chapter22",
    "57": "chapter22",

    // 23 Ich helfe dir, du dankst mir (Verben mit Dativ)
    "58": "chapter23",
    "59": "chapter23",

    // 24 Wem schenkst du was? (Frage nach Personen und Sachen)
    "60": "chapter24",
    "61": "chapter24",

    // Partnerseite 3: Akkusativ und Dativ
    "62": "partnerseite3_akkusativ_und_dativ",
    "63": "partnerseite3_akkusativ_und_dativ",
    
    
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
    "123-note": "chapter50-note",

    // 51 -chen, -lein, -er, -in, -ung (Aus Wörtern neue Wörter machen)
    "124": "chapter51",
    "125": "chapter51",

    // 52 Nicht und nichts, noch nicht und nicht mehr (Negationswörter)
    "126": "chapter52",
    "127": "chapter52",

    // 53 Ich bin oben. Komm auch nach oben. (Lokale Adverbien: Position und Direktion)
    "128": "chapter53",
    "129": "chapter53",

    // ==========================================
    // ABSCHNITT: VERBEN 3 (SEITE 130 - ...)
    // ==========================================

    // 54 Er kam, sah und sagte (Präteritum)
    "130": "chapter54",
    "131": "chapter54",

    // 55 Ich hatte zu lange geschlafen (Plusquamperfekt)
    "132": "chapter55",
    "133": "chapter55",

    // 56 Ich wasche mir die Hände (Reflexivpronomen im Akkusativ und Dativ)
    "134": "chapter56",
    "135": "chapter56",

    // 62 Der Baum wird gepflanzt (Passiv)
    "146": "chapter62",
    "147": "chapter62",

    // 65 Werden, werden, werden ... (Funktionen von werden)
    "152": "chapter65",
    "153": "chapter65",

    // 66 Leben und leben lassen (Das Verb lassen)
    "154": "chapter66",
    "155": "chapter66",

    // ==========================================
    // ABSCHNITT: NEBENSÄTZE 2 (SEITE 180 - ...)
    // ==========================================

    // 77 Ich gehe, wenn ... / Ich ging, als ... (Temporale Nebensätze mit wenn und als)
    "180": "chapter77",
    "181": "chapter77",

    // 78 Während, bevor, nachdem, seit (Temporale Nebensätze)
    "182": "chapter78",
    "183": "chapter78"
    
};

async function loadChapterScript(chapterName) {
    if (window[chapterName]) {
        return window[chapterName];
    }

    try {
        const chapterModule = await import(`./chapters/${chapterName}.js`);
        return chapterModule[chapterName] || window[chapterName];
    } catch (moduleError) {
        return new Promise((resolve, reject) => {
            const script = document.createElement('script');
            script.src = `./chapters/${chapterName}.js`;
            script.onload = () => resolve(window[chapterName]);
            script.onerror = () => reject(
                new Error(`Failed to load: ${chapterName}.js (${moduleError.message})`)
            );
            document.head.appendChild(script);
        });
    }
}

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
        const chapterData = await loadChapterScript(chapterName);
        
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


// Make entire TOC row clickable — clicking anywhere on the row (except the
// page-number links themselves) navigates to the first page of that chapter.
document.querySelectorAll('.toc-item').forEach(item => {
    item.addEventListener('click', (e) => {
        if (e.target.closest('.page-link')) return;
        const firstLink = item.querySelector('.page-link');
        if (firstLink) firstLink.click();
    });
});
