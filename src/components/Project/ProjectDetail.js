import React, { useEffect, useState }  from 'react';
import axios from 'axios';
import { SERVER_IP } from '../../constants/serverInfo';
import logo from '../../logo.svg';
import imgSample from '../../images/categoryimg/programming.jpeg'
import './ProjectDetail.scss';
import PopupDelete from './PopupDelete';

const ProjectDetail = ({ match }) => {
	const [project, setProject] = useState(null);
	const [deletePopup, setDeletePopup] = useState(false);
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
		<div>
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
								<span>분야 : </span>
								<span>{project.subject.subject1} | {project.subject.subject2}</span>
							</div>
							<div className="ProjectDetail-description">
								<span>설명 : </span>
								<span>{project.description}</span>
							</div>
							<div className="ProjectDetail-content">
								<span>컨텐츠 : </span>
								<span>{project.content}</span>
							</div>
							<div className="ProjectDetail-middle">
								<span>참가인원 : </span>
								<span>{project.participateNum}명 참가중 | {project.maxParticipateNum}명 정원</span>
							</div>
							<div className="ProjectDetail-region">
								<span>모임위치 : </span>
								<span>{project.region.region1} {project.region.region2} {project.region.region3}</span>
							</div>
							<div className="ProjectDetail-date">
								<span>시작일 : </span>
								<span>{startDate}</span>
							</div>
						</div>
					</div>
					<div className = "ProjectDetail-profileTemplate">
						<div className="ProjectDetail-profileLeader">리더 프로필</div>
						<div className="ProjectDetail-user">
							<span><img className="ProjectDetail-user userimg" src={imgSample} alt="" width="20"/></span>
							<span className="ProjectDetail-user userinfo">{project.leader.name}</span>
						</div>
					</div>
				</div>
			</div>
			<div>
				<button onClick={() => {setDeletePopup(true)}}>삭제</button>
				{deletePopup && <PopupDelete onClose={setDeletePopup} url={url}/>}
				<button>수정</button>
			</div>
		</div>
	);
};

export default ProjectDetail;
