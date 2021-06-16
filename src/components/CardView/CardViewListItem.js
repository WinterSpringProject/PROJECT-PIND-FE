import React from 'react';
import { Link } from 'react-router-dom';
import { SERVER_IP } from '../../constants/serverInfo';
import logo from '../../logo.svg';
import star from '../../images/star.png';
import userimage from '../../images/user_image.png';
import man from '../../images/man.png';
import calendar from '../../images/calendar.png';
import region_image from '../../images/region.png';
//import star_yellow from '../../images/star_yellow.png'
import './CardViewListItem.scss';

const CardViewListItem = ( {project} ) => {
	const imgUrl = project.file ? `${SERVER_IP}/file?fileName=${project.file.url}`: logo;

	return (
			<div className="CardViewListItem-wrapper">
			<Link to={`/project/${project.id}`} style={{ color: 'inherit', textDecoration: 'inherit' }}>
				<div className="CardViewListItem-thumbnail">
					<img className="CardViewListItem-img" src={imgUrl} alt="project thumbnail" width="200" />
					<div className="CardViewListItem-bookmark">
						<img className="CardViewListItem-star" src = {star} alt = "star_image"/>
					</div>
				</div>
				<div className="CardViewListItem-top">
					<div className="CardViewListItem-name">
							{project.title}
					</div>
					<div className="CardViewListItem-category">
						{project.subject.subject1}
					</div>
				</div>
				<div className="CardViewListItem-bottom">
					{/*<Link to="/leader" className="LeaderProfile">*/}
						<div className="CardViewListItem-user">
							<div className="CardViewListItem-userimgwrap">
								<img className="CardViewListItem-userimg" src={userimage} alt="project thumbnail" width="20"/>
							</div>
							<div className="CardViewListItem-userinfo">
									<div className="CardViewListItem-leader">{project.leader.name}</div>
							</div>
						</div>
					{/*</Link>*/}
					<div className="CardViewListItem-projectinfo">
						<div className="CardViewListItem-man">
							<div><img className="CardViewListItem-manicon" src={man} alt="man_icon"/></div>
							<div className="CardViewListItem-mancount">{project.participateNum} | {project.maxParticipateNum}</div>
						</div>
						<div className="CardViewListItem-region">
							<div><img className="CardViewListItem-regionicon" src={region_image} alt="region_icon"/></div>
							<div className="CardViewListItem-regiontext">{project.region.region2}</div>
							&nbsp;
							<div>{project.region.region3}</div>
						</div>
						<div className="CardViewListItem-time">
							<div><img className="CardViewListItem-calendaricon" src={calendar} alt="calendar_icon"/></div>
							<div className="CardViewListItem-calendartext">{project.file.path}</div>
						</div>
					</div>
				</div>
			</Link>
			</div>
	);
};

export default CardViewListItem;
