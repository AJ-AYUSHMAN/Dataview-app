import { useEffect, useState } from "react";
import { View, FlatList, ActivityIndicator, Button, Text } from "react-native";
import ProductCard from "../components/ProductCard";
import { getProducts } from "../services/api";
r
export default function ListScreen({ navigation }) {
  const [productList, setProductList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const loadProducts = async () => {
    try {
      setError(false);
      const res = await getProducts();

      // API returns { products: [...] }
      setProductList(res.data.products);

    } catch (err) {
      console.log("product fetch error");
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadProducts();

    // refresh when coming back from Form or Detail
    const unsub = navigation.addListener("focus", loadProducts);
    return unsub;
  }, [navigation]);

  if (loading) return <ActivityIndicator size="large" />;

  if (error) {
    return (
      <View style={{ padding: 20 }}>
        <Text>Failed to load products</Text>
        <Button title="Retry" onPress={loadProducts} />
      </View>
    );
  }

  return (
    <View style={{ flex: 1 }}>
      <Button
        title="Add Item"
        onPress={() => navigation.navigate("Form")}
      />

      <FlatList
        data={productList}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <ProductCard
            item={item}
            onPress={() =>
              navigation.navigate("Detail", { id: item.id })
            }
          />
        )}
      />
    </View>
  );
}
