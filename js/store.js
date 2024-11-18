var mapContainer = document.getElementById('map'), // 지도를 표시할 div  
    mapOption = { 
        center: new kakao.maps.LatLng(37.49580188586962, 127.0415920333647), // 지도의 중심좌표표
        level: 9 // 지도의 확대 레벨
    };

var map = new kakao.maps.Map(mapContainer, mapOption); // 지도를 생성합니다
 
// 시/도, 시/군/구 데이터
const sigunguData = {
    "시/도 선택": ["시/군/구 선택"],
    "서울특별시": ["강남구", "서대문구", "마포구", "용산구", "성동구", "서초구", "영등포구", "은평구", "양천구", "광진구", "송파구", "강서구", "구로구", "강동구"],
    "경기도": ["남양주시", "성남시", "하남시", "부천시", "수원시", "파주시"],
    "인천광역시": ["연수구"],
    "부산광역시": ["수영구"],
    "광주광역시": ["광산구", "서구"],
    "대구광역시": ["수성구"],
    "제주특별자치도": ["제주시"],
}

// 마커를 표시할 위치, title 객체 배열
var positions = [
    // 서울지역
    {
        title: '잭슨피자 서대문점', address: '서울특별시 서대문구 경기대로9길 1 1층', call: '02-313-0717', 
        time: {
            mon: '10:30 - 22:00',
            tue: '10:30 - 22:00',
            wed: '10:30 - 22:00',
            thu: '10:30 - 22:00',
            fri: '10:30 - 22:00',
            sat: '10:30 - 22:00',
            sun: '10:30 - 22:00'
        }, lastorder: '21:45',

        latlng: new kakao.maps.LatLng(37.5644624, 126.9636426)
    },
    {
        title: '잭슨피자 공덕점', address: '서울특별시 마포구 백범로31길 7 1동 113호', call: '02-717-0717', 
        time: {
            mon: '11:00 - 22:00',
            tue: '11:00 - 22:00',
            wed: '11:00 - 22:00',
            thu: '11:00 - 22:00',
            fri: '11:00 - 22:00',
            sat: '11:00 - 22:00',
            sun: '11:00 - 22:00'
        }, lastorder: '21:45',
        
        latlng: new kakao.maps.LatLng(37.5452605, 126.9491009)
    },
    {
        title: '잭슨피자 삼각지점', address: '서울특별시 용산구 한강대로 187', call: '02-793-0717', 
        time: {
            mon: '11:00 - 22:00',
            tue: '11:00 - 22:00',
            wed: '11:00 - 22:00',
            thu: '11:00 - 22:00',
            fri: '11:00 - 22:00',
            sat: '11:00 - 22:00',
            sun: '11:00 - 22:00'
        },

        latlng: new kakao.maps.LatLng(37.5354481, 126.973269)
    },
    {
        title: '잭슨피자 왕십리점', address: '서울특별시 성동구 왕십리로 410 J동 101호', call: '02-2298-0717', 
        time: {
            mon: '11:00 - 22:00',
            tue: '11:00 - 22:00',
            wed: '11:00 - 22:00',
            thu: '11:00 - 22:00',
            fri: '11:00 - 22:00',
            sat: '11:00 - 22:00',
            sun: '11:00 - 22:00'
        }, lastorder: '21:50',
        
        latlng: new kakao.maps.LatLng(37.5654152, 127.0238711)
    },
    {
        title: '잭슨피자 연희점', address: '서울특별시 서대문구 연희맛로 33 1층', call: '0507-1408-0728', 
        time: {
            mon: '11:00 - 22:00',
            tue: '11:00 - 22:00',
            wed: '11:00 - 22:00',
            thu: '11:00 - 22:00',
            fri: '11:00 - 22:00',
            sat: '11:00 - 22:00',
            sun: '11:00 - 22:00'
        }, lastorder: '21:50',

        latlng: new kakao.maps.LatLng(37.5679814, 126.9306235)
    },
    {
        title: '잭슨피자 금호점', address: '서울특별시 성동구 금호로 47 1층', call: '0507-1419-7028', 
        time: {
            mon: '11:00 - 22:00',
            tue: '11:00 - 22:00',
            wed: '11:00 - 22:00',
            thu: '11:00 - 22:00',
            fri: '11:00 - 22:00',
            sat: '11:00 - 22:00',
            sun: '11:00 - 22:00'
        },

        latlng: new kakao.maps.LatLng(37.5476441, 127.0254199)
    },
    {
        title: '잭슨피자 이촌점', address: '서울특별시 용산구 서빙고로 67 파크타워 상가 제지1층 B12호', call: '02-798-9290', 
        time: {
            mon: '11:00 - 22:00',
            tue: '11:00 - 22:00',
            wed: '11:00 - 22:00',
            thu: '11:00 - 22:00',
            fri: '11:00 - 22:00',
            sat: '11:00 - 22:00',
            sun: '11:00 - 22:00'
        },
        
        latlng: new kakao.maps.LatLng(37.5238985, 126.971267)
    },
    {
        title: '잭슨피자 압구정점', address: '서울특별시 강남구 압구정로 144 107호', call: '02-512-0717', 
        time: {
            mon: '11:00 - 22:00',
            tue: '11:00 - 22:00',
            wed: '11:00 - 22:00',
            thu: '11:00 - 22:00',
            fri: '11:00 - 22:00',
            sat: '11:00 - 22:00',
            sun: '11:00 - 22:00'
        },

        latlng: new kakao.maps.LatLng(37.5250326, 127.0246708)
    },
    {
        title: '잭슨피자 가좌점', address: '서울특별시 서대문구 수색로 100 DMC래미안E편한세상3단지아파트 후문', call: '02-373-1777', 
        time: {
            mon: '10:30 - 21:50',
            tue: '10:30 - 21:50',
            wed: '10:30 - 21:50',
            thu: '10:30 - 21:50',
            fri: '10:30 - 21:50',
            sat: '10:30 - 23:50',
            sun: '10:30 - 23:50'
        },

        latlng: new kakao.maps.LatLng(37.5752095, 126.906987)
    },
    {
        title: '잭슨피자 잠원점', address: '서울특별시 서초구 나루터로 69', call: '0507-1493-0717', 
        time: {
            mon: '11:00 - 22:00',
            tue: '11:00 - 22:00',
            wed: '11:00 - 22:00',
            thu: '11:00 - 22:00',
            fri: '11:00 - 22:00',
            sat: '11:00 - 22:00',
            sun: '11:00 - 22:00'
        },

        latlng: new kakao.maps.LatLng(37.5157146, 127.0173638)
    },
    {
        title: '잭슨피자 여의도점', address: '서울특별시 영등포구 여의동로3길 10 여의도자이 상가동 1층 107호, 107-1호', call: '0507-1312-1911', 
        time: {
            mon: '11:00 - 22:00',
            tue: '11:00 - 22:00',
            wed: '11:00 - 22:00',
            thu: '11:00 - 22:00',
            fri: '11:00 - 22:00',
            sat: '11:00 - 22:00',
            sun: '11:00 - 22:00'
        }, lastorder: '21:45',

        latlng: new kakao.maps.LatLng(37.5186307, 126.9265374)
    },
    {
        title: '잭슨피자 청담점', address: '서울특별시 강남구 선릉로 711 1층 102호', call: '0507-1471-0726', 
        time: {
            mon: '11:00 - 22:00',
            tue: '11:00 - 22:00',
            wed: '11:00 - 22:00',
            thu: '11:00 - 22:00',
            fri: '11:00 - 22:00',
            sat: '11:00 - 22:00',
            sun: '11:00 - 22:00'
        },

        latlng: new kakao.maps.LatLng(37.5183905, 127.0405994)
    },
    {
        title: '잭슨피자 성수점', address: '서울특별시 성동구 뚝섬로 442', call: '0507-1482-0717', 
        time: {
            mon: '11:00 - 22:00',
            tue: '11:00 - 22:00',
            wed: '11:00 - 22:00',
            thu: '11:00 - 22:00',
            fri: '11:00 - 22:00',
            sat: '11:00 - 22:00',
            sun: '11:00 - 22:00'
        },

        latlng: new kakao.maps.LatLng(37.537492, 127.0594759)
    },
    {
        title: '잭슨피자 연신내점', address: '서울특별시 은평구 통일로 928 1층 109~110호', call: '0507-1495-0727', 
        time: {
            mon: '11:00 - 23:00',
            tue: '11:00 - 23:00',
            wed: '11:00 - 23:00',
            thu: '11:00 - 23:00',
            fri: '11:00 - 23:00',
            sat: '11:00 - 23:00',
            sun: '11:00 - 23:00'
        }, lastorder: '22:50',

        latlng: new kakao.maps.LatLng(37.6256771, 126.920317)
    },
    {
        title: '잭슨피자 방배본점', address: '서울특별시 서초구 방배로 209', call: '02-536-0717', 
        time: {
            mon: '11:00 - 22:00',
            tue: '11:00 - 22:00',
            wed: '11:00 - 22:00',
            thu: '11:00 - 22:00',
            fri: '11:00 - 22:00',
            sat: '11:00 - 22:00',
            sun: '11:00 - 22:00'
        },

        latlng: new kakao.maps.LatLng(37.4918839, 126.9906913)
    },
    {
        title: '잭슨피자 영등포점', address: '서울특별시 영등포구 문래로 180 101호', call: '02-2676-0717', 
        time: {
            mon: '10:30 - 21:40',
            tue: '10:30 - 21:40',
            wed: '10:30 - 21:40',
            thu: '10:30 - 21:40',
            fri: '10:30 - 21:40',
            sat: '10:30 - 21:40',
            sun: '10:30 - 21:40'
        },

        latlng: new kakao.maps.LatLng(37.5180004, 126.9022178)
    },
    {
        title: '잭슨피자 서초점', address: '서울특별시 서초구 서초대로 346 101호', call: '02-581-0717', 
        time: {
            mon: '11:00 - 22:00',
            tue: '11:00 - 22:00',
            wed: '11:00 - 22:00',
            thu: '11:00 - 22:00',
            fri: '11:00 - 22:00',
            sat: '11:00 - 22:00',
            sun: '11:00 - 22:00'
        },

        latlng: new kakao.maps.LatLng(37.4950571, 127.0194077)
    },
    {
        title: '잭슨피자 목동점', address: '서울특별시 양천구 목동동로 431 목동우방빌딩 1층 105, 106호', call: '0507-1408-0719', 
        time: {
            mon: '11:00 - 22:00',
            tue: '11:00 - 22:00',
            wed: '11:00 - 22:00',
            thu: '11:00 - 22:00',
            fri: '11:00 - 22:00',
            sat: '11:00 - 22:00',
            sun: '11:00 - 22:00'
        },

        latlng: new kakao.maps.LatLng(37.5371202, 126.8843439)
    },
    {
        title: '잭슨피자 역삼점', address: '서울특별시 강남구 역삼로 135 1층', call: '02-3453-0717', 
        time: {
            mon: '11:00 - 23:00',
            tue: '11:00 - 23:00',
            wed: '11:00 - 23:00',
            thu: '11:00 - 23:00',
            fri: '11:00 - 23:00',
            sat: '11:00 - 23:00',
            sun: '11:00 - 23:00'
        }, lastorder: '22:30',

        latlng: new kakao.maps.LatLng(37.4945319, 127.0343714)
    },
    {
        title: '잭슨피자 방배역점', address: '서울특별시 서초구 방배로10길 4 거양빌딩 1층', call: '02-582-0717', 
        time: {
            mon: '11:00 - 22:00',
            tue: '11:00 - 22:00',
            wed: '11:00 - 22:00',
            thu: '11:00 - 22:00',
            fri: '11:00 - 22:00',
            sat: '11:00 - 22:00',
            sun: '11:00 - 22:00'
        }, lastorder: '21:50',

        latlng: new kakao.maps.LatLng(37.4808663, 126.9983345)
    },
    {
        title: '잭슨피자 대치점', address: '서울특별시 강남구 선릉로 340 1층 109호', call: '02-554-0717', 
        time: {
            mon: '11:00 - 22:00',
            tue: '11:00 - 22:00',
            wed: '11:00 - 22:00',
            thu: '11:00 - 22:00',
            fri: '11:00 - 22:00',
            sat: '11:00 - 22:00',
            sun: '11:00 - 22:00'
        },

        latlng: new kakao.maps.LatLng(37.5001055, 127.0515445)
    },
    {
        title: '잭슨피자 구의점', address: '서울특별시 광진구 아차산로 442 1층', call: '02-456-0717', 
        time: {
            mon: '11:00 - 22:00',
            tue: '11:00 - 22:00',
            wed: '11:00 - 22:00',
            thu: '11:00 - 22:00',
            fri: '11:00 - 24:00',
            sat: '11:00 - 24:00',
            sun: '11:00 - 24:00'
        },

        latlng: new kakao.maps.LatLng(37.5385209, 127.0917774)
    },
    {
        title: '잭슨피자 잠실본점', address: '서울특별시 송파구 올림픽로 74 잠실월드메르디앙 103호', call: '0507-1467-0719', 
        time: {
            mon: '11:00 - 22:00',
            tue: '11:00 - 22:00',
            wed: '11:00 - 22:00',
            thu: '11:00 - 22:00',
            fri: '11:00 - 22:00',
            sat: '11:00 - 22:00',
            sun: '11:00 - 22:00'
        },

        latlng: new kakao.maps.LatLng(37.5113777, 127.0787398)
    },
    {
        title: '잭슨피자 양재점', address: '서울특별시 서초구 바우뫼로 218 1층', call: '02-574-0717', 
        time: {
            mon: '11:00 - 22:00',
            tue: '11:00 - 22:00',
            wed: '11:00 - 22:00',
            thu: '11:00 - 22:00',
            fri: '11:00 - 22:00',
            sat: '11:00 - 22:00',
            sun: '11:00 - 22:00'
        }, lastorder: '21:40',

        latlng: new kakao.maps.LatLng(37.4810264, 127.0424237)
    },
    {
        title: '잭슨피자 개포점', address: '서울특별시 강남구 개포로 264 개포래미안포레스트 상가1동 101호', call: '0507-1484-0723', 
        time: {
            mon: '11:00 - 21:40',
            tue: '11:00 - 21:40',
            wed: '11:00 - 21:40',
            thu: '11:00 - 21:40',
            fri: '11:00 - 21:40',
            sat: '11:00 - 21:40',
            sun: '11:00 - 21:40'
        }, lastorder: '21:35',

        latlng: new kakao.maps.LatLng(37.4807901, 127.0534328)
    },
    {
        title: '잭슨피자 석촌점', address: '서울특별시 송파구 석촌호수로 210 1층 109호', call: '0507-1395-0718', 
        time: {
            mon: '11:00 - 23:00',
            tue: '11:00 - 23:00',
            wed: '11:00 - 23:00',
            thu: '11:00 - 23:00',
            fri: '11:00 - 23:00',
            sat: '11:00 - 23:00',
            sun: '11:00 - 23:00'
        }, lastorder: '22:50',

        latlng: new kakao.maps.LatLng(37.506495, 127.1004778)
    },
    {
        title: '잭슨피자 마곡점', address: '서울특별시 강서구 공항대로 237 에이스타워마곡 1층 105호', call: '0507-1432-0726', 
        time: {
            mon: '10:30 - 22:00',
            tue: '10:30 - 22:00',
            wed: '10:30 - 22:00',
            thu: '10:30 - 22:00',
            fri: '10:30 - 22:00',
            sat: '10:30 - 22:00',
            sun: '10:30 - 22:00'
        },

        latlng: new kakao.maps.LatLng(37.5593246, 126.8340475)
    },
    {
        title: '잭슨피자 고척점', address: '서울특별시 구로구 경인로 387 스카이타워 107호', call: '02-2616-0717', 
        time: {
            mon: '11:00 - 22:00',
            tue: '11:00 - 22:00',
            wed: '11:00 - 22:00',
            thu: '11:00 - 22:00',
            fri: '11:00 - 22:00',
            sat: '11:00 - 22:00',
            sun: '11:00 - 22:00'
        },

        latlng: new kakao.maps.LatLng(37.497056, 126.8632274)
    },
    {
        title: '잭슨피자 강동구청점', address: '서울특별시 강동구 성내로 20 1층 102호', call: '0507-1354-0733', 
        time: {
            mon: '11:00 - 22:00',
            tue: '11:00 - 22:00',
            wed: '11:00 - 22:00',
            thu: '11:00 - 22:00',
            fri: '11:00 - 22:00',
            sat: '11:00 - 22:00',
            sun: '11:00 - 22:00'
        }, lastorder: '21:40',

        latlng: new kakao.maps.LatLng(37.5286274, 127.1252882)
    },
    {
        title: '잭슨피자 방이점', address: '서울특별시 송파구 오금로 247 1층101호', call: '0507-1479-0717', 
        time: {
            mon: '10:10 - 21:50',
            tue: '10:10 - 21:50',
            wed: '10:10 - 21:50',
            thu: '10:10 - 21:50',
            fri: '10:10 - 21:50',
            sat: '10:10 - 21:50',
            sun: '10:10 - 21:50'
        },

        latlng: new kakao.maps.LatLng(37.5063673, 127.1206851)
    },
    {
        title: '잭슨피자 길동점', address: '서울특별시 강동구 양재대로 1522 103호', call: '0507-1490-0726', 
        time: {
            mon: '11:00 - 22:00',
            tue: '11:00 - 22:00',
            wed: '11:00 - 22:00',
            thu: '11:00 - 22:00',
            fri: '11:00 - 22:00',
            sat: '11:00 - 22:00',
            sun: '11:00 - 22:00'
        }, lastorder: '21:45',

        latlng: new kakao.maps.LatLng(37.5414614, 127.1416617)
    },
    {
        title: '잭슨피자 가락점', address: '서울특별시 송파구 동남로 198 1층', call: '02-430-0717', 
        time: {
            mon: '11:00 - 22:00',
            tue: '11:00 - 22:00',
            wed: '11:00 - 22:00',
            thu: '11:00 - 22:00',
            fri: '11:00 - 22:00',
            sat: '11:00 - 22:00',
            sun: '11:00 - 22:00'
        },

        latlng: new kakao.maps.LatLng(37.4949779, 127.1308331)
    },

    // 경기.인천.강원지역
    {
        title: '잭슨피자 다산점', address: '경기도 남양주시 다산중앙로 119 솔보프라자 1층 101호', call: '0507-1373-0743', 
        time: {
            mon: '11:00 - 22:00',
            tue: '11:00 - 22:00',
            wed: '11:00 - 22:00',
            thu: '11:00 - 22:00',
            fri: '11:00 - 22:00',
            sat: '11:00 - 22:00',
            sun: '11:00 - 22:00'
        },

        latlng: new kakao.maps.LatLng(37.6238369, 127.1529882)
    },
    {
        title: '잭슨피자 위례점', address: '경기도 성남시 수정구 위례광장로 104 1층 1054호, 1055호', call: '0507-1406-0719', 
        time: {
            mon: '11:00 - 21:30',
            tue: '11:00 - 21:30',
            wed: '11:00 - 21:30',
            thu: '11:00 - 21:30',
            fri: '11:00 - 21:30',
            sat: '11:00 - 21:30',
            sun: '11:00 - 21:30'
        }, 
        lastorder: '21:00',

        latlng: new kakao.maps.LatLng(37.4725014, 127.1414515)
    },
    {
        title: '잭슨피자 하남미사점', address: '경기도 하남시 미사강변남로 33 황금프라자 102호', call: '031-791-7170', 
        time: {
            mon: '11:00 - 22:00',
            tue: '11:00 - 22:00',
            wed: '11:00 - 22:00',
            thu: '11:00 - 22:00',
            fri: '11:00 - 22:00',
            sat: '11:00 - 22:00',
            sun: '11:00 - 22:00'
        },

        latlng: new kakao.maps.LatLng(37.5598623, 127.1855745)
    },
    {
        title: '잭슨피자 상동점', address: '경기도 부천시 원미구 조마루로97번길 33-4', call: '032-321-0717', 
        time: {
            mon: '11:00 - 22:00',
            tue: '11:00 - 22:00',
            wed: '11:00 - 22:00',
            thu: '11:00 - 22:00',
            fri: '11:00 - 22:00',
            sat: '11:00 - 22:00',
            sun: '11:00 - 22:00'
        }, lastorder: '21:50',

        latlng: new kakao.maps.LatLng(37.501883, 126.7547392)
    },
    {
        title: '잭슨피자 야탑점', address: '경기도 성남시 분당구 매화로 44 1층 101호 B', call: '0507-1333-0707', 
        time: {
            mon: '10:30 - 22:00',
            tue: '10:30 - 22:00',
            wed: '10:30 - 22:00',
            thu: '10:30 - 22:00',
            fri: '10:30 - 22:00',
            sat: '10:30 - 22:00',
            sun: '10:30 - 22:00'
        }, lastorder: '21:50',

        latlng: new kakao.maps.LatLng(37.4114731, 127.1340595)
    },
    {
        title: '잭슨피자 판교점', address: '경기도 성남시 분당구 동판교로177번길 25 1층 149호', call: '031-706-0717', 
        time: {
            mon: '11:00 - 22:00',
            tue: '11:00 - 22:00',
            wed: '11:00 - 22:00',
            thu: '11:00 - 22:00',
            fri: '11:00 - 22:00',
            sat: '11:00 - 22:00',
            sun: '11:00 - 22:00'
        },

        latlng: new kakao.maps.LatLng(37.3977935, 127.1133624)
    },
    {
        title: '잭슨피자 정자점', address: '경기도 성남시 분당구 정자일로 197 1층', call: '0507-1476-0726', 
        time: {
            mon: '10:00 - 22:00',
            tue: '10:00 - 22:00',
            wed: '10:00 - 22:00',
            thu: '10:00 - 22:00',
            fri: '10:00 - 22:00',
            sat: '10:00 - 22:00',
            sun: '10:00 - 22:00'
        }, lastorder: '21:50',

        latlng: new kakao.maps.LatLng(37.3681326, 127.1055622)
    },
    {
        title: '잭슨피자 광교점', address: '경기도 수원시 영통구 센트럴타운로 85 지1층 Cb37-2호', call: '031-212-0717', 
        time: {
            mon: '11:00 - 21:30',
            tue: '11:00 - 21:30',
            wed: '11:00 - 21:30',
            thu: '11:00 - 21:30',
            fri: '11:00 - 21:30',
            sat: '11:00 - 21:30',
            sun: '11:00 - 21:30'
        }, lastorder: '20:50',

        latlng: new kakao.maps.LatLng(37.2917373, 127.0499953)
    },
    {
        title: '잭슨피자 파주 프리미엄 아울렛점', address: '경기도 파주시 탄현면 필승로 200 1층', call: '0507-1349-7559', 
        time: {
            mon: '10:30 - 21:00',
            tue: '10:30 - 21:00',
            wed: '10:30 - 21:00',
            thu: '10:30 - 21:00',
            fri: '10:30 - 21:00',
            sat: '10:30 - 21:00',
            sun: '10:30 - 21:00'
        }, 

        latlng: new kakao.maps.LatLng(37.7695382, 126.6963036)
    },
    {
        title: '잭슨피자 송도점', address: '인천광역시 연수구 신송로 168 송도 이든프라자 101호', call: '032-203-4483', 
        time: {
            mon: '11:00 - 22:00',
            tue: '11:00 - 22:00',
            wed: '11:00 - 22:00',
            thu: '11:00 - 22:00',
            fri: '11:00 - 22:00',
            sat: '11:00 - 22:00',
            sun: '11:00 - 22:00'
        },

        latlng: new kakao.maps.LatLng(37.3987184, 126.6486043)
    },

    // 영남.충청.호남지역
    {
        title: '잭슨피자 범어점', address: '대구광역시 수성구 동대구로 346 범어서한포레스트 지하1층 3-2호', call: '0507-1436-0730', 
        time: {
            mon: '11:00 - 22:00',
            tue: '11:00 - 22:00',
            wed: '11:00 - 22:00',
            thu: '11:00 - 22:00',
            fri: '11:00 - 22:00',
            sat: '11:00 - 22:00',
            sun: '11:00 - 22:00'
        }, lastorder: '21:55',

        latlng: new kakao.maps.LatLng(35.8608113, 128.6271736)
    },
    {
        title: '잭슨피자 첨단점', address: '광주광역시 광산구 임방울대로826번길 19-20 122호, 123호, 124호', call: '062-972-0717', 
        time: {
            mon: '11:00 - 22:00',
            tue: '11:00 - 22:00',
            wed: '11:00 - 22:00',
            thu: '11:00 - 22:00',
            fri: '11:00 - 22:00',
            sat: '11:00 - 22:00',
            sun: '11:00 - 22:00'
        },

        latlng: new kakao.maps.LatLng(35.2161992, 126.8497123)
    },
    {
        title: '잭슨피자 상무점', address: '광주광역시 서구 상무자유로 173 대영빌딩 1층', call: '062-371-0717', 
        time: {
            mon: '11:00 - 22:00',
            tue: '11:00 - 22:00',
            wed: '11:00 - 22:00',
            thu: '11:00 - 22:00',
            fri: '11:00 - 22:00',
            sat: '11:00 - 22:00',
            sun: '11:00 - 22:00'
        }, lastorder: '21:30',

        latlng: new kakao.maps.LatLng(35.1520367, 126.8534912)
    },
    {
        title: '잭슨피자 광안리점', address: '부산광역시 수영구 광안해변로 149 1~3층', call: '051-622-0717', 
        time: {
            mon: '10:00 - 22:00',
            tue: '10:00 - 22:00',
            wed: '10:00 - 22:00',
            thu: '10:00 - 22:00',
            fri: '10:00 - 23:00',
            sat: '10:00 - 23:00',
            sun: '10:00 - 22:00'
        },

        latlng: new kakao.maps.LatLng(35.1480526, 129.1144145)
    },
    {
        title: '잭슨피자 합동청사점', address: '제주특별자치도 제주시 연삼로 314 1층', call: '0507-1416-0717', 
        time: {
            mon: '11:00 - 22:00',
            tue: '11:00 - 22:00',
            wed: '11:00 - 22:00',
            thu: '11:00 - 22:00',
            fri: '11:00 - 22:00',
            sat: '11:00 - 22:00',
            sun: '11:00 - 22:00'
        }, lastorder: '21:50',

        latlng: new kakao.maps.LatLng(33.491878, 126.5261811)
    },
    {
        title: '잭슨피자 노형점', address: '제주특별자치도 제주시 신형로 19 잭슨피자 노형점', call: '0507-1474-0741', 
        time: {
            mon: '11:00 - 22:30',
            tue: '11:00 - 22:30',
            wed: '11:00 - 22:30',
            thu: '11:00 - 22:30',
            fri: '11:00 - 22:30',
            sat: '11:00 - 22:30',
            sun: '11:00 - 22:30'
        }, lastorder: '22:25',

        latlng: new kakao.maps.LatLng(33.4825787, 126.4774705)
    },    
];

