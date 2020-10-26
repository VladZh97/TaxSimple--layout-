<?php /* Template Name: Warunki Współpracy*/
get_header(); ?>


<main>
<section class="condition">
  <div class="container">
    <div class="condition__inner">
      <h2 class="condition__title anim-item">
        <?php the_field('condition__title')?>
      </h2>
      <div class="condition__row row anim-item">
        <div class="col-md-5">
          <?php if( have_rows('condition__items') ): ?>
            <ul class="condition__items">
            <?php while( have_rows('condition__items') ): the_row(); ?>
                <li class="condition__item">
                <a href="#<?php the_sub_field('condition__id')?>">
                  <h3 class="condition__item-left">
                    <?php the_sub_field('condition__item-text')?>
                  </h3>
                </a>
                </li>
            <?php endwhile; ?>
            </ul>
          <?php endif; ?>
        </div>

        <div class="col-md-7 condition__right anim-item">
          <?php if( have_rows('condition__single') ): ?>
            <ul class="condition__single">
              <?php while( have_rows('condition__single') ): the_row(); ?>
                  <li class="condition__sinle-item" id="<?php the_sub_field('condition__id')?>">
                    <h3 class="condition__item-text">
                      <i class="fas fa-square"></i>
                      <?php the_sub_field('condition__single-title')?>
                    </h3>
                    <p class="condition__single-des">
                    <?php the_sub_field('condition__single-des')?>
                    </p>
                  </li>
              <?php endwhile; ?>
            </ul>
          <?php endif; ?>

          <h3 class="condition__item-sept" id="<?php the_field('conditionw__id')?>">
            <i class="fas fa-square"></i>
            <?php the_field('condition__item-money')?>
          </h3>

          <?php if( have_rows('condition__single-list') ): ?>
            <ul class="condition__single-list">
              <?php while( have_rows('condition__single-list') ): the_row(); ?>
                <li class="condition__single-list-item">
                  <p class="condition__single-list-des">
                    <?php the_sub_field('condition__single-list-des')?>
                  </p>

                    <?php if( have_rows('condition-list') ): ?>
                      <ul class="condition-list">
                        <?php while( have_rows('condition-list') ): the_row(); ?>
                          <li class="condition-list-item">
                            <span>.</span>
                              <p class="condition-list-text">
                                <?php the_sub_field('condition-list-text')?>
                              </p>
                          </li>
                        <?php endwhile; ?>
                      </ul>
                    <?php endif; ?>
                </li>
              <?php endwhile; ?>
            </ul>
          <?php endif; ?>
        </div>
      </div>
    </div>
  </div>
</section>
</main>
<?php
get_footer();