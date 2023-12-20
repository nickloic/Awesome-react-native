import { StyleSheet, Text, TextInput, View } from "react-native"
import Icon from "react-native-vector-icons/FontAwesome";

const Header = () => {
    return(
        <View style={styles.header}>
            <View>
                <Text>Your location</Text>
                <View style={styles.top}>
                    <Text>3892 Olen Thomas Drive, NY</Text>
                    <View style={styles.profile}></View>
                </View>
                <View style={styles.bottom}>
                    <View style={styles.formGroup}>
                        <Icon name="search" size={20} />
                        <TextInput placeholder="Search, foods, groceries" />
                        <Icon name="microphone" size={20} />
                    </View>
                    <View style={styles.btnSearch}>
                        <Icon name="bars" size={30} />
                    </View>
                </View>
            </View>
            <View></View>
        </View>
    );
}

const styles = StyleSheet.create({
    header: {
        width: '100vw'
    },
    top: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    profile: {
        width: 50,
        height: 50,
        backgroundColor: 'green',
        borderRadius: 50
    }, 
    bottom: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    formGroup: {
        flexDirection: 'row'
    }
});

export default Header;