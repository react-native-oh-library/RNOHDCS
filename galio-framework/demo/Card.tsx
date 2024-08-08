import { Card } from 'galio-framework';
import React from 'react';
import { StyleSheet, View } from 'react-native';

const CardExample = () => {
    return (
        <View style={styles.container}>
            <Card

                borderless
                title="Christopher Moon"
                location="Los Angeles, CA"
                locationColor='skyblue'
                avatar="https://avatars.githubusercontent.com/u/155599655?v=4"
                image="https://images.unsplash.com/photo-1497802176320-541c8e8de98d?&w=1600&h=900&fit=crop&crop=entropy&q=300"
                imageStyle={styles.cardImageRadius}
                footerStyle={styles.footerStyle}
            />
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: 'auto',
        height: 300,
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
        opacity: 0.5,
        marginBottom: 20
    },
    imageBlockStyle: {
        borderColor: 'blue',
        borderWidth: 5,
        borderBlockColor: 'yellow'
    },
    footerStyle: {
        color: 'yellow',
        fontSize: 10,
        fontWeight: 'bold',
        borderRadius: 10
    }
});
export default CardExample