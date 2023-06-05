# :cartwheeling: Übung
[![Statusübersicht-Badge](../../blob/badges/.github/badges/autograding/badge.svg)](#Ergebnisse)



## :de::argentina::us::south_africa: Erstelle eine Sprachauswahl :iran::hungary::poland::syria:

---
### Aufgabe

- Erstelle eine React App mit einer Dropdown-Liste, in der der Nutzer zwischen verschiedenen Sprachen wählen kann,
z.B. (GER, ENG, deine Muttersprache...). Deine WelcomeMessage-Komponente muss die Nachricht in der Sprache anzeigen, die der Nutzer ausgewählt hat.

  - GER: "Hallo Welt!"
  - ENG: "Hello World!"

- Wenn der Benutzer die Spracheinstellungen ändert, sollte die Nachricht entsprechend aktualisiert werden.
Bitte löse die Übung, indem du `useContext` verwendest.

- Stil nach deinem Geschmack

---

**Strukturiere deine App wie folgt:**

- `App` hat "Header" und "Content" als Kinder
  - `Header`
  - `Content`

- `Header` hat LanguageChooser als Kind:
  - `LanguageChooser`, der eine Dropdown-Liste hat
- `Content` hat WelcomeMessage als untergeordnetes Element:
  - `WelcomeMessage`, das eine Willkommensnachricht in der gewählten Sprache anzeigt

---

![](language-setter.gif)

---

### Fragen

- Überlege, wie du die gleiche Aufgabe lösen könntest, wenn du nur den useState-Hook verwenden würdest?
- Welchen Unterschied bemerkst du bei `useState` und `useContext`?

[//]: # (autograding info start)
## Ergebnisse




[🔬 Ergebnisdetails](https://github.com/DigitalCareerInstitute/SPA-STORE-language-setting/actions)

[📢 Feedback geben oder Problem melden](https://docs.google.com/forms/d/e/1FAIpQLSfS8wPh6bCMTLF2wmjiE5_UhPiOEnubEwwPLN_M8zTCjx5qbg/viewform?usp=pp_url&entry.652569746=SPA-STORE-language-setting&entry.2115011968=https%3A%2F%2Fgithub.com%2FDigitalCareerInstitute%2FSPA-STORE-language-setting)

### Debugging deines Codes
> [Lesen der Testausgaben](https://github.com/DCI-EdTech/autograding-setup/wiki/Reading-test-outputs)

Es gibt zwei Möglichkeiten, um herauszufinden, warum Aufgaben nicht erledigt werden können:
#### 1. Tests lokal ausführen
- Führe `npm install` aus
- Führe `npm test` im Terminal aus. Du wirst sehen, wo deine Lösung vom erwarteten Ergebnis abweicht.

#### 2. Überprüfen der Testausgabe auf GitHub
- Gehe auf die [Registerkarte Aktionen deines Übungsrepos](https://github.com/DigitalCareerInstitute/SPA-STORE-language-setting/actions)
- Dort siehst du eine Liste mit den Testläufen. Klicke auf den obersten.
- Klicke auf "Autograding".
- Erweitere den Punkt 'Run DCI-EdTech/autograding-action@main'
- Hier siehst du alle Ausgaben des Testlaufs

[//]: # (autograding info end)
