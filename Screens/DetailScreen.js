import { useEffect, useState } from "react";
import { View, Text, Image, ActivityIndicator, ScrollView } from "react-native";
import { getProductById } from "../Services/api";

export default function DetailScreen({ route }) {
  const { id } = route.params;
  const [product, setProduct] = useState(null);

  useEffect(() => {
    getProductById(id).then(res => setProduct(res.data));
  }, []);

  if (!product) return <ActivityIndicator size="large" />;

  return (
    <ScrollView style={{ padding: 16 }}>
      <Image
        source={{ uri: product.thumbnail }}
        style={{ height: 200, borderRadius: 10 }}
      />

      <Text style={{ fontSize: 18, fontWeight: "bold" }}>
        {product.title}
      </Text>

      <Text>{product.description}</Text>

      <Text>Category: {product.category}</Text>
      <Text>Brand: {product.brand}</Text>
      <Text>Price: ₹ {product.price}</Text>
      <Text>Rating: {product.rating}</Text>
      <Text>Stock: {product.stock}</Text>
    </ScrollView>
  );
}
