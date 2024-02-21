import { useState, useEffect } from 'react'
import { View, Text, StyleSheet, FlatList } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useIsFocused } from '@react-navigation/native'
import useStorage from "../../hooks/useStorage"

import { PasswordItem } from './components/passwordItem'

export function Passwords() {
    const [listPasswords, setListPasswords] = useState([])
    const focused = useIsFocused(); //vai de falso para verdadeiro
    const { getItem, removeItem } = useStorage();

    useEffect(() => {
        async function loadPasswords() {
            const passwords = await getItem("@pass")
            setListPasswords(passwords) //Aqui passo os passwords que recebi
        }
        loadPasswords();
    }, [focused])   //toda vez que eu entrar nessa tela eu entrar na funcao

    async function handleDetePassword(item){
        const passwords = await removeItem('@pass', item)
        setListPasswords(passwords);
    }

    return (
        // safeAreaviews uso para o texto nao ficar por baixo da statusbar
        <SafeAreaView style={{ flex: 1 }}>
            <View style={styles.header}>
                <Text style={styles.title}>Minhas senhas</Text>
            </View>

            <View style={styles.content}>
                <FlatList   //Uso para renderizar as listas
                    style={{ flex: 1, paddingTop: 14 }}    //passo a estilização em linha
                    data={listPasswords}
                    keyExtractor={(item) => String(item)}
                    renderItem={({ item }) => <PasswordItem data={item} removePassword={() => handleDetePassword(item)} />}
                />
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    header: {
        backgroundColor: "#392de9",
        paddingTop: 58,
        paddingBottom: 14,
        paddingLeft: 14,
        paddingRight: 14
    },
    title: {
        fontSize: 18,
        color: "#FFF",
        fontWeight: "bold"
    },
    content: {
        flex: 1,
        paddingLeft: 14,
        paddingRight: 14
    }
})