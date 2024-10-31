import { Card, Block } from 'galio-framework';
import React from 'react';
import { ScrollView, StyleSheet, Text } from 'react-native';
import { TestCase, Tester } from '@rnoh/testerino';

const CardDemo = () => {
    const CardProps = [
        { shadow: true, shadowColor: 'red' },
        { shadow: false, shadowColor: 'red' },
        { borderless: true },
        { borderless: false },
    ]
    return (
        <ScrollView style={styles.container}>
            <Tester>
                {
                    CardProps.map((item) => {
                        return (
                            <TestCase itShould={JSON.stringify(item)} tags={['C_API']} key={JSON.stringify(item)}>
                                <Block style={{
                                    height: 200,
                                    display: 'flex',
                                }}>
                                    <Card {...item}>
                                        <Text>Card</Text>
                                    </Card>
                                </Block>
                            </TestCase>
                        )
                    })
                }

                <TestCase itShould='card: true'>
                    <Card card={true} style={{ backgroundColor: 'green', textAlign: 'center' }}>
                        <Text style={{ textAlign: 'center' }}>Card</Text>
                    </Card>
                </TestCase>
                <TestCase itShould='card: false'>
                    <Card card={false} style={{ backgroundColor: 'blue', textAlign: 'center' }}>
                        <Text style={{ textAlign: 'center' }}>Card</Text>
                    </Card>
                </TestCase>

                <TestCase itShould='image: 图片'>
                    <Card
                        image='https://images.unsplash.com/photo-1497802176320-541c8e8de98d?&w=1600&h=900&fit=crop&crop=entropy&q=300'
                    />
                </TestCase>
                <TestCase itShould={'imageBlockStyle:' + JSON.stringify(styles.imageBlockStyle)}>
                    <Block style={styles.imageBlockStyle}>
                        <Card
                            image='https://images.unsplash.com/photo-1497802176320-541c8e8de98d?&w=1600&h=900&fit=crop&crop=entropy&q=300'
                        />
                    </Block>
                </TestCase>
                <TestCase itShould={'imageStyle:' + JSON.stringify(styles.cardImageRadius)}>
                    <Card
                        image='https://images.unsplash.com/photo-1497802176320-541c8e8de98d?&w=1600&h=900&fit=crop&crop=entropy&q=300'
                        imageStyle={styles.cardImageRadius}
                    />
                </TestCase>
                <TestCase itShould='avatar: 小图片'>
                    <Card
                        image='https://images.unsplash.com/photo-1497802176320-541c8e8de98d?&w=1600&h=900&fit=crop&crop=entropy&q=300'
                        avatar='https://avatars.githubusercontent.com/u/155599655?v=4'
                    />
                </TestCase>
                <TestCase itShould='location: 所在位置'>
                    <Card
                        image='https://images.unsplash.com/photo-1497802176320-541c8e8de98d?&w=1600&h=900&fit=crop&crop=entropy&q=300'
                        avatar='https://avatars.githubusercontent.com/u/155599655?v=4'
                        location="Los Angeles, CA"
                    />
                </TestCase>
                <TestCase itShould='locationColor: 是否设置所在位置的颜色--true'>
                    <Card
                        image='https://images.unsplash.com/photo-1497802176320-541c8e8de98d?&w=1600&h=900&fit=crop&crop=entropy&q=300'
                        avatar='https://avatars.githubusercontent.com/u/155599655?v=4'
                        location="Los Angeles, CA"
                        locationColor={true}
                    />
                </TestCase>
                <TestCase itShould='locationColor: 是否设置所在位置的颜色--false'>
                    <Card
                        image='https://images.unsplash.com/photo-1497802176320-541c8e8de98d?&w=1600&h=900&fit=crop&crop=entropy&q=300'
                        avatar='https://avatars.githubusercontent.com/u/155599655?v=4'
                        location="Los Angeles, CA"
                        locationColor={false}
                    />
                </TestCase>
                <TestCase itShould='locationColor: 地理位置颜色--skyblue'>
                    <Card
                        image='https://images.unsplash.com/photo-1497802176320-541c8e8de98d?&w=1600&h=900&fit=crop&crop=entropy&q=300'
                        avatar='https://avatars.githubusercontent.com/u/155599655?v=4'
                        location="Los Angeles, CA"
                        locationColor='skyblue'
                    />
                </TestCase>
                <TestCase itShould='title: 标题'>
                    <Card
                        image='https://images.unsplash.com/photo-1497802176320-541c8e8de98d?&w=1600&h=900&fit=crop&crop=entropy&q=300'
                        avatar='https://avatars.githubusercontent.com/u/155599655?v=4'
                        location="Los Angeles, CA"
                        locationColor='skyblue'
                        title='Christopher Moon'
                    />
                </TestCase>
                <TestCase itShould='titleColor: 标题颜色--skyblue'>
                    <Card
                        image='https://images.unsplash.com/photo-1497802176320-541c8e8de98d?&w=1600&h=900&fit=crop&crop=entropy&q=300'
                        avatar='https://avatars.githubusercontent.com/u/155599655?v=4'
                        location="Los Angeles, CA"
                        locationColor='skyblue'
                        title='Christopher Moon'
                        titleColor='skyblue'
                    />
                </TestCase>
                <TestCase itShould='titleColor: 标题颜色--blue'>
                    <Card
                        image='https://images.unsplash.com/photo-1497802176320-541c8e8de98d?&w=1600&h=900&fit=crop&crop=entropy&q=300'
                        avatar='https://avatars.githubusercontent.com/u/155599655?v=4'
                        location="Los Angeles, CA"
                        locationColor='skyblue'
                        title='Christopher Moon'
                        titleColor='blue'
                    />
                </TestCase>
                <TestCase itShould='caption: caption(小标题)'>
                    <Card
                        image='https://images.unsplash.com/photo-1497802176320-541c8e8de98d?&w=1600&h=900&fit=crop&crop=entropy&q=300'
                        avatar='https://avatars.githubusercontent.com/u/155599655?v=4'
                        location="Los Angeles, CA"
                        locationColor='skyblue'
                        title='Christopher Moon'
                        titleColor='skyblue'
                        caption="139 minutes ago"
                    />
                </TestCase>
                <TestCase itShould='captionColor: purple(小标题颜色)'>
                    <Card
                        image='https://images.unsplash.com/photo-1497802176320-541c8e8de98d?&w=1600&h=900&fit=crop&crop=entropy&q=300'
                        avatar='https://avatars.githubusercontent.com/u/155599655?v=4'
                        location="Los Angeles, CA"
                        locationColor='skyblue'
                        title='Christopher Moon'
                        titleColor='skyblue'
                        caption="139 minutes ago"
                        captionColor="purple"
                    />
                </TestCase>
                <TestCase itShould='captionColor: blue(小标题颜色)'>
                    <Card
                        image='https://images.unsplash.com/photo-1497802176320-541c8e8de98d?&w=1600&h=900&fit=crop&crop=entropy&q=300'
                        avatar='https://avatars.githubusercontent.com/u/155599655?v=4'
                        location="Los Angeles, CA"
                        locationColor='skyblue'
                        title='Christopher Moon'
                        titleColor='skyblue'
                        caption="139 minutes ago"
                        captionColor="blue"
                    />
                </TestCase>
                <TestCase itShould='footerStyle: 底部样式'>
                    <Card
                        image='https://images.unsplash.com/photo-1497802176320-541c8e8de98d?&w=1600&h=900&fit=crop&crop=entropy&q=300'
                        avatar='https://avatars.githubusercontent.com/u/155599655?v=4'
                        location="Los Angeles, CA"
                        locationColor='skyblue'
                        title='Christopher Moon'
                        titleColor='skyblue'
                        caption="139 minutes ago"
                        captionColor="blue"
                        footerStyle={styles.footerStyle}
                    />
                </TestCase>
            </Tester>
        </ScrollView>

    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    accordion: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        overflow: 'hidden',
        shadowRadius: 10
    },
    listStyle: {
        borderTopWidth: 10,
        borderTopColor: 'red',
    },
    headerStyle: {
        backgroundColor: '#5E72E4',
        padding: 10,
    },
    contentStyle: {
        paddingVertical: 10,
        paddingHorizontal: 20,
        fontWeight: 'bold'
    },
    inputArea: {
        width: '100%',
        height: '15%',
        borderWidth: 2,
        borderColor: '#000000',
        marginTop: 8,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "white"
    },
    baseText: {
        width: '100%',
        height: '100%',
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 16,
    },
    shadow: {
        shadowColor: "red",
        shadowOffset: {
            width: 10,
            height: 3,
        },
    },
    viewShadow: {
        elevation: 1.5,
        shadowColor: "#FF9C09",
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 1,
        shadowRadius: 1.5,
    },
    cardImageRadius: {
        borderRadius: 30,
        opacity: 0.5
    },
    imageBlockStyle: {
        borderColor: 'blue',
        borderWidth: 5,
        borderBlockColor: 'yellow'
    },
    footerStyle: {
        color: 'yellow',
        backgroundColor: '#FF7167',
        fontSize: 10,
        fontWeight: 'bold',
        borderRadius: 10
    }
});
export default CardDemo