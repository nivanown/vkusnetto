/*- catalog-dropdown -*/
document.addEventListener('DOMContentLoaded', function () {
    const catalogBtn = document.querySelector('.main-nav__catalog');
    const catalogDropdown = document.querySelector('.catalog-dropdown');

    if (!catalogBtn || !catalogDropdown) return;

    catalogBtn.addEventListener('click', function (e) {
        e.stopPropagation();

        const isOpen = catalogBtn.classList.contains('open');

        catalogBtn.classList.remove('open');
        catalogDropdown.classList.remove('show');

        if (!isOpen) {
            catalogBtn.classList.add('open');
            catalogDropdown.classList.add('show');
        }
    });

    document.addEventListener('click', function (e) {
        const isClickInside =
            catalogBtn.contains(e.target) || catalogDropdown.contains(e.target);

        if (!isClickInside) {
            catalogBtn.classList.remove('open');
            catalogDropdown.classList.remove('show');
        }
    });
});

/*- catalog-tabs -*/
document.addEventListener('DOMContentLoaded', function () {
    const tabsNavItems = document.querySelectorAll('.catalog-tabs__nav li');
    const tabsContent = document.querySelectorAll('.catalog-tabs__item');

    if (!tabsNavItems.length || !tabsContent.length) return;

    tabsNavItems.forEach((tab, index) => {
        tab.addEventListener('click', () => {
            tabsNavItems.forEach(t => t.classList.remove('active'));
            tabsContent.forEach(c => {
                c.classList.remove('active');
            });

            tab.classList.add('active');
            const currentTab = tabsContent[index];
            currentTab.classList.add('active');
        });
    });
});

/*- catalog-info -*/
document.addEventListener('DOMContentLoaded', function () {
    const catalogBlocks = document.querySelectorAll('.catalog-info');

    catalogBlocks.forEach(block => {
        const list = block.querySelector('.catalog-info__list ul');
        const items = list ? list.querySelectorAll('li') : [];
        const moreLink = block.querySelector('.catalog-info__more-link');

        if (!list || !items.length || !moreLink) return;

        items.forEach((li, index) => {
            if (index > 3) li.classList.add('hidden');
        });

        moreLink.addEventListener('click', function () {
            const isExpanded = moreLink.classList.toggle('open');

            if (isExpanded) {
                items.forEach(li => li.classList.remove('hidden'));
                moreLink.textContent = 'Скрыть';
            } else {
                items.forEach((li, index) => {
                    if (index > 3) li.classList.add('hidden');
                });
                moreLink.textContent = 'Ещё';
            }
        });
    });
});

/*- hero-slider -*/
var swiper = new Swiper(".hero-slider", {
	autoplay: {
		delay: 4000,
		disableOnInteraction: false,
	},
	speed: 1000,
	spaceBetween: false,
	loop: true,
	effect: "fade",
	navigation: {
		nextEl: ".swiper-button-next",
		prevEl: ".swiper-button-prev",
	},
	pagination: {
		el: ".swiper-pagination",
		clickable: true,
	},
    breakpoints: {
    0: {
        autoplay: false,
        allowTouchMove: false,
        },
    901: {
        autoplay: {
            delay: 4000,
            disableOnInteraction: false,
        },
        allowTouchMove: true,
        },
    },
});


