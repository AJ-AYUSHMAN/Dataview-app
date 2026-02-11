import { useEffect, useState } from "react";
import { View, FlatList, ActivityIndicator, Text } from "react-native";
import { getProducts } from "../Services/api";
import ProductCard from "../components/ProductCard";

export default function ListScreen({ navigation }) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchProducts = async () => {
    try {
      const res = await getProducts();
      setProducts(res.data.products);
    } catch (err) {
      console.log("fetch failed");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  if (loading) return <ActivityIndicator size="large" />;

  return (
    <FlatList
      data={products}
      keyExtractor={(p) => p.id.toString()}
      renderItem={({ item }) => (
        <ProductCard
          item={item}
          onPress={() => navigation.navigate("Detail", { id: item.id })}
        />
      )}
    />
  );
}
