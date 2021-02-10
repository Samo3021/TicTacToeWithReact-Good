import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
export class Home extends React.Component {
	constructor() {
		super();
		this.state = {
			UserInput: "x",
			cell1: "",
			cell2: "",
			cell3: "",
			cell4: "",
			cell5: "",
			cell6: "",
			cell7: "",
			cell8: "",
			cell9: ""
		};
	}
	jugar = cellId => {
		//objetos
		const newState = {};
		//cargo newState
		newState[cellId] = this.state.UserInput;

		//pregunto por la variable
		if (this.state[cellId] === "") {
			this.setState(newState);
			this.setState({
				UserInput: this.state.UserInput === "x" ? "o" : "x"
			});
		}
	};
	render() {
		return (
			<div id="container" className="text-center mt-5">
				<h1>tic-tac-toe</h1>
				<div className="game-row">
					<div className="cell" onClick={() => this.jugar("cell1")}>
						{this.state.cell1}
					</div>
					<div className="cell" onClick={() => this.jugar("cell2")}>
						{this.state.cell2}
					</div>
					<div className="cell" onClick={() => this.jugar("cell3")}>
						{this.state.cell3}
					</div>
				</div>
				<div className="game-row">
					<div className="cell" onClick={() => this.jugar("cell4")}>
						{this.state.cell4}
					</div>
					<div className="cell" onClick={() => this.jugar("cell5")}>
						{this.state.cell5}
					</div>
					<div className="cell" onClick={() => this.jugar("cell6")}>
						{this.state.cell6}
					</div>
				</div>
				<div className="game-row">
					<div className="cell" onClick={() => this.jugar("cell7")}>
						{this.state.cell7}
					</div>
					<div className="cell" onClick={() => this.jugar("cell8")}>
						{this.state.cell8}
					</div>
					<div className="cell" onClick={() => this.jugar("cell9")}>
						{this.state.cell9}
					</div>
				</div>
			</div>
		);
	}
}
