import React from 'react';
import { StyleSheet, Button, Text } from 'react-native';
import EmojiPicker,  {
    emojisByCategory,
    type EmojiType,
    type EmojisByCategory} from 'rn-emoji-keyboard'


type CurrentlySelected = {
    name: EmojiType['name']
    emoji: EmojiType['emoji']
  }

export  default function() {
    const [isOpen, setIsOpen] = React.useState<boolean>(false)
    const [currentlySelected, setCurrentlySelected] = React.useState<CurrentlySelected[]>([])

    const getCustomEmojis = () => {
        const newEmojiSet: EmojisByCategory[] = []
        for (const [, value] of Object.entries(emojisByCategory)) {
            if(value.title==='smileys_emotion'&&!(value.data.some((emoji)=>emoji.name=='apple'))){
                value.data.push({
                    emoji: '🍎',
                    name: 'apple',
                    v: '11',
                    toneEnabled: false
                })
            }
          const newData = value.data.filter((emoji) => parseFloat(emoji.v) === 11)
          newEmojiSet.push({
            title: value.title,
            data: newData,
          })
    
        }
      
        return newEmojiSet
      }
    const handlePick = (e: EmojiType) => {
        if (e.alreadySelected){
            setCurrentlySelected((prev) => prev.filter((item) => item.name !== e.name))
        }else{
            setCurrentlySelected((prev) => [...prev, { name: e.name, emoji: e.emoji }])
        }

    
    }
    const currSelectedEmojis = currentlySelected.map((item) => item.emoji)
    const currSelectedNames = currentlySelected.map((item) => item.name)

   
    return (
        <>
            <Text style={styles.textIcon}>{currSelectedEmojis.join(' ')} </Text>
            <Button onPress={() => setIsOpen(true)} title='open:EnmojiByCategory' />
            <EmojiPicker 
            emojisByCategory={getCustomEmojis()}
             onEmojiSelected={handlePick} open={isOpen} onClose={() => setIsOpen(false)} />
        </>
    )

}

const styles = StyleSheet.create({

    textIcon: {
        marginHorizontal: 16,
        marginVertical: 32,
        textAlign: 'center',
        fontSize: 42,
        color: '#000',
    },
})