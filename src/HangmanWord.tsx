type HangmanWordProps = {
    guessedLetters: string[]
    wordsToGuess: string
    reveal?: boolean
}

export function HangmanWord({ guessedLetters, wordsToGuess, reveal =
false }: HangmanWordProps) {
return (
        <div
        style={{
            display: "flex",
            gap: ".98rem",
            fontSize: "6rem",
            fontWeight: "bold",
            textTransform: "uppercase",
            fontFamily: "monospace",
        }}
        >
        {wordsToGuess.split("").map((letter, index) => (
            <span style={{ borderBottom: ".1em solid black" }} key={index} >
            <span
                style={{
                visibility: guessedLetters.includes(letter) || reveal
                    ? "visible"
                    : "hidden",
                    color: !guessedLetters.includes(letter) && reveal ? 'red' : 'green'
                }}
            >
                {letter}
            </span>
            </span>
        ))}
        </div>
    );
    }
