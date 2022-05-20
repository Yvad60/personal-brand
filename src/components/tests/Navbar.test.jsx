import React from 'react';
import { render, screen } from '@testing-library/react';
import Navbar from '../Navbar.jsx';

describe('Navbar test', () => {
	it('should render the Navbar without crashing', () => {
		const wrapper = render(<Navbar />);
		expect(wrapper).toMatchSnapshot();
	});
});

describe('content tests', () => {
	beforeEach(() => {
		render(<Navbar />);
	});
	it('should contain logo image', () => {
		const logoImage = screen.getByRole('img');
		expect(logoImage).toBeInTheDocument();
	});
	it('should contain home link', () => {
		const homeLinkText = screen.getByText(/home/i);
		expect(homeLinkText).toBeInTheDocument();
	});
	it('should contain blog link', () => {
		const blogLinkText = screen.getByText(/blog/i);
		expect(blogLinkText).toBeInTheDocument();
	});
	it('should contain link', () => {
		const aboutLinkText = screen.getByText(/about/i);
		expect(aboutLinkText).toBeInTheDocument();
	});
	it('should contain about button', () => {
		const contactButton = screen.getByText(/contact/i);
		expect(contactButton).toBeInTheDocument();
	});
});
