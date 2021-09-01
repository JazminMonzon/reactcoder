import React from 'react';
import Spinner from 'react-bootstrap/Spinner';
import "./Loader.css"

const Loader = () => {
	return (
		<div className='spinner'>
			<Spinner animation='border' role='status'>
				<span className='sr-only'>Cargando...</span>
			</Spinner>
			<div className="loading-text">
				<p>Cargando...</p>
			</div>
		</div>
	);
}

export default Loader;