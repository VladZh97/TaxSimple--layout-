<?php /* Template Name: Kontakt*/
get_header(); ?>


<main>
  <section class="contactp">
    <div class="container">
      <div class="contactp__inner">
        <h2 class="contactp__title anim-item">
          <?php the_field('contactp__title')?>
        </h2>
        <?php echo do_shortcode( '[cf7form cf7key="formularz-pl"]' ); ?>
        <p class="contactp__des">
          <?php the_field('contactp__des')?>
        </p>
      </div>
    </div>
    <div id="map">
      <div class="contact__box">
        <div class="contact__img" style="background-image: url('<?php the_field('contact__img', 'option')?>')"></div>
          <div class="contact__info">
            <h4 class="contact__title">
              <?php the_field('contact__title', 'option')?>
            </h4>
            <p class="contact__item"><?php the_field('company-name', 'option')?></p>
            <p class="contact__item"><?php the_field('company-adress', 'option')?></p>
            <p class="contact__item"><?php the_field('company-nip', 'option')?></p>
            <div class="contact__item">
              <p class="contact__tel">tel: <a href="tel:<?=get_field('contact-tel');?>"><?php the_field('contact-tel', 'option'); ?></a></p>
              <p class="contact__mail">e-mail: <a href="mailto:<?=get_field('contact-mail');?>"><?php the_field('contact-mail', 'option'); ?></a></p>
            </div>
            <a href="<?php the_field('contact__link')?>" class="contact__btn"><?php the_field('contact__btn', 'option')?></a>
            <span></span>
            <span></span>
          </div>
      </div>
    </div>
  </section>
</main>
<?php
get_footer();