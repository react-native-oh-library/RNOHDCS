
import { NavigationContainer, Page } from "./navitagiton"
import DeckSwiperExample from './DeckSwiperExample';
import DeckSwiperExample2 from './DeckSwiperExample2';
import DeckSwiperExample3 from './DeckSwiperExample3';
import DeckSwiperExample4 from './DeckSwiperExample4';
import DeckSwiperExample5 from './DeckSwiperExample5';
import DeckSwiperExample6 from './DeckSwiperExample6';
import DeckSwiperExample7 from './DeckSwiperExample7';
import DeckSwiperExample8 from './DeckSwiperExample8';



export const DeckSwiperExampleTestDemo = () => {
  return (
          <NavigationContainer>

            <Page name="DeckSwiperExample">
              <DeckSwiperExample />
            </Page>

            <Page name="DeckSwiperExample2">
              <DeckSwiperExample2 />
            </Page>
            
            <Page name="DeckSwiperExample3">
              <DeckSwiperExample3 />
            </Page>

            <Page name="DeckSwiperExample4">
              <DeckSwiperExample4 />
            </Page>

            <Page name="DeckSwiperExample5">
              <DeckSwiperExample5 />
            </Page>

            <Page name="DeckSwiperExample6">
              <DeckSwiperExample6 />
            </Page>

            <Page name="DeckSwiperExample7">
              <DeckSwiperExample7 />
            </Page>

            <Page name="DeckSwiperExample8">
              <DeckSwiperExample8 />
            </Page>
            
          </NavigationContainer>
  )
}