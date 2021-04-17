import React from 'react';
import logo from '../../logo.svg';
import './CardViewListItem.scss';

const CardViewListItem = ( {project} ) => {
	const imgUrl = project.file ? `http://52.78.169.232:8080/file?fileName=${project.file.url}`: logo;

	return (
		<div className="CardViewListItem-wrapper">
			<div className="CardViewListItem-thumbnail">
				<img className="CardViewListItem-img" src={imgUrl} alt="There is no image" width="200" />
				<div className="CardViewListItem-bookmark">
					별
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
				<div className="CardViewListItem-user">
					<img className="CardViewListItem-userimg" src={logo} alt="" width="20"/>
					<div className="CardViewListItem-userinfo">
						<div>{project.leader.name}</div>

					</div>
				</div>
				<div className="CardViewListItem-projectinfo">
					<div>{project.participateNum} | {project.maxParticipateNum}</div>
					<div>{project.region.region1}</div>
					<div>{project.region.region2}</div>
					<div>{project.region.region3}</div>
				</div>
			</div>
		</div>
	);
};

export default CardViewListItem;
