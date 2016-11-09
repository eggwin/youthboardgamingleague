import { Meteor } from 'meteor/meteor';

if (Meteor.isClient) {
	var tag = document.createElement('script');
		tag.id = 'iframe-demo';
		tag.src = 'https://www.youtube.com/iframe_api';
		var firstScriptTag = document.getElementsByTagName('script')[0];
		firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
	var promo, pandemic, survive, ttr;

	Template.promoTemplate.rendered = function () {
		onYouTubeIframeAPIReady = function() {
			promo = new YT.Player('promo', {
				events: {
					'onReady': onPlayerReady
				}
			});
		}

		onPlayerReady = function(event) {
			event.target.playVideo();
		}
	}

	Template.pandemicMovie.rendered = function () {	
		onYouTubeIframeAPIReady = function() {
			pandemic = new YT.Player('pandemic', {
				events: {
					'onReady': onPlayerReady
				}
			});
		}

		onPlayerReady = function(event) {
			event.target.playVideo();
		}
	}

	Template.surviveMovie.rendered = function () {
		onYouTubeIframeAPIReady = function() {
			survive = new YT.Player('survive', {
				events: {
					'onReady': onPlayerReady
				}
			});
		}

		onPlayerReady = function(event) {
			event.target.playVideo();
		}

	}

	Template.ttrMovie.rendered = function () {
		onYouTubeIframeAPIReady = function() {
			ttr = new YT.Player('ttr', {
				events: {
					'onReady': onPlayerReady
				}
			});
		}

		onPlayerReady = function(event) {
			event.target.playVideo();
		}
	}
}