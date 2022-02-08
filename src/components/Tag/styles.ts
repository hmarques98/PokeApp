import {AppColors} from 'config/colors'
import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
  container: {
    backgroundColor: AppColors.gray,
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 4,
    marginVertical: 4,
    alignSelf: 'flex-start',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  text: {fontSize: 10},
})
export default styles
