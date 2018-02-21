import React from 'react';
import renderer from 'react-test-renderer';
import ToggleButton from './ToggleButton';

test('ToggleButton - toMatchSnapshot', () => {
	const component = renderer.create(<ToggleButton />);

	const tree = component.toJSON();
	expect(tree).toMatchSnapshot();
});

test('ToggleButton has a children', () => {
	const component = renderer.create(<ToggleButton />);

	const tree = component.toJSON();
	expect(tree.children).toHaveLength(1);
});

test('ToggleButton button state is equal to ON', () => {
	const component = renderer.create(<ToggleButton />);

	const tree = component.toJSON();
	const button = tree.children[0];

	const defaultState = 'ON';
	expect(button.children[0]).toEqual(defaultState);
});

test('ToggleButton button has onClick() function', () => {
	const component = renderer.create(<ToggleButton />);

	const tree = component.toJSON();
	const button = tree.children[0];

	expect(typeof button.props.onClick).toEqual('function');
});
