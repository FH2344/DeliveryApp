import { useRouter, useLocalSearchParams } from 'expo-router';
import { featured } from '@/constants/data';
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import * as Icon from 'react-native-feather';
import themeColors from '@/theme';
import DishRow from '@/components/DishRow';
import CartIcon from '@/components/CartIcon';

export default function RestaurantScreen() {
  const router = useRouter();
  const params = useLocalSearchParams();
  const itemId = Number(params.id);

  // Access the restaurants array
  const item = featured.restaurants.find(r => r.id === itemId);

  if (!item) return <Text>Restaurant not found</Text>;

  return (
    <View style={{ flex: 1 }}>
      <CartIcon />
      <ScrollView>
        {/* Image Header */}
        <View style={styles.imageWrapper}>
          <Image source={item.image} style={styles.image} />
          <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
            <Icon.ArrowLeft strokeWidth={3} stroke={themeColors.bgColor(1)} />
          </TouchableOpacity>
        </View>

        {/* Content */}
        <View style={styles.contentWrapper}>
          <Text style={styles.title}>{item.name}</Text>

          {/* Rating Row */}
          <View style={styles.ratingRow}>
            <Image source={require('../assets/img/fullStar.png')} style={styles.starIcon} />
            <Text style={styles.ratingText}>
              <Text style={styles.stars}>{item.stars}</Text>
              <Text style={styles.review}> ({item.reviews} review). </Text>
              <Text style={styles.category}>{item.category}</Text>
            </Text>
          </View>

          {/* Address Row */}
          <View style={styles.addressRow}>
            <Icon.MapPin color="gray" width={15} height={15} />
            <Text style={styles.address}>Nearby. {item.address}</Text>
          </View>

          {/* Description */}
          <Text style={styles.description}>{item.description}</Text>
        </View>
        <View style={styles.container}>
          <Text style={styles.menuTitle}>Menu</Text>
          {item.dishes.map((dish: any, index: number) => (
            <DishRow item={{ ...dish }} key={index} />
          ))}
        </View>
      </ScrollView>
    </View >
  );
}

const styles = StyleSheet.create({
  imageWrapper: { position: 'relative' },
  image: { width: '100%', height: 288 },
  backButton: {
    position: 'absolute',
    top: 56,
    left: 16,
    backgroundColor: '#F9FAFB',
    padding: 8,
    borderRadius: 9999,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  contentWrapper: {
    backgroundColor: '#fff',
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    marginTop: -48,
    paddingTop: 24,
    paddingHorizontal: 20,
  },
  title: { fontSize: 28, fontWeight: 'bold', marginBottom: 8 },
  ratingRow: { flexDirection: 'row', alignItems: 'center', marginBottom: 8 },
  starIcon: { width: 16, height: 16, marginRight: 4 },
  ratingText: { fontSize: 12, color: '#6B7280', marginRight: 8 },
  stars: { color: '#22C55E', fontWeight: 'bold' },
  review: { color: '#6B7280' },
  category: { fontWeight: '600' },
  addressRow: { flexDirection: 'row', alignItems: 'center', marginBottom: 8 },
  address: { fontSize: 12, color: '#6B7280', marginLeft: 4 },
  description: { fontSize: 14, color: '#111827', marginTop: 8 },
  container: {
    paddingBottom: 144, // pb-36 → 36 * 4 = 144px
    backgroundColor: '#ffffff',
  },
  menuTitle: {
    paddingHorizontal: 16, // px-4 → 4 * 4
    paddingVertical: 16,   // py-4 → 4 * 4
    fontSize: 24,          // text-2xl ≈ 24px
    fontWeight: 'bold',
  },
});
