import React from "react";
import "./directory.styles.scss";
import MenuItem from "../header/menu-item/menu-item.component";

class Directory extends React.Component {
	constructor() {
		super();

		this.state = {
			sections: [
				{
					id: 1,
					title: "Sale",
					imageUrl: "http://loremflickr.com/800/800/sale",
				},
				{
					id: 2,
					title: "Teens",
					imageUrl: "http://loremflickr.com/800/800/teens",
				},
				{
					id: 3,
					title: "Kids",
					imageUrl: "http://loremflickr.com/800/800/kids",
				},
				{
					id: 4,
					title: "Men",
					imageUrl: "http://loremflickr.com/800/800/men",
                    size: 'large'
                },
				{
					id: 5,
					title: "Women",
                    imageUrl: "http://loremflickr.com/800/800/women",
                    size: 'large'
				},
			],
		};
	}

	render() {
		return (
			<div className="directory-menu">
				{this.state.sections.map(({ id, title, imageUrl, size }) => (
					<MenuItem key={id} title={title} imageUrl={imageUrl} size={size} />
				))}
			</div>
		);
	}
}

export default Directory;
