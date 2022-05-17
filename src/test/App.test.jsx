import { render, screen } from '@testing-library/react';
import React from 'react';
import App from '../App.jsx';

describe('App tests', () => {
	test('should render app without crasing', () => {
		const wrapper = render(<App />);
		expect(wrapper).toMatchSnapshot();
	});
	it('should contain text', () => {
		render(<App />);
		const headingText = screen.getByText(/ivad code/i);
		expect(headingText).toBeInTheDocument();
	});
});
