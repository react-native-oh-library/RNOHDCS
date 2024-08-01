import ContentLoader, { Facebook, Code, List, BulletList, Instagram, Rect, Circle } from 'react-content-loader/native'
import { View, ScrollView } from "react-native"

export function AppExample() {
    return <View style={{ flex: 1, backgroundColor: 'white' }}>
        <ScrollView >
            <View>
                <ContentLoader
                    height={80}
                >
                    <Circle cx="30" cy="30" r="30" />
                    <Rect x="80" y="17" rx="4" ry="4" width="300" height="13" />
                    <Rect x="80" y="40" rx="3" ry="3" width="250" height="10" />
                </ContentLoader>
            </View>
            <View style={{ marginTop: 20 }}>
                <Facebook></Facebook>
            </View>
            <View style={{ marginTop: 20 }}>
                <Code></Code>
            </View>
            <View style={{ marginTop: 20 }}>
                <List></List>
            </View>
            <View style={{ marginTop: 20 }}>
                <BulletList></BulletList>
            </View>
            <View style={{ marginTop: 20 }}>
                <Instagram></Instagram>
            </View>
        </ScrollView>
    </View>
}