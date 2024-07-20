import { TestSuite, TestCase, Tester } from '@rnoh/testerino';
import React from 'react';
import FileUpload from 'react-native-fileupload';

export function FileUploadTest() {
    let obj = {
        uploadUrl: 'http://1.2.27.270:9990/upload',// Real server Url
        method: 'POST',
        headers: {
            'Content-Type': 'multipart/form-data',
        },
        fields: {
            name: 'hello', value: 'world',
        },
        files: [
            {
                name: 'file',// optional
                filename: 'assets_placeholder2000x2000.jpg',
                filepath: '/xxx/assets_placeholder2000x2000.jpg',
                filetype: 'jpg',// optional
            },
        ],
    };
    return (
        <Tester>
            <TestSuite name="FileUpload">
                <TestCase
                    itShould="File upload message:"
                    fn={({ expect }: any) => {
                        let result = FileUpload.upload(obj, function (err, result) {
                            console.log("upload", err, result);
                        })
                        expect(result).to.not.be.undefined;
                    }}
                />
            </TestSuite>
        </Tester>
    );
}