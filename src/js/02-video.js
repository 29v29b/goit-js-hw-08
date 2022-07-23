import Player from '@vimeo/player';
import throttle from 'lodash.throttle'


const iframe = document.querySelector('iframe');
const player = new Player(iframe);
const TIME_KEY = 'videoplayer-current-time';

const onPlay = function(data) {
    const timeSettings = data.seconds;
    localStorage.setItem(TIME_KEY, timeSettings)
    console.log(localStorage.getItem(TIME_KEY))
};

player.on('timeupdate', throttle(onPlay, 1000));

document.addEventListener('DOMContentLoaded', () => {

    player.setCurrentTime(localStorage.getItem(TIME_KEY)).then(function(seconds) {})
    .catch(function(error) {
        switch (error.name) {
            case 'RangeError':
                alert('The time was less than 0 or greater than the video’s duration');                
                break;
    
            default:
                alert(error.name)
                break;
        }
    });
}) 