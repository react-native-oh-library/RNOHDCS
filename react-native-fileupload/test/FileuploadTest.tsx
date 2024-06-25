import { TestSuite } from '@rnoh/testerino';
import React from 'react';
import { TestCase } from '../../components';
import FileUpload from 'react-native-fileupload';

export function FileUploadTest() {
    let obj = {
        uploadUrl: 'http://47.108.234.230:9990/upload',
        method: 'POST',
        headers: {
            'Content-Type': 'multipart/form-data',
        },
        files: [
            {
                name: 'file',
                filename: 'assets_placeholder2000x2000.jpg',
                filetype: 'jpg',
            },
        ],
    };
    return (
        <TestSuite name="FileUpload">
            <TestCase.Logical
                itShould="File upload message:"
                fn={({ expect }: any) => {
                    FileUpload.upload(obj)
                        .then(result => {
                            expect(result.message).to.not.be.undefined;
                        })
                        .catch(err => {
                            expect(err.message).to.not.be.undefined;
                        });
                }}
            />
        </TestSuite>
    );
}