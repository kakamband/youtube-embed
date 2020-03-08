function ytIframe(videoId,width) {
const iFrame = document.createElement('iframe');
    iFrame.setAttribute('width',width);
    iFrame.setAttribute('height', String(width / 1.77));
    iFrame.setAttribute('src',`https://www.youtube.com/embed/${videoId}`);
    iFrame.setAttribute('allow',"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture");
    iFrame.setAttribute('frameborder',0);
    iFrame.setAttribute('allowfullscreen','');
    return iFrame;
}

function youtubeEmbed() {
    const regexYoutube =  /^http(s):\/\/(www\.)?youtu(be|.be)/i;
    const links = document.querySelectorAll('a');

    links.forEach( link=> {
        const YtLink = link.href.match(regexYoutube);
        if(YtLink) {
            const parentNode = link.parentNode,
                refSplit = link.href.split('/'),
                videoId = refSplit[refSplit.length -1].replace(/watch\?v=/gi,''),
                newChild = ytIframe(videoId,link.getAttribute('data-width'));

            if(newChild.width === 'null') {
                newChild.width = String(link.offsetWidth);
                newChild.height = String(newChild.width / 1.77)
            }
            parentNode.replaceChild(newChild, link);
        }
    })

}

window.addEventListener("DOMContentLoaded", () => youtubeEmbed());
