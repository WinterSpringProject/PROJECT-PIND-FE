import React, { useEffect, useState }  from 'react';
import axios from 'axios';
import logo from '../../logo.svg';
import './ProjectDetail.scss';

const ProjectDetail = ({ match }) => {
	console.log(match.params.id);
	const [project, setProject] = useState(null);
	const url = `http://52.78.169.232:8080/project/${match.params.id}`;
	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await axios.get(url);
				console.log(response.data);
				setProject(response.data);
			}
			catch (e) { console.log(e); }
		};
		fetchData();
	}, [url]);

	if (!project) {
		return (
			<div>Loading..</div>
		)
	}
	const imgUrl = project.file ? `http://52.78.169.232:8080/file?fileName=${project.file.url}`: logo;
	return (
		<div className="ProjectDetail-wrapper">
			<div className="ProjectDetail-thumbnail">
				<img className="ProjectDetail-thumbnail img" src={imgUrl} />
			</div>
			<div className="ProjectDetail-top">
				<div className="ProjectDetail-name">
					{project.title}
				</div>
				<div className="ProjectDetail-category">
					{project.subject.subject1}
				</div>
			</div>
			<div className="ProjectDetail-middle">
				<div className="ProjectDetail-project">
					프로젝트 소개
				</div>
				<div>
					프로젝트 소개 본문
				</div>
				<div>{project.participateNum} | {project.maxParticipateNum}</div>
				<div className="ProjectDetail-projectinfo">
					<div>{project.region.region1}</div>
					<div>{project.region.region2}</div>
					<div>{project.region.region3}</div>
				</div>
			</div>
			<div className="ProjectDetail-bottom">
				<div className="ProjectDetail-user">
					<div>그룹장 소개</div>
					<img className="ProjectDetail-user userimg" src={logo} alt="" width="20"/>
					<div className="ProjectDetail-user userinfo">
						<div>{project.leader.name}</div>
					</div>
				</div>
				<div>그룹장 소개글</div>
			</div>
		</div>
	);
};

export default ProjectDetail;