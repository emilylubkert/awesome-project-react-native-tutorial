import React, { useState } from 'react';
import { Text, TextInput, View, Image, Button } from 'react-native';

// const Cat = ({name}) => {

//   return (
//     <View>
//       <Text>I am {name}</Text>
//       {/* <TextInput style={{
//         height:40,
//         borderColor: 'gray',
//         borderWidth: 1,
//       }}
//       defaultValue="Name me!"
//       /> */}
//     </View>

//   )
// };

// const Cafe = () => {
//   return (
//     <View>
//       <Text>Welcome!</Text>
//       <Cat name="Maru"/>
//       <Cat name="Jellyfish" />
//       <Cat name="Spot"/>
//     </View>
//   )
// }

// export default Cafe;
// const CatApp = () => {
//   return (
//     <View>
//       <Image
//         source={{
//           uri: 'https://reactnative.dev/docs/assets/p_cat1.png',
//         }}
//         style={{width: 200, height: 200}}
//       />
//       <Text>Hello, I am your cat!</Text>
//     </View>
//   );
// };

const Cat = props => {
  const [isHungry, setIsHungry] = useState(true);

  return (
    <View>
      <Text>
        I am {props.name}, and I am {isHungry ? 'hungry': 'full'}!
      </Text>
      <Button
      onPress={() => {
        setIsHungry(false);
      }}
      disabled={!isHungry}
      title={isHungry ? "Pour me some milk, please!" : "Thank you!"}
      />
    </View>
  )
}

const Cafe = () => {
  return (
    <>
      <Cat name="Kitty" />
      <Cat name="Spot"/>
    </>
  )
}
export default Cafe;
