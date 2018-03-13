import React, { Component } from 'react'
import {
	View,
	Text,
	Image,
	Switch,
	ImageBackground,
	StyleSheet,
	TouchableWithoutFeedback,
	StatusBar
} from 'react-native'

import Ionicons from 'react-native-vector-icons/Ionicons'

import theme from '../configs/theme'
import screen from '../utils/screen'
let { themeColor } = theme
let { width, ratio } = screen

export default class My extends Component {
	static navigationOptions = ({ navigation, screenProps }) => ({
		header: null
	})
	
	render() {
		let { navigation } = this.props
		return (
			<View style={{ flex: 1 }}>
				<StatusBar 
					backgroundColor={themeColor}
					translucent={true}/>
				<ImageBackground source={require('../assets/space_bg.jpg')} style={styles.headerBg}>
					<View style={styles.header}>
						<View style={styles.user}>
							<Image source={{uri: 'http://i1.mopimg.cn/head/453217439/80x80'}} style={styles.portrait}/>
							<Text style={styles.username}>钱江晚报</Text>
						</View>
						<View style={styles.read}>
							<Text style={styles.readText}>今日阅读</Text>
							<Text style={styles.readText}>8分钟</Text>
						</View>
					</View>
					<View style={{flexDirection: 'row'}}>
						<View style={{flex: 1}}>
							<Text style={styles.usersNum}>83</Text>
							<Text style={styles.usersLabel}>动态</Text>
						</View>
						<View style={{flex: 1, borderLeftWidth: 1/ratio, borderLeftColor: 'rgba(255,255,255,0.3)'}}>
							<Text style={styles.usersNum}>6</Text>
							<Text style={styles.usersLabel}>关注</Text>
						</View>
						<View style={{flex: 1, borderLeftWidth: 1/ratio, borderLeftColor: 'rgba(255,255,255,0.3)'}}>
							<Text style={styles.usersNum}>11</Text>
							<Text style={styles.usersLabel}>粉丝</Text>
						</View>
					</View>
				</ImageBackground>
				<View style={styles.buttons}>
					<View style={{flex: 1}}>
						<Ionicons name={'ios-star-outline'} color={'orange'} size={24} style={{textAlign: 'center'}} />
						<Text style={styles.buttonText}>收藏</Text>
					</View>
					<View style={{flex: 1}}>
						<Ionicons name={'ios-paw-outline'} color={'deeppink'} size={24} style={{textAlign: 'center'}} />
						<Text style={styles.buttonText}>历史</Text>
					</View>
					<View style={{flex: 1}}>
						<Ionicons name={'ios-cloudy-night-outline'} color={'blue'} size={24} style={{textAlign: 'center'}} />
						<Text style={styles.buttonText}>夜间</Text>
					</View>
				</View>

				<View style={styles.list}>
					<View style={styles.item}>
						<Text style={styles.itemLeft}>消息通知</Text>
						<Ionicons name={'ios-arrow-forward-outline'} size={14}/>
					</View>
					<View style={styles.item}>
						<Text style={styles.itemLeft}>京东特供</Text>
						<Text>领188元红包 <Ionicons name={'ios-arrow-forward-outline'} size={14}/></Text>
					</View>
				</View>

				<View style={styles.list}>
					<TouchableWithoutFeedback onPress={() => navigation.navigate('Setting')}>
						<View style={styles.item}>
							<Text style={styles.itemLeft}>系统设置</Text>
							<Ionicons name={'ios-arrow-forward-outline'} size={14}/>
						</View>
					</TouchableWithoutFeedback>
					<View style={styles.item}>
						<Text style={styles.itemLeft}>推送通知</Text>
						<Switch
							value={true}
							onTintColor={themeColor}
							tintColor={'#eee'}
							thumbTintColor={'#fff'} />
					</View>
				</View>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	headerBg: {
		width: width,
		height: width / 75*25,
	},
	header: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		marginTop: 30,
		marginBottom: 20,
	},
	user: {
		flexDirection: 'row',
		alignItems: 'center',
		marginLeft: 20
	},
	portrait: {
		width: 50,
		height: 50,
		borderRadius: 50,
		marginRight: 6,
		borderWidth: 1,
		borderColor: '#fff'
	},
	username: {
		color: '#fff',
		fontSize: 16
	},
	read: {
		backgroundColor: 'rgba(0,0,0,.2)',
		paddingLeft: 20,
		paddingRight: 30,
		paddingVertical: 4,
		height: 40,
		borderRadius: 20,
		marginRight: -20
	},
	readText: {
		color: '#fff',
		fontSize: 14,
		lineHeight: 16
	},
	usersNum: {
		fontSize: 16,
		color: '#fff',
		textAlign: 'center'
	},
	usersLabel: {
		fontSize: 12,
		color: 'rgba(255,255,255,0.6)',
		textAlign: 'center'
	},


	buttons: {
		flexDirection: 'row',
		backgroundColor: '#fff',
		paddingVertical: 12
	},
	buttonText: {
		fontSize: 14,
		color: '#666',
		textAlign: 'center'
	},

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