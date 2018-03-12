import React from 'react'
import {
	StyleSheet,
	Image,
	View,
	Text,
	TouchableOpacity
} from 'react-native'

import Ionicons from 'react-native-vector-icons/Ionicons'

import theme from '../configs/theme'
import screen from '../utils/screen'
let { themeColor } = theme
let { width, ratio } = screen

const ListItem = ({
	listdata,
	onPress,
	onClose,
	keyExtractor,
	...props
}) => {
	let { index, item } = listdata

	const ItemInfo = (
		<View style={styles.itemInfo}>
			<View style={{ flexDirection: 'row' }}>
				<Text style={{ marginRight: 10 }}>{item.username}</Text>
				<Text style={{ marginRight: 10 }}>{item.readnum}评论</Text>
				<Text style={{ marginRight: 10 }}>52分钟前</Text>
			</View>
			<Ionicons name={'ios-close-circle-outline'} size={18}  onPress={() => onClose && onClose()} />
		</View>
	)

	return (
		<TouchableOpacity onPress={() => onPress && onPress()}>
			{
				/* 三图 */
				!!item.imgjs && JSON.parse(item.imgjs) && JSON.parse(item.imgjs).length > 2 && 
				<View style={styles.item}>
					<Text style={styles.itemTitle}>{item.title}</Text>
					<View style={{ flex: 1, flexDirection: 'row' }}>
						{
							JSON.parse(item.imgjs).slice(0,3).map((img, i) => <Image key={i} source={{uri: img.src}} style={styles.itemImg} />)
						}
					</View>
					{ItemInfo}
				</View>
			}
			{
				/* 单图 */
				!!item.imgjs && JSON.parse(item.imgjs) &&JSON.parse(item.imgjs).length < 3 && !item.videojs &&
				<View style={[styles.item, {flexDirection: 'row'}]}>
					<View style={{ flex: 1, alignItems: 'stretch' }}>
						<Text style={styles.itemTitle}>{item.title}</Text>
						{ItemInfo}
					</View>
					<Image source={{uri: JSON.parse(item.imgjs)[0].src}} style={[styles.itemImg, {marginRight: 0, marginLeft: 10}]} />
				</View>
			}
			{
				/* 视频 */
				!!item.videojs &&
				<View style={styles.item}>
					<Text style={styles.itemTitle}>{item.title}</Text>
					<View style={styles.bigPic}>
						<Image source={{uri: JSON.parse(item.imgjs)[0].src}} style={styles.itemImg2} />
					</View>
					{ItemInfo}
				</View>
			}
		</TouchableOpacity>
	)
}

const styles = StyleSheet.create({
	item: {
		paddingHorizontal: 15,
		paddingVertical: 10,
		borderBottomWidth: 1,
		borderBottomColor: '#e8e8e8'
	},
	itemTitle: {
		fontSize: 18,
		color: '#000',
		marginBottom: 5,
		flex: 1
	},
	itemImg: {
		width: (width - 36) / 3,
		height: (width - 36) / 3 / 3 *2,
		marginRight: 3,
		backgroundColor: '#ddd'
	},
	itemImg2: {
		width: (width - 30),
		height: (width - 30) / 16 *9,
		backgroundColor: '#ddd'
	},
	itemInfo: {
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		marginTop: 5
	}
})

export default ListItem