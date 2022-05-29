import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import React from 'react';
import App from '../App.jsx';
import store from '../redux/store.js';

describe('App tests', () => {
	test('should render app without crashing', () => {
		const wrapper = render(
			<Provider store={store}>
				<App />
			</Provider>
		);
		expect(wrapper).toMatchSnapshot();
	});
});
