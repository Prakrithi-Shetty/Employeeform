import React from "react";
import {Swipeable} from 'react-swipeable';
import './Swipe.css';
import Typography from "@material-ui/core/Typography";

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
									{/* <Typography className={"typo"}>Interview Form</Typography> */}
                                    
										<img className={"image"} src={p.image} />
									
                                    <table >
  <tr className="tr">
    <th className="th">First Name</th>
    <td className="td">{p.firstname}</td>
  </tr>
  <tr className="tr">
    <th className="th">Last Name</th>
    <td className="td">{p.lastname}</td>
  </tr>
  <tr className="tr">
    <th className="th">Phone Number</th>
    <td className="td">{p.phonenumber}</td>
  </tr>
  <tr className="tr">
    <th className="th">Total experience</th>
    <td className="td">{p.totalYearsExp}</td>
  </tr>
  <tr className="tr">
    <th className="th">Cuompanyrrent C</th>
    <td className="td">{p.currentCompany}</td>
  </tr>
  <tr className="tr">
    <th className="th">Current CTC</th>
    <td className="td">{p.currentCtc}</td>
  </tr>
  <tr className="tr">
    <th className="th">Expected CTC</th>
    <td className="td">{p.expectedCtc}</td>
  </tr>
  {/* <tr className="tr">
    <th className="th">Firstname</th>
    <td className="td">{p.firstname}</td>
  </tr>
   */}
</table>

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