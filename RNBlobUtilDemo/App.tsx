import React from 'react';
import {
	View,
	StatusBar,
	SafeAreaView
} from 'react-native';
import * as fsDemo from './components/fs';
import * as reqDemo from './components/req';
import * as streamDemo from './components/stream';
import { Page, NavigationContainer } from '../components';
import { PortalProvider } from '@gorhom/portal';

const { ...remainingFsDemo } = fsDemo;
const { ...remainingReqDemo } = reqDemo;
const { ...remainingStreamDemo } = streamDemo;

export default function BlobUtilDemo() {
	return (
		<View style={{ backgroundColor: 'black' }}>
			<StatusBar barStyle="light-content" />
			<SafeAreaView>
				<NavigationContainer>
					<PortalProvider>
						{Object.entries(remainingFsDemo).map(
							([exampleName, Example]) => {
								return (
									<Page key={exampleName} name={`EXAMPLE: ${exampleName}`}>
										<Example />
									</Page>
								)
							}
						)}
						{Object.entries(remainingReqDemo).map(
							([exampleName, Example]) => {
								return (
									<Page key={exampleName} name={`EXAMPLE: ${exampleName}`}>
										<Example />
									</Page>
								)
							}
						)}
						{Object.entries(remainingStreamDemo).map(
							([exampleName, Example]) => {
								return (
									<Page key={exampleName} name={`EXAMPLE: ${exampleName}`}>
										<Example />
									</Page>
								)
							}
						)}
					</PortalProvider>
				</NavigationContainer>
			</SafeAreaView>
		</View>
	)
}