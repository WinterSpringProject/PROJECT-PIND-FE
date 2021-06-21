import React, { useEffect, useState } from 'react';
import CardViewListItem from './CardViewListItem';
import './CardViewList.scss';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { SERVER_IP } from '../../constants/serverInfo';

const CardViewList = () => {
	const [pages, setResponse] = useState();
	const [inputPage, setInputPage] = useState("");
	const [pageNum, setPage] = useState(
		{
			page:""
		}
	);
	const [projects, setProject] = useState(null);
	const selectedCategory = useSelector(state => state.category.selected);
	//const SERVER_IP2 = 'http://127.0.0.1:8080';

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await axios.get(`${SERVER_IP}/project/list`);
				setResponse(response.data);
				setProject(response.data.dtoList);
				const filteredProject = selectedCategory ?
							response.data.dtoList.filter(data => data.subject.subject1 === selectedCategory) : response.data.dtoList;
				setProject(filteredProject);
			}
			catch (e) { console.log(e); }
		};
		fetchData();
	}, [selectedCategory]);

	const onChangePage = (e) => {
		setInputPage(e.target.value);
		const {value, name} = e.target;
		setPage({
			...pageNum,
			[name]: value
		});
	}

	if (!projects) {
		return (
			<div>Loading..</div>
		)
	}

	const fetchPageData = async () => {
		try {
			const response = await axios.get(`${SERVER_IP}/project/list`, pageNum);
			setProject(response.data.dtoList);
			const filteredProject = selectedCategory ?
						response.data.dtoList.filter(data => data.subject.subject1 === selectedCategory) : response.data.dtoList;
			setProject(filteredProject);
		}
		catch (e) { console.log(e); }
	};

	const handlePage = () => {
		fetchPageData();
	}

	const handlePageNumClick = (e) => {
		const {value, name} = e.target;
		setPage({
			...pageNum,
			[name]: value
		});
		fetchPageData();
	}


	return (
		<div className="CardViewTemplate-wrapper">
			<div className="CardViewList-wrapper">
			{projects.map(project => (
				<CardViewListItem
				project = {project}
				key = {project.id}
				/>
			))}
			</div>
				<div>
					{pages.pageList.map((number) => {
						return(<button key={number} onClick={handlePageNumClick} value={number} name="page">{number}</button>);
					})}
				</div>
				<div>
					<input className = "Page-input"
											type="text"
											name="page"
											placeholder="page"
											value={inputPage}
											onChange={onChangePage}/>
					<button onClick={handlePage}>이동</button>
				</div>
		</div>
	);
};

export default CardViewList;
