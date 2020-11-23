import React from "react";
import { shallow, ShallowWrapper } from 'enzyme';

import { findByTestAttr } from '../test/testUtils';
import GuessedWords, {GuessedWordsProps} from './GuessedWords';

const defaultProps: GuessedWordsProps = {
    guessedWords: [{ guessedWord: 'train', letterMatchCount: 3}
    ]
}

const setup = (props?:GuessedWordsProps) => {
    const setupProps =  { ...defaultProps, ...props}
    return shallow(<GuessedWords {...setupProps} />)
}

describe('if there are no words guessed', () =>  {
    let wrapper: ShallowWrapper;
    beforeEach(() => {
        wrapper = setup({guessedWords: [] });
    }
    )
    test('renders without errors', () => {
        const component = findByTestAttr(wrapper, 'component-guessed-words');
        expect(component.length).toBe(1);

    });

    test('renders instructions to guess a word', () => {
        const instructions = findByTestAttr(wrapper, 'guess-instructions');
        expect(instructions.text().length).not.toBe(0);
    });
});

describe('if there are words guessed', () =>  {
    let wrapper: ShallowWrapper;
    const guessedWords = [
        { guessedWord: 'train', letterMatchCount: 3},
        { guessedWord: 'agile', letterMatchCount: 1},
        { guessedWord: 'party', letterMatchCount: 5}
    ];

    beforeEach(() => {
        wrapper = setup( {guessedWords});
    });

    test('renders without errors', () => {
        const component = findByTestAttr(wrapper, 'component-guessed-words');
        expect(component.length).toBe(1);
    });

    test('renders "guessed words" section', () => {
        const guessWordsNode = findByTestAttr(wrapper, 'guessed-words');
        expect(guessWordsNode.length).toBe(1);
    });

    test('correct numbers of "guessed words"', () => {
        const guessWordNodes = findByTestAttr(wrapper, 'guessed-word');
        expect(guessWordNodes.length).toBe(guessedWords.length);
    });

});