import { useState } from "react";
import { View, TextInput, Button, Alert, Text } from "react-native";
import { createLocalItem } from "../services/api";

export default function FormScreen({ navigation }) {
  const [title, setTitle] = useState("");
  const [note, setNote] = useState("");
  const [saving, setSaving] = useState(false);

  const handleSubmit = async () => {
    // basic validation
    if (!title.trim() || !note.trim()) {
      Alert.alert("Validation", "Please fill all fields");
      return;
    }

    try {
      setSaving(true);

      await createLocalItem({
        title: title,
        note: note,
        createdAt: new Date().toISOString()
      });

      Alert.alert("Success", "Item saved");

      // clear fields
      setTitle("");
      setNote("");

      // go back → list will refresh via focus listener
      navigation.goBack();

    } catch (err) {
      Alert.alert("Error", "Could not save item");
    } finally {
      setSaving(false);
    }
  };

  return (
    <View style={{ padding: 20, gap: 12 }}>
      <Text style={{ fontSize: 18, fontWeight: "bold" }}>
        Add New Item
      </Text>

      <TextInput
        placeholder="Title"
        value={title}
        onChangeText={setTitle}
        style={{
          borderWidth: 1,
          padding: 10,
          borderRadius: 6
        }}
      />

      <TextInput
        placeholder="Note / Description"
        value={note}
        onChangeText={setNote}
        multiline
        numberOfLines={4}
        style={{
          borderWidth: 1,
          padding: 10,
          borderRadius: 6,
          height: 100,
          textAlignVertical: "top"
        }}
      />

      <Button
        title={saving ? "Saving..." : "Submit"}
        onPress={handleSubmit}
        disabled={saving}
      />
    </View>
  );
}
