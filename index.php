<?php get_header(); ?>

	<main>
		<?php
		$args = array(
		'post_status' => 'publish',
		'post_per_page' => 'cpt_GAB',
		'post_per_page' => -1
		);

		$recette = Wp_Query($args);

		if($recettes -> have_posts()):
			while ($recettes -> have_posts()): $recettes -> the_post();
		?>

		<?php
		the_title();
	?>
	</main>

<?php get_footer(); ?>
