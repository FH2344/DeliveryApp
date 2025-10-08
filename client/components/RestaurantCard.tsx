import { Image, StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native'
import React from 'react'
import * as Icon from 'react-native-feather'
import themeColors from '@/theme';
import { useRouter } from 'expo-router';

// Define type for a restaurant
type Restaurant = {
    id: number;
    name: string;
    image: any;
    description: string;
    address: string;
    stars: number;
    reviews: string;
    category: string;
};

// Define props for the component
type Props = {
    item: Restaurant;
};

export default function RestaurantCard({ item }: Props) {
    const router = useRouter();
    return (
        <TouchableWithoutFeedback
            onPress={() => router.push({
                pathname: '/RestaurantScreen',
                params: { id: item.id.toString() }
            })}
        >
            <View style={[styles.card, { shadowColor: themeColors.bgColor(0.2) }]}>
                <Image source={item.image} style={styles.image} />
                <View style={styles.content}>
                    <Text style={styles.name}>{item.name}</Text>
                    <View style={styles.ratingRow}>
                        <Image source={require('../assets/img/fullStar.png')} style={styles.starIcon} />
                        <Text style={styles.ratingText}>
                            <Text style={styles.stars}>{item.stars}</Text>
                            <Text style={styles.review}>
                                ({item.reviews} review). <Text style={styles.category}>{item.category}</Text>
                            </Text>
                        </Text>
                    </View>
                    <View style={styles.addressRow}>
                        <Icon.MapPin color={themeColors.gray} width={15} height={15} />
                        <Text style={styles.address}>Nearby. {item.address}</Text>
                    </View>
                </View>
            </View>
        </TouchableWithoutFeedback>
    )
}

const styles = StyleSheet.create({
    card: {
        marginRight: 24,
        backgroundColor: themeColors.white,
        borderRadius: 24,
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.3,
        shadowRadius: 7,
        elevation: 5, // for Android shadow
    },
    image: {
        height: 144, // 36 * 4
        width: 256, // 64 * 4
        borderTopLeftRadius: 24,
        borderTopRightRadius: 24,
    },
    content: {
        paddingHorizontal: 12,
        paddingBottom: 16,
        paddingTop: 8,
    },
    name: {
        fontSize: 18,
        fontWeight: 'bold',
        paddingTop: 8,
    },
    ratingRow: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 4,
    },
    starIcon: {
        height: 16,
        width: 16,
        marginRight: 4,
    },
    ratingText: {
        fontSize: 12,
        color: themeColors.textDark,
    },
    stars: {
        color: themeColors.primary,
        fontWeight: 'bold',
    },
    review: {
        color: themeColors.gray,
    },
    category: {
        fontWeight: '600',
    },
    addressRow: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 4,
    },
    address: {
        color: themeColors.gray,
        fontSize: 12,
        marginLeft: 4,
    },
});
