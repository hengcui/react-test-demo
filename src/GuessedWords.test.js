import React from 'react';
import { shallow } from 'enzyme';
import { findByTestAttr, checkProps } from '../test/testUtils';

import GuessedWords from './GuessedWords';

const defaultProps = {
	guessedWords: [{ guessedWord: "train", letterMatchCount: 3 }]
};

const setup = (props={}) => {
	const setupProps = { ...defaultProps, ...props };
	return shallow(<GuessedWords {...setupProps} />);
};

test('does not throw warning with expected props', () => {
	checkProps(GuessedWords, defaultProps);
});

describe('if there are no words guessed', () => {
	let wrapper;
	beforeEach(() => {
		wrapper = setup({ guessedWords: [] });
	});

	test('renders without errors', () => {
		const component = findByTestAttr(wrapper, 'component-guessed-word');
		expect(component.length).toBe(1);
	});

	test('renders guessed instruction', () => {
		const instruction = findByTestAttr(wrapper, 'guessed-instruction');
		expect(instruction.text()).not.toBe(0);
	});
});

describe('if there are words guessed', () => {
	let wrapper;
	const guessedWords = [
		{ guessedWord: "train", letterMatchCount: 3 },
		{ guessedWord: "agile", letterMatchCount: 1 },
		{ guessedWord: "party", letterMatchCount: 5 }
	];

	beforeEach(() => {
		wrapper = setup({ guessedWords });
	});

	test('renders without errors', () => {
		const component = findByTestAttr(wrapper, "component-guessed-word");
		expect(component.length).toBe(1);
	});

	test('renders guess words session', () => {
		const guessedWordNodes = findByTestAttr(wrapper, "guessed-words");
		expect(guessedWordNodes.length).toBe(1);
	});

	test('correct number of guessed words', () => {
		const guessedWordNode = findByTestAttr(wrapper, 'guessed-word');
		expect(guessedWordNode.length).toBe(guessedWords.length);
	});
});