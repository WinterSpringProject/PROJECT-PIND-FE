import React, { useEffect, useState }  from 'react';
import axios from 'axios';
import { SERVER_IP } from '../../constants/serverInfo';
import logo from '../../logo.svg';
import './ProjectDetail.scss';

const ProjectDetail = ({ match }) => {
	const [project, setProject] = useState(null);
	const url = `${SERVER_IP}/project/${match.params.id}`;

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await axios.get(url);
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
	const imgUrl = project.file ? `${SERVER_IP}/file?fileName=${project.file.url}`: logo;
	const startDate = project.startDate.substring(0, 10)
	return (
		<div className="ProjectDetail-wrapper">
			<div className="ProjectDetail-thumbnail">
				<img className="ProjectDetail-thumbnail img" src={imgUrl} alt="project thumbnail"/>
			</div>
			<div className="ProjectDetail-overview">
				<div className="ProjectDetail-top">
					<div className="ProjectDetail-name"> {project.title} </div>
					<div className="ProjectDetail-underline"/>
				</div>
				<div className="ProjectDetail-info">
					<div className="ProjectDetail-theme1">{"프로젝트 정보"}</div>
					<div className="ProjectDetail-theme2">
						<div className="ProjectDetail-category">
							{project.subject.subject1} | {project.subject.subject2}
						</div>
						<div className="ProjectDetail-description">{project.description}</div>
						<div className="ProjectDetail-content">{project.content}</div>
						<div className="ProjectDetail-middle">
							<div>{project.participateNum} | {project.maxParticipateNum}</div>
						</div>
						<div className="ProjectDetail-region">
							<div>{project.region.region1}</div>
							<div>{project.region.region2}</div>
							<div>{project.region.region3}</div>
						</div>
						<div className="ProjectDetail-date">{startDate}</div>
					</div>
				</div>
				<div>
					<div>{"리더 프로필"}</div>
					<div className="ProjectDetail-user">
						<img className="ProjectDetail-user userimg" src={logo} alt="" width="20"/>
						<div className="ProjectDetail-user userinfo">
							<div>{project.leader.name}</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ProjectDetail;
