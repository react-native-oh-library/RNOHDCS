import React from 'react';
import { View, StyleSheet } from 'react-native';
import Pdf from "react-native-pdf";

export function PdfExample() {
    // const source = { uri: 'https://www-file.huawei.com/minisite/media/annual_report/annual_report_2022_cn.pdf', cache: true };
    const source = require('../assets/test.pdf');  

    return (
        <View style={styles.sectionContainer}>
            <Pdf
                source={source}
                onLoadComplete={(numberOfPages, filePath) => {
                    console.log(`Number of pages: ${numberOfPages}`);
                }}
                onPageChanged={(page, numberOfPages) => {
                    console.log(`Current page: ${page}`);
                }}
                onError={(error) => {
                    console.log(error);
                }}
                onPressLink={(uri) => {
                    console.log(`Link pressed: ${uri}`);
                }}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    sectionContainer: {
        marginTop: 32,
        paddingHorizontal: 24,
    }
});