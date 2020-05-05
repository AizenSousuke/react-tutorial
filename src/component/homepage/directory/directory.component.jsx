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
					imageUrl: "",
				},
				{
					id: 2,
					title: "Men",
					imageUrl: "",
				},
				{
					id: 3,
					title: "Men",
					imageUrl: "",
				},
				{
					id: 4,
					title: "Men",
					imageUrl: "",
				},
				{
					id: 5,
					title: "Men",
					imageUrl: "",
				},
			],
		};
	}

	render() {
		return (
			<div className="directory-menu">
				{this.state.sections.map((m) => (
					<MenuItem title={ m.title } />
				))}
			</div>
		);
	}
}

export default Directory;
