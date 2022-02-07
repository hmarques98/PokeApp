import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
    paddingTop: 60,
  },
  imageContainer: {
    position: 'absolute',
    right: -70,
  },
  image: {height: 200, width: 200, tintColor: 'gray', opacity: 0.2},
})
export default styles
