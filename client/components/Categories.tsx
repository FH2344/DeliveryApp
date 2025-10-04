import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';
import { categories } from '@/constants/data';

export default function Categories() {
    const [activeCategory, setActiveCategory] = useState(0);

    return (
        <View style={styles.container}>
            <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={styles.scrollContent}
            >
                {categories.map((category, index) => {
                    const isActive = category.id === activeCategory;

                    return (
                        <View style={styles.item} key={index}>
                            <TouchableOpacity
                                onPress={() => setActiveCategory(category.id)}
                                style={[
                                    styles.categoryButton,
                                    isActive ? styles.categoryButtonActive : styles.categoryButtonInactive,
                                ]}
                            >
                                <Image style={styles.categoryImage} source={category.image} />
                            </TouchableOpacity>

                            <Text
                                style={[
                                    styles.categoryText,
                                    isActive ? styles.categoryTextActive : styles.categoryTextInactive,
                                ]}
                            >
                                {category.name}
                            </Text>
                        </View>
                    );
                })}
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginVertical: 10,
    },
    scrollContent: {
        paddingHorizontal: 15,
    },
    item: {
        alignItems: 'center',
        marginRight: 18, // spacing between categories
    },
    categoryButton: {
        padding: 6,
        borderRadius: 9999, // makes it fully rounded
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.2,
        shadowRadius: 2,
        elevation: 3, // Android shadow
    },
    categoryButtonInactive: {
        backgroundColor: '#e5e5e5', // light gray
    },
    categoryButtonActive: {
        backgroundColor: '#4b5563', // darker gray when active
    },
    categoryImage: {
        width: 45,
        height: 45,
        borderRadius: 22.5,
    },
    categoryText: {
        fontSize: 14,
        marginTop: 4,
    },
    categoryTextInactive: {
        color: '#6b7280', // gray-500
    },
    categoryTextActive: {
        color: '#1f2937', // gray-800
        fontWeight: '600',
    },
});
