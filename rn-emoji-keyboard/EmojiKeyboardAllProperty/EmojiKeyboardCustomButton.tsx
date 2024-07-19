import React from 'react';
import { StyleSheet, Button, Text } from 'react-native';
import EmojiPicker,  {type EmojiType} from 'rn-emoji-keyboard'


type CurrentlySelected = {
    name: EmojiType['name']
    emoji: EmojiType['emoji']
  }

export  default function() {
    const [isOpen, setIsOpen] = React.useState<boolean>(false)
    const [currentlySelected, setCurrentlySelected] = React.useState<CurrentlySelected[]>([])

  
    const handlePick = (e: EmojiType) => {
        if (e.alreadySelected){
            setCurrentlySelected((prev) => prev.filter((item) => item.name !== e.name))
        }else{
            setCurrentlySelected((prev) => [...prev, { name: e.name, emoji: e.emoji }])
        }

    }
    const currSelectedEmojis = currentlySelected.map((item) => item.emoji)


    const deleteLastEmoji = () => {
        if (currentlySelected) {
            setCurrentlySelected((prev) => (prev).slice(0, -1))
        }
      }
    return (
        <>
            <Text style={styles.textIcon}>{currSelectedEmojis.join(' ')} </Text>
            <Button onPress={() => setIsOpen(true)} title='open:custombutton' />
            <EmojiPicker 
            customButtons={[
                <Text onPress={deleteLastEmoji}  style={styles.deleteIcon}>⬅</Text>
              ]}
             allowMultipleSelections  onEmojiSelected={handlePick} open={isOpen} onClose={() => setIsOpen(false)} />
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
    deleteIcon:{
        textAlign: 'center',
        fontSize:32,
        paddingTop:12
      }
})