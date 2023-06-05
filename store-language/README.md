# :cartwheeling: Exercise 
[![Status overview badge](../../blob/badges/.github/badges/main/badge.svg)](#-results)



## :de::argentina::us::south_africa: Create a language chooser :iran::hungary::poland::syria:

---
### Task

- Create a React App, with a dropdown-list, where the user can choose between different languages,
e.g. (GER, ENG, your mother tongue...). Your WelcomeMessage component needs to show the message in the language, the user has choosen.

  - GER: "Hallo Welt!"
  - ENG: "Hello World!"

- if the user changes the language settings, the message should be updated accordingly
Please solve the exercise by using `useContext`.

- style to your liking

---

**structure your app as follows:**

- `App` has Header and Content as children
  - `Header`
  - `Content`

- `Header` has LanguageChooser as a child:
  - `LanguageChooser` which has a dropdown-list
- `Content` has WelcomeMessage as a child:
  - `WelcomeMessage` which shows a Welcome Message in the choosen language

---

![](language-setter.gif)

---

### Questions

- Think about, how you would be able to solve the same exercise, by only using the useState hook?
- Which difference are you noticing about `useState` and `useContext`?

[//]: # (autograding info start)
# <img src="https://github.com/DCI-EdTech/autograding-setup/raw/main/assets/bot-large.svg" alt="" data-canonical-src="https://github.com/DCI-EdTech/autograding-setup/raw/main/assets/bot-large.svg" height="31" /> Results
> ⌛ Give it a minute. As long as you see the orange dot ![processing](https://raw.githubusercontent.com/DCI-EdTech/autograding-setup/main/assets/processing.svg) on top, CodeBuddy is still processing. Refresh this page to see it's current status.
>
> This is what CodeBuddy found when running your code. It is to show you what you have achieved and to give you hints on how to complete the exercise.


### App

|                 Status                  | Check                                                                                    |
| :-------------------------------------: | :--------------------------------------------------------------------------------------- |
| ![Status](../../blob/badges/.github/badges/main/status0.svg) | App component renders |
| ![Status](../../blob/badges/.github/badges/main/status1.svg) | Language Dropdown Menu is present |

### Language Menu

|                 Status                  | Check                                                                                    |
| :-------------------------------------: | :--------------------------------------------------------------------------------------- |
| ![Status](../../blob/badges/.github/badges/main/status2.svg) | Dropdown Menu changes the language |
| ![Status](../../blob/badges/.github/badges/main/status3.svg) | Greeting message is displayed in selected language |



[🔬 Results Details](../../actions)
[🐞 Tips on Debugging](https://github.com/DCI-EdTech/autograding-setup/wiki/How-to-work-with-CodeBuddy)
[📢 Report Problem](https://docs.google.com/forms/d/e/1FAIpQLSfS8wPh6bCMTLF2wmjiE5_UhPiOEnubEwwPLN_M8zTCjx5qbg/viewform?usp=pp_url&entry.652569746=SPA-STORE-language-setting)


[//]: # (autograding info end)