<?php /* Template Name: Strona Główna*/
get_header(); ?>


<main>
  <section class="services">
    <div class="container">
      <div class="services__inner row">
        <?php if( have_rows('services__items') ): ?>
          <ul class="services__items">
          <?php while( have_rows('services__items') ): the_row(); ?>
              <li class="services__item">
                <a href="<?php the_sub_field('services__item-link')?>" class="services__item-link">
                  <h3 class="services__item-text">
                    <?php the_sub_field('services__item-text')?>
                  </h3>
                  <span></span>
                  <span></span>
                </a>
              </li>
          <?php endwhile; ?>
          </ul>
        <?php endif; ?>

      </div>
    </div>
  </section>

  <section class="aboutus">
    <div class="container">
      <div class="aboutus__inner">
        <h2 class="aboutus__title anim-item">
          <?php the_field('aboutus__title')?>
        </h2>
        <p class="aboutus__des anim-item">
          <?php the_field('aboutus__des')?>
        </p>
      </div>
    </div>
    <div class="aboutus__img">
      <img src="<?php the_field('aboutus__img')?>" alt="">
    </div>
    <div class="container">
      <div class="aboutus__items row">
        <h3 class="aboutus__item col-md-4 anim-item"><?php the_field('aboutus__first')?></h3>
        <h3 class="aboutus__item col-md-4 anim-item"><?php the_field('aboutus__second')?></h3>
        <h3 class="aboutus__item col-md-4 anim-item"><?php the_field('aboutus__third')?></h3>
      </div>

    </div>
    <a href="<?php the_field('aboutus__link')?>" class="aboutus__btn anim-item"><?php the_field('aboutus__btn')?>
      <span></span>
      <span></span>
    </a>
  </section>

  <section class="contact">
    <div id="map">
      <div class="contact__box">
        <div class="contact__img" style="background-image: url('<?php the_field('contact__img', 'option')?>')"></div>
          <div class="contact__info">
            <h4 class="contact__title">
              <?php the_field('contact__title', pll_current_language('slug'))?>
            </h4>
            <p class="contact__item"><?php the_field('company-name', 'option')?></p>
            <p class="contact__item"><?php the_field('company-adress', 'option')?></p>
            <p class="contact__item"><?php the_field('company-nip', 'option')?></p>
            <div class="contact__item">
              <p class="contact__tel">tel: <a href="tel:<?=get_field('contact-tel');?>"><?php the_field('contact-tel', 'option'); ?></a></p>
              <p class="contact__mail">e-mail: <a href="mailto:<?=get_field('contact-mail');?>"><?php the_field('contact-mail', 'option'); ?></a></p>
            </div>
            <a href="<?php the_field('contact__link','option')?>" class="contact__btn"><?php the_field('contact__btn', pll_current_language('slug'))?></a>
            <span></span>
            <span></span>
          </div>
      </div>
    </div>
  </section>
</main>
<?php
get_footer();