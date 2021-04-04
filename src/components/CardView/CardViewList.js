import React, { useEffect, useState } from 'react';
import CardViewListItem from './CardViewListItem';
import mockCard from './CardViewMock';
import './CardViewList.scss';
import axios from 'axios';

const CardViewList = ( ) => {
	const [cards, setCards] = useState(()=>(mockCard))
	const [projects, setProject] = useState(null);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await axios.get('https://cors-anywhere.herokuapp.com/http://52.78.169.232:8080/project/list');
			//프론트엔드 url -> 리퀘스트 52... 로 보냄 origin이 다르다
			//url 맞춰주는 작업 백엔드에서 특정 url만 뚫어준다 -> DNS
			//맥
				setProject(response.data);
			}
			catch (e) { console.log(e); }
		};
		fetchData();
	}, []);

	if (!projects) {
		return (
			<div>Loading..</div>
		)
	}

	return (
		<div>
			<div className="CardViewList-wrapper">
			{projects.dtoList.map(project => (
				<CardViewListItem
					project = {project}
					key = {project.id}
				/>
			))}
			</div>
		</div>
	);
};

export default CardViewList;
