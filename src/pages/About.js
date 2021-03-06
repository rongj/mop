import React, { Component } from 'react'
import {
	View,
	Text
} from 'react-native'

import Ionicons from 'react-native-vector-icons/Ionicons'

import theme from '../configs/theme'
import screen from '../utils/screen'

let { topBar, themeColor } = theme

export default class About extends Component {
	static navigationOptions = ({ navigation, screenProps }) => ({
		headerTitle : '关于我们',
		headerTitleStyle: {
			alignSelf: 'center',
			fontSize: topBar.fontSize,
			color: '#fff',
			textAlign: 'center'
		},
		headerStyle: {
			height: topBar.height,
			backgroundColor: themeColor
		},
		headerRight: null,
	})

	render() {
		return (
			<View style={{ flex: 1}}>
				<Text>关于我们</Text>
			</View>
		)
	}
}