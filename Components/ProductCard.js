import { View, Text, Image, TouchableOpacity } from "react-native";

export default function ProductCard({ item, onPress }) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{ padding: 12, borderBottomWidth: 0.5 }}
    >
      <Image
        source={{ uri: item.thumbnail }}
        style={{ height: 120, borderRadius: 8 }}
      />

      <Text style={{ fontWeight: "bold", marginTop: 6 }}>
        {item.title}
      </Text>

      <Text numberOfLines={2}>
        {item.description}
      </Text>

      <Text>₹ {item.price}</Text>
    </TouchableOpacity>
  );
}
