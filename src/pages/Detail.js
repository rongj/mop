import React, { Component } from 'react'
import {
	View,
	Text
} from 'react-native'

import Ionicons from 'react-native-vector-icons/Ionicons'

import theme from '../configs/theme'
import screen from '../utils/screen'

let { topBar, themeColor } = theme
let { width, ratio } = screen

export default class Detail extends Component {
	static navigationOptions = ({ navigation, screenProps }) => ({
		headerStyle: {
			height: topBar.height,
			borderBottomWidth: 1/ ratio,
			borderBottomColor: '#ddd'
		},
		headerRight: <Ionicons name={'ios-more'} size={topBar.height/2} style={{ width: topBar.height, textAlign: 'center' }} onPress={() => alert('更多...')} />,
	})

	render() {
		return (
			<View style={{}}>
				<View>
					<Text>Detail!</Text>
				</View>
			</View>
		)
	}
}