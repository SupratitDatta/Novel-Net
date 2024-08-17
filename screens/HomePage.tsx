import React from "react";
import { SafeAreaView, View, Text, TouchableOpacity, Image, ScrollView, FlatList, ImageSourcePropType, } from "react-native";
import { COLORS, FONTS, SIZES } from "../constants/theme.ts";
import icons from "../constants/icons.ts";
import booksData from "../constants/BookData";

interface Book {
    id: number;
    bookCover: ImageSourcePropType;
    bookName: string;
    lastRead: string;
    completion: string;
}

interface Category {
    id: number;
    categoryName: string;
    books: Book[];
}

interface HomePageProps {
    navigation: {
        navigate: (screen: string, params?: { book: Book }) => void;
    };
}

const HomePage: React.FC<HomePageProps> = ({ navigation }) => {
    const profileData = {
        name: "",
        point: 200,
    };

    const myBooksData: Book[] = booksData;
    const categoriesData: Category[] = [
        { id: 1, categoryName: "Best Seller", books: booksData.slice(0, 15) },
        { id: 2, categoryName: "The Latest", books: booksData.slice(16, 20) },
        { id: 3, categoryName: "Coming Soon", books: booksData.slice(21, 22) },
        { id: 4, categoryName: "Classics", books: booksData.slice(23, 30) },
    ];

    const [profile, setProfile] = React.useState(profileData);
    const [myBooks, setMyBooks] = React.useState(myBooksData);
    const [categories, setCategories] = React.useState(categoriesData);
    const [selectedCategory, setSelectedCategory] = React.useState<number>(1);

    const LineDivider: React.FC = () => {
        return (
            <View style={{ width: 1, paddingVertical: 20, marginLeft: 10, marginRight: 10 }}>
                <View
                    style={{
                        flex: 1,
                        borderLeftColor: COLORS.lightGray,
                        borderLeftWidth: 1,
                    }}
                ></View>
            </View>
        );
    };

    const renderHeader = () => (
        <View style={{ flex: 1, flexDirection: "row", paddingHorizontal: SIZES.padding }}>
            <View style={{ flex: 1 }}>
                <View
                    style={{
                        marginRight: SIZES.padding,
                        alignItems: "center",
                        justifyContent: "center",
                    }}
                >
                    <Text
                        style={{
                            ...FONTS.h3,
                            color: COLORS.white,
                            marginTop: 20,
                            fontSize: 20,
                        }}
                    >
                        Hello There 👋
                    </Text>
                </View>
            </View>
            <TouchableOpacity
                style={{
                    backgroundColor: COLORS.primary,
                    height: "auto",
                    paddingLeft: 3,
                    paddingRight: SIZES.radius,
                    borderRadius: 20,
                    marginTop: 10,
                }}
                onPress={() => console.log("Point")}
            >
                <View
                    style={{
                        flex: 1,
                        flexDirection: "row",
                        justifyContent: "center",
                        alignItems: "center",
                    }}
                >
                    <View
                        style={{
                            width: 30,
                            height: 30,
                            alignItems: "center",
                            justifyContent: "center",
                            borderRadius: 25,
                            backgroundColor: "rgba(0,0,0,0.5)",
                        }}
                    >
                        <Image
                            source={icons.plus_icon}
                            resizeMode="contain"
                            style={{ width: 20, height: 20 }}
                        />
                    </View>
                    <Text
                        style={{
                            marginLeft: SIZES.base,
                            color: COLORS.white,
                            ...FONTS.body3,
                        }}
                    >
                        {profile.point} points
                    </Text>
                </View>
            </TouchableOpacity>
        </View>
    );

    const renderButtonSection = () => (
        <View style={{ flex: 1, justifyContent: "center", padding: 5 }}>
            <View
                style={{
                    flexDirection: "row",
                    height: 60,
                    backgroundColor: COLORS.secondary,
                    borderRadius: SIZES.radius,
                }}
            >
                {renderButton("Claim", icons.claim_icon, () => console.log("Claim"))}
                <LineDivider />
                {renderButton("Get Point", icons.point_icon, () => console.log("Get Point"))}
                <LineDivider />
                {renderButton("My Card", icons.card_icon, () => console.log("My Card"))}
            </View>
        </View>
    );

    const renderButton = (label: string, icon: ImageSourcePropType, onPress: () => void) => (
        <TouchableOpacity style={{ flex: 1 }} onPress={onPress}>
            <View
                style={{
                    flex: 1,
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "center",
                }}
            >
                <Image
                    source={icon}
                    resizeMode="contain"
                    style={{ width: 25, height: 30, borderRadius: 100 }}
                />
                <Text
                    style={{ marginLeft: 5, ...FONTS.body3, color: COLORS.white }}
                >
                    {label}
                </Text>
            </View>
        </TouchableOpacity>
    );

    const renderMyBookSection = () => (
        <View style={{ flex: 1 }}>
            <View
                style={{
                    paddingHorizontal: SIZES.padding,
                    flexDirection: "row",
                    justifyContent: "space-between",
                }}
            >
                <Text style={{ ...FONTS.h2, color: COLORS.white }}>My Books</Text>
                <TouchableOpacity onPress={() => console.log("See More")}>
                    <Text
                        style={{
                            ...FONTS.body3,
                            color: COLORS.lightGray,
                            alignSelf: "flex-start",
                            textDecorationLine: "underline",
                        }}
                    >
                        see more
                    </Text>
                </TouchableOpacity>
            </View>
            <View style={{ flex: 1, marginTop: SIZES.padding }}>
                <FlatList
                    data={myBooks}
                    renderItem={renderMyBookItem}
                    keyExtractor={(item) => `${item.id}`}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                />
            </View>
        </View>
    );

    const renderMyBookItem = ({
        item,
        index,
    }: {
        item: Book;
        index: number;
    }) => (
        <TouchableOpacity
            style={{
                flex: 1,
                marginLeft: index === 0 ? SIZES.padding : 0,
                marginRight: SIZES.radius,
            }}
            onPress={() => navigation.navigate("BookDetail", { book: item })}
        >
            <Image
                source={item.bookCover}
                resizeMode="cover"
                style={{ width: 180, height: 250, borderRadius: 20 }}
            />
            <View
                style={{
                    marginTop: SIZES.radius,
                    flexDirection: "row",
                    alignItems: "center",
                }}
            >
                <Image
                    source={icons.clock_icon}
                    style={{ width: 20, height: 20, tintColor: COLORS.lightGray }}
                />
                <Text
                    style={{
                        marginLeft: 5,
                        ...FONTS.body3,
                        color: COLORS.lightGray,
                    }}
                >
                    {item.lastRead}
                </Text>
                <Image
                    source={icons.page_icon}
                    style={{
                        marginLeft: SIZES.radius,
                        width: 20,
                        height: 20,
                        tintColor: COLORS.lightGray,
                    }}
                />
                <Text
                    style={{
                        marginLeft: 5,
                        ...FONTS.body3,
                        color: COLORS.lightGray,
                    }}
                >
                    {item.completion}
                </Text>
            </View>
        </TouchableOpacity>
    );

    const renderCategoryHeader = () => (
        <View style={{ flex: 1, paddingLeft: SIZES.padding }}>
            <FlatList
                data={categories}
                showsHorizontalScrollIndicator={false}
                renderItem={renderCategoryItem}
                keyExtractor={(item) => `${item.id}`}
                horizontal
            />
        </View>
    );

    const renderCategoryItem = ({ item }: { item: Category }) => (
        <TouchableOpacity
            style={{ flex: 1, marginRight: SIZES.padding }}
            onPress={() => setSelectedCategory(item.id)}
        >
            <Text
                style={{
                    ...FONTS.h2,
                    color:
                        selectedCategory === item.id
                            ? COLORS.white
                            : COLORS.lightGray,
                }}
            >
                {item.categoryName}
            </Text>
        </TouchableOpacity>
    );

    const renderCategoryData = () => {
        const books =
            categories.find((category) => category.id === selectedCategory)
                ?.books || [];
        return (
            <View style={{ flex: 1, marginTop: SIZES.padding }}>
                <FlatList
                    data={books}
                    renderItem={renderCategoryItemData}
                    keyExtractor={(item) => `${item.id}`}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                />
            </View>
        );
    };

    const renderCategoryItemData = ({
        item,
    }: {
        item: Book;
    }) => (
        <TouchableOpacity
            style={{ flex: 1, marginLeft: SIZES.padding }}
            onPress={() => navigation.navigate("BookDetail", { book: item })}
        >
            <Image
                source={item.bookCover}
                resizeMode="cover"
                style={{ width: 150, height: 220, borderRadius: 15 }}
            />
            <Text
                style={{ marginTop: SIZES.radius, ...FONTS.h3, color: COLORS.white }}
            >
                {item.bookName}
            </Text>
        </TouchableOpacity>
    );

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.black }}>
            <View style={{ height: 150 }}>
                {renderHeader()}
                {renderButtonSection()}
            </View>
            <ScrollView style={{ marginTop: SIZES.radius }}>
                <View>{renderMyBookSection()}</View>

                <View style={{ marginTop: SIZES.padding }}>
                    <View>{renderCategoryHeader()}</View>
                    <View>{renderCategoryData()}</View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

export default HomePage;