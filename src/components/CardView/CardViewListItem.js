import React from 'react';
import logo from '../../logo.svg';
import './CardViewListItem.scss';

const CardViewListItem = ( {card} ) => {
	return (
		<div className="CardViewListItem-wrapper">
			<div className="CardViewListItem-thumbnail">
				<img className="CardViewListItem-img" src={logo} alt="" width="200" />
				<div className="CardViewListItem-bookmark">
					별
				</div>
			</div>
			<div className="CardViewListItem-top">
				<div className="CardViewListItem-name">
						{card.projectTitle}
				</div>
				<div className="CardViewListItem-category">
					{card.projectCategory}
				</div>
				</div>
			<div className="CardViewListItem-bottom">
				<div className="CardViewListItem-user">
					<img className="CardViewListItem-userimg" src={logo} alt="" width="20"/>
					<div className="CardViewListItem-userinfo">
						<div>{card.projectLeader}</div>
						<div>{card.leaderInfo}</div>
					</div>
				</div>
				<div className="CardViewListItem-projectinfo">
					<div>{card.participantNumber} | {card.participantCapacity}</div>
					<div>{card.projectPeriod}</div>
					<div>{card.projectLocation}</div>
				</div>
			</div>
		</div>
	);
};

export default CardViewListItem;
