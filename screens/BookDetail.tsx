import React from "react";
import { View, Text, ImageBackground, Pressable, Image, ScrollView, Animated, StyleSheet, NativeScrollEvent, NativeSyntheticEvent } from "react-native";
import { FONTS, COLORS, SIZES } from "../constants/theme.ts";
import icons from "../constants/icons.ts";

interface BookDetailProps {
    route: {
        params: {
            book: {
                bookCover: any;
                backgroundColor: string;
                navTintColor: string;
                bookName: string;
                author: string;
                rating: number;
                pageNo: number;
                language: string;
                description: string;
            };
        };
    };
    navigation: {
        goBack: () => void;
    };
}

const LineDivider: React.FC = () => {
    return (
        <View style={{ width: 1, paddingVertical: 5 }}>
            <View style={{ flex: 1, borderLeftColor: COLORS.lightGray, borderLeftWidth: 1 }} />
        </View>
    );
};

const BookDetail: React.FC<BookDetailProps> = ({ route, navigation }) => {
    const [book, setBook] = React.useState(route.params.book);
    const [scrollViewWholeHeight, setScrollViewWholeHeight] = React.useState(1);
    const [scrollViewVisibleHeight, setScrollViewVisibleHeight] = React.useState(0);
    const indicator = React.useRef(new Animated.Value(0)).current;

    React.useEffect(() => {
        setBook(route.params.book);
    }, [route.params]);

    const renderBookInfoSection = () => {
        return (
            <View style={{ flex: 1 }}>
                <ImageBackground
                    source={book.bookCover}
                    resizeMode="cover"
                    style={StyleSheet.absoluteFillObject}
                />

                {/* Color Overlay */}
                <View
                    style={[
                        StyleSheet.absoluteFillObject,
                        { backgroundColor: book.backgroundColor },
                    ]}
                />

                {/* Navigation header */}
                <View
                    style={{
                        flexDirection: "row",
                        paddingHorizontal: SIZES.radius,
                        height: 80,
                        alignItems: "flex-end",
                    }}
                >
                    <Pressable
                        style={{ marginLeft: SIZES.base }}
                        onPress={() => navigation.goBack()}
                    >
                        <Image
                            source={icons.back_arrow_icon}
                            resizeMode="contain"
                            style={{ width: 25, height: 25, tintColor: book.navTintColor }}
                        />
                    </Pressable>

                    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
                        <Text style={{ ...FONTS.h3, color: book.navTintColor }}>Book Detail</Text>
                    </View>

                    <Pressable
                        style={{ marginRight: SIZES.base }}
                        onPress={() => console.log("Click More")}
                    >
                        <Image
                            source={icons.more_icon}
                            resizeMode="contain"
                            style={{
                                width: 30,
                                height: 30,
                                tintColor: book.navTintColor,
                                alignSelf: "flex-end",
                            }}
                        />
                    </Pressable>
                </View>

                {/* Book Cover */}
                <View style={{ flex: 5, paddingTop: SIZES.padding2, alignItems: "center" }}>
                    <Image
                        source={book.bookCover}
                        resizeMode="contain"
                        style={{ flex: 1, width: 150, height: "auto" }}
                    />
                </View>

                {/* Book Name and Author */}
                <View style={{ flex: 1.8, alignItems: "center", justifyContent: "center" }}>
                    <Text style={{ ...FONTS.h2, color: book.navTintColor }}>{book.bookName}</Text>
                    <Text style={{ ...FONTS.body3, color: book.navTintColor }}>{book.author}</Text>
                </View>

                {/* Book Info */}
                <View
                    style={{
                        flexDirection: "row",
                        paddingVertical: 20,
                        margin: SIZES.padding,
                        borderRadius: SIZES.radius,
                        backgroundColor: "rgba(0,0,0,0.3)",
                    }}
                >
                    {/* Rating */}
                    <View style={{ flex: 1, alignItems: "center" }}>
                        <Text style={{ ...FONTS.h3, color: COLORS.white }}>{book.rating}</Text>
                        <Text style={{ ...FONTS.body4, color: COLORS.white }}>Rating</Text>
                    </View>

                    <LineDivider />

                    {/* Pages */}
                    <View
                        style={{ flex: 1, paddingHorizontal: SIZES.radius, alignItems: "center" }}
                    >
                        <Text style={{ ...FONTS.h3, color: COLORS.white }}>{book.pageNo}</Text>
                        <Text style={{ ...FONTS.body4, color: COLORS.white }}>
                            Number of Pages
                        </Text>
                    </View>

                    <LineDivider />

                    {/* Language */}
                    <View style={{ flex: 1, alignItems: "center" }}>
                        <Text style={{ ...FONTS.h3, color: COLORS.white }}>{book.language}</Text>
                        <Text style={{ ...FONTS.body4, color: COLORS.white }}>Language</Text>
                    </View>
                </View>
            </View>
        );
    };

    const renderBookDescription = () => {
        const indicatorSize =
            scrollViewWholeHeight > scrollViewVisibleHeight
                ? (scrollViewVisibleHeight * scrollViewVisibleHeight) /
                scrollViewWholeHeight
                : scrollViewVisibleHeight;
        const difference =
            scrollViewVisibleHeight > indicatorSize
                ? scrollViewVisibleHeight - indicatorSize
                : 1;

        return (
            <View style={{ flex: 1, flexDirection: "row", padding: SIZES.padding }}>
                {/* Custom Scrollbar */}
                <View style={{ width: 4, height: "100%", backgroundColor: COLORS.gray }}>
                    <Animated.View
                        style={{
                            width: 4,
                            height: indicatorSize,
                            backgroundColor: COLORS.lightGray,
                            transform: [
                                {
                                    translateY: indicator.interpolate({
                                        inputRange: [0, difference],
                                        outputRange: [0, difference],
                                        extrapolate: "clamp",
                                    }),
                                },
                            ],
                        }}
                    />
                </View>

                {/* Description */}
                <ScrollView
                    contentContainerStyle={{ paddingLeft: SIZES.padding2 }}
                    showsVerticalScrollIndicator={false}
                    scrollEventThrottle={16}
                    onContentSizeChange={(width, height) => setScrollViewWholeHeight(height)}
                    onLayout={({ nativeEvent: { layout: { height } } }) =>
                        setScrollViewVisibleHeight(height)
                    }
                    onScroll={Animated.event(
                        [{ nativeEvent: { contentOffset: { y: indicator } } }],
                        { useNativeDriver: false }
                    )}
                >
                    <Text
                        style={{
                            ...FONTS.h2,
                            color: COLORS.white,
                            marginBottom: SIZES.padding,
                        }}
                    >
                        Description
                    </Text>
                    <Text style={{ ...FONTS.body2, color: COLORS.lightGray }}>
                        {book.description}
                    </Text>
                </ScrollView>
            </View>
        );
    };

    const renderBottomButton = () => {
        return (
            <View style={{ flex: 1, flexDirection: "row" }}>
                {/* Bookmark */}
                <Pressable
                    style={{
                        width: 60,
                        backgroundColor: COLORS.secondary,
                        marginLeft: SIZES.padding,
                        marginVertical: SIZES.base,
                        borderRadius: SIZES.radius,
                        alignItems: "center",
                        justifyContent: "center",
                    }}
                    onPress={() => console.log("Bookmark")}
                >
                    <Image
                        source={icons.bookmark_icon}
                        resizeMode="contain"
                        style={{ width: 25, height: 25, tintColor: COLORS.lightGray }}
                    />
                </Pressable>

                {/* Start Reading */}
                <Pressable
                    style={{
                        flex: 1,
                        backgroundColor: COLORS.primary,
                        marginHorizontal: SIZES.base,
                        marginVertical: SIZES.base,
                        borderRadius: SIZES.radius,
                        alignItems: "center",
                        justifyContent: "center",
                    }}
                    onPress={() => console.log("Start Reading")}
                >
                    <Text style={{ ...FONTS.h3, color: COLORS.white }}>Start Reading</Text>
                </Pressable>
            </View>
        );
    };

    if (book) {
        return (
            <View style={{ flex: 1, backgroundColor: COLORS.black }}>
                {/* Book Cover Section */}
                <View style={{ flex: 4 }}>{renderBookInfoSection()}</View>

                {/* Description */}
                <View style={{ flex: 2 }}>{renderBookDescription()}</View>

                {/* Buttons */}
                <View style={{ height: 70, marginBottom: 30 }}>{renderBottomButton()}</View>
            </View>
        );
    } else {
        return null;
    }
};

export default BookDetail;