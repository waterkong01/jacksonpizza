document.addEventListener('DOMContentLoaded', function () {
    const navItems = document.querySelectorAll('.nav-item');
    const menuList = document.getElementById('menu-list');
    // const menuBtn = document.querySelectorAll('#btn2');

    // sessionStorage에 저장된 카테고리를 확인
    const storedCategory = sessionStorage.getItem('selectedCategory');

    if (storedCategory) {
        // 저장된 카테고리의 아이템만 표시
        displayMenuItems(storedCategory);
        sessionStorage.removeItem('selectedCategory'); // 사용 후 카테고리 삭제
    } else {
        // 저장된 카테고리가 없으면 모든 아이템을 표시
        displayMenuItems('all');
    }

    // 초기 로드 시 모든 메뉴를 표시합니다.
    // displayMenuItems('all');

    // 네비게이션 바 클릭 이벤트 처리
    navItems.forEach(item => {
        item.addEventListener('click', function () {
            // 모든 네비게이션 항목에서 active 클래스 제거
            navItems.forEach(nav => nav.classList.remove('active'));
            // 클릭된 항목에 active 클래스 추가
            this.classList.add('active');

            // 해당 카테고리에 맞는 메뉴 항목 표시
            const category = this.getAttribute('data-category');
            displayMenuItems(category);
        });
    });

    function displayMenuItems(category) {
        menuList.innerHTML = '';

        // 메뉴 아이템을 필터링하여 해당 카테고리만 표시
        const filteredItems = category === 'all' ? menuItems : menuItems.filter(item => item.category === category);

        // 필터링된 메뉴 아이템을 DOM에 추가
        filteredItems.forEach(item => {
            const menuItemElement = document.createElement('div');
            menuItemElement.className = 'menu-item';

            let sizeP = item.size_p ? `<p id="sizep">${item.size_p}</p>` : '';
            let sizeR = item.size_r ? `<p id="sizer">${item.size_r}</p>` : '';
            let sizeL = item.size_l ? `<p id="sizel">${item.size_l}</p>` : '';
            let sizeO = item.size_o ? `<p id="sizeo">${item.size_o}</p>` : '';
            let onlyDMS = item.only_direct_management_store ? `<p id="dms">${item.only_direct_management_store}</p>` : '';

            menuItemElement.innerHTML = `
                <div class="menu-item-inner">
                    <div class="menu-item-front">
                        <img src="${item.path}" alt="${item.name}">
                        <h3>${item.name}</h3>
                    </div>
                    <div class="menu-item-back">
                        <p id="description">${item.description}</p>
                        ${sizeP}
                        ${sizeR}
                        ${sizeL}
                        ${sizeO}
                        ${onlyDMS}

                        <div class="detail_btn" data-category="${item.category}">
                            <a href="menu.html#${item.category}">자세히 보기</a>
                        </div>
                    </div>
                </div>
            `;
            menuList.appendChild(menuItemElement);
        });
        // 각 메뉴 아이템의 detail_btn 클릭 이벤트 처리
        const detailBtns = menuList.querySelectorAll('.detail_btn');
        detailBtns.forEach(btn => {
            btn.addEventListener('click', function (event) {
                const category = this.getAttribute('data-category');
                // 카테고리에 해당하는 위치로 스크롤
                const categorySection = document.getElementById(category);
                if (categorySection) {
                    categorySection.scrollIntoView({ behavior: 'smooth' });
                }
                event.preventDefault(); // 기본 링크 클릭 방지
            });
        });
    }
});

