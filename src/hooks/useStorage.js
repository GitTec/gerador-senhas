import AsyncStorage from "@react-native-async-storage/async-storage";
//Hooks usado para salvar as senhas criadas

const useStorage = () => {
    //Buscar itens salvos
    const getItem = async (key) => {
        try {
            const passwords = await AsyncStorage.getItem(key);
            return JSON.parse(passwords) || [];
        } catch (error) {
            console.log("Erro ao buscar", error)
            return [];
        }
    }

    //Salvar um item no storage
    const saveItem = async (key, value) => {
        try {
            let passwords = await getItem(key); //Buscando os itens na lista

            passwords.push(value)    //Adicionando o item a mais na lista

            await AsyncStorage.setItem(key, JSON.stringify(passwords))

        } catch (error) {
            console.log("Erro AO SALVAR", error)
        }
    }

    //Remover algo do storage
    const removeItem = async (key, item) => {
        try {
            let passwords = await getItem(key);

            let myPasswords = passwords.filter((password) => {
                return (password !== item)
            })

            await AsyncStorage.setItem(key, JSON.stringify(myPasswords))

            return myPasswords;

        } catch (error) {
            console.log("ERROR AOA DELETAR ", error)
        }
    }

    return {
        getItem,
        saveItem,
        removeItem
    }
}

export default useStorage;