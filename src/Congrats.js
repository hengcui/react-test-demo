import React from 'react';
import PropTypes from 'prop-types';

export default function Congrats(props) {
  return (
		<div data-test="component-congrats">
			{props.success && 
				<span data-test="message-congrats">
					"Congratulations! You guessed the words!"
				</span>
			}
		</div>
	)
};

Congrats.propTypes = {
	success: PropTypes.bool
};



