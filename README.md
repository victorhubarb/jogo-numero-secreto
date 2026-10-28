# Secret Number Game

A guessing game you play with your voice. The browser picks a random number from 1 to 1000, you say a guess out loud, and the page tells you whether the secret number is higher or lower until you get it. It runs in the browser, with plain JavaScript and the Web Speech API.

**Live demo:** [jogo-numero-secreto-cyan-theta.vercel.app](https://jogo-numero-secreto-cyan-theta.vercel.app)

Use a Chromium-based browser (Chrome, Edge) and allow microphone access. Speech recognition is not available in every browser. Say the number in Portuguese, or say "game over" to end the game.

## How it works

Three small scripts, each with one job:

| File | Job |
|---|---|
| `sortearNumero.js` | Draws the secret number and fills in the minimum and maximum shown on screen |
| `reconhecimentoDeVoz.js` | Starts `SpeechRecognition` in `pt-BR`, shows what you said, and restarts listening whenever the recognizer stops |
| `validacao.js` | Converts the transcript to a number and decides the outcome: not a number, outside the 1 to 1000 range, a win, or a hint that the secret is higher or lower |

On a win or a "game over", the page swaps in a result screen with a button that reloads for a new round.

The interface is in Portuguese.

## Run it

Speech recognition needs a secure context, so open the page from `localhost` or HTTPS and not from a file path:

```bash
git clone https://github.com/victorhubarb/jogo-numero-secreto.git
cd jogo-numero-secreto
python3 -m http.server 8000     # then open http://localhost:8000 in Chrome
```

## Project structure

```
index.html, style.css
app/   sortearNumero.js, reconhecimentoDeVoz.js, validacao.js
```

## Known gaps

- The secret number is printed to the browser console, which is handy for testing but lets anyone cheat. It should be removed.
- Recognition works with digits ("42"). Numbers spoken as words may be returned as text and shown as an invalid value.
- A block of commented-out code in `reconhecimentoDeVoz.js` holds an older version with a start button.
- There are no media queries, and no fallback for browsers without speech recognition.

---

Victor Hugo Barbosa · [GitHub](https://github.com/victorhubarb) · [LinkedIn](https://www.linkedin.com/in/victorhbarbosa/)
