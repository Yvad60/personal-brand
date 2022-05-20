import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Button, Typography } from '@mui/material';
import { increment, decrement } from './redux/reducers/counterSlice.js';

function App() {
	const count = useSelector((state) => state.counter.value);
	const dispatch = useDispatch();

	return (
		<div>
			<Typography variant="h2">Sample counter app</Typography>
			<Typography variant="h2">{count}</Typography>
			<Button
				variant="contained"
				sx={{ mr: 3 }}
				size="large"
				onClick={() => dispatch(increment())}
			>
				Increment
			</Button>
			<Button
				variant="contained"
				size="large"
				color="error"
				onClick={() => dispatch(decrement())}
			>
				Decrement
			</Button>
		</div>
	);
}

export default App;
