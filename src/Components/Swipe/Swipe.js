import React from "react";
import {Swipeable} from 'react-swipeable';
import './Swipe.css';

class Swipe extends React.Component {
	constructor() {
		super();
		
		this.state = {
			currentIndex: 0,
			isTransitioning: false,
			goingLeft: false
		};
	}
	
	componentDidMount() {
		window.addEventListener('keyup', this.onKeyUp);
	}
	
	componentWillUnmount() {
		window.removeEventListener('keyup', this.onKeyUp);
	}
	
	onKeyUp = (e) => {
		if (e.keyCode) {
			if (e.keyCode === 39) {
				this.showNextSet();
			} else if (e.keyCode === 37) {
				this.showPrevSet();
			}
		}
	}

	render() {
		const { images, profiles } = this.props;
		const { currentIndex } = this.state;
		
		return (
			<div className="carousel__wrapper">
				<div className="carousel__container">
					{profiles.map((p, index) => {
						let img = p.image;
						let className = 'carousel__image';
						let pName = 'carousel__name';

						if (index === currentIndex) className += ' active';
						
						return <Swipeable
						className="swipe"
						trackMouse
						style={{ touchAction: 'none' }}
						preventDefaultTouchmoveEvent
						onSwipedLeft={()=>this.showPrevSet()}
						onSwipedRight={()=>this.showNextSet()}
						>
								<div className={className}>
									<div>Name: {p.firstname}</div>
                                    <div>
										<img width={80} src={p.image} />
									</div>
									<div>Name: {p.firstname}</div>
									<div>dob: {p.dob}</div>
									<div>phonenumber: {p.phonenumber}</div>
									<div>totalYearsExp: {p.totalYearsExp}</div>
									<div>currentCompany: {p.currentCompany}</div>
									<div>currentCtc: {p.currentCtc}</div>
									<div>expectedCtc: {p.expectedCtc}</div>

								</div>
							</Swipeable>
					})}
				</div>
				<div className="carousel__controls">
					<button className="carousel__button" onClick={this.showPrevSet}><i className="left"></i></button>
					<button className="carousel__button" onClick={this.showNextSet}><i className="right"></i></button>
				</div>
			</div>
		);
	}
	
	showPrevSet = () => {
		const currentIndex = (this.state.currentIndex - 1 + this.props.profiles.length) % this.props.profiles.length;
		this.setState({ currentIndex });
	}
	
	showNextSet = () => {
		const currentIndex = (this.state.currentIndex + 1) % this.props.profiles.length;
		this.setState({ currentIndex });
	}
}

export default Swipe;