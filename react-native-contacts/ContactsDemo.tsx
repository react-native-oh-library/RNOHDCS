import { ScrollView, TouchableOpacity, Alert, Text, StyleSheet } from 'react-native'
import { TestSuite, Tester } from '@rnoh/testerino';
import { TestCase } from '../components';

import React, { useState } from 'react';

import Contacts from 'react-native-contacts';



export const ContactsDemo = () => {

    const [testContactId, setTestContactId] = useState('1');
    let emailAddress: Contacts.EmailAddress = {
        label: "emailAddress",
        email: "test@163.com",
    }
    let phoneNumber: Contacts.PhoneNumber = {
        label: "phoneNumber",
        number: "13142536789",
    }

    let postalAddress: Contacts.PostalAddress = {
        label: "label",
        formattedAddress: "formattedAddress",
        street: "street",
        pobox: "pobox",
        neighborhood: "neighborhood",
        city: "city",
        region: "region",
        state: "state",
        postCode: "postCode",
        country: "country",
    }

    let birthday: Contacts.Birthday = {
        day: 1,
        month: 5,
        year: 2024,
    }

    let instantMessageAddress: Contacts.InstantMessageAddress = {
        username: "username",
        service: "service",
    }

    let urlAddress: Contacts.UrlAddress = {
        url: "url",
        label: "label"
    }
    let contact: Contacts.Contact = {
        company: "addcompany",
        emailAddresses: [emailAddress],
        displayName: "adddisplayName",
        familyName: "addfamilyName",
        givenName: "addgivenName",
        middleName: "addmiddleName",
        jobTitle: "addjobTitle",
        phoneNumbers: [phoneNumber],
        hasThumbnail: false,
        thumbnailPath: "addthumbnailPath",
        isStarred: false,
        postalAddresses: [postalAddress],
        prefix: "addprefix",
        suffix: "addsuffix",
        department: "adddepartment",
        birthday: birthday,
        imAddresses: [instantMessageAddress],
        urlAddresses: [urlAddress],
        note: "addnote",
    }


    return (
        <Tester>
            <ScrollView >
                <TestSuite name='Contacts' >
                    <TestCase.Manual
                        itShould="request contacts permission"
                        initialState={null as any}
                        arrange={({ setState }) => (
                            <TouchableOpacity onPress={async () => {
                                const permission = await Contacts.requestPermission();
                                setState(permission);
                            }}
                                style={styles.moduleButton}
                            >
                                <Text style={styles.buttonText}>请求联系人权限</Text>
                            </TouchableOpacity>
                        )}
                        assert={({ expect, state }) => {
                            expect(state).to.eq('authorized')
                        }}
                    />

                    <TestCase.Manual
                        itShould="check contacts permission"
                        initialState={null as any}
                        arrange={({ setState }) => (
                            <TouchableOpacity onPress={async () => {
                                const permission = await Contacts.checkPermission();
                                setState(permission);
                            }}
                                style={styles.moduleButton}
                            >
                                <Text style={styles.buttonText}>检查联系人权限</Text>
                            </TouchableOpacity>
                        )}
                        assert={({ expect, state }) => {
                            expect(state).to.eq('authorized')
                        }}
                    />

                    <TestCase.Manual
                        itShould="add contacts"
                        initialState={null as any}
                        arrange={({ setState }) => (
                            <TouchableOpacity onPress={async () => {

                                const addContact = await Contacts.addContact(contact);
                                console.log("==addContact:" + JSON.stringify(addContact))
                                setTestContactId(addContact.recordID)
                                setState(addContact);
                            }}
                                style={styles.moduleButton}
                            >
                                <Text style={styles.buttonText}>添加联系人</Text>
                            </TouchableOpacity>
                        )}
                        assert={({ expect, state }) => {
                            expect(state?.recordID).to.be.not.null;
                            expect(state?.phoneNumbers?.length).to.be.greaterThan(0);
                            expect(state?.displayName).to.be.not.null;
                        }}
                    />

                    <TestCase.Manual
                        itShould="get all contacts"
                        initialState={null as any}
                        arrange={({ setState }) => (
                            <TouchableOpacity onPress={async () => {
                                const allContacts: Contacts.Contact[] = await Contacts.getAll();
                                console.log("==getAll:" + JSON.stringify(allContacts))
                                setState(allContacts);
                            }}
                                style={styles.moduleButton}
                            >
                                <Text style={styles.buttonText}>查询所有联系人</Text>
                            </TouchableOpacity>
                        )}
                        assert={({ expect, state }) => {
                            expect(state?.length).to.be.greaterThan(0);
                        }}
                    />

                    <TestCase.Manual
                        itShould="get all contacts Without photos"
                        initialState={null as any}
                        arrange={({ setState }) => (
                            <TouchableOpacity onPress={async () => {
                                const allContacts: Contacts.Contact[] = await Contacts.getAllWithoutPhotos();
                                console.log("==getAllWithoutPhotos:" + JSON.stringify(allContacts))
                                setState(allContacts);
                            }}
                                style={styles.moduleButton}
                            >
                                <Text style={styles.buttonText}>查询所有联系人不带照片</Text>
                            </TouchableOpacity>
                        )}
                        assert={({ expect, state }) => {
                            expect(state?.length).to.be.greaterThan(0);
                        }}
                    />

                    <TestCase.Manual
                        itShould="get contact by id"
                        initialState={null as any}
                        arrange={({ setState }) => (
                            <TouchableOpacity onPress={async () => {
                                const contact: Contacts.Contact = await Contacts.getContactById(testContactId);
                                console.log("==getContactById:" + JSON.stringify(contact));
                                setState(contact);
                            }}
                                style={styles.moduleButton}
                            >
                                <Text style={styles.buttonText}>通过id查询联系人</Text>
                            </TouchableOpacity>
                        )}
                        assert={({ expect, state }) => {
                            expect(state?.recordID).to.eq(testContactId);
                            expect(state?.phoneNumbers?.length).to.be.greaterThan(0);
                            expect(state?.displayName).to.be.not.null;
                        }}
                    />

                    <TestCase.Manual
                        itShould="get count of contact"
                        initialState={null as any}
                        arrange={({ setState }) => (
                            <TouchableOpacity onPress={async () => {
                                const count = await Contacts.getCount();
                                console.log("==getCount:" + count);
                                setState(count);
                            }}
                                style={styles.moduleButton}
                            >
                                <Text style={styles.buttonText}>查询联系人数量</Text>
                            </TouchableOpacity>
                        )}
                        assert={({ expect, state }) => {
                            expect(state).to.be.greaterThan(0);
                        }}
                    />

                    <TestCase.Manual
                        itShould="get contacts photo url"
                        initialState={null as any}
                        arrange={({ setState }) => (
                            <TouchableOpacity onPress={async () => {
                                const forId = await Contacts.getPhotoForId(testContactId);
                                console.log("==getPhotoForId:" + forId);
                                setState(forId);
                            }}
                                style={styles.moduleButton}
                            >
                                <Text style={styles.buttonText}>查询联系人照片url</Text>
                            </TouchableOpacity>
                        )}
                        assert={({ expect, state }) => {
                            expect(state).to.be.not.null;
                        }}
                    />

                    <TestCase.Manual
                        itShould="getContactsByPhoneNumber"
                        initialState={null as any}
                        arrange={({ setState }) => (
                            <TouchableOpacity onPress={async () => {
                                const contacts: Contacts.Contact[] = await Contacts.getContactsByPhoneNumber('13142536789');
                                console.log("==getContactsByPhoneNumber:" + JSON.stringify(contacts));
                                setState(contacts);
                            }}
                                style={styles.moduleButton}
                            >
                                <Text style={styles.buttonText}>通过电话号码查询联系人</Text>
                            </TouchableOpacity>
                        )}
                        assert={({ expect, state }) => {
                            expect(state?.length).to.be.greaterThan(0);
                        }}
                    />


                    <TestCase.Manual
                        itShould="getContactsMatchingString"
                        initialState={null as any}
                        arrange={({ setState }) => (
                            <TouchableOpacity onPress={async () => {
                                const contacts: Contacts.Contact[] = await Contacts.getContactsMatchingString('addfamilyName');
                                console.log("==getContactsMatchingString:" + JSON.stringify(contacts));
                                setState(contacts);
                            }}
                                style={styles.moduleButton}
                            >
                                <Text style={styles.buttonText}>通过姓名查询联系人</Text>
                            </TouchableOpacity>
                        )}
                        assert={({ expect, state }) => {
                            expect(state?.length).to.be.greaterThan(0);
                        }}
                    />

                    <TestCase.Manual
                        itShould="getContactsByEmailAddress"
                        initialState={null as any}
                        arrange={({ setState }) => (
                            <TouchableOpacity onPress={async () => {
                                const contacts: Contacts.Contact[] = await Contacts.getContactsByEmailAddress('test@163.com');
                                console.log("==getContactsByEmailAddress:" + JSON.stringify(contacts));
                                setState(contacts);
                            }}
                                style={styles.moduleButton}
                            >
                                <Text style={styles.buttonText}>通过邮箱查询联系人</Text>
                            </TouchableOpacity>
                        )}
                        assert={({ expect, state }) => {
                            expect(state?.length).to.be.greaterThan(0);
                        }}
                    />

                    <TestCase.Manual
                        itShould="openContactForm"
                        initialState={null as any}
                        arrange={({ setState }) => (
                            <TouchableOpacity onPress={async () => {
                                const cnt: Contacts.Contact = await Contacts.openContactForm(contact);
                                console.log("==openContactForm:" + JSON.stringify(cnt));
                                setState(cnt);
                            }}
                                style={styles.moduleButton}
                            >
                                <Text style={styles.buttonText}>在联系人界面创建联系人</Text>
                            </TouchableOpacity>
                        )}
                        assert={({ expect, state }) => {
                            //系统联系人不支持创建成功后返回联系人信息
                            //expect(state.recordID).to.eq('1');
                            expect(state.phoneNumbers.length).to.be.greaterThan(0);
                            expect(state.displayName).to.be.not.null;
                        }}
                    />

                    <TestCase.Manual
                        itShould="openExistingContact"
                        initialState={null as any}
                        arrange={({ setState }) => (
                            <TouchableOpacity onPress={async () => {
                                const cnt: Contacts.Contact = await Contacts.openExistingContact({
                                    recordID: testContactId,
                                    phoneNumbers: [{
                                        label: "phoneNumber2",
                                        number: "13521456721",
                                    }],

                                });
                                console.log("==openExistingContact:" + JSON.stringify(cnt));
                                setState(cnt);
                            }}
                                style={styles.moduleButton}
                            >
                                <Text style={styles.buttonText}>打开现有联系人（编辑模式）</Text>
                            </TouchableOpacity>
                        )}
                        assert={({ expect, state }) => {
                            expect(state?.recordID).to.eq(testContactId);
                            expect(state?.phoneNumbers?.length).to.eq(1);
                        }}
                    />

                    <TestCase.Manual
                        itShould="viewExistingContact"
                        initialState={null as any}
                        arrange={({ setState }) => (
                            <TouchableOpacity onPress={async () => {
                                const cnt: Contacts.Contact = await Contacts.viewExistingContact({
                                    recordID: testContactId,
                                    phoneNumbers: [{
                                        label: "phoneNumber2",
                                        number: "13521456721",
                                    }],

                                });
                                console.log("==viewExistingContact:" + JSON.stringify(cnt));
                                setState(cnt);
                            }}
                                style={styles.moduleButton}
                            >
                                <Text style={styles.buttonText}>打开现有联系人（查看模式）</Text>
                            </TouchableOpacity>
                        )}
                        assert={({ expect, state }) => {
                            expect(state?.recordID).to.eq(testContactId);
                            expect(state?.phoneNumbers?.length).to.eq(1);
                        }}
                    />

                    <TestCase.Example
                        itShould="updateContact"
                    >
                        <TouchableOpacity onPress={async () => {
                            await Contacts.updateContact({
                                recordID: testContactId,
                                familyName: 'updateContact',
                                givenName: 'updateContact',
                                phoneNumbers: [{
                                    label: "phoneNumber2",
                                    number: "13521456721",
                                }, {
                                    label: "phoneNumber3",
                                    number: "13521456222",
                                }],

                            })
                        }}
                            style={styles.moduleButton}
                        >
                            <Text style={styles.buttonText}>编辑联系人</Text>
                        </TouchableOpacity>

                    </TestCase.Example>

                    <TestCase.Example
                        itShould="deleteContact"
                    >
                        <TouchableOpacity onPress={async () => {
                            Contacts.deleteContact({
                                recordID: testContactId
                            }).then(() => {
                                console.log(`deleteContact success`)
                            })
                        }}
                            style={styles.moduleButton}
                        >
                            <Text style={styles.buttonText}>删除联系人</Text>
                        </TouchableOpacity>

                    </TestCase.Example>
                </TestSuite>
            </ScrollView>
        </Tester>
    );
}

const styles = StyleSheet.create({
    module: {
        margin: 15,
    },
    moduleName: {
        fontSize: 25,
        fontWeight: '700',
        marginBottom: 4,
        color: '#fff'
    },
    moduleContent: {
        fontSize: 16,
        fontWeight: '500',
        marginBottom: 4,
        color: '#fff'
    },
    moduleButton: {
        // marginBottom: 4,
        backgroundColor: 'deepskyblue',
        height: 34,
        // borderRadius: 10
    },
    buttonText: {
        fontSize: 18,
        fontWeight: '400',
        color: '#fff',
        textAlign: 'center',
        lineHeight: 32,
        verticalAlign: 'middle'
    }
})
