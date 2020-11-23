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
        contents = (
            <div></div>
        )
    }
    return (
       <div data-test="component-guessed-words">
           { contents }
       </div>
    );
}

export default GuessedWords;