import React, { Component } from 'react'
import {
	Button,
	StyleSheet,
	Text,
	View
} from 'react-native'

import Ionicons from 'react-native-vector-icons/Ionicons'
import { StackNavigator, TabNavigator, TabBarBottom } from 'react-navigation'
import CardStackStyleInterpolator from 'react-navigation/src/views/CardStack/CardStackStyleInterpolator'
import { Provider } from 'mobx-react'

import HomeScreen from './pages/Home'
import VideoScreen from './pages/Video'
import GroupScreen from './pages/Group'
import MyScreen from './pages/My'
import DetailScreen from './pages/Detail'
import LoginScreen from './pages/Login'

import theme from './configs/theme'

let store = {}

// 底部tab
const BottomTab = TabNavigator(
	{
		Home : {
			screen : HomeScreen,
			navigationOptions : ({ navigator }) => (
				{
					tabBarLabel : '首页',
					tabBarIcon : ({ focused, tintColor }) => (
						<Ionicons name={`ios-home${focused ? '' : '-outline'}`} size={theme.bottomTab.iconSize} color={tintColor} />
					)
				}
			)
		},
		Video : {
			screen : VideoScreen,
			navigationOptions : ({ navigator }) => (
				{
					tabBarLabel : '视频',
					tabBarIcon : ({ focused, tintColor }) => (
						<Ionicons name={`ios-videocam${focused ? '' : '-outline'}`} size={theme.bottomTab.iconSize} color={tintColor} />
					)
				}
			)
		},
		Group : {
			screen : GroupScreen,
			navigationOptions : ({ navigator }) => (
				{
					tabBarLabel : '圈子',
					tabBarIcon : ({ focused, tintColor }) => (
						<Ionicons name={`ios-planet${focused ? '' : '-outline'}`} size={theme.bottomTab.iconSize} color={tintColor} />
					)
				}
			)
		},
		My : {
			screen : MyScreen,
			navigationOptions : ({ navigator }) => (
				{
					tabBarLabel : '我的',
					tabBarIcon : ({ focused, tintColor }) => (
						<Ionicons name={`ios-person${focused ? '' : '-outline'}`} size={theme.bottomTab.iconSize} color={tintColor} />
					)
				}
			)
		}
	},
	// tabScreen配置
	{
		tabBarComponent: TabBarBottom, // 自定义
		tabBarPosition: 'bottom',
		swipeEnabled: false,
		animationEnabled: false,
		// lazy: true,
		tabBarOptions: {
			activeTintColor: theme.themeColor,
			inactiveTintColor: theme.bottomTab.inactiveColor,
			labelStyle: {
				fontSize: theme.bottomTab.labelSize, // 文字大小
			},
		}
	}
)

const Navigator = StackNavigator(
	{
		BottomTab: { screen: BottomTab },
		Detail: { screen: DetailScreen },
		Login: { screen: LoginScreen },
	},
	{
		navigationOptions: {
			// 开启动画
			animationEnabled: true,
			// 开启边缘触摸返回
			gesturesEnabled: true
		},
		headerMode: 'screen',
		transitionConfig:()=>({
			screenInterpolator:CardStackStyleInterpolator.forHorizontal,
		})
	}
)


// 全局注册并注入mobx的Rootstore实例
const Navigation = () => {
    return (
        <Provider rootStore={ store }>
            <Navigator/>
        </Provider>
    )
}

export default Navigation