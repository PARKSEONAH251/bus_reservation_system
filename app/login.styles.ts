import { StyleSheet, Dimensions, ImageBackground } from 'react-native';

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
    Imagebackground: {
        flex: 1,
        width: '100%',
        height: '100%',
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 30,
    },
    header: {
        width: "100%",
        flexDirection: "row",      // 가로 배치
        alignItems: "center",      // 세로 가운데 정렬
        paddingHorizontal: 16,
        paddingTop: 8,
        marginTop: -160,
    },
    logo: {
        width: 60,                 // 스크린샷 크기 비슷하게
        height: 60,
        borderRadius: 18,
        marginRight: 10,           // 로고-텍스트 간격
    },
    title: {
        flexShrink: 1,             // 가로 공간 부족 시 줄바꿈 허용
        color: "#FFFFFF",
        fontSize: 22,
        fontWeight: "700",
        lineHeight: 22,
        // 배경이 어두운 이미지일 때 가독성 향상 옵션 (원치 않으면 제거)
        textShadowColor: "rgba(0,0,0,0.25)",
        textShadowOffset: { width: 0, height: 1 },
        textShadowRadius: 2
    },
    inputId: {
        width: width * 0.8,
        height: 45,
        borderRadius: 8,
        backgroundColor: "#FFFFFF",
        paddingHorizontal: 15,
        marginTop: 45,
        marginBottom: 15,
        fontSize: 16,
    },
    inputPassword: {
        width: width * 0.8,
        height: 45,
        borderRadius: 8,
        backgroundColor: "#FFFFFF",
        paddingHorizontal: 15,
        marginTop: 30,
        // marginBottom: 45,
        fontSize: 16,
    },
    button: {
        width: width * 0.8,
        height: 45,
        backgroundColor: '#55aaff',
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 55,
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
    },
});

export default styles;