// 마커 이미지의 이미지 주소입니다
var imageSrc = '../img/etc/marker.png'; 
    
// 현재 표시된 마커들을 저장할 배열
var markers = [];

function createMarker(position) {
    var imageSize = new kakao.maps.Size(130, 130); 
    var markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize); 
    var marker = new kakao.maps.Marker({
        map: map, 
        position: position.latlng, 
        title : position.title, 
        image : markerImage 
    });

    // 마커 클릭 이벤트
    kakao.maps.event.addListener(marker, 'click', function() {
        var infoBox = document.querySelector('#map_info .info_box');
        infoBox.querySelector('.title').innerText = position.title;
        infoBox.querySelector('.address').innerText = '주소\n' + position.address;
        infoBox.querySelector('.call').innerText = '전화번호\n' + position.call;
        var timeInfo = '영업 시간<br>' +
            '월요일: ' + position.time.mon + '<br>' +
            '화요일: ' + position.time.tue + '<br>' +
            '수요일: ' + position.time.wed + '<br>' +
            '목요일: ' + position.time.thu + '<br>' +
            '금요일: ' + position.time.fri + '<br>' +
            '토요일: ' + position.time.sat + '<br>' +
            '일요일: ' + position.time.sun;
            // '일요일: ' + position.time.sun + '<br>' +
            // '브레이크: ' + position.time.break;
        if (position.time.break) {
            timeInfo += '<br>브레이크: ' + position.time.break;
        }
        infoBox.querySelector('.time').innerHTML = timeInfo;

        document.getElementById('map_info').style.display = 'block';
    });

    markers.push(marker);
}

