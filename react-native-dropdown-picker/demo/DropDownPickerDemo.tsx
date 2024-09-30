import React, { useState } from "react";
import { View, Text } from "react-native";
import DropDownPicker from "react-native-dropdown-picker";

export default function DropDownPickerDemo() {
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(null);
    const [items, setItems] = useState([
        { label: "Apple", value: "apple" },
        { label: "Banana", value: "banana" },
        { label: "Pear", value: "pear" },
    ]);

    return (
        <View style={{ flex: 1 }}>
            <View
                style={{
                    flex: 1,
                    alignItems: "center",
                    justifyContent: "center",
                    paddingHorizontal: 15,
                }}
            >
                <DropDownPicker
                    open={open}
                    value={value}
                    items={items}
                    setOpen={setOpen}
                    setValue={setValue}
                    setItems={setItems}
                    placeholder={"Choose a fruit."}
                />
            </View>

            <View
                style={{
                    flex: 1,
                    alignItems: "center",
                    justifyContent: "center",
                }}
            >
                <Text>Chosen fruit: {value === null ? "none" : value}</Text>
            </View>
        </View>
    );
}

export { DropDownPickerDemo }