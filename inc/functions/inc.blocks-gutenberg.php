<?php





add_filter('allowed_block_types', 'PXP_activation_blocks', 10, 2);










//
// ---------------------------------------- DESACTIVATION DES BLOCKS INUTILES
//

if (!function_exists('PXP_activation_blocks')):
	function PXP_activation_blocks($allowed_blocks, $post) {

		// 1 ----- Common blocks category
		// core/paragraph
		// core/image
		// core/heading
		// core/gallery
		// core/list
		// core/quote
		// core/audio
		// core/cover
		// core/file
		// core/video
		//
		// 2 ----- Formatting category
		// core/table
		// core/verse
		// core/code
		// core/freeform — Classic
		// core/html — Custom HTML
		// core/preformatted
		// core/pullquote
		//
		// 3 ----- Layout Elements category
		// core/buttons
		// core/text-columns — Columns
		// core/media-text — Media and Text
		// core/more
		// core/nextpage — Page break
		// core/separator
		// core/spacer
		//
		// 4 ----- Widgets category
		// core/shortcode
		// core/archives
		// core/categories
		// core/latest-comments
		// core/latest-posts
		// core/calendar
		// core/rss
		// core/search
		// core/tag-cloud
		//
		// 5 ----- Embeds category
		// core/embed
		// core-embed/twitter
		// core-embed/youtube
		// core-embed/facebook
		// core-embed/instagram
		// core-embed/wordpress
		// core-embed/soundcloud
		// core-embed/spotify
		// core-embed/flickr
		// core-embed/vimeo
		// core-embed/animoto
		// core-embed/cloudup
		// core-embed/collegehumor
		// core-embed/dailymotion
		// core-embed/funnyordie
		// core-embed/hulu
		// core-embed/imgur
		// core-embed/issuu
		// core-embed/kickstarter
		// core-embed/meetup-com
		// core-embed/mixcloud
		// core-embed/photobucket
		// core-embed/polldaddy
		// core-embed/reddit
		// core-embed/reverbnation
		// core-embed/screencast
		// core-embed/scribd
		// core-embed/slideshare
		// core-embed/smugmug
		// core-embed/speaker
		// core-embed/ted
		// core-embed/tumblr
		// core-embed/videopress
		// core-embed/wordpress-tv


		// ---------- Init
		$allowed_blocks = array(
			'core/image',
			'core/paragraph',
			'core/heading',
			'core/list'
		);


		// ---------- Traitement
		if ($post -> post_type === 'page') {
			$allowed_blocks[] = 'core/shortcode';
		};// if ($post -> post_type === 'page') {


		// ---------- Output
		return $allowed_blocks;

 };// function PXP_activation_blocks($allowed_blocks, $post) {

else :
 echo '<h1>----- ERREUR ----- fonction PXP_activation_blocks existe déjà</h1>';
endif;//if (!function_exists('PXP_Gutenblock')):
	