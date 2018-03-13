import React, { Component } from 'react'
import {
	StyleSheet,
	Image,
	TextInput,
	View,
	Text,
	Button,
	StatusBar,
	ScrollView,
	FlatList,
	RefreshControl,
	TouchableOpacity,
	TouchableWithoutFeedback
} from 'react-native'

import Ionicons from 'react-native-vector-icons/Ionicons'
import ScrollableTabView, { ScrollableTabBar } from 'react-native-scrollable-tab-view'

import HomeHeader from '../components/HomeHeader'
import ListItem from '../components/ListItem'

import { listData } from '../services/mock'

import theme from '../configs/theme'
import screen from '../utils/screen'

let { topBar, themeColor } = theme
let { width, ratio } = screen

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
			<View style={{ flex: 1 }}>
				<StatusBar backgroundColor={themeColor}/>
				<HomeHeader 
					onSearch={() => navigation.navigate('Login')}
					onScanner={() => navigation.navigate('Login')} />
				<View style={styles.tabview}>
					<Ionicons name={'ios-add-circle-outline'} style={styles.add} />
					<ScrollableTabView 
						initialPage={0}
						scrollWithoutAnimation={true}
						tabBarTextStyle={{fontSize: 16}}
						tabBarUnderlineStyle={{height: 1, backgroundColor: themeColor}}
						tabBarActiveTextColor={themeColor}
						renderTabBar={() => <ScrollableTabBar style={styles.tabBar} tabStyle={styles.tab} />} >
						<ScrollView 
							tabLabel="推荐"
							refreshControl={
								<RefreshControl
								refreshing={false}
								colors={[themeColor]}
								enabled={true}/>}>
							{<FlatList 
								data={ listData.recData }
								ref={(flatList) => this._flatList = flatList}
								renderItem={(item, index) => 
									<ListItem 
										keyExtractor={(item, index) => index}
										listdata={item}
										onPress={() => navigation.navigate('Detail', {
											title: item.item.title,
											username: item.item.username,
											userid: item.item.userid
										})}
										onClose={() => {alert(item.item.title)}} />} />}
						</ScrollView>
						<ScrollView tabLabel="大杂烩">
							<Text>大杂烩</Text>
						</ScrollView>
						<ScrollView tabLabel="娱乐八卦">
							<Text>娱乐八卦</Text>
						</ScrollView>
						<ScrollView tabLabel="原创">
							<Text>原创</Text>
						</ScrollView>
						<ScrollView tabLabel="猫女郎">
							<Text>猫女郎</Text>
						</ScrollView>
						<ScrollView tabLabel="猫女郎">
							<Text>猫女郎</Text>
						</ScrollView>
						<ScrollView tabLabel="猫女郎">
							<Text>猫女郎</Text>
						</ScrollView>
						<ScrollView tabLabel="猫女郎">
							<Text>猫女郎</Text>
						</ScrollView>
						<ScrollView tabLabel="猫女郎">
							<Text>猫女郎</Text>
						</ScrollView>
					</ScrollableTabView>
				</View>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	tabview: {
		flex: 1,
		backgroundColor: '#fff'
	},
	tabBar: {
		height: 43,
		paddingRight: 44,
		borderWidth: 1/ratio
	},
	tab: {
		height: 44,
		paddingLeft: 0,
		paddingRight: 0,
		marginHorizontal: 12
	},
	add: {
		position: 'absolute',
		right: 0,
		top: 0,
		fontSize: 20,
		color: '#000',
		lineHeight: 44,
		borderLeftWidth: 1/ratio,
		borderLeftColor: '#e8e8e8',
		width: 44,
		textAlign: 'center'
	}
})