import checkPropTypes from 'check-prop-types';

export function findByTestAttr(wrapper, val) {
	return wrapper.find(`[data-test="${val}"]`);
};

export function checkProps(wrapper, expectedProps) {
	const result = checkPropTypes(wrapper.propTypes, expectedProps, 'props', wrapper.name);
	expect(result).toBeUndefined();
};