<?php





add_action	('widgets_init',								'PXP_Optimisation');
add_filter 	('wp_handle_upload_prefilter',	'PXP_sanitize_file_uploads');










//
// ---------------------------------------- OPTIMISATION
//

if (!function_exists('PXP_Optimisation')):
	function PXP_Optimisation() {

		unregister_widget('WP_Widget_Pages');							// Pages
		unregister_widget('WP_Widget_Calendar');					// Calendrier
		unregister_widget('WP_Widget_Archives');					// Archives
		unregister_widget('WP_Widget_Meta');							// Meta
		unregister_widget('WP_Widget_Search');						// Rechercher
		unregister_widget('WP_Widget_Text');							// Texte
		unregister_widget('WP_Widget_Media_Audio');				// Audio
		unregister_widget('WP_Widget_Media_Image');				// Image
		unregister_widget('WP_Widget_Media_Video');				// Vidéo
		unregister_widget('WP_Widget_Custom_HTML');				// HTML personnalisé
		unregister_widget('WP_Widget_Categories');				// Catégories
		unregister_widget('WP_Widget_Recent_Posts');			// Articles récents
		unregister_widget('WP_Widget_Recent_Comments');		// Commentaires récents
		unregister_widget('WP_Widget_RSS');								// RSS
		unregister_widget('WP_Widget_Tag_Cloud');					// Nuage d'étiquettes
		unregister_widget('WP_Nav_Menu_Widget');					// Menu personnalisé

	};
else:
	echo '<h1>----- ERREUR ----- function PXP_Debug existe déjà</h1>';
endif;



if (!function_exists('PXP_sanitize_file_uploads')):
	function PXP_sanitize_file_uploads($file) {

		$file['name'] = sanitize_file_name($file['name']);
		$file['name'] = preg_replace("/[^a-zA-Z0-9\_\-\.]/", "", $file['name']);
		$file['name'] = strtolower($file['name']);
		add_filter('sanitize_file_name', 'remove_accents');

		return $file;
		
	};
else:
	echo '<p>----- ERREUR ----- function PXP_sanitize_file_uploads existe déjà</p>';
endif;










//
// ---------------------------------------- FONCTIONNALITÉS
//

if (!defined('ABSPATH')) die ('Restricted Area');

require_once(get_template_directory() . '/inc/functions/inc.admin.php');
require_once(get_template_directory() . '/inc/functions/inc.css-js.php');
require_once(get_template_directory() . '/inc/functions/inc.custom-post-types.php');
require_once(get_template_directory() . '/inc/functions/inc.medias.php');
require_once(get_template_directory() . '/inc/functions/inc.menus.php');
require_once(get_template_directory() . '/inc/functions/inc.blocks-gutenberg.php');

require_once(get_template_directory() . '/inc/theme.php');





?>
