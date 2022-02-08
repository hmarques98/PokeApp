import {AppColors} from 'config/colors'
import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 60,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  textInput: {
    paddingRight: 20,
    alignItems: 'flex-end',
    flex: 0.7,
    color: AppColors.black,
  },
})
export default styles
