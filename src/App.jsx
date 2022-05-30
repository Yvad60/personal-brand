import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from './redux/reducers/counterSlice.js';
import './app.css';

function App() {
	const count = useSelector((state) => state.counter.value);
	const dispatch = useDispatch();

	return (
		<div>
			<h2 className="text-3xl text-red-500">Sample counter app</h2>
			<h2 className="text-5xl">{count}</h2>
			<button type="button" onClick={() => dispatch(increment())}>
				Increment
			</button>
			<button
				type="button"
				className="ml-3"
				onClick={() => dispatch(decrement())}
			>
				Decrement
			</button>
		</div>
	);
}

export default App;
