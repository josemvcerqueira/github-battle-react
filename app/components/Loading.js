var React = require("react");
var PropTypes = require("prop-types");

var styles = {
	content: {
		textAlign: "center",
		fontSize: "35px"
	}
};

class Loading extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			text: this.props.text
		};
	}

	componentDidMount() {
		var stopped = this.props.text + "...";
		this.interval = window.setInterval(
			function() {
				if (this.state.text === stopped) {
					this.setState(function() {
						return {
							text: this.prop.text
						};
					});
				} else {
					this.setState(function(prevState) {
						return {
							text: prevState.text + "."
						};
					});
				}
			}.bind(this),
			this.props.speed
		);
	}

	componentWillUnmount() {
		window.clearInterval(this.interval);
	}

	render() {
		return <p style={styles.content}>{this.state.text}</p>;
	}
}

Loading.propTypes = {
	text: PropTypes.string.isRequired,
	speed: PropTypes.number.isRequired
};

Loading.defaultProps = {
	text: "Loading",
	speed: 300
};

module.exports = Loading;
