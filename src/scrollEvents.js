const handleScrollToContact = function () {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth'
    });
}

const handleExploreMore = function () {
    document.querySelector('#about-section').scrollIntoView({behavior: 'smooth'});
}

const handleReadMore = function () {
    document.querySelector('#article-container').scrollIntoView({behavior: 'smooth'});
}

const handleScrollToTop = function () {
    document.querySelector('.main-container').scrollIntoView({behavior: 'smooth'});
}

export {handleExploreMore, handleScrollToContact, handleReadMore, handleScrollToTop};