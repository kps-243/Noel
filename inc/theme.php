<?php





//
// ---------------------------------------- UTILITAIRES PXP
//

if (!function_exists('PXP_Debug')):
	function PXP_Debug($p_var) {

		if(!WP_DEBUG) return; 
		echo '<pre>';
		call_user_func_array('var_dump', func_get_args());
		echo '</pre>';

	};
else:
	echo '<p>----- ERREUR ----- function PXP_Debug existe déjà</p>';
endif;










if (!function_exists('Get_the_slug')):
	function Get_the_slug() {


		// ----- Init
		global $post;


		// ----- Traitement
		$post_data		= get_post(get_the_ID(), ARRAY_A);
		$slug					= $post_data['post_name'];

		// ----- Output
		return $slug;

	};
else:
	echo '<p>----- ERREUR ----- function Get_the_slug existe déjà</p>';
endif;
