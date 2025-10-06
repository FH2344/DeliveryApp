import { ScrollView, StatusBar, StyleSheet, TextInput, View, Text, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import * as Icon from "react-native-feather";
import Categories from "../components/Categories";
import FeaturedRow from "@/components/FeaturedRow";
import { featured } from "@/constants/data";

export default function Index() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />

      {/* Search Bar Row */}
      <View style={styles.searchRow}>
        {/* Search + Location Bar */}
        <View style={styles.searchBar}>
          {/* Search icon + input */}
          <View style={styles.searchInputContainer}>
            <Icon.Search height={20} width={20} stroke="gray" />
            <TextInput
              style={styles.searchInput}
              placeholder="Restaurants"
              placeholderTextColor="#999"
            />
          </View>

          {/* Divider */}
          <View style={styles.divider} />

          {/* Location */}
          <View style={styles.locationContainer}>
            <Icon.MapPin height={20} width={20} stroke="gray" />
            <Text style={styles.locationText}>Manama, Bahrain</Text>
          </View>
        </View>

        {/* Filter Button */}
        <TouchableOpacity style={styles.filterButton}>
          <Icon.Sliders height={20} width={20} stroke="#fff" />
        </TouchableOpacity>
      </View>

      {/* Main Content */}
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 20 }}
      >
        {/* Categories */}
        <Categories />

        { /* featured */}
        <View>
          {
            [featured, featured, featured].map((item, index) => {
              return (
                <FeaturedRow
                  key={index}
                  title={item.title}
                  restaurants={item.restaurants}
                  description={item.description}
                />

              )
            })
          }
        </View>
      </ScrollView>
    </SafeAreaView >
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 16,
    paddingTop: 10,
  },

  // Top row
  searchRow: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
  },

  // Search bar (left big pill)
  searchBar: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 50,
    borderWidth: 1,
    borderColor: "#ddd",
    paddingHorizontal: 12,
    height: 50,
  },

  // Search part
  searchInputContainer: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    color: "#333",
    marginLeft: 6,
  },

  // Divider between search and location
  divider: {
    width: 1,
    height: "60%",
    backgroundColor: "#ddd",
    marginHorizontal: 12,
  },

  // Location part
  locationContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  locationText: {
    fontSize: 14,
    color: "#333",
    marginLeft: 4,
  },

  // Orange filter button (right side)
  filterButton: {
    marginLeft: 12,
    width: 44,
    height: 44,
    backgroundColor: "#32a3ffff",
    borderRadius: 22,
    justifyContent: "center",
    alignItems: "center",
  },
});
