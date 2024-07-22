import React from 'react';
import { StyleSheet, Button, Text } from 'react-native';
import EmojiPicker, { ko,type EmojiType } from 'rn-emoji-keyboard'


export default function() {
    const [result, setResult] = React.useState<string>()
    const [isOpen, setIsOpen] = React.useState<boolean>(false)
    
    
    let customLanguage={ko}
    customLanguage={ko:{
        recently_used: '최근 사용',
  smileys_emotion: '이모티콘',
  people_body: '사람 및 신체',
  animals_nature: '동물 및 자연',
  food_drink: '음식 및 음료',
  travel_places: '여행 및 장소',
  activities: '활동',
  objects: '사물',
  symbols: '기호',
  flags: '깃발',
  search: '검색',
    }}
    
  
    const handlePick = (e: EmojiType) => {
        setResult(e.emoji)
    }

    return (
        <>
            <Text style={styles.textIcon}>{result || ' '}</Text>
            <Button onPress={() => setIsOpen(true)} title='open:translate' />
            <EmojiPicker   translation={customLanguage.ko}  onEmojiSelected={handlePick} open={isOpen} onClose={() => setIsOpen(false)} />
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