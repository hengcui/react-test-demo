import React from 'react';
import PropTypes from 'prop-types';

function GuessedWords (props) {
	const guessedWordsRows = props.guessedWords.map((word, index) => (
		<tr data-test="guessed-word" key={index}>
			<td>{word.guessedWord}</td>
			<td>{word.letterMatchCount}</td>
		</tr>
	));

	return (
		<div data-test="component-guessed-word">
			{props.guessedWords.length === 0 ?
				<span data-test="guessed-instruction">
					Try to guess the words~
				</span>
				:
				<div data-test="guessed-words">
					<h3>Guessed Words</h3>

					<tabble>
						<thead>
							<tr>
								<th>Guess</th>
								<th>Matching Letters</th>
							</tr>
						</thead>

						<tbody>
							{guessedWordsRows}
						</tbody>
					</tabble>
				</div>
			}
		</div>
	)
}

GuessedWords.propTypes = {
	guessedWords: PropTypes.arrayOf(
		PropTypes.shape({
			guessedWord: PropTypes.string.isRequired,
			letterMatchCount: PropTypes.number.isRequired
		})
	).isRequired
};

export default GuessedWords;