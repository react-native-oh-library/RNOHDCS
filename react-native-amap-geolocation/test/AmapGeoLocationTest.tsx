import { TestSuite } from '@rnoh/testerino';
import { TestCase } from '../components';
import * as React from 'react';
import Geolocation from "react-native-amap-geolocation";

export function GeolocationTest() {
    return (
        <TestSuite name="Geolocation">
            <TestCase.Logical
                itShould="Geolocation.init"
                fn={({ expect }: any) => {
                    expect(Geolocation.init("aabbbcccc")).to.not.be.undefined;
                }}
            />
            <TestCase.Logical
                itShould="Geolocation.start"
                fn={({ expect }: any) => {
                    expect(Geolocation.start()).to.not.be.undefined;
                }}
            />
            <TestCase.Logical
                itShould="Geolocation.stop"
                fn={({ expect }: any) => {
                    expect(Geolocation.stop()).to.not.be.undefined;
                }}
            />
            <TestCase.Logical
                itShould="Geolocation.stopUpdatingLocation"
                fn={({ expect }: any) => {
                    expect(Geolocation.stopUpdatingLocation()).to.not.be.undefined;
                }}
            />
            <TestCase.Logical
                itShould="Geolocation.setInterval"
                fn={({ expect }: any) => {
                    expect(Geolocation.setInterval(2000)).to.not.be.undefined;
                }}
            />
            <TestCase.Logical
                itShould="Geolocation.setNeedAddress"
                fn={({ expect }: any) => {
                    expect(Geolocation.setNeedAddress(true)).to.not.be.undefined;
                }}
            />
            <TestCase.Logical
                itShould="Geolocation.setLocationTimeout"
                fn={({ expect }: any) => {
                    expect(Geolocation.setLocationTimeout(1000)).to.not.be.undefined;
                }}
            />
            <TestCase.Logical
                itShould="Geolocation.setAllowsBackgroundLocationUpdates"
                fn={({ expect }: any) => {
                    expect(Geolocation.setAllowsBackgroundLocationUpdates(true)).to.not.be.undefined;
                }}
            />
            <TestCase.Logical
                itShould="Geolocation.setDesiredAccuracy"
                fn={({ expect }: any) => {
                    expect(Geolocation.setDesiredAccuracy(10000)).to.not.be.undefined;
                }}
            />
            <TestCase.Logical
                itShould="Geolocation.setGeoLanguage"
                fn={({ expect }: any) => {
                    expect(Geolocation.setGeoLanguage(1000)).to.not.be.undefined;
                }}
            />
            <TestCase.Logical
                itShould="Geolocation.setDistanceFilter"
                fn={({ expect }: any) => {
                    expect(Geolocation.setDistanceFilter(2000)).to.not.be.undefined;
                }}
            />
            <TestCase.Logical
                itShould="Geolocation.setOnceLocation"
                fn={({ expect }: any) => {
                    Geolocation.setOnceLocation().then((result) => {
                        expect((result)).to.not.be.undefined;
                    }).catch((error) => {
                        expect((error)).to.not.be.undefined;
                    })
                }}
            />
            <TestCase.Logical
                itShould="Geolocation.getLastKnownLocation"
                fn={({ expect }: any) => {
                    Geolocation.getLastKnownLocation().then((result) => {
                        expect((result)).to.not.be.undefined;
                    }).catch((error) => {
                        expect((error)).to.not.be.undefined;
                    })
                }}
            />
            <TestCase.Logical
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
    );
}