const sliderDataSet = [
    {
        url: '#',
        title: 'Python WEB-разработчик',
        text: 'востребовано на рынке',
        date: 'Django, JS и много что еще'
    },
    {
        url: '#',
        title: 'HTML/CSS',
        text: 'все тонкости верстки по БЭМ',
        date: 'уже скоро'
    },
    {
        url: '#',
        title: 'Vue.js',
        text: 'первый набор',
        date: 'с 1 декабря'
    },
    {
        url: '#',
        title: 'PHP WEB-разработчик',
        text: 'для самых решительных',
        date: 'с 28 ноября'
    },
    {
        url: '#',
        title: 'React-разработчик',
        text: 'с нуля в джуны',
        date: 'с 23 октября'
    }
];

const slider = () => {
    for (let i =0; i < sliderDataSet.length; i++) {
        const slider = document.querySelector(".courses-list__item--slider");
        const {url, title, text, date} = sliderDataSet[i];
        const slideData = `
            <a href="${url}" class="course-card course-card--slider ${i == 0 ? 'visible' : ''}">
                <div class="course-card__title">${title}</div>
                <div class="course-card__text">
                    <i>${text}</i>
                </div>
                <div class="course-card__date">${date}</div>
            </a>`;
        slider.innerHTML += slideData;
    }

    const slides = document.querySelectorAll(".course-card--slider");

    let currentSlide = 0;

    setInterval(() => {
        slides[currentSlide].classList.remove("visible");
        currentSlide = (currentSlide + 1) % slides.length;
        slides[currentSlide].classList.add("visible");
    }, 4000);
}

if (document.getElementsByClassName("courses-list__item--slider").length > 0) {
    slider();
}