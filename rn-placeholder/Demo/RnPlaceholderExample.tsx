import {
  Placeholder,
  PlaceholderMedia,
  PlaceholderLine,
  Fade,
  ShineOverlay,
  Shine,
  Loader,
  Progressive
} from "rn-placeholder";
import {
  View,
  Text
} from "react-native";

export function RnPlaceholderExample() {
  return (
    <View>
      <Text style={{ color: 'white', marginBottom: 10 }}>Placeholder:</Text>
      <Placeholder
        Animation={Fade}
        Left={PlaceholderMedia}
        Right={PlaceholderMedia}
      >
        <PlaceholderLine height={30} color={'#ff6700'} noMargin={false} />
        <PlaceholderLine />
        <PlaceholderLine style={{ backgroundColor: "red" }} />
      </Placeholder>
      {/* Tweaking existing animations */}
      <Text style={{ color: 'white', marginBottom: 10, marginTop: 40 }}>Tweaking existing animations:</Text>
      <Placeholder
        Left={PlaceholderMedia}
        Right={PlaceholderMedia}
        style={{ padding: 20 }}
        Animation={(props) => <ShineOverlay {...props} reverse={true} />}
      >
        <PlaceholderLine width={80} />
        <PlaceholderLine />
        <PlaceholderLine width={30} />
      </Placeholder>
      {/* PlaceholderMedia */}
      <Text style={{ color: 'white', marginBottom: 10, marginTop: 40 }}>PlaceholderMedia:</Text>
      <Placeholder
        Left={props => (
          <PlaceholderMedia
            isRound={true}
          />
        )}
        Right={PlaceholderMedia}
        style={{ padding: 20 }}
      >
        <PlaceholderLine />
        <PlaceholderLine />
        <PlaceholderLine />
      </Placeholder>
    </View>
  );
}

