<?php /* Template Name: Panel Klienta*/
get_header(); ?>


<main>
<section class="client">
  <div class="container">
    <div class="client__inner">
      <h2 class="client__title anim-item">
        <?php the_field('client__title')?>
      </h2>
      <p class="client__des">
      <?php the_field('client__des')?>
      </p>
      <div class="client__buttons">
        <a href="<?php the_field('client__panel')?>" class="client__panel"><?php the_field('client__panel-text')?>
          <span></span>
          <span></span>
        </a>
        <a href="<?php the_field('client__contact')?>" class="client__panel"><?php the_field('client__contact-text')?>
          <span></span>
          <span></span>
        </a>
      </div>
    </div>
  </div>
</section>
</main>
<?php
get_footer();