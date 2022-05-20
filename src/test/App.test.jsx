import { fireEvent, render, screen } from '@testing-library/react';
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

	describe('components tests', () => {
		beforeEach(() => {
			render(
				<Provider store={store}>
					<App />
				</Provider>
			);
		});
		it('should contain app heading', () => {
			const headingText = screen.getByText(/Sample counter app/i);
			expect(headingText).toBeInTheDocument();
		});
		it('should display count of 0 by default', () => {
			const count = screen.getByText(/0/i);
			expect(count).toBeInTheDocument();
		});
		it('should increment on increment button click', () => {
			const incrementBtn = screen.getByText(/increment/i);
			fireEvent.click(incrementBtn);
			const count = screen.getByText(/1/i);
			expect(count).toBeInTheDocument();
		});
		it('should decrement on decrement button click', () => {
			const decrementBtn = screen.getByText(/decrement/i);
			fireEvent.click(decrementBtn);
			const count = screen.getByText(/0/);
			expect(count).toBeInTheDocument();
		});
	});
});
