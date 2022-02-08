import React, {memo} from 'react'
import {View, Text, Image, TouchableNativeFeedback} from 'react-native'

import Tag from 'components/Tag'
import styles from './styles'
import {IMAGE_SIZE} from './constants'

export type CardPokemonItemProps = {
  tags: string[]
  name: string
  number: number
  image?: string
  onPressItem(): void
}

const CardPokemonItem = ({
  tags,
  name,
  number,
  image,
  onPressItem,
}: CardPokemonItemProps) => (
  <TouchableNativeFeedback onPress={() => onPressItem?.()}>
    <View style={styles.container}>
      <View style={styles.containerTopRow}>
        <View style={styles.containerName}>
          <Text>{name}</Text>
        </View>

        <Text>#{number ? String(number).padStart(3, '00') : '000'}</Text>
      </View>
      <View style={styles.containerBottomRow}>
        <View style={styles.containerTags}>
          {tags?.map(tag => (
            <Tag label={tag} key={tag} />
          ))}
        </View>
        <View style={{alignSelf: 'flex-end'}}>
          <Image
            testID="card-pokemon-item-image"
            source={{
              uri:
                image ??
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/23.png',
              width: IMAGE_SIZE,
              height: IMAGE_SIZE,
            }}
          />
        </View>
      </View>
    </View>
  </TouchableNativeFeedback>
)
export default memo(CardPokemonItem)
