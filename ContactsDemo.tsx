// DetailsScreen.js
import React, {useState} from 'react';
import {
    ScrollView,
    Button,
    Alert
} from 'react-native';
import Contacts from 'react-native-contacts'


export const ContactsDemo = () => {
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
        <ScrollView >
            <Button
                title="requestPermission"
                onPress={() => {
                    Contacts.requestPermission().then((data) => {
                      console.log(`requestPermission:${JSON.stringify(data)}`)
                      Alert.alert(`requestPermission:${JSON.stringify(data)}`)
                    })
                }} />
            <Button
                title="checkPermission"
                onPress={() => {
                    Contacts.checkPermission().then((data) => {
                        console.log(`checkPermission:${JSON.stringify(data)}`)
                        Alert.alert(`checkPermission:${JSON.stringify(data)}`)
                    })
                }} />
            <Button
                title="getAll"
                onPress={() => {
                    Contacts.getAll().then((contacts: Contacts.Contact[]) => {
                        console.log(`getAll:${JSON.stringify(contacts)}`)
                    })
                }} />
            <Button
                title="getAllWithoutPhotos"
                onPress={() => {
                    Contacts.getAllWithoutPhotos().then((contacts:Contacts.Contact[]) => {
                        console.log(`getAllWithoutPhotos:${JSON.stringify(contacts)}`)
                    })
                }} />
            <Button
                title="getContactById"
                onPress={() => {
                    Contacts.getContactById("1").then((contact: Contacts.Contact | null) => {
                        console.log(`getContactById:${JSON.stringify(contact)}`)
                    })
                }} />
            <Button
                title="getCount"
                onPress={() => {
                    Contacts.getCount().then((count: number) => {
                        console.log(`getCount:${count}`)
                    })
                }} />
            <Button
                title="getPhotoForId"
                onPress={() => {
                    Contacts.getPhotoForId("1").then((photoUrl: string) => {
                        console.log(`getPhotoForId:${photoUrl}`)
                    })
                }} />
            <Button
                title="addContact"
                onPress={() => {
                    Contacts.addContact(contact).then((contact: Contacts.Contact) => {
                        console.log(`addContact:${JSON.stringify(contact)}`)
                    })
                }} />

            <Button
                title="openContactForm"
                onPress={() => { 
                    Contacts.openContactForm(contact).then((contact: Contacts.Contact) => {
                        console.log(`openContactForm:${JSON.stringify(contact)}`)
                        Alert.alert(`openContactForm success`)
                    })
                }} />
            <Button
                title="openExistingContact"
                onPress={() => { 
                    Contacts.openExistingContact(
                        {
                            recordID: "1",
                            phoneNumbers: [{
                                label: "phoneNumber2",
                                number: "13521456721",
                            }],
    
                        }
                    ).then((contact: Contacts.Contact) => {
                        console.log(`openExistingContact:${JSON.stringify(contact)}`)
                        Alert.alert(`openExistingContact success`)
                    })
                }} />
            <Button
                title="viewExistingContact"
                onPress={() => { 
                    Contacts.viewExistingContact(
                        {
                            recordID: "1",
                            phoneNumbers: [{
                                label: "phoneNumber2",
                                number: "13521456721",
                            },],
    
                        }
                    ).then((contact: Contacts.Contact) => {
                        console.log(`viewExistingContact:${JSON.stringify(contact)}`)
                        Alert.alert(`viewExistingContact success`)
                    })
                }} />
            <Button
                title="editExistingContact"
                onPress={() => { 
                    Contacts.editExistingContact({
                        recordID: "1",
                        phoneNumbers: [{
                            label: "phoneNumber2",
                            number: "13521456721",
                        }],

                    }).then((contact: Contacts.Contact) => {
                        console.log(`editExistingContact:${JSON.stringify(contact)}`)
                        Alert.alert(`editExistingContact success`)
                    })
                }} />
            <Button
                title="updateContact"
                onPress={() => { 
                    Contacts.updateContact({
                        recordID: "1",
                        familyName: 'updateContact',
                        givenName:'updateContact',
                        phoneNumbers: [{
                            label: "phoneNumber2",
                            number: "13521456721",
                        },{
                            label: "phoneNumber3",
                            number: "13521456222",
                        }],

                    }).then(() => {
                        Alert.alert(`updateContact success`)
                    })
                }} />
            <Button
                title="deleteContact"
                onPress={() => { 
                    Contacts.deleteContact({
                        recordID: "3"
                    }).then(() => {
                        Alert.alert(`deleteContact success`)
                    })
                }} />
            <Button
                title="getContactsMatchingString"
                onPress={() => { 
                    Contacts.getContactsMatchingString("addfamilyName").then((contacts:Contacts.Contact[]) => {
                        console.log(`getContactsMatchingString:${JSON.stringify(contacts)}`)
                    })
                }} />
            <Button
                title="getContactsByPhoneNumber"
                onPress={() => { 
                    Contacts.getContactsByPhoneNumber("789").then((contacts:Contacts.Contact[]) => {
                        console.log(`getContactsByPhoneNumber:${JSON.stringify(contacts)}`)
                    })
                }} />
            <Button
                title="getContactsByEmailAddress"
                onPress={() => { 
                    Contacts.getContactsByEmailAddress("test@163.com").then((contacts:Contacts.Contact[]) => {
                        console.log(`getContactsByEmailAddress:${JSON.stringify(contacts)}`)
                    })
                }} />
            <Button
                title="writePhotoToPath"
                onPress={() => { 
                    Contacts.writePhotoToPath("1","file").then((data) => {
                        console.log(`writePhotoToPath:${JSON.stringify(data)}`)
                    })
                }} />
            <Button
                title="iosEnableNotesUsage"
                onPress={() => { 
                    Contacts.iosEnableNotesUsage(true)
                    console.log(`iosEnableNotesUsage:true`)
                }} />
        </ScrollView>
    );
}
  