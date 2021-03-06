import { Dimensions, PixelRatio } from 'react-native'

export default {
	ratio: PixelRatio.get(),
	pixel: 1 / PixelRatio.get(),
	width: Dimensions.get('window').width,
	height: Dimensions.get('window').height
}