import {StyleSheet} from 'react-native'
import {width} from './constants'

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'green',
    width: width * 0.45,
    height: 160,
    borderRadius: 16,
    padding: 16,
    marginVertical: 8,
    justifyContent: 'space-between',
  },
  containerTopRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  containerName: {marginTop: 8, justifyContent: 'flex-end'},
  containerBottomRow: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  containerTags: {width: '50%'},
})
export default styles
