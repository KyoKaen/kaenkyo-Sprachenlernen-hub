const chapter9 = {
  title: "9 Helfen Sie mir! (Imperativ)",
  level: "A1",
  pages: [26, 27],
  
  // Explanation / Reference Section from Page 26
  explanation: {
    grammarFocus: "Imperativ",
    formationRule: {
      formell: "Infinitiv + Sie (z.B. kommen Sie)",
      informellSingular: "Stamm des Verbs ohne -en (du-Form ohne -st, kein Subjekt)",
      informellPlural: "ihr-Form des Verbs (kein Subjekt)"
    },
    notes: [
      "Der Imperativ mit du und ihr hat kein Subjekt.",
      "Einen Imperativ kann man mit 'bitte' höflicher machen.",
      "Im Imperativ sagen wir oft 'mal' und 'doch'."
    ]
  },

  // Structured exercises 1 through 5 matching pages 26-27 layout
  exercises: [
    {
      id: "9_1",
      instruction: "Schreiben Sie Imperativformen mit Sie, du und ihr.",
      type: "sentence-formation",
      tasks: [
        {
          id: "9_1_1",
          verbs: ["gehen", "kaufen", "singen"],
          exampleAnswers: [
            "Gehen Sie! Geh! Geht!",
            "Kaufen Sie! Kauf! Kauft!",
            "Singen Sie! Sing! Singt!"
          ]
        },
        {
          id: "9_1_2",
          verbs: ["schreiben", "spielen", "fragen"],
          answers: [
            "Schreiben Sie! Schreib! Schreibt!",
            "Spielen Sie! Spiel! Spielt!",
            "Fragen Sie! Frag! Fragt!"
          ]
        },
        {
          id: "9_1_3",
          verbs: ["mitkommen", "weggehen", "mitbringen", "abholen"],
          answers: [
            "Kommen Sie mit! Komm mit! Kommt mit!",
            "Gehen Sie weg! Geh weg! Geht weg!",
            "Bringen Sie mit! Bring mit! Bringt mit!",
            "Holen Sie ab! Hol ab! Holt ab!"
          ]
        },
        {
          id: "9_1_4",
          verbs: ["geben", "nehmen", "essen", "lesen", "sprechen"],
          answers: [
            "Geben Sie! Gib! Gebt!",
            "Nehmen Sie! Nimm! Nehmt!",
            "Essen Sie! Iss! Esst!",
            "Lesen Sie! Lies! Lest!",
            "Sprechen Sie! Sprich! Sprecht!"
          ]
        },
        {
          id: "9_1_5",
          verbs: ["sein", "haben", "fahren", "waschen"],
          answers: [
            "Seien Sie! Sei! Seid!",
            "Haben Sie! Hab! Habt!",
            "Fahren Sie! Fahr! Fahrt!",
            "Waschen Sie! Wasch! Wascht!"
          ]
        }
      ]
    },
    {
      id: "9_2",
      instruction: "IM KURS. Wer sagt was? Schreiben Sie Sätze im Imperativ formell.",
      type: "categorization-sentences",
      wordPool: [
        "wiederholen", "langsam sprechen", "zu zweit sprechen", "den Text lesen",
        "in der Gruppe diskutieren", "den Dialog spielen", "das Wort erklären",
        "ein Beispiel geben", "an die Tafel schreiben"
      ],
      tasks: [
        {
          id: "9_2_1",
          speaker: "Kursleiter/-innen",
          exampleAnswer: "Bitte sprechen Sie zu zweit.",
          answers: [
            "Wiederholen Sie bitte.",
            "Lesen Sie den Text.",
            "Diskutieren Sie in der Gruppe.",
            "Erklären Sie das Wort.",
            "Geben Sie ein Beispiel.",
            "Schreiben Sie an die Tafel."
          ]
        },
        {
          id: "9_2_2",
          speaker: "Teilnehmer/-innen",
          answers: [
            "Sprechen Sie bitte langsam.",
            "Spielen Sie den Dialog."
          ]
        }
      ]
    },
    {
      id: "9_3",
      instruction: "Wer ist gemeint? Welche Personen passen? Kreuzen Sie an.",
      type: "matrix-selection",
      columns: ["Herr Müller", "Herr und Frau Müller", "Mona und Lucas", "Mona"],
      tasks: [
        { id: "9_3_1", sentence: "Kommt bitte schnell.", correctColumn: "Mona und Lucas" },
        { id: "9_3_2", sentence: "Nehmen Sie bitte Platz.", correctColumn: "Herr und Frau Müller" },
        { id: "9_3_3", sentence: "Esst doch noch etwas.", correctColumn: "Mona und Lucas" },
        { id: "9_3_4", sentence: "Gib mir mal den Teller.", correctColumn: "Mona" },
        { id: "9_3_5", sentence: "Hab doch keine Angst.", correctColumn: "Mona" },
        { id: "9_3_6", sentence: "Lassen Sie sich Zeit.", correctColumn: "Herr Müller" },
        { id: "9_3_7", sentence: "Guck doch mal.", correctColumn: "Mona" }
      ]
    },
    {
      id: "9_4",
      instruction: "RATSCHLÄGE GEBEN. Schreiben Sie Sätze im Imperativ.",
      type: "input-transformation",
      wordPool: [
        "eine Kopfschmerztablette nehmen", "einen Tee trinken", "eine Brille kaufen",
        "Yoga machen", "weniger essen", "mehr essen", "weniger arbeiten",
        "am Abend spazieren gehen", "nach Hause gehen"
      ],
      tasks: [
        { 
          id: "9_4_1", 
          context: "Es geht mir nicht gut.", 
          exampleAnswers: ["Dann geh doch nach Hause.", "Dann gehen Sie doch nach Hause."] 
        },
        { id: "9_4_2", context: "Ich habe Kopfschmerzen.", answers: ["Nimm eine Kopfschmerztablette.", "Nehmen Sie eine Kopfschmerztablette."] },
        { id: "9_4_3", context: "Ich bin gestresst.", answers: ["Mach Yoga.", "Machen Sie Yoga.", "Arbeite weniger.", "Arbeiten Sie weniger."] },
        { id: "9_4_4", context: "Ich kann nicht schlafen.", answers: ["Trink einen Tee.", "Trinken Sie einen Tee.", "Geh am Abend spazieren.", "Gehen Sie am Abend spazieren."] },
        { id: "9_4_5", context: "Ich bin nervös.", answers: ["Mach Yoga.", "Machen Sie Yoga."] },
        { id: "9_4_6", context: "Mein Bauch tut weh.", answers: ["Trink einen Tee.", "Trinken Sie einen Tee.", "Iss weniger.", "Essen Sie weniger."] },
        { id: "9_4_7", context: "Ich habe immer Hunger.", answers: ["Iss mehr.", "Essen Sie mehr."] },
        { id: "9_4_8", context: "Ich sehe schlecht.", answers: ["Kauf eine Brille.", "Kaufen Sie eine Brille."] },
        { id: "9_4_9", context: "Ich möchte abnehmen.", answers: ["Iss weniger.", "Essen Sie weniger.", "Mach Yoga.", "Machen Sie Yoga."] }
      ]
    },
    {
      id: "9_5a",
      instruction: "WÖRTER LERNEN MIT EINER APP. Schreiben Sie Sätze im Imperativ formell Singular.",
      type: "formell-singular-input",
      tasks: [
        { id: "9_5a_1", base: "eine App suchen", exampleAnswer: "Suchen Sie eine App." },
        { id: "9_5a_2", base: "die App herunterladen", answer: "Laden Sie die App herunter." },
        { id: "9_5a_3", base: "die App installieren", answer: "Installieren Sie die App." },
        { id: "9_5a_4", base: "Beispielsätze mit Lücke schreiben", answer: "Schreiben Sie Beispielsätze mit Lücke." },
        { id: "9_5a_5", base: "die Lösung ergänzen", answer: "Ergänzen Sie die Lösung." },
        { id: "9_5a_6", base: "das Wörterlernen starten", answer: "Starten Sie das Wörterlernen." },
        { id: "9_5a_7", base: "den Lückensatz laut lesen und ergänzen", answer: "Lesen Sie den Lückensatz laut und ergänzen Sie." },
        { id: "9_5a_8", base: "klicken und kontrollieren", answer: "Klicken Sie und kontrollieren Sie." }
      ]
    },
    {
      id: "9_5b",
      instruction: "Erklären Sie einem Freund / einer Freundin, wie er/sie gut Wörter lernen kann.",
      type: "informell-singular-input",
      tasks: [
        { id: "9_5b_1", base: "eine App suchen", exampleAnswer: "Such eine App." },
        { id: "9_5b_2", base: "die App herunterladen", answer: "Lad die App herunter." },
        { id: "9_5b_3", base: "die App installieren", answer: "Installiere die App." },
        { id: "9_5b_4", base: "Beispielsätze mit Lücke schreiben", answer: "Schreib Beispielsätze mit Lücke." },
        { id: "9_5b_5", base: "die Lösung ergänzen", answer: "Ergänze die Lösung." },
        { id: "9_5b_6", base: "das Wörterlernen starten", answer: "Starte das Wörterlernen." },
        { id: "9_5b_7", base: "den Lückensatz laut lesen und ergänzen", answer: "Lies den Lückensatz laut und ergänze." },
        { id: "9_5b_8", base: "klicken und kontrollieren", answer: "Klick und kontrollier." }
      ]
    }
  ]
};

export default chapter9;
