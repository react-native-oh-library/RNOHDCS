# react-native-progress-seekbar
A draggable progress with seekbar , just like the seekbar in android.

<img src="https://github.com/xwh817/ReactNativeStepByStep/blob/master/screenShot/seekBar.gif">


## Example

```js


	<SeekBar style={{margin: 20, padding: 20, backgroundColor: 'black'}}
			 min={0}
			 max={100}
			 progress={this.state.value}
			 progressHeight={4}
			 progressBackgroundColor='#663300'
			 progressColor='#88cc33'
			 thumbSize={40}
			 thumbColor='#88cc33'
			 thumbColorPressed='#ff6633'
			 onStartTouch={() => {console.log('onStartTouch')}}
			 onProgressChanged={(progress) => console.log('onProgressChanged:' + progress)}
			 onStopTouch={() => {console.log('onStopTouch')}}
	/>



```
