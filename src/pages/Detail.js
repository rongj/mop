import React, { Component } from 'react'
import {
	View,
	Text,
	Image,
	Button,
	StyleSheet,
	WebView,
	ScrollView
} from 'react-native'

import Ionicons from 'react-native-vector-icons/Ionicons'

import theme from '../configs/theme'
import screen from '../utils/screen'

let { topBar, themeColor } = theme
let { width, height, ratio } = screen

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
		let item = this.props.navigation.state.params
		return (
			<ScrollView style={{flex: 1, backgroundColor: '#fff'}}>
				<View style={styles.container}>
					<Text style={styles.title}>{item.title}</Text>
					<View style={styles.header}>
						<View style={styles.portrait}>
							<Image source={{uri: `http://i1.mopimg.cn/head/${item.userid}/80x80`}} 
								style={{width: 36, height: 36, borderRadius: 36, marginRight: 5}}/>
							<View>
								<Text style={{fontSize: 14, color: '#000'}}>{item.username}</Text>
								<Text style={{fontSize: 12, color: '#999'}}>2018-03-12 17:51</Text>
							</View>
						</View>
						<Text style={styles.button} onPress={() => alert('关注')}>关注</Text>
					</View>
					<View>
						<Text style={{fontSize: 16, color: '#333', lineHeight: 26}}>
							3月11日下午2点，G25长深高速丽龙段龙泉段发生一起轻型普通货车爆胎后撞护栏的事故，装在货车车斗里的六万多枚硬币由于巨大的的冲击力“飞”了出来。一下子，六万多枚硬币铺满了高速公路护栏外面的山坡。高速交警史剑波赶到现场时，驾驶员朱师傅急得满头大汗：“怎么办？怎么办？”。史剑波安慰驾驶员。没人受伤，史警官拍了现场照片后，在后方做好预警，马上就和高速巡查一起帮忙捡钱。六万多枚硬币，可不是那么好捡的，开始的时候还能一把一把地抓钱，越到后面越难找。五角钱的硬币是黄色的，跟高速公路边的枯草颜色很接近。大家都要靠树枝掰开枯草才能找到。经过两个多小时的寻找，高速交警和巡查帮捡回了大部分硬币。朱师傅说，他在广东养虾，今天一家人准备从缙云回广东。开到这个长下坡时，左后轮忽然爆了，他习惯性轻轻带了刹车，车失控撞上了护栏。想不到是，藏在车斗里的六万多枚硬抛了出来。他车上共有两万八千元的硬币，大部分是五角的，少部分是一角的，这是他帮同在广东开小超市的妹夫带去找零用的。朱师傅初步估计，高速交警和巡查应该帮忙捡回两万多块钱，也就是捡回来5万多枚硬币。损失估计达到五六千，但他对高速交警和高速巡查的帮忙还是非常感谢。这么一片大草地，小小的硬币还真是不好找啊！
						</Text>
						<WebView source={{html: '<h2>aaa</h2>'}}>
						</WebView>
					</View>
				</View>
			</ScrollView>
		)
	}
}

const styles = StyleSheet.create({
	container: {
		paddingHorizontal: 15,
		paddingVertical: 10
	},
	title: {
		fontSize: 22,
		color: '#000',
		marginBottom: 15
	},
	header: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		marginBottom: 10
	},
	portrait: {
		flexDirection: 'row',
	},
	button: {
		width: 50,
		lineHeight: 30,
		height: 30,
		textAlign: 'center',
		backgroundColor: themeColor,
		color: '#fff',
		fontSize: 15,
		borderRadius: 2
	}
})