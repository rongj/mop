import React, { Component } from 'react'
import {
	StyleSheet,
	Image,
	TextInput,
	View,
	Text,
	Button,
	TouchableWithoutFeedback
} from 'react-native'

import Ionicons from 'react-native-vector-icons/Ionicons'

import theme from '../configs/theme'
import screen from '../utils/screen'

let { topBar, themeColor } = theme

export default class Home extends Component {
	constructor(props) {
		super(props)
		this.state = {
			text: ''
		}
	}

	static navigationOptions = ({ navigation, screenProps }) => ({
		header: null,
	});

	render() {

		let { navigation } = this.props;

		return (
			<View>
				<View style={styles.top}>
					<Image source={require('../assets/logo.png')} style={styles.logo} />
					<TouchableWithoutFeedback onPress={() => {
						navigation.navigate('Login')
					}}>
						<View style={styles.search}>

							<Ionicons name={'ios-search-outline'} size={ (topBar.height - 10)/2} />
							<Text style={styles.searchText}>搜索感兴趣的内容</Text>
						</View>
					</TouchableWithoutFeedback>
					<View style={styles.scanner} onPress={() => {
						navigation.navigate('Login')
					}}>
						<Ionicons name={'ios-qr-scanner'} size={topBar.height/2}  onPress={() => {
						navigation.navigate('Login')
					}} />
					</View>
				</View>
				<Text>Home!</Text>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	top: {
		flexDirection: 'row',
		alignItems: 'center',
		height: topBar.height,
		backgroundColor: topBar.color,
		paddingHorizontal: 10
	},
	logo: {
		width: 48,
		height: 28,
		marginRight: 10
	},
	search: {
		flex: 1,
		flexDirection: 'row',
		alignItems: 'center',
		height: topBar.height - 16,
		backgroundColor: '#e8e8e8',
		borderRadius: topBar.height - 16,
		paddingHorizontal: 10,
		marginRight: 5
	},
	searchText: {
		color: theme.lightColor,
		marginLeft: 4,
		fontSize: 14
	},
	scanner: {
		marginHorizontal: 10
	}
})