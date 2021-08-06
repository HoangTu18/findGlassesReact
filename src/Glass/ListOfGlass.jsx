import React, { Component } from 'react';
import { listGlasses } from './listGlasses';

export default class ListOfGlass extends Component {
	state = {
		glassSelected: listGlasses[0],
	};

	changeGlass = (url) => {
		const glassFind = listGlasses.find((item) => item.url === url);
		this.setState({
			glassSelected: glassFind,
		});
	};

	render() {
		const { url, name, desc } = this.state.glassSelected;
		return (
			<div class="container mt-5">
				<div class="row">
					<div class="col col-lg-2"></div>
					<div class="col-md-auto">
						<div class="row justify-content-center">
							<div class="col-4 wearGlass">
								<img src="./image/model.jpg" className="model" alt="" />
								<img src={url} className="choiceGlass" alt="" />
								<div id="rectangle">
									<h3>{name}</h3>
									<p>{desc}</p>
								</div>
							</div>
							<div class="col-4"></div>
							<div class="col-4">
								<img src="./image/model.jpg" className="model" alt="" />
							</div>
						</div>
					</div>
					<div class="col col-lg-2"></div>
				</div>

				<div class="row justify-content-center">
					<div className="col mt-5 d-flex justify-content-center">
						<div className="card-deck p-5 ">
							{listGlasses.map((item, key) => (
								<div
									key={key + 'glass'}
									className="card"
									onClick={() => this.changeGlass(item.url)}
								>
									<img src={item.url} className="card-img-top w-100" alt="" />
								</div>
							))}
						</div>
					</div>
				</div>
			</div>
		);
	}
}
