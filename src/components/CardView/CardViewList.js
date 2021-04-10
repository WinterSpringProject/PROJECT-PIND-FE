import React, { useEffect, useState } from 'react';
import CardViewListItem from './CardViewListItem';
import mockCard from './CardViewMock';
import './CardViewList.scss';
import axios from 'axios';
import {useSelector} from 'react-redux';

const CardViewList = ( ) => {
	const [cards, setCards] = useState(()=>(mockCard))
	const [projects, setProject] = useState(null);
	const selectedCategory = useSelector(state => state.category.selected);
	
	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await axios.get('http://52.78.169.232:8080/project/list');
				setProject(response.data);
				const filteredProject = selectedCategory ? 
							response.data.dtoList.filter(data => data.subject.subject1 === selectedCategory) : response.data.dtoList;
				setProject(filteredProject);
			}
			catch (e) { console.log(e); }
		};
		fetchData();
	}, [selectedCategory]);

	if (!projects) {
		return (
			<div>Loading..</div>
		)
	}
	return (
		<div>
			<div className="CardViewList-wrapper">
			{projects.map(project => (
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
