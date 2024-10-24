import React from 'react';
import { StyleSheet, Button, Text,View } from 'react-native';
import EmojiPicker,  {
    emojisByCategory,
    type EmojiType,
    type EmojisByCategory,
}  from 'rn-emoji-keyboard'

type JsonEmoji = {
    emoji: string
    name: string
    v: string
    toneEnabled: boolean
    keywords?: string[]
  }

type CurrentlySelected = {
    name: EmojiType['name']
    emoji: EmojiType['emoji']
  }

export  default function() {
    const [isOpen, setIsOpen] = React.useState<boolean>(false)
    const [currentlySelected, setCurrentlySelected] = React.useState<CurrentlySelected[]>([])
    const [jsonEmojiData,setJsonEmojiData]=React.useState<JsonEmoji[]>([])
    const [emojiTypeData,setEmojiTypeData]=React.useState<EmojiType[]>([])

    const getCustomEmojis = () => {
        const newEmojiSet: EmojisByCategory[] = []
        for (const [, value] of Object.entries(emojisByCategory)) {
            if(value.title==='smileys_emotion'&&!(value.data.some((emoji)=>emoji.name=='apple'))){
                value.data.push({
                    emoji: '🍎',
                    name: 'apple',
                    v: '11',
                    toneEnabled: false,
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
            setEmojiTypeData([e])
            setCurrentlySelected((prev) => prev.filter((item) => item.name !== e.name))
            setJsonEmojiData((prev) => prev.filter((item) => item.name !== e.name))
        }else{  
                getCustomEmojis().forEach((item)=>{
                item.data.find((item) => {
                    if(item.name === e.name){
                        setJsonEmojiData((prev) => [...prev,item])
                    }
                })

            })
            setEmojiTypeData([e])
            setCurrentlySelected((prev) => [...prev, { name: e.name, emoji: e.emoji }])
        }

    
    }
    const currSelectedEmojis = currentlySelected.map((item) => item.emoji)
    const currSelectedNames = currentlySelected.map((item) => item.name)

   
    return (
        <>
        
        <Text >最近一次的选择emojiTypeData:{JSON.stringify(emojiTypeData)} </Text>
        <View style={{marginTop:30}}></View>
        <Text >JsonEmoji:{JSON.stringify(jsonEmojiData)} </Text>
            <Text style={styles.textIcon}>{currSelectedEmojis.join(' ')} </Text>
            <Button onPress={() => setIsOpen(true)} title='open:EnmojiByCategory' />
            <EmojiPicker 
            selectedEmojis={currSelectedNames}
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