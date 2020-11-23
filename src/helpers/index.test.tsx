import { getLetterMatchCount }  from './';

describe('getLetterMatchCount', () => {
    const secretWord:string = 'party';
    test('returns the correct counnt whern there are no matching letters', () => {
        const letterMatchCount = getLetterMatchCount('bones', secretWord);
        expect(letterMatchCount).toBe(0);
    });

    test('returns the correct counnt whern there are 3 matching letters', () => {
        const letterMatchCount = getLetterMatchCount('train', secretWord);
        expect(letterMatchCount).toBe(3);
    });

    test('returns the correct counnt whern there are duplicates letters in the guesss', () => {
        const letterMatchCount = getLetterMatchCount('parka', secretWord);
        expect(letterMatchCount).toBe(3);
    });
});