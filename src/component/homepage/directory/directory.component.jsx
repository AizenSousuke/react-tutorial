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
					title: "Men",
					imageUrl: "https://specials-images.forbesimg.com/imageserve/992893220/960x0.jpg?fit=scale",
				},
				{
					id: 2,
					title: "Men",
					imageUrl: "https://specials-images.forbesimg.com/imageserve/992893220/960x0.jpg?fit=scale",
				},
				{
					id: 3,
					title: "Men",
					imageUrl: "https://specials-images.forbesimg.com/imageserve/992893220/960x0.jpg?fit=scale",
				},
				{
					id: 4,
					title: "Men",
					imageUrl: "https://specials-images.forbesimg.com/imageserve/992893220/960x0.jpg?fit=scale",
                    size: 'large'
                },
				{
					id: 5,
					title: "WoMen",
                    imageUrl: "https://specials-images.forbesimg.com/imageserve/992893220/960x0.jpg?fit=scale",
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
