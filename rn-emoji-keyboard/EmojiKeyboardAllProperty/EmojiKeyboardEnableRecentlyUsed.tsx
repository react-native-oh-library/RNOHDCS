
import React from 'react';
import { StyleSheet, Button, Text  } from 'react-native';
import EmojiPicker,  {type EmojiType,useRecentPicksPersistence} from 'rn-emoji-keyboard'
import AsyncStorage from '@react-native-async-storage/async-storage'


export default function() {
    const [result, setResult] = React.useState<string>()
    const [isOpen, setIsOpen] = React.useState<boolean>(false)
  
    const STORAGE_KEY = 'RN-EMOJI-KEYBOARD_RECENT'

    useRecentPicksPersistence({
        initialization: () =>
          AsyncStorage.getItem(STORAGE_KEY).then((value)=>JSON.parse(value || '[]')),
        onStateChange: (next) => AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(next)),
      })

    const handlePick = (e: EmojiType) => {
        setResult(e.emoji)
        
    }

    const openfen=()=>{
        setIsOpen(true)
       
    }

    return (
        <>
            <Text style={styles.textIcon}>{result || ' '}</Text>
            <Button onPress={() =>openfen() } title='open:EnableRecentlyUsed' />
            <EmojiPicker enableRecentlyUsed onEmojiSelected={handlePick} open={isOpen} onClose={() => setIsOpen(false)} />
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