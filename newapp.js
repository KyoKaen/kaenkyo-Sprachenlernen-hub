// app.js

const workspace = document.getElementById('content-display');

/**
 * Enterprise Routing Map
 * Links single page requests directly to their isolated chapter container module.
 * When you add Chapter 45, just extend this index map.
 */
const pageToChapterMap = {
    "108": "chapter44",
    "109": "chapter44"
    // Future Expansion:
    // "110": "chapter45",
    // "111": "chapter45"
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
