import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { createMatrix } from '../../helpers/createMatrix';

import Logo from '../../assets/images/logo/logo.svg';

import './MainPage.scss';

import school from '../../assets/school.png';

const MainPage = () => {
	const [general, setGeneral] = useState();

	useEffect(() => {
		fetch(`${process.env.REACT_APP_API_URL}/general`)
			.then(response => response.json())
			.then(data => {
				data.list_items.sort((a, b) => a.sequence_number - b.sequence_number);
				data.table_items.sort((a, b) => a.sequence_number - b.sequence_number);

				data.list_items = createMatrix(data.list_items, 2);
				data.table_items = createMatrix(data.table_items, 3);

				setGeneral(data);
			});
	}, []);

	if (!general) {
		return null;
	}

	return (
		<div className='main-page'>
			<div className='school-animation'>
				<video autoPlay loop pleload='auto' muted className='a'>
					<source src="/animations/school-animation.mp4" type="video/mp4" />
				</video>
				{/* <img src={school} className='a' /> */}
			</div>
			<div className='content-container'>
				<div className='content'>
					<img src={Logo} className='logo' />
					<Link to='/about' className="btn-enter">{general.buttonValue}</Link>
					<p className='slogan' dangerouslySetInnerHTML={{ __html: general.slogan }}></p>
				</div>
			</div>
		</div>
	);
}

export default MainPage;
