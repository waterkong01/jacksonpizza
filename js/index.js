$(document).ready(function() {
    function initSlideBanner(slideBannerBox) {
        // 슬라이드 배너 초기화
        let $slideBannerBox = $(slideBannerBox);
        let $banners = $slideBannerBox.find('.banner');
        $banners.eq(0).css({left: 0});

        let curr_idx = 0;
        let timer = 1000;
        let bn_count = $banners.length;

        $slideBannerBox.find('.btn_slide_R').click(function(){ 
            slide('-100%', curr_idx + 1, '100%');
            curr_idx += 1;
        });

        $slideBannerBox.find('.btn_slide_L').click(function(){ 
            slide('100%', curr_idx - 1, '-100%');
            curr_idx -= 1;
        });

        function slide(o_pos, c_idx, c_pos) {
            버튼막기();

            $banners.eq(curr_idx % bn_count).animate({
                left: o_pos
            }, timer);

            $banners.eq((c_idx) % bn_count).css({
                left: c_pos
            }).stop(true).animate({
                left: 0
            }, timer);
        }

        function 버튼막기() {
            $slideBannerBox.find('.btn_slide').css({pointerEvents:'none'});
            setTimeout(function(){
                $slideBannerBox.find('.btn_slide').css({pointerEvents:'auto'});
            }, timer);
        }

        let interval;
        function auto_slide() {
            interval = setInterval(function(){
                $slideBannerBox.find('.btn_slide_R').trigger('click');
            }, timer + 2000);
        }

        $slideBannerBox.hover(function(){
            clearInterval(interval);
        }, function(){
            auto_slide();
        });

        auto_slide();
    }

    // 각 .slide_banner_box 슬라이드 배너 박스를 초기화
    $('.slide_banner_box').each(function() {
        initSlideBanner(this);
    });

    // 각 .r_slide_banner_box 슬라이드 배너 박스를 초기화
    $('.r_slide_banner_box').each(function() {
        initSlideBanner(this);
    });
});

document.querySelectorAll('#btn2').forEach(button => {
    button.addEventListener('click', function (event) {
        const category = this.getAttribute('data-category');
        sessionStorage.setItem('selectedCategory', category);
        window.location.href = "menu.html";
        event.preventDefault();
    })
})