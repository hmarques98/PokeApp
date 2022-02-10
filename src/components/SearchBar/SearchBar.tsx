import React, {useRef, useState} from 'react'
import {View, TouchableOpacity, TextInput, TextInputProps} from 'react-native'
import AntDesignIcon from 'react-native-vector-icons/AntDesign'

import styles from './styles'

type SearchBarProps = TextInputProps

const SearchBar = ({...textInputProps}: SearchBarProps) => {
  const [textInputIsFocused, setTextInputIsFocused] = useState(false)

  const textInputRef = useRef<TextInput>(null)

  return (
    <View style={styles.container}>
      <TextInput
        ref={textInputRef}
        onFocus={() => setTextInputIsFocused(true)}
        onBlur={() => setTextInputIsFocused(false)}
        placeholder="Pesquisar"
        style={styles.textInput}
        placeholderTextColor="black"
        {...textInputProps}
      />
      <TouchableOpacity
        onPress={() =>
          textInputIsFocused
            ? textInputRef.current?.blur()
            : textInputRef.current?.focus()
        }
        hitSlop={{bottom: 20, top: 20, left: 20, right: 20}}
      >
        <AntDesignIcon
          name={textInputIsFocused ? 'close' : 'search1'}
          size={20}
          color="black"
        />
      </TouchableOpacity>
    </View>
  )
}
export default SearchBar
