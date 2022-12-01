<?php



add_theme_support('menus');
add_action('init',	'Enregistrement_menus');










//
// ---------------------------------------- MENUS - ENREGISTREMENT
//

if (!function_exists('Enregistrement_menus')):
	function Enregistrement_menus() {

		register_nav_menus(
			array(
				'nav-principale'	=> __('Nav principale')
			)
		);

	};
else:
	echo '<p>----- ERREUR ----- function Enregistrement_menus existe déjà</p>';
endif;










//
// ---------------------------------------- MENU - DEFINITION
//

if (!function_exists('PxP_Menu')):
	function PxP_Menu() {

		$args = array(
			'theme_location'			=> 'nav-principale',
			'menu'								=> '',
			'container'						=> false,
			'container_class'			=> '',
			'container_id'				=> '',
			'menu_class'					=> 'menu',
			'menu_id'							=> '',
			'echo'								=> true,
			'fallback_cb'					=> '',
			'before'							=> '',
			'after'								=> '',
			'link_before'					=> '',
			'link_after'					=> '',
			'items_wrap'					=> '<ul id="%1$s" class="%2$s">%3$s</ul>',
			'depth'								=> 0,
			'walker'							=> ''
		);

		wp_nav_menu($args);

	};
else:
	echo '<p>----- ERREUR ----- function PxP_Menu existe déjà</p>';
endif;
