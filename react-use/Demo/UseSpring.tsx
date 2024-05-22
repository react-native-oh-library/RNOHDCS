import React,{useState} from 'react';
import { View, Text,TextInput ,Button } from 'react-native';
import useSpring from 'react-use/lib/useSpring';

 const UseSpringDemo = () => {
   const [target, setTarget] = useState(50);
     const value = useSpring(target);

     return (
       <View>
         <Text>{value}</Text>
         <Button onPress={() => setTarget(0)} title='Set 0'/>
         <Button onPress={() => setTarget(100)} title='Set 100'/>
       </View>
     );
};
export default UseSpringDemo