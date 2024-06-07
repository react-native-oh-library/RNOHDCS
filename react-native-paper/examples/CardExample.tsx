import * as React from 'react';
import { View } from "react-native"
import { Alert } from 'react-native';
import { Avatar, Button, Card, Text, TouchableRipple } from 'react-native-paper';

const LeftContent = props => <Avatar.Icon {...props} icon="folder" />
const RightContent = props => <Avatar.Icon {...props} icon = "folder"/>
import {TestSuite,TestCase,Tester} from '@rnoh/testerino';

export function CardTest() {

    return (
    <Tester>
        <TestSuite name='Card' >
            <TestCase itShould='cardInfo'>
                <CardExample></CardExample>
            </TestCase>
        </TestSuite>
    </Tester>        
    )
}

const CardExample = () => (
    <Card
        mode="elevated"
        onPress={() => {
            Alert.alert('success')
        }}
        onLongPress={() => {
            Alert.alert('onLongPress')
        }}
        onPressOut={() => {
            Alert.alert('onPressOut')
        }}
    >
        <Card.Title   titleMaxFontSizeMultiplier={1.5}
        subtitleMaxFontSizeMultiplier={1.2} right={RightContent} rightStyle={{opacity:0.5}} leftStyle={{backgroundColor:'blue'}} title="Card Title" subtitle="Card Subtitle" left={LeftContent} titleNumberOfLines={3}  titleStyle={{color:'red'}} subtitleStyle={{color:'green'}} subtitleVariant="displayLarge"></Card.Title>
        <Card.Content>
            <Text variant="titleLarge">Card title</Text>
            <Text variant="bodyMedium">Card content</Text>
            <TouchableRipple
                delayLongPress={5000} // 设置长按延迟为500毫秒  
                onLongPress={()=>{Alert.alert('success')}}
            >
                <View style={{ padding: 16 }}>
                    <Text>Press and hold me for a long press!</Text>
                </View>
            </TouchableRipple>
        </Card.Content>
        <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
        <Card.Actions>
            <Button theme={{ colors: { primary: 'green' } }}>Cancel</Button>
            <Button>Ok</Button>
        </Card.Actions>
    </Card>
);

export default CardTest;