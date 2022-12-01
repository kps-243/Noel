<?php



add_action('init',								'Tailles_medias');
add_filter( 'upload_mimes',       'SVG_upload' );

define('ALLOW_UNFILTERED_UPLOADS', true);










//
// ----------------------------------------- TAILLES DE MEDIAS
//

if (!function_exists('Tailles_medias')):
	function Tailles_medias() {
		// Ajout des tailles nécessaires au site (true : recadré, false : non)
		add_image_size('diaporama', 400, 400, true);
	};
else:
	echo '<p>----- ERREUR ----- function Tailles_medias existe déjà</p>';
endif;




if ( !function_exists( 'SVG_upload' ) ):
  function SVG_upload( $mimes ) {
    $mimes[ 'svg' ] = 'image/svg+xml';
    return $mimes;
  };
else:
  echo '<pre>----- ERREUR ----- function SVG_upload existe déjà</pre>';
endif;
