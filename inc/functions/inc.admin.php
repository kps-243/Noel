<?php





add_action('admin_head',								'Admin_light');
add_filter('dashboard_glance_items',		'Coup_doeil');










//
// ---------------------------------------- ADMIN - ALLEGEMENT
//

if (!function_exists('Admin_light')):
	function Admin_light() {

		// remove_menu_page('index.php');								// Dashboard
		remove_menu_page('edit.php');									// Posts
		// remove_menu_page('upload.php');								// Media
		// remove_menu_page('edit.php?post_type=page');	// Pages
		remove_menu_page('edit-comments.php');				// Comments
		// remove_menu_page('themes.php');								// Appearance
		// remove_menu_page('plugins.php');							// Plugins
		// remove_menu_page('users.php');								// Users
		// remove_menu_page('tools.php');								// Tools
		// remove_menu_page('options-general.php');			// Settings

	};

else:
	echo '<p>----- ERREUR ----- function Admin_light existe déjà</p>';
endif;
//










//
// ---------------------------------------- ADMIN - COUP D'ŒIL
//

if (!function_exists('Coup_doeil')):
	function Coup_doeil($items) {

		$post_types						= get_post_types(array('public' => true, '_builtin' => false), 'object');
		$post_types						= apply_filters('sf_glance_post_types', $post_types);

		if (count($post_types)) :
			foreach ($post_types as $post_type => $object) :

				$num_posts				= wp_count_posts($post_type);

				if (!$num_posts || !isset($num_posts -> publish)) :
					continue;
				endif;

				$text							= sprintf(_n('%1$s %2$s', '%1$s %3$s', $num_posts -> publish), number_format_i18n($num_posts -> publish), $object -> labels -> singular_name, $object -> labels -> name);

				if (current_user_can($object -> cap -> edit_posts)) :
					$items[]				= sprintf('<a class="%1$s-count" href="edit.php?post_type=%1$s">%2$s</a>', $post_type, $text);
				else :
					$items[]				= sprintf('<span class="%1$s-count">%s</span>', $text);
				endif;

			endforeach;
		endif;

		return $items;

	};
else:
	echo '<p>----- ERREUR ----- function Coup_doeil existe déjà</p>';
endif;
