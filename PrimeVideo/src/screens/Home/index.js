import { Image, Text, View, StyleSheet } from "react-native";
import PrimeVideoLogo from "../../assets/prime_video.png";
import AmazonLogo from "../../assets/amazon_logo.png";
import { TouchableOpacity } from "react-native";
import MovieTheWell from "../../assets/movies/the_wheel_of_time.png";
import { FlatList } from "react-native";
import { MOVIESWATCHING } from "../../utils/moviesWatching";
import { MOVIESCRIME } from "../../utils/moviesCrimes";
import { MOVIESWATCH } from "../../utils/moviesWatch";
import { MoviesCard } from "../../components/MoviesCard";
import { ScrollView } from "react-native";

export const Home = () => {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image style={styles.PrimeVideoLogo} source={PrimeVideoLogo} />
                <Image style={styles.AmazonLogo} source={AmazonLogo} />
            </View>


            <View style={styles.category}>
                <TouchableOpacity>
                    <Text style={styles.categoryText}>Home</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text style={styles.categoryText}>TV Shows</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text style={styles.categoryText}>Movies</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text style={styles.categoryText}>Kids</Text>
                </TouchableOpacity>

            </View>
            <ScrollView showsHorizontalScrollIndicator={false} style={styles.contentMovies}>
            <TouchableOpacity style={styles.moveImageThumbnail}>
                <Image source={MovieTheWell} style={styles.moveImageThumbnail} />
                
            </TouchableOpacity>
            <Text style={styles.movieText}>Continue Watching</Text>
            <FlatList
                data={MOVIESWATCHING}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <MoviesCard movieURL={item.moviesURL} />
                    )}
                    horizontal
                    contentContainerStyle={styles.contentList}
                    showsHorizontalScrollIndicator={false}
                    />
            <Text style={styles.movieText}>Crime Movies</Text>
            <FlatList
                data={MOVIESCRIME}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <MoviesCard movieURL={item.moviesURL} />
                    )}
                    horizontal
                    contentContainerStyle={styles.contentList}
                    showsHorizontalScrollIndicator={false}
                    />
            <Text style={styles.movieText}>Watch in your language</Text>
            <FlatList
                data={MOVIESWATCH}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <MoviesCard movieURL={item.moviesURL} />
                )}
                horizontal
                contentContainerStyle={styles.contentList}
                showsHorizontalScrollIndicator={false}
            />
            
            
            
            </ScrollView>

        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#232f2e",
        alignItems: "flex-start",
    },

    header: {
        width: "100%",
        paddingTop: 80,
        alignItems: "center",
        justifyContent: "center",
    },

    AmazonLogo: {
        marginTop: -32,
        marginLeft: 30,
    },

    category: {
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-evenly",
        marginTop: 30,
        marginBottom: 15,
    },
    categoryText: {
        fontSize: 14,
        fontWeight: "700",
        color: "#FFf",
    },
    movieText: {
        color:"#ffff",
        fontSize: 18,
        fontWeight:"700",
        padding:15,
    },

    moveImageThumbnail: {
        width: "100%",
        alignItems: "center",
    },
    contentList: {
        paddingLeft: 18,
        paddingRight: 30,
    },
    contentMovies:{},
    
})