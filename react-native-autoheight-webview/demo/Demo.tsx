import React from "react";
import AutoHeightWebView from "react-native-autoheight-webview";
import { Dimensions } from 'react-native'
export function WebviewExample() {
  return (
    <AutoHeightWebView
    style={{ width: Dimensions.get('window').width - 15, marginTop: 35,height:200}}
    customScript={`document.body.style.background = 'lightyellow';`}
    customStyle={`
      * {
        font-family: 'Times New Roman';
      }
      p {
        font-size: 16px;
      }
    `}
    source={{ html: `
    <p style="font-weight: 400;font-style: normal;font-size: 21px;line-height: 1.58;letter-spacing: -.003em;">Tags are great for describing the essence of your story in a single word or phrase, but stories are rarely about a single thing. <span style="background-color: transparent !important;background-image: linear-gradient(to bottom, rgba(146, 249, 190, 1), rgba(146, 249, 190, 1));">If I pen a story about moving across the country to start a new job in a car with my husband, two cats, a dog, and a tarantula, I wouldn’t only tag the piece with “moving”. I’d also use the tags “pets”, “marriage”, “career change”, and “travel tips”.</span></p>
    <p style="font-weight: 400;font-style: normal;font-size: 21px;line-height: 1.58;letter-spacing: -.003em;">Tags are great for describing the essence of your story in a single word or phrase, but stories are rarely about a single thing. <span style="background-color: transparent !important;background-image: linear-gradient(to bottom, rgba(146, 249, 190, 1), rgba(146, 249, 190, 1));">If I pen a story about moving across the country to start a new job in a car with my husband, two cats, a dog, and a tarantula, I wouldn’t only tag the piece with “moving”. I’d also use the tags “pets”, “marriage”, “career change”, and “travel tips”.</span></p>
     ` }}
    
  />
  
  );
}


