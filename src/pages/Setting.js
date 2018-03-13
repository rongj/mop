import React, { Component } from 'react'
import {
	View,
	Text,
	TouchableWithoutFeedback,
	StyleSheet
} from 'react-native'

import Ionicons from 'react-native-vector-icons/Ionicons'

import theme from '../configs/theme'
import screen from '../utils/screen'

let { topBar, themeColor } = theme
let { width, ratio } = screen

export default class Setting extends Component {
	static navigationOptions = ({ navigation, screenProps }) => ({
		headerTitle : '设置',
		headerTitleStyle: {
			alignSelf: 'center',
			fontSize: topBar.fontSize
		},
		headerStyle: {
			height: topBar.height
		}
	})

	render() {
		let { navigation } = this.props
		return (
			<View style={{ flex: 1}}>
				<View style={styles.list}>
					<TouchableWithoutFeedback onPress={() => navigation.navigate('About')}>
						<View style={styles.item}>
							<Text style={styles.itemLeft}>关于我们</Text>
							<Ionicons name={'ios-arrow-forward-outline'} size={14}/>
						</View>
					</TouchableWithoutFeedback>
				</View>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	list: {
		backgroundColor: '#fff',
		marginTop: 15,
		// borderBottomWidth: 1/ratio,
		// borderTopWidth: 1/ratio,
		// borderBottomColor: '#eee',
		// borderTopColor: '#eee',
	},
	item: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		paddingVertical: 14,
		marginLeft: 20,
		paddingRight: 20,
		borderBottomWidth: 1/ratio,
		borderBottomColor: '#ddd',
		marginBottom: -1/ratio
	},
	itemLeft: {
		fontSize: 15,
		color: '#333',
		lineHeight: 20
	}
})