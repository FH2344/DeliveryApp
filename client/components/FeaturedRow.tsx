import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import RestaurantCard from './RestaurantCard';

type Restaurant = {
    id: number;
    name: string;
    image: any;
    description: string;
    lng: number;
    lat: number;
    address: string;
    stars: number;
    reviews: string;
    category: string;
};

type FeaturedRowProps = {
    title: string;
    description: string;
    restaurants: Restaurant[];
};

export default function FeaturedRow({ title, description, restaurants }: FeaturedRowProps) {
    return (
        <View>
            {/* Header Row */}
            <View style={styles.headerRow}>
                <View>
                    <Text style={styles.title}>{title}</Text>
                    <Text style={styles.description}>{description}</Text>
                </View>

                <TouchableOpacity>
                    <Text style={styles.seeAll}>See All</Text>
                </TouchableOpacity>
            </View>

            {/* Horizontal Scroll of Restaurant Cards */}
            <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{ paddingHorizontal: 15 }}
                style={{ paddingVertical: 20 }}
            >
                {restaurants.map((restaurant, index) => (
                    <RestaurantCard
                        key={restaurant.id ?? index}
                        item={restaurant}
                    />
                ))}
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    headerRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 16,
    },
    title: {
        fontWeight: 'bold',
        fontSize: 18,
    },
    description: {
        color: '#666',
        fontSize: 12,
    },
    seeAll: {
        fontWeight: '600',
        color: '#ff7a00', // choose your theme color
    },
});
