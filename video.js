var video;

window.addEventListener("load", function() {
	video = document.querySelector("#myVideo");
	console.log("Starting");
	console.log(video.volume);
});

document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	video.play();
	let vol = document.querySelector("#volume").innerHTML= (video.volume*100) + "%";
});

document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video");
	video.pause();
});

document.querySelector("#slower").addEventListener("click", function() {
	video.playbackRate -= video.playbackRate*0.1;
	console.log("New Speed is " + video.playbackRate);

});

document.querySelector("#faster").addEventListener("click", function() {
	video.playbackRate = video.playbackRate/0.9;
	console.log("New Speed is " + video.playbackRate);

});

document.querySelector("#skip").addEventListener("click", function() {
	if (video.ended == true) { 
		video.currentTime = 0
		video.play()
	} else {
		video.currentTime += 5
		video.play()
	};
	console.log("Time location is " + video.currentTime);

});

document.querySelector("#mute").addEventListener("click", function() {
	if (video.muted == false) {
		video.muted = true
		document.querySelector("#mute").innerHTML = "Unmute"
	} else {
		video.muted = false
		document.querySelector("#mute").innerHTML = "Mute"

	}
});

document.querySelector("#volumeSlider").addEventListener("change", function() {
	console.log(this);
	console.log(this.value);
	video.volume = this.value * 0.01;
	document.querySelector("#volumeSlider").innerHTML = video.volume; 
	vol = document.querySelector("#volume").innerHTML= (video.volume*100) + "%";
});

document.querySelector("#old").addEventListener("click", function() {
	var vid = document.querySelector("#myVideo");
	vid.classList.add("oldTime");
});

document.querySelector("#original").addEventListener("click", function() {
	var vid = document.querySelector("#myVideo");
	vid.classList.remove("oldTime");
});