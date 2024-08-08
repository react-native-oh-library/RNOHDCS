import { ProgressBar } from '@react-native-community/progress-bar-android';
export default function ProgressBarExample() {
    return (
        <>
            <ProgressBar styleAttr="Horizontal" indeterminate={true} animating={true} />
            <ProgressBar indeterminate={true} />
        </>
    )
}