<?php



add_action('wp_enqueue_scripts', 'Head_CSS_JS');










//
// ---------------------------------------- ENQUEUE CSS ET JAVASCRIPT
//

if (!function_exists('Head_CSS_JS')):
	function Head_CSS_JS() {



		// ---------- CSS

		// wp_register_style(string $handle, string|bool $src, string[] $deps = array(), string|bool|null $ver = false, string $media = 'all' )

		wp_register_style('css_bulma', get_template_directory_uri() . '/css/bulma.min.css', null, '0.9.4');
		wp_enqueue_style('css_bulma');

		wp_register_style('main', get_template_directory_uri() . '/css/main.min.css', null, '1.0.0');
		wp_enqueue_style('main');


		// ---------- Javascript

		// wp_register_script( string $handle, string|bool $src, string[] $deps = array(), string|bool|null $ver = false, bool $in_footer = false )

		wp_register_script('main', get_template_directory_uri() . '/js/main.min.js', null, '1.0.0', true);
		wp_enqueue_script('main');

	};
else:
	echo '<p>----- ERREUR ----- function Head_CSS_JS existe déjà</p>';
endif;