// 초기 마커 생성
positions.forEach(createMarker);

function updateSigunguOptions() {
    var sido = document.getElementById('sido').value;
    var sigunguSelect = document.getElementById('sigungu');

    sigunguSelect.innerHTML = '';

    if (sido && sigunguData[sido]) {
        sigunguData[sido].forEach(function(sigungu) {
            var option = document.createElement('option');
            option.value = sigungu;
            option.textContent = sigungu;
            sigunguSelect.appendChild(option);
        });
    }

}

function filterMarkers() {
    var sido = document.getElementById('sido').value;
    var sigungu = document.getElementById('sigungu').value;
    var search = document.getElementById('search').value.toLowerCase();

    // 기존 마커 제거
    markers.forEach(marker => marker.setMap(null));
    markers = [];

    var filteredPositions = positions.filter(position => {
        var addressParts = position.address.split(' ');
        var addressSido = addressParts[0];
        var addressSigungu = addressParts[1];
        var title = position.title.toLowerCase();

        return (!sido || addressSido === sido) &&
               (!sigungu || addressSigungu === sigungu) &&
               (!search || title.includes(search));
    });  

    // 필터링된 마커 생성
    filteredPositions.forEach(createMarker);

    // 필터링 결과가 있을 경우에도 map_info는 숨긴 상태 유지
    document.getElementById('map_info').style.display = 'none';

    // 선택된 시/도 및 군/구의 중심 좌표 설정
    if (filteredPositions.length > 0) {
        var centerLat = 0;
        var centerLng = 0;
        filteredPositions.forEach(function(position) {
            centerLat += position.latlng.getLat();
            centerLng += position.latlng.getLng();
        });
        centerLat /= filteredPositions.length;
        centerLng /= filteredPositions.length;
        var centerPosition = new kakao.maps.LatLng(centerLat, centerLng);

        // 지도의 중심을 변경하고 레벨을 5로 설정
        map.setCenter(centerPosition);
        map.setLevel(6);
    }
}

// 페이지 로드 시 map_info 숨기기
document.getElementById('map_info').style.display = 'none';

// sido 선택 시 sigungu 업데이트
document.getElementById('sido').addEventListener('change', updateSigunguOptions)

// Enter 키로 필터링하기
document.getElementById("search").addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {
        event.preventDefault();
        filterMarkers();
    }
});