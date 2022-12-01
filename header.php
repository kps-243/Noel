<?php

//	Header("Cache-Control: must-revalidate");
//
//	// 10 jours de validité de cache
//	$offset = 60 * 60 * 24 * 10;
//	$ExpStr = "Expires: " . gmdate("D, d M Y H:i:s", time() + $offset) . " GMT";
//	Header($ExpStr);

?>
<!doctype html>
<html lang="<?php bloginfo('language'); ?>" dir="ltr">
<head>

	<meta charset="<?php bloginfo('charset'); ?>">
	<meta http-equiv="x-ua-compatible" content="ie=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
	

	<title><?php bloginfo('name'); ?> - <?php bloginfo('description'); ?></title>


	<link rel="icon" href="<?= get_template_directory_uri(); ?>/favicon.ico">
	<link rel="icon" href="<?= get_template_directory_uri(); ?>/icon.svg" type="image/svg+xml">
	<link rel="apple-touch-icon" href="<?= get_template_directory_uri(); ?>/apple-touch-icon.png">
	<link rel="manifest" href="<?= get_template_directory_uri(); ?>/manifest.webmanifest">


	<?php wp_head(); ?>

</head>

<body <?php body_class(); ?>>
