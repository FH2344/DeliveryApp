import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import themeColors from '@/theme'

export default function CartIcon() {
    return (
        <View style={styles.container}>
            <TouchableOpacity style={[styles.cartButton, { backgroundColor: themeColors.primary }]}>

                <View style={styles.countContainer}>
                    <Text style={styles.countText}>3</Text>
                </View>


                <Text style={styles.cartText}>View Cart</Text>


                <Text style={styles.priceText}>{23} BD</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        bottom: 20,
        width: '100%',
        zIndex: 50,
    },
    cartButton: {
        flexDirection: 'row',
        alignItems: 'center',
        marginHorizontal: 20,
        borderRadius: 9999,
        paddingVertical: 12,
        paddingHorizontal: 16,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
        elevation: 5,
    },
    priceText: {
        fontWeight: '800',
        fontSize: 18,
        color: 'white',
        textAlign: 'left',
    },
    cartText: {
        flex: 1,                // Takes up middle space
        textAlign: 'center',    // Centers the text
        fontWeight: '800',
        fontSize: 18,
        color: 'white',
    },
    countContainer: {
        paddingVertical: 4,
        paddingHorizontal: 16,
        borderRadius: 9999,
        backgroundColor: 'rgba(255, 255, 255, 0.38)',
    },
    countText: {
        fontWeight: '800',
        fontSize: 18,
        color: 'white',
    },
})
