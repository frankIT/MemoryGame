import React from 'react';
import { StyleSheet, Text, View, TouchableHighlight } from 'react-native';
import { FontAwesome } from '@expo/vector-icons'; // 6.2.2
import FlipCard from 'react-native-flip-card';

export default class Card extends React.Component {

	constructor(props) {
		super(props);
	}

	render() {

		CardSource = this.props.src;
		icon_name = this.props.name;
		icon_color = this.props.color;

		return (
				<FlipCard
					style={styles.card}
					flip={this.props.is_open}
					clickable={false}
					friction={30}
					perspective={1000}
					flipHorizontal={true}
				    flipVertical={false}
				>
					<TouchableHighlight style={styles.front} onPress={this.props.clickCard} underlayColor={"#f1f1f1"}>

						<FontAwesome
							name='question-circle'
							size={50}
							color='#393939'
						/>

					</TouchableHighlight>
					<TouchableHighlight style={styles.back} underlayColor={"#f1f1f1"}>

							<CardSource
								name={icon_name}
								size={50}
								color={icon_color}
							/>

					</TouchableHighlight>
				</FlipCard>
		);
	}

}


const styles = StyleSheet.create({
	card: {
		flex: 1,
		alignItems: 'center'
	},
	card_text: {
		fontSize: 50,
		fontWeight: 'bold'
	},
	front: {
          alignItems: 'center',
		  justifyContent: 'center'
	}
});
