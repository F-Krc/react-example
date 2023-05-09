# React Fundamentals / Thinking in React
[![Status overview badge](../../blob/badges/.github/badges/main/badge.svg)](#-results)


## Voraussetzungen

Für diese Übung sollten Sie mit dem Schreiben von JavaScript und HTML vertraut sein. Die Übung verwendet die folgenden ES6- und ES5-Funktionen:

- Module system ([import](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import)/ [export](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/export))
- [Arrow functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions)
- [Array.map](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map) and [Array.filter](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)

Sie müssen `node` und `npm` auf Ihrem Computer installiert haben.

## 🥑 Bevor wir mit der Übung beginnen

Bevor Sie beginnen, werden wir in dieser Übung den [useState hook](https://reactjs.org/docs/hooks-state.html) verwenden.

```javascript
import { useState } from 'react';

function Example() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}
```


Das Ziel dieser Übung ist es, zu verstehen, was ein state ist und wie man damit umgeht. 
Wie wir den state speichern, ist ein Implementierungsdetail. Die Prinzipien, die Sie in dieser Übung lernen, können auf Klassen & this.setState, 
Hooks und einige andere Bibliotheken zur state management angewendet werden. 


## 🤸‍♀️ Exercise

- [ ] 1. Überarbeiten Sie die Abschnitte “about” und “footer” indem Sie für jeden eine Funktionskomponente erstellen.
      Stellen Sie sicher, dass alles funktioniert. Hinweis: Sie können sich die Datei `src/components/Header.js` als Beispiel ansehen.
      

- [ ] 2. Refaktorieren Sie die Navigationsleiste, indem Sie eine Funktionskomponente erstellen.
      Übergeben Sie die Abhängigkeiten (in diesem Fall `toggleMenu`) über props.
      Stellen Sie sicher, dass alles funktioniert, indem Sie auf die Schaltfläche "Training" oben rechts auf dem Bildschirm klicken. Tipp: Sie können sich die Datei `src/components/Header.js` als Beispiel ansehen (Achtung, verwenden Sie geschweifte Klammern, um eine Requisite als Funktion zu übergeben)


- [ ] 3. Überarbeiten Sie den Abschnitt books in App.js indem Sie eine neue function component namens Books. 
      Die `<Books>` Komponente wird das JSX in Bezug auf die Bücher haben. Diese Aufgabe ist ein Sprungbrett, behalten Sie den gesamten Zustand 
      in `<App>` und übergeben Sie jeden benötigten Zustand von `<App>` an `<Books>` über props. 
      Du wirst diesen Code in der nächsten Aufgabe erneut refaktorisieren und verbessern. Stellen Sie sicher, dass alles funktioniert.


- [ ] 4. Gibt es einen Zustand in App.js, der in der Komponente "<Books>" sein sollte?
      Refaktorieren Sie `<Books>` falls erforderlich. 

- [ ] 5. Zerlegen Sie `<Books>` in zwei kleinere Komponenten: `<BookList>` und `<BookFilter>`. `<BookList>` wird für die Anzeige der Bücher verantwortlich sein. `<BookFilter>` wird für das Filtern der Bücher verantwortlich sein. Gibt es irgendeinen Zustand in `<Books>`, der in `<BookList>` oder `<BookFilter>` verschoben werden sollte?
  
## 🏋️‍♀️  Bonusübung

- Können wir den state "isMenuOpen" innerhalb des Menüs verschieben? Steht das im Widerspruch zur Idee des "Aufhebens des states".
- Wenn man sich den [React Profiler](https://reactjs.org/blog/2018/09/10/introducing-the-react-profiler.html) anschaut, wenn man das 
  Menü öffnet und schließt, wird dann die ganze App gerendert? Wenn ja, wie können wir das vermeiden und trotzdem den state anheben?
  
  
  
## Articles and links
  
- [Lecture: Introduction to Thinking in React](https://reactgraphql.academy/react/introduction-to-thinking-in-react/)
- [A Beginner’s Guide to React](https://medium.com/leanjs/introduction-to-react-3000e9cbcd26)
- [Introduction to JSX](https://reactjs.org/docs/introducing-jsx.html)
- [https://reactjs.org/docs/lifting-state-up.html](https://reactjs.org/docs/lifting-state-up.html)
- [https://reactjs.org/docs/thinking-in-react.html](https://reactjs.org/docs/thinking-in-react.html)
- [babel repl example](https://babeljs.io/repl#?browsers=&build=&builtIns=false&spec=false&loose=false&code_lz=JYWwDg9gTgLgBAJQKYEMDG8BmUIjgIilQ3wChS0IA7AZ3gAkkAbJiAYV0iqSvgF44ACgCUcPgD4CAC2D4A3OQA8AE2AA3OGiYoaNAHIoQSPvkq8UwblHzjScOCvWbtug0ZM4A7jbv2HjFnZOah54AHpbe0Uw1TVbaNjxIA&debug=false&forceAllTransforms=false&shippedProposals=false&circleciRepo=&evaluate=true&fileSize=false&timeTravel=false&sourceType=module&lineWrap=false&presets=es2015%2Ces2016%2Ces2017%2Creact%2Cstage-2&prettier=false&targets=&version=7.3.3&externalPlugins=)

## Output:
![reference image](./reference.gif)

