import { TestSuite, TestCase, Tester } from '@rnoh/testerino';
import * as React from 'react';
import Geolocation from "react-native-amap-geolocation";

export function GeolocationTest() {
    return (
        <Tester>
        <TestSuite name="Geolocation">
            <TestCase
                itShould="Geolocation.init"
                fn={({ expect }: any) => {
                    expect(Geolocation.init("aabbbcccc")).to.not.be.undefined;
                }}
            />
            <TestCase
                itShould="Geolocation.start"
                fn={({ expect }: any) => {
                    expect(Geolocation.start()).to.not.be.undefined;
                }}
            />
            <TestCase
                itShould="Geolocation.stop"
                fn={({ expect }: any) => {
                    expect(Geolocation.stop()).to.not.be.undefined;
                }}
            />
            <TestCase
                itShould="Geolocation.stopUpdatingLocation"
                fn={({ expect }: any) => {
                    expect(Geolocation.stopUpdatingLocation()).to.not.be.undefined;
                }}
            />
            <TestCase
                itShould="Geolocation.setInterval"
                fn={({ expect }: any) => {
                    expect(Geolocation.setInterval(2000)).to.not.be.undefined;
                }}
            />
            <TestCase
                itShould="Geolocation.setNeedAddress"
                fn={({ expect }: any) => {
                    expect(Geolocation.setNeedAddress(true)).to.not.be.undefined;
                }}
            />
            <TestCase
                itShould="Geolocation.setLocationTimeout"
                fn={({ expect }: any) => {
                    expect(Geolocation.setLocationTimeout(1000)).to.not.be.undefined;
                }}
            />
            <TestCase
                itShould="Geolocation.setAllowsBackgroundLocationUpdates"
                fn={({ expect }: any) => {
                    expect(Geolocation.setAllowsBackgroundLocationUpdates(true)).to.not.be.undefined;
                }}
            />
            <TestCase
                itShould="Geolocation.setDesiredAccuracy"
                fn={({ expect }: any) => {
                    expect(Geolocation.setDesiredAccuracy(10000)).to.not.be.undefined;
                }}
            />
            <TestCase
                itShould="Geolocation.setGeoLanguage"
                fn={({ expect }: any) => {
                    expect(Geolocation.setGeoLanguage(1000)).to.not.be.undefined;
                }}
            />
            <TestCase
                itShould="Geolocation.setDistanceFilter"
                fn={({ expect }: any) => {
                    expect(Geolocation.setDistanceFilter(2000)).to.not.be.undefined;
                }}
            />
            <TestCase
                itShould="Geolocation.setOnceLocation"
                fn={({ expect }: any) => {
                    Geolocation.setOnceLocation().then((result) => {
                        expect((result)).to.not.be.undefined;
                    }).catch((error) => {
                        expect((error)).to.not.be.undefined;
                    })
                }}
            />
            <TestCase
                itShould="Geolocation.getLastKnownLocation"
                fn={({ expect }: any) => {
                    Geolocation.getLastKnownLocation().then((result) => {
                        expect((result)).to.not.be.undefined;
                    }).catch((error) => {
                        expect((error)).to.not.be.undefined;
                    })
                }}
            />
            <TestCase
                itShould="Geolocation.startUpdatingLocation"
                fn={({ expect }: any) => {
                    Geolocation.startUpdatingLocation().then((result) => {
                        expect((result)).to.not.be.undefined;
                    }).catch((error) => {
                        expect((error)).to.not.be.undefined;
                    })
                }}
            />
        </TestSuite>
        </Tester>
    );
}