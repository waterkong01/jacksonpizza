// 이미지 파일 경로 배열
const menuItems = [

    // 오리지날 크러스트 피자
    { item_no: 1, path: '../img/menu/마가리타.png', 
        category: 'original crust pizza', name: '마가리타', size_p: 'Personal: 8,800', size_r: 'Regular: 16,800', size_l: 'Large: 26,800',
        description: '토마토 소스, 모짜렐라 치즈, <br>그라나 파다노 치즈, 오레가노, <br>바질 그리고 올리브오일',
        nutritive_components: '총 중량(g)<br>조각수<br>1조각 중량(g)<br>열량(kcal)<br>당류(g)<br>단백질(g)<br>포화지방(g)<br>나트륨(g)'
    },
    { item_no: 2, path: '../img/menu/파이브치즈.png', 
        category: 'original crust pizza', name: '파이브치즈', size_p: 'Personal: 9,800', size_r: 'Regular: 19,300', size_l: 'Large: 31,000',
        description: '토마토 소스, 모짜렐라 치즈, <br>그라나 파다노 치즈, 오레가노, <br>파마산 치즈, 고다 치즈 <br>그리고 체다 치즈',
        nutritive_components: '총 중량(g)<br>조각수<br>1조각 중량(g)<br>열량(kcal)<br>당류(g)<br>단백질(g)<br>포화지방(g)<br>나트륨(g)'
    },
    { item_no: 3, path: '../img/menu/페퍼로니.png', 
        category: 'original crust pizza', name: '페퍼로니', size_p: 'Personal: 9,300', size_r: 'Regular: 18,300', size_l: 'Large: 28,300',
        description: '토마토 소스, 모짜렐라 치즈, <br>그라나 파다노 치즈, 오레가노 <br>그리고 페퍼로니',
        nutritive_components: '총 중량(g)<br>조각수<br>1조각 중량(g)<br>열량(kcal)<br>당류(g)<br>단백질(g)<br>포화지방(g)<br>나트륨(g)'
    },
    { item_no: 4, path: '../img/menu/페퍼로니딜라이트.png', 
        category: 'original crust pizza', name: '페퍼로니 딜라이트', size_p: 'Personal: 10,800', size_r: 'Regular: 20,300', size_l: 'Large: 32,300',
        description: '토마토 소스, 모짜렐라 치즈, <br>그라나 파다노 치즈, 오레가노, <br>페퍼로니, 그릴에 구운 파프리카 <br>그리고 향긋한 쪽파',
        nutritive_components: '총 중량(g)<br>조각수<br>1조각 중량(g)<br>열량(kcal)<br>당류(g)<br>단백질(g)<br>포화지방(g)<br>나트륨(g)'
    },
    { item_no: 5, path: '../img/menu/하와이안.png', 
        category: 'original crust pizza', name: '하와이안', size_p: 'Personal: 11,000', size_r: 'Regular: 21,800', size_l: 'Large: 33,800',
        description: '토마토 소스, 모짜렐라 치즈, <br>그라나 파다노 치즈, 파인애플, <br>캐네디언 베이컨 <br>그리고 신선한 바질',
        nutritive_components: '총 중량(g)<br>조각수<br>1조각 중량(g)<br>열량(kcal)<br>당류(g)<br>단백질(g)<br>포화지방(g)<br>나트륨(g)'
    },
    { item_no: 6, path: '../img/menu/아메리칸스피리트.png', 
        category: 'original crust pizza', name: '아메리칸 스피리트', size_p: 'Personal: 11,300', size_r: 'Regular: 22,000', size_l: 'Large: 34,000',
        description: '토마토 소스, 모짜렐라 치즈, <br>그라나 파다노 치즈, 페퍼로니, <br>크리스피 베이컨 <br>그리고 양송이 버섯',
        nutritive_components: '총 중량(g)<br>조각수<br>1조각 중량(g)<br>열량(kcal)<br>당류(g)<br>단백질(g)<br>포화지방(g)<br>나트륨(g)'
    },
    { item_no: 7, path: '../img/menu/그릭콜로지.png', 
        category: 'original crust pizza', name: '그릭콜로지', size_p: 'Personal: 11,000', size_r: 'Regular: 21,800', size_l: 'Large: 33,800',
        description: '토마토 소스, 모짜렐라 치즈, <br>그라나 파다노 치즈, 오레가노, <br>쥬키니, 가지, 그릴에 구운 파프리카, <br>적양파, 페타치즈 <br>그리고 신선한 바질',
        nutritive_components: '총 중량(g)<br>조각수<br>1조각 중량(g)<br>열량(kcal)<br>당류(g)<br>단백질(g)<br>포화지방(g)<br>나트륨(g)'
    },
    { item_no: 8, path: '../img/menu/멜팅치즈버거.png', 
        category: 'original crust pizza', name: '멜팅 치즈 버거', size_p: 'Personal: 13,800', size_r: 'Regular: 25,800', size_l: 'Large: 38,800',
        description: '토마토 소스, 모짜렐라 치즈, <br>그라나 파다노 치즈, 아메리칸 치즈, <br>크러쉬드 쇠고기 패티, <br>크리스피 베이컨, <br>적양파, 썬드라이 토마토 <br>그리고 딜 피클',
        nutritive_components: '총 중량(g)<br>조각수<br>1조각 중량(g)<br>열량(kcal)<br>당류(g)<br>단백질(g)<br>포화지방(g)<br>나트륨(g)'
    },
    { item_no: 9, path: '../img/menu/수퍼잭슨.png', 
        category: 'original crust pizza', name: '수퍼 잭슨', size_p: 'Personal: 13,800', size_r: 'Regular: 25,800', size_l: 'Large: 38,800',
        description: '토마토 소스, 모짜렐라 치즈, <br>그라나 파다노 치즈, 오레가노, <br>페퍼로니, 이탈리안 소시지, <br>크러쉬드 쇠고기 패티, <br>크리스피 베이컨, 적양파, <br>그릴에 구운 파프리카 <br>그리고 신선한 바질',
        nutritive_components: '총 중량(g)<br>조각수<br>1조각 중량(g)<br>열량(kcal)<br>당류(g)<br>단백질(g)<br>포화지방(g)<br>나트륨(g)'
    },
    { item_no: 10, path: '../img/menu/레전드.png', 
        category: 'original crust pizza', name: '레전드', size_p: 'Personal: 13,800', size_r: 'Regular: 25,800', size_l: 'Large: 38,800',
        description: '바질페스토, 모짜렐라 치즈, <br>그라나 파다노 치즈, 파마산 치즈 <br>그리고 마스카포네 치즈',
        nutritive_components: '총 중량(g)<br>조각수<br>1조각 중량(g)<br>열량(kcal)<br>당류(g)<br>단백질(g)<br>포화지방(g)<br>나트륨(g)'
    },
    { item_no: 11, path: '../img/menu/레알잭슨.png', 
        category: 'original crust pizza', name: '레알 잭슨', size_p: 'Personal: 13,800', size_r: 'Regular: 25,800', size_l: 'Large: 38,800',
        description: '토마토 소스, 모짜렐라 치즈, <br>그라나 파다노 치즈, 오레가노, <br>스파이시 초리조 소시지, <br>그릴에 구운 파프리카, 프리스토 콘칩 <br>그리고 치미추리 소스',
        nutritive_components: '총 중량(g)<br>조각수<br>1조각 중량(g)<br>열량(kcal)<br>당류(g)<br>단백질(g)<br>포화지방(g)<br>나트륨(g)'
    },
    { item_no: 12, path: '../img/menu/베이컨체다할라피뇨.png', 
        category: 'original crust pizza', name: '베이컨 체다 할라피뇨', size_p: 'Personal: 11,800', size_r: 'Regular: 23,300', size_l: 'Large: 36,000',
        description: '토마토 소스, 모짜렐라 치즈, <br>그라나 파다노 치즈, 오레가노, <br>체다 치즈, 크리스피 베이컨, 할라피뇨 <br>그리고 스리라차 소스',
        nutritive_components: '총 중량(g)<br>조각수<br>1조각 중량(g)<br>열량(kcal)<br>당류(g)<br>단백질(g)<br>포화지방(g)<br>나트륨(g)'
    },

    // 딥디쉬 피자
    { item_no: 13, path: '../img/menu/딥디쉬_오리지널치즈.png', 
        category: 'deep dish pizza', name: '오리지널 치즈', size_o: 'One-size: 17,300',
        description: '마리나라 소스, 모짜렐라 치즈, <br>그라나 파다노 치즈, 파마산 치즈, <br>오레가노 <br>그리고 신선한 바질',
        nutritive_components: '총 중량(g)<br>조각수<br>1조각 중량(g)<br>열량(kcal)<br>당류(g)<br>단백질(g)<br>포화지방(g)<br>나트륨(g)',
        only_direct_management_store: 'Only Direct Management Store<br>한남점, 방배본점, 방배역점, 삼각지점, <br>이촌점, 영등포점, 공덕점, 서초점'
    },
    { item_no: 14, path: '../img/menu/딥디쉬_닥터페퍼로니.png', 
        category: 'deep dish pizza', name: '닥터 페퍼로니', size_o: 'One-size: 18,300',
        description: '마리나라 소스, 모짜렐라 치즈, <br>그라나 파다노 치즈, 파마산 치즈, <br>오레가노, 페퍼로니 <br>그리고 또 페퍼로니',
        nutritive_components: '총 중량(g)<br>조각수<br>1조각 중량(g)<br>열량(kcal)<br>당류(g)<br>단백질(g)<br>포화지방(g)<br>나트륨(g)',
        only_direct_management_store: 'Only Direct Management Store<br>한남점, 방배본점, 방배역점, 삼각지점, <br>이촌점, 영등포점, 공덕점, 서초점'
    },
    { item_no: 15, path: '../img/menu/딥디쉬_잭슨파이브.png', 
        category: 'deep dish pizza', name: '잭슨 파이브', size_o: 'One-size: 19,800',
        description: '마리나라 소스, 모짜렐라 치즈, <br>그라나 파다노 치즈, 파마산 치즈, <br>페퍼로니, 크리스피 베이컨 <br>그리고 양송이 버섯',
        nutritive_components: '총 중량(g)<br>조각수<br>1조각 중량(g)<br>열량(kcal)<br>당류(g)<br>단백질(g)<br>포화지방(g)<br>나트륨(g)',
        only_direct_management_store: 'Only Direct Management Store<br>한남점, 방배본점, 방배역점, 삼각지점, <br>이촌점, 영등포점, 공덕점, 서초점'
    },

    // 클래식 오븐 베이크 스파게티
    { item_no: 16, path: '../img/menu/레드소스.png', 
        category: 'classic oven baked spaghetti', name: '레드 소스 스파게티', size_o: 'One-size: 9,300',
        description: '토마토 소스 (매운맛X)',
        nutritive_components: '총 중량(g)<br>조각수<br>1조각 중량(g)<br>열량(kcal)<br>당류(g)<br>단백질(g)<br>포화지방(g)<br>나트륨(g)'
    },
    { item_no: 17, path: '../img/menu/핑크소스.png', 
        category: 'classic oven baked spaghetti', name: '핑크 소스 스파게티', size_o: 'One-size: 9,800',
        description: '로제 소스 (토마토 + 크림 소스)',
        nutritive_components: '총 중량(g)<br>조각수<br>1조각 중량(g)<br>열량(kcal)<br>당류(g)<br>단백질(g)<br>포화지방(g)<br>나트륨(g)'
    },
    { item_no: 18, path: '../img/menu/게토볼로네제.png', 
        category: 'classic oven baked spaghetti', name: '게토 볼로네제', size_o: 'One-size: 12,000',
        description: '게토볼로네제 소스',
        nutritive_components: '총 중량(g)<br>조각수<br>1조각 중량(g)<br>열량(kcal)<br>당류(g)<br>단백질(g)<br>포화지방(g)<br>나트륨(g)',
        only_direct_management_store: 'Only Direct Management Store<br>한남점, 방배본점, 방배역점, 삼각지점, <br>이촌점, 영등포점, 공덕점, 서초점'
    },

    // 프라이드
    // { item_no: 19, path: '../img/menu/크리스피후라이드치킨.png', 
    //     category: 'fried', name: '크리스피 후라이드 치킨', size_o: 'One-size: 13,000',
    //     description: '반마리 (4조각), 양념치킨 소스 1ea 제공',
    //     nutritive_components: '총 중량(g)<br>조각수<br>1조각 중량(g)<br>열량(kcal)<br>당류(g)<br>단백질(g)<br>포화지방(g)<br>나트륨(g)'
    // },
    { item_no: 20, path: '../img/menu/텐더.png', 
        category: 'fried', name: '크리스피 핫 치킨텐더 (4pc)', size_o: 'One-size: 6,800',
        description: '매콤한 텐더, 케이준 소스 1ea 제공',
        nutritive_components: '총 중량(g)<br>조각수<br>1조각 중량(g)<br>열량(kcal)<br>당류(g)<br>단백질(g)<br>포화지방(g)<br>나트륨(g)'
    },
    { item_no: 21, path: '../img/menu/윙.png', 
        category: 'fried', name: '크리스피 핫 윙 (4pc)', size_o: 'One-size: 7,800',
        description: '매콤한 윙, 케이준 소스 1ea 제공',
        nutritive_components: '총 중량(g)<br>조각수<br>1조각 중량(g)<br>열량(kcal)<br>당류(g)<br>단백질(g)<br>포화지방(g)<br>나트륨(g)'
    },
    { item_no: 22, path: '../img/menu/프렌치프라이즈.png', 
        category: 'fried', name: '프렌치 프라이즈', size_o: 'One-size: 6,000',
        description: '케찹 1ea 제공',
        nutritive_components: '총 중량(g)<br>조각수<br>1조각 중량(g)<br>열량(kcal)<br>당류(g)<br>단백질(g)<br>포화지방(g)<br>나트륨(g)'
    },
    { item_no: 23, path: '../img/menu/치즈프라이즈.png', 
        category: 'fried', name: '치즈 프라이즈', size_o: 'One-size: 8,000',
        description: '나쵸치즈+슈레드파마산',
        nutritive_components: '총 중량(g)<br>조각수<br>1조각 중량(g)<br>열량(kcal)<br>당류(g)<br>단백질(g)<br>포화지방(g)<br>나트륨(g)'
    },
    { item_no: 24, path: '../img/menu/잭슨프라이즈.png', 
        category: 'fried', name: '잭슨 프라이즈', size_o: 'One-size: 11,000',
        description: '라구소스+스리라차+나쵸치즈<br>+사워크림+슈레드파마산+쪽파',
        nutritive_components: '총 중량(g)<br>조각수<br>1조각 중량(g)<br>열량(kcal)<br>당류(g)<br>단백질(g)<br>포화지방(g)<br>나트륨(g)',
        only_direct_management_store: 'Only Direct Management Store<br>한남점, 방배본점, 방배역점, 삼각지점, <br>이촌점, 영등포점, 공덕점, 서초점'
    },
    { item_no: 25, path: '../img/menu/어니언링.png', 
        category: 'fried', name: '어니언링', size_o: 'One-size: 8,000',
        description: '나쵸치즈+제스티소스<br>+슈레드파마산+쪽파',
        nutritive_components: '총 중량(g)<br>조각수<br>1조각 중량(g)<br>열량(kcal)<br>당류(g)<br>단백질(g)<br>포화지방(g)<br>나트륨(g)'
    },

    // 사이드
    { item_no: 26, path: '../img/menu/코울슬로.png', 
        category: 'side item', name: '코울슬로 샐러드', size_o: 'One-size: 3000',
        description: '양배추, 당근, 양파 그리고 <br>드레싱 소스가 믹스된 샐러드',
        nutritive_components: '총 중량(g)<br>조각수<br>1조각 중량(g)<br>열량(kcal)<br>당류(g)<br>단백질(g)<br>포화지방(g)<br>나트륨(g)'
    },
    { item_no: 27, path: '../img/menu/피클.png', 
        category: 'side item', name: '홈메이드 피클', size_o: 'One-size: 500',
        description: '오이, 무, 양배추를 손질하여 <br>직접 만든 홈메이드 피클',
        nutritive_components: '총 중량(g)<br>조각수<br>1조각 중량(g)<br>열량(kcal)<br>당류(g)<br>단백질(g)<br>포화지방(g)<br>나트륨(g)'
    },
    { item_no: 28, path: '../img/menu/할라피뇨.png', 
        category: 'side item', name: '할라피뇨', size_o: 'One-size: 500',
        description: '',
        nutritive_components: '총 중량(g)<br>조각수<br>1조각 중량(g)<br>열량(kcal)<br>당류(g)<br>단백질(g)<br>포화지방(g)<br>나트륨(g)'
    },
    { item_no: 29, path: '../img/menu/렌치소스.png', 
        category: 'side item', name: '홀스레디시 렌치 소스', size_o: 'One-size: 500',
        description: '사워크림, 마요네즈 등 여러가지 재료와 마늘, 파세리, 딜로 향을 더해 <br>직접 만든 디핑 소스',
        nutritive_components: '총 중량(g)<br>조각수<br>1조각 중량(g)<br>열량(kcal)<br>당류(g)<br>단백질(g)<br>포화지방(g)<br>나트륨(g)'
    },
    { item_no: 30, path: '../img/menu/케이준소스.png', 
        category: 'side item', name: '케이준 소스', size_o: 'One-size: 500',
        description: '',
        nutritive_components: '총 중량(g)<br>조각수<br>1조각 중량(g)<br>열량(kcal)<br>당류(g)<br>단백질(g)<br>포화지방(g)<br>나트륨(g)'
    },

    // 음료
    { item_no: 31, path: '../img/menu/코카콜라.png', 
        category: 'drink', name: '코카콜라', size_o: '용량 및 가격 매장별 상이',
        description: '',
        nutritive_components: '총 중량(g)<br>조각수<br>1조각 중량(g)<br>열량(kcal)<br>당류(g)<br>단백질(g)<br>포화지방(g)<br>나트륨(g)'
    },
    { item_no: 32, path: '../img/menu/코카콜라제로.png', 
        category: 'drink', name: '코카콜라 제로', size_o: '용량 및 가격 매장별 상이',
        description: '',
        nutritive_components: '총 중량(g)<br>조각수<br>1조각 중량(g)<br>열량(kcal)<br>당류(g)<br>단백질(g)<br>포화지방(g)<br>나트륨(g)'
    },
    { item_no: 33, path: '../img/menu/스프라이트.png', 
        category: 'drink', name: '스프라이트', size_o: '용량 및 가격 매장별 상이',
        description: '',
        nutritive_components: '총 중량(g)<br>조각수<br>1조각 중량(g)<br>열량(kcal)<br>당류(g)<br>단백질(g)<br>포화지방(g)<br>나트륨(g)'
    },
];



// { item_no: , path: '../img/menu/.png', 
// name: '', size_p: 'Personal: ', size_r: 'Regular: ', size_l: 'Large: ',
// description: ''
// },