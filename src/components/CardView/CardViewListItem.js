import React from 'react';
import logo from '../../logo.svg';
import './CardViewListItem.scss';

const CardViewListItem = ( {card} ) => {
	const { id, text } = card;
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
						{text}
				</div>
				<div className="CardViewListItem-category">
					웹 프로그래밍
				</div>
				</div>
			<div className="CardViewListItem-bottom">
				<div className="CardViewListItem-user">
					<img className="CardViewListItem-userimg" src={logo} alt="" width="20"/>
					<div className="CardViewListItem-userinfo">
						<div>id</div>
						<div>introduction</div>
					</div>
				</div>
				<div className="CardViewListItem-projectinfo">
					<div>3 | 5</div>
					<div>2021. 02. 23 ~</div>
					<div>서울시 성동구</div>
				</div>
			</div>
		</div>
	);
};

export default CardViewListItem;