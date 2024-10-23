import React from 'react';
import { StyleSheet, Button, Text } from 'react-native';
import EmojiPicker,  {type EmojiType} from 'rn-emoji-keyboard'



export default function() {
    const [count,setCount]=React.useState<number>(0)
    const [result, setResult] = React.useState<string>()
    const [isOpen, setIsOpen] = React.useState<boolean>(false)
  
    const handlePick = (e: EmojiType) => {
        setResult(e.emoji)
    }

    const onRequestCloseFun=()=>{
        setCount(count+1)
        setIsOpen(false)
    }
    return (
        <>  
            <Text>count value:{count}</Text>
            <Text style={styles.textIcon}>{result || ' '}</Text>
            <Button onPress={() => setIsOpen(true)} title='open' />
            <EmojiPicker  onRequestClose={onRequestCloseFun} onEmojiSelected={handlePick} open={isOpen} onClose={() => setIsOpen(false)} />
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