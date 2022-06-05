const video_player = document.querySelector('.video-player');
const video = video_player.querySelector('.viewer');
const progress = video_player.querySelector('.progress');
const volume = video_player.querySelector('.volume');
const button = video_player.querySelector('.play-btn');
const poster = video_player.querySelector('.poster');
const control = video_player.querySelector('.controls');
const playIcon = control.querySelector('.play-icon');
const volumeIcon = control.querySelector('.volume-icon');

video.ontimeupdate = progressUpdate;

progress.onclick = videoRevaid;
volume.onclick = volumeRevaid;
volumeIcon.onclick = mute;

function togglePlay(){
   if(video.paused){
       video.play();

   }else{
       video.pause();
   }
};

function closePoster(click){
poster.classList.remove('poster');
poster.classList.add('poster1');
}

function closeButton(click){
button.classList.toggle('play-btn1');    
}
function closeButton1(click){
    button.classList.add('play-btn1');    
    }
function iconToggle(){
    playIcon.classList.toggle('pause');
}

function progressUpdate(input){
    let d = video.duration;
    let c = video.currentTime;
    progress.value = 100 * c / d;
    progress.style = "background: linear-gradient( to right, #bdae82 0%, #bdae82 " + progress.value + "%, #c8c8c8 0%, #c8c8c8 100%);";
}
function videoRevaid(){
   let w = this.offsetWidth;
   let o = event.offsetX;
   this.value = 100 * o / w;
   video.pause();
   video.currentTime = video.duration * o / w;
   video.play();
   closeButton1();
   
}
function volumeRevaid(){
 let v = this.value;
 video.volume = v / 100;
 volumeIcon.classList.remove('mute');
 volumeIcon.classList.add('volume-icon');
 muteVolue();
 volume.style = "background: linear-gradient( to right, #bdae82 0%, #bdae82 " + v + "%, #c8c8c8 0%, #c8c8c8 100%);"; 
}

function mute(){
    volumeIcon.classList.toggle('mute');
    if(video.volume !== 0){
    video.volume = 0;
    }else
    video.volume = 0.4;
}

function muteVolue(){
    if(video.volume === 0)
 volumeIcon.classList.add('mute');
}


button.addEventListener('click', () => { togglePlay(); closePoster(); closeButton(); iconToggle();});
playIcon.addEventListener('click', () => { closeButton(); togglePlay(); iconToggle(); });

