import { render } from '@testing-library/react';
import React from 'react';
import App from '../App.jsx';

describe('App tests', () => {
	test('should render app without crasing', () => {
		const wrapper = render(<App />);
		expect(wrapper).toMatchSnapshot();
	});
});
