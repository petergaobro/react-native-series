import { StyleSheet, Appearance, Platform, SafeAreaView,FlatList, ScrollView, View, Text, Image } from "react-native";

import { Colors } from "@/constants/Colors";

export default function MenuScreen() {
    const colorScheme = Appearance.getColorScheme();
    const theme = colorScheme === 'dark' ? Colors.dark : Colors.light;

    const styles = createStyles(theme, colorScheme)

    const Container = Platform.OS === 'web' ? ScrollView : SafeAreaView;

    return (
        <Container>

            <FlatList
            data = {[]}
            renderItem={({item}) => (

            )}

        </Container>
    )
}


function createStyles(theme, colorScheme) {
    return StyleSheet.create({


    })
}