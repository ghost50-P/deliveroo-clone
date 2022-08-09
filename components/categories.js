import { View, Text, ScrollView } from "react-native";
import React from "react";
import CategoryCard from "./category-cards";

const Categories = () => {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{
        paddingHorizontal: 15,
        paddingTop: 10,
      }}
    >
      {/* CategoryCard */}
      <CategoryCard
        imgUrl="https://links.papareact.com/gn7"
        title="Testing 1"
      />
      <CategoryCard
        imgUrl="https://links.papareact.com/gn7"
        title="Testing 2"
      />
      <CategoryCard
        imgUrl="https://links.papareact.com/gn7"
        title="Testing 3"
      />
      <CategoryCard
        imgUrl="https://links.papareact.com/gn7"
        title="Testing 4"
      />
      <CategoryCard
        imgUrl="https://links.papareact.com/gn7"
        title="Testing 5"
      />
      <CategoryCard
        imgUrl="https://links.papareact.com/gn7"
        title="Testing 6"
      />
      <CategoryCard
        imgUrl="https://links.papareact.com/gn7"
        title="Testing 7"
      />
      <CategoryCard
        imgUrl="https://links.papareact.com/gn7"
        title="Testing 8"
      />
      <CategoryCard
        imgUrl="https://links.papareact.com/gn7"
        title="Testing 9"
      />
    </ScrollView>
  );
};

export default Categories;
