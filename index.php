<?php get_header(); ?>

<?php
    
    $args = array(
        'post_status' => 'publish',
        'post_type' => 'cpt_recette',
        'posts_per_page' => -1
    );
    
    $recettes = new WP_Query($args);
    
    if ($recettes -> have_posts()):
        while($recettes -> have_posts()): $recettes -> the_post();
?>
<!--<pre>-->
<!--    <?php  var_dump($recettes); ?>-->
<!--</pre>-->
<?php
        endwhile; //while($recettes -> have_posts()): $recettes -> the_post();
    endif; //if ($recettes -> have_posts()):
?>


	<main>
	    
	    <?php
	        $gout = get_field('gout');
	        echo '<pre><?php var_dump($gout) ?></pre>';
	    ?>
	    
	    <h1><?php the_title(); ?></h1>
	    
	    <?php if (get_field('preparation')): ?>
		Préparation : <?php the_field('preparation')?> minutes<br>
		<?php endif; ?>
		
		<?php if (get_field('cuisson')): ?>
		Cuisson : <?php the_field('cuisson')?> minutes<br>
		<?php endif; ?>
		
		<?php if (get_field('ingredients')): ?>
		<strong>Ingrédients :</strong><br>
		<p><?php the_field('ingredients')?></p>
		<?php endif; ?>
		
		<?php if (get_field('recette')): ?>
		<strong>Recette :</strong><br>
		<section><?php the_field('recette')?></section>
		<?php endif; ?>
	</main>

<?php get_footer(); ?>