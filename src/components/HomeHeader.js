import React from 'react'
import {
	StyleSheet,
	Image,
	View,
	Text,
	TouchableWithoutFeedback
} from 'react-native'

import Ionicons from 'react-native-vector-icons/Ionicons'

import theme from '../configs/theme'
// import screen from '../utils/screen'

let { topBar, themeColor } = theme
// let { width, ratio } = screen

const HomeHeader = ({
	onSearch,
	onScanner,
	...props
}) => {

	return (
		<View style={styles.top}>
			{/*<Image source={require('../assets/logo.png')} style={styles.logo} />*/}
			<Text style={{ color: '#fff', fontSize: 18, fontWeight: '500' }}>猫扑头条</Text>
			<TouchableWithoutFeedback onPress={() => onSearch && onSearch()}>
				<View style={styles.search}>
					<Ionicons name={'ios-search-outline'} size={ (topBar.height - 10)/2} />
					<Text style={styles.searchText}>搜索感兴趣的内容</Text>
				</View>
			</TouchableWithoutFeedback>
			<View style={{ marginHorizontal: 5 }}>
				<Ionicons name={'md-qr-scanner'} size={topBar.height/2} color={'#fff'}  onPress={() => onScanner && onScanner()} />
			</View>
		</View>
	)
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
		backgroundColor: '#fff',
		borderRadius: 4,
		paddingHorizontal: 10,
		marginLeft: 10,
		marginRight: 5
	},
	searchText: {
		color: theme.lightColor,
		marginLeft: 4,
		fontSize: 14
	}
})

export default HomeHeader