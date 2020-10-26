<?php /* Template Name: O Nas*/
get_header(); ?>


<main>
  <section class="about">
    <div class="container">
      <div class="about__inner">
        <h2 class="about__title anim-item">
          <?php the_field('about__title')?>
        </h2>


                    <?php if( have_rows('about__desp') ): ?>
                      <ul class="about__desp">
                        <?php while( have_rows('about__desp') ): the_row(); ?>
                          <li class="about__des">
                            <?php the_sub_field('about__des')?>
                          </li>
                        <?php endwhile; ?>
                      </ul>
                    <?php endif; ?>

        <div class="about__row row">
          <div class="col-md-7">
            <h2 class="about__item-title anim-item">
              <?php the_field('about__item-title1')?>
            </h2>
            <p class="about__item-text anim-item">
              <?php the_field('about__item-text1')?>
            </p>
            <p class="about__autor">
              <?php the_field('about__autor')?>
            </p>
          </div>
          <div class="col-md-5">
            <img src="<?php the_field('about__img1')?>" alt="">
          </div>
        </div>

        <div class="about__row row">
          <div class="col-md-7">
            <img src="<?php the_field('about__img2')?>" alt="">
          </div>
          <div class="col-md-5 about__des-text">
            <h2 class="about__item-title anim-item">
              <?php the_field('about__item-title2')?>
            </h2>
            <p class="about__item-text anim-item">
              <?php the_field('about__item-text2')?>
            </p>
          </div>
        </div>

        <div class="about__row row">
          <div class="col-md-7">
            <h2 class="about__item-title anim-item">
              <?php the_field('about__item-title3')?>
            </h2>
            <p class="about__item-text anim-item">
              <?php the_field('about__item-text3')?>
            </p>
          </div>
          <div class="col-md-5">
            <img src="<?php the_field('about__img3')?>" alt="">
          </div>
        </div>
      </div>
    </div>
  </section>
</main>
<?php
get_footer();