//<![CDATA[
$(document).ready(function(){

	new jPlayerPlaylist({
		jPlayer: "#jquery_jplayer_video",
		cssSelectorAncestor: "#jp_container_video"
	}, [
		{
			title:"Big Buck Bunny Trailer",
			artist:"Blender Foundation",
			free:true,
			m4v:"http://www.jplayer.org/video/m4v/Big_Buck_Bunny_Trailer.m4v",
			ogv:"http://www.jplayer.org/video/ogv/Big_Buck_Bunny_Trailer.ogv",
			webmv: "http://www.jplayer.org/video/webm/Big_Buck_Bunny_Trailer.webm",
			poster:"http://www.jplayer.org/video/poster/Big_Buck_Bunny_Trailer_480x270.png"
		}], {
		swfPath: "js",
		supplied: "webmv, ogv, m4v"
	});

	new jPlayerPlaylist({
		jPlayer: "#jquery_jplayer_ljud",
		cssSelectorAncestor: "#jp_container_ljud"
	}, [
		{
			title:"Cro Magnon Man",
			mp3:"http://www.jplayer.org/audio/mp3/TSP-01-Cro_magnon_man.mp3",
			oga:"http://www.jplayer.org/audio/ogg/TSP-01-Cro_magnon_man.ogg"
		}
		], {
		swfPath: "js",
		supplied: "oga, mp3",
		wmode: "window"
	});
});
//]]>