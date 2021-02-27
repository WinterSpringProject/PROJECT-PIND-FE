import React from 'react';
import CardViewListItem from './CardViewListItem';
import './CardViewList.scss';

const CardViewList = ( {cards} ) => {
	return (
		<div>
			<div className="CardViewList-wrapper">
			{cards.map(card => (
				<CardViewListItem
					card={card}
					key={card.id}
				/>
			))}
		</div>
		</div>
	);
};

export default CardViewList;