import React from "react";

export interface GuessedWord {
    guessedWord: string;
    letterMatchCount: number;
}

export interface GuessedWordsProps {
    guessedWords: GuessedWord[];
}

const GuessedWords: React.FC<GuessedWordsProps> = (props: GuessedWordsProps): JSX.Element => {
    let contents: JSX.Element;
    if (props.guessedWords.length === 0) {
        contents = (
            <span data-test="guess-instructions">
                Try to guess the secret word!
            </span>
        );
    } else {
        const guessWordsRows = props.guessedWords.map((word, index) => (
            <tr data-test="guessed-word" key={index}>
                <td>{word.guessedWord}</td>
                <td>{word.letterMatchCount}</td>
            </tr>
        ));
        contents = (
            <div data-test="guessed-words">
                <h3>Guessed words</h3>
                <table className="table table-sm">
                    <thead className="thead-light">
                        <tr><th>Guess</th><th>Matching Letters</th></tr>
                    </thead>
                    <tbody>
                        { guessWordsRows}
                    </tbody>
                </table>
            </div>
        )
    }
    return (
       <div data-test="component-guessed-words">
           { contents }
       </div>
    );
}

export default GuessedWords;