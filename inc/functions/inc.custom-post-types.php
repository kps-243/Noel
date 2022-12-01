<?php





add_action('init', 'Recette_gab', 10);
add_action('init', 'TAX_gab', 10);









//
// ---------------------------------------- CUSTOM POST TYPES
//

if (!function_exists('Recette_gab')):
	function Recette_gab() {

		// Interface
		$labels = array(
			'name'											=> _x('Recettes', 'Post Type General Name',				'slug_gab_cpt'),
			'singular_name'							=> _x('Recette', 'Post Type Singular Name',				'slug_gab_cpt'),
			'menu_name'									=> __('Recettes',																	'slug_gab_cpt'),
			'name_admin_bar'						=> __('Recette',																	'slug_gab_cpt'),
			'archives'									=> __('Archives Recettes',												'slug_gab_cpt'),
			'attributes'								=> __('Attributs Recettes',												'slug_gab_cpt'),
			'parent_item_colon'					=> __('CPT parent :',													'slug_gab_cpt'),
			'all_items'									=> __('Tous les Recettes',												'slug_gab_cpt'),
			'add_new_item'							=> __('Ajouter une recette',												'slug_gab_cpt'),
			'add_new'										=> __('Ajouter',															'slug_gab_cpt'),
			'new_item'									=> __('Nouvelle recette',													'slug_gab_cpt'),
			'edit_item'									=> __('Éditer la recette',												'slug_gab_cpt'),
			'update_item'								=> __('Mettre à jour la recette',									'slug_gab_cpt'),
			'view_item'									=> __('Voir la recette',													'slug_gab_cpt'),
			'view_items'								=> __('Voir les Recettes',												'slug_gab_cpt'),
			'search_items'							=> __('Rechercher une recette',										'slug_gab_cpt'),
			'not_found'									=> __('Introuvable',													'slug_gab_cpt'),
			'not_found_in_trash'				=> __('Introuvable dans la corbeille',				'slug_gab_cpt'),
			'featured_image'						=> __('Featured Image',												'slug_gab_cpt'),
			'set_featured_image'				=> __('Set featured image',										'slug_gab_cpt'),
			'remove_featured_image'			=> __('Remove featured image',								'slug_gab_cpt'),
			'use_featured_image'				=> __('Use as featured image',								'slug_gab_cpt'),
			'insert_into_item'					=> __('Insert into item',											'slug_gab_cpt'),
			'uploaded_to_this_item'			=> __('Uploaded to this item',								'slug_gab_cpt'),
			'items_list'								=> __('Liste de Recettes',												'slug_gab_cpt'),
			'items_list_navigation'			=> __('Naviguer dans la liste de Recettes',				'slug_gab_cpt'),
			'filter_items_list'					=> __('Filtrer la liste de Recettes',							'slug_gab_cpt'),
		);
		$rewrite = array(
			'slug'											=> 'slug_gab_cpt',
			'with_front'								=> true,
			'pages'											=> true,
			'feeds'											=> false,
		);
		$args = array(
			'label'											=> __('Recette',																	'slug_gab_cpt'),
			'description'								=> __('Description de la recette',										'slug_gab_cpt'),
			'labels'										=> $labels,
			'show_in_rest'							=> true,// Permet le support de Gutenberg dans le CPT
			'supports'									=> array('title', 'editor', 'revisions'),
			// 'taxonomies'								=> array('category', 'post_tag'),
			'hierarchical'							=> false,
			'public'										=> true,
			'show_ui'										=> true,
			'show_in_menu'							=> true,
			'menu_position'							=> 5,
			'menu_icon'									=> 'dashicons-welcome-write-blog',
			'show_in_admin_bar'					=> true,
			'show_in_nav_menus'					=> true,
			'can_export'								=> true,
			'has_archive'								=> false,
			'exclude_from_search'				=> false,
			'publicly_queryable'				=> true,
			'query_var'									=> 'slug_gab_cpt',
			'capability_type'						=> 'post',
			// 'rewrite'										=> array('slug' => 'slug_gab_cpt'),
			'rewrite'										=> $rewrite,
			'rest_base'									=> 'slug_gab_cpt',
			'rest_controller_class'			=> 'WP_REST_Posts_Controller',
		);
	 register_post_type('slug_gab_cpt', $args);

	};
else:
	echo '<h1>----- ERREUR ----- function Recette_gab existe déjà</h1>';
endif;










//
// ---------------------------------------- TAXONOMIES
//

if (!function_exists('TAX_gab')):
	function TAX_gab() {

		$labels = array(
			'name'												=> _x('Taxonomies', 'taxonomy general name'),
			'singular_name'								=> _x('Taxonomie', 'taxonomy singular name'),
			'menu_name'										=> __('Taxonomies'),
			'all_items'										=> __('Toutes les taxonomies'),
			'edit_item'										=> __('Éditer une taxonomie'),
			'view_item'										=> __('Voir une taxonomie'),
			'update_item'									=> __('Mettre à jour une taxonomie'),
			'add_new_item'								=> __('Ajouter une nouvelle taxonomie'),
			'new_item_name'								=> __('Nom de la nouvelle taxonomie'),
			'parent_item'									=> __('Taxonomie parente'),
			'parent_item_colon'						=> __('Taxonomie parente :'),
			'search_items'								=> __('Rechercher parmi les taxonomies'),
			'popular_items'								=> __('Taxonomies populaires'),
			'separate_items_with_commas'	=> null,
			'add_or_remove_items'					=> null,
			'choose_from_most_used'				=> null,
			'not_found'										=> __('Aucune taxonomie trouvée'),
			'back_to_items'								=> __('Retour aux taxonomies')
		);
		$rewrite = array(
			'slug'												=> 'GAB_tax',
			'with_front'									=> true,
			'hierarchical'								=> false,
		);
		$args = array(
			'labels'											=> $labels,
			'public'											=> true,
			'publicly_queryable'					=> true,
			'show_ui'											=> true,
			'show_in_menu'								=> true,
			'show_in_nav_menus'						=> true,
			'show_in_rest'								=> false,
			'rest_base'										=> 'GAB_tax',
			'rest_controller_class'				=> 'WP_REST_Terms_Controller',
			'show_tagcloud'								=> false,
			'show_in_quick_edit'					=> true,
			'meta_box_cb'									=> false,
			'show_admin_column'						=> true,
			'description'									=> 'Description de la taxonomie',
			'hierarchical'								=> true,
			'query_var'										=> true,
			'rewrite'											=> $rewrite
		);

		register_taxonomy('gab_tax', array('slug_gab_cpt'), $args);

	};
else:
	echo '<h1>----- ERREUR ----- function TAX_gab existe déjà</h1>';
endif;

// register_taxonomy_for_object_type($taxonomy, $object_type);
