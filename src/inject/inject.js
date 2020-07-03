chrome.extension.sendMessage({}, function(response) {
    var readyStateCheckInterval = setInterval(function() {
        if (document.readyState === "complete") {
            clearInterval(readyStateCheckInterval);
            if (window.location.hash == "#automate") {
                document.querySelectorAll('.v1Nh3 > a')[0].click()
                setInterval(() => {
                    document.querySelectorAll('body > div._2dDPU.CkGkG > div.zZYga > div > article > div.eo2As > section.ltpMr.Slqrh > span.fr66n > button')[0].click()
                    document.querySelector('a.coreSpriteRightPaginationArrow').click();
                }, 10000)
            }
        }
    }, 10);
});