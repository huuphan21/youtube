const videoPlayer = document.querySelector('#video-player video');
const videoTitle = document.querySelector('#video-player h2');
const videoDescription = document.querySelector('#video-player p');
const videoList = document.querySelector('#video-list');

videoList.addEventListener('click', event => {
    event.preventDefault();
    const link = event.target.closest('a');
    if (link) {
        const video = link.getAttribute('data-video');
        const title = link.querySelector('h3').textContent;
        const thumbnail = link.querySelector('img').getAttribute('src');
        videoPlayer.setAttribute('src', video);
        videoTitle.textContent = title;
        videoDescription.textContent = '';
        img.setAttribute('src', thumbnail);
        img.setAttribute('alt', title);
        img.style.width = '100%';
        videoDescription.appendChild(img);
    }
});
