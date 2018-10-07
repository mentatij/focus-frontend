const accordion = (accordionItemClass, accordionItemHeadClass, accordionModificator) => {
    const accHeads = document.getElementsByClassName(accordionItemHeadClass);

    const toggleAccordionItem = (event) => {
        event.target.parentNode.classList.toggle(accordionItemClass + '--' + accordionModificator);
    }

    for(header of accHeads) {
        header.addEventListener('click', toggleAccordionItem,false);
    }
}

accordion('month', 'month__title', 'opened');
accordion('lesson', 'lesson__title', 'opened');