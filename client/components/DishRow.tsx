import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import themeColors from '@/theme'
import * as Icon from 'react-native-feather'

type Dish = {
    id: number;
    name: string;
    description: string;
    price: number;
    image: any;
};

type Props = {
    item: Dish;
};

export default function DishRow({ item }: Props) {
    return (
        <View style={styles.container}>
            <Image style={styles.image} source={item.image} />

            <View style={styles.detailsContainer}>
                <View style={styles.textContainer}>
                    <Text style={styles.name}>{item.name}</Text>
                    <Text style={styles.description}>{item.description}</Text>
                </View>

                <View style={styles.bottomRow}>
                    <Text style={styles.price}>{item.price} BD</Text>

                    <View style={styles.counter}>
                        <TouchableOpacity style={[styles.counterButton, { backgroundColor: themeColors.primary }]}>
                            <Icon.Minus strokeWidth={2} height={20} width={20} stroke="white" />
                        </TouchableOpacity>

                        <Text style={styles.count}>2</Text>

                        <TouchableOpacity style={[styles.counterButton, { backgroundColor: themeColors.primary }]}>
                            <Icon.Plus strokeWidth={2} height={20} width={20} stroke="white" />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'white',
        padding: 12,
        borderRadius: 24,
        shadowColor: themeColors.primary,
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.1,
        shadowRadius: 6,
        elevation: 3,
        marginBottom: 12,
        marginHorizontal: 8,
    },
    image: {
        height: 100,
        width: 100,
        borderRadius: 24,
    },
    detailsContainer: {
        flex: 1,
        marginLeft: 12,
        justifyContent: 'space-between',
    },
    textContainer: {
        marginBottom: 8,
    },
    name: {
        fontSize: 18,
        fontWeight: '600',
    },
    description: {
        fontSize: 14,
        color: '#4B5563', // gray-700
        marginTop: 4,
    },
    bottomRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    price: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#4B5563', // gray-700
    },
    counter: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    counterButton: {
        padding: 4,
        borderRadius: 9999,
    },
    count: {
        paddingHorizontal: 12,
        fontSize: 16,
        fontWeight: '500',
    },
})
