import React from 'react';
import Congrats from './Congrats';
import { shallow } from 'enzyme';
import { findByTestAttr, checkProps } from '../test/testUtils';

const defaultProps = { success: false };

const setup = (props={}) => {
	const setupProps = { ...defaultProps, ...props };
  return shallow(<Congrats {...setupProps} />);
}
test('renders without errors', () => {
	const wrapper = setup();
	const component = findByTestAttr(wrapper, "component-congrats");
	expect(component.exists()).toBeTruthy();
});

test('renders no text when `success` props is false', () => {
	const wrapper = setup({ success: false });
	const message= findByTestAttr(wrapper, "component-congrats");
	expect(message.text().length).toBe(0);
});

test('renders non-empty congrats message when `success` props is true', () => {
	const wrapper = setup({ success: true });
	const message = findByTestAttr(wrapper, "message-congrats");
	expect(message.text().length).not.toBe(0);
});

test('renders expected props types without errors', () => {
	const expectedProps = { success: false };
	checkProps(Congrats, expectedProps);
});