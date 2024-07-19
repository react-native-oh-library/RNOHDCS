import React from 'react';
import { StyleSheet, Button, Text } from 'react-native';
import EmojiPicker,  {type EmojiType} from 'rn-emoji-keyboard'



export default function() {
    const [result, setResult] = React.useState<string>()
    const [isOpen, setIsOpen] = React.useState<boolean>(false)
  
    const handlePick = (e: EmojiType) => {
        setResult(e.emoji)
    }


    return (
        <>
            <Text style={styles.textIcon}>{result || ' '}</Text>
            <Button onPress={() => setIsOpen(true)} title='open:styles' />
            <EmojiPicker 
         
             styles={{knob:{height:40},category:{container:{padding:20,opacity:0.3,backgroundColor:'red'}}}}
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