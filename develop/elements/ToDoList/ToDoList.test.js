import React from 'react';
import renderer from 'react-test-renderer';
import ToDoList from './ToDoList';

test('ToDoList - toMatchSnapshot', () => {
	const component = renderer.create(<ToDoList />);

	const tree = component.toJSON();
	expect(tree).toMatchSnapshot();
});

test('ToDoList has two kids', () => {
	const component = renderer.create(<ToDoList />);

	const tree = component.toJSON();

	expect(tree.children).toHaveLength(2);
});
