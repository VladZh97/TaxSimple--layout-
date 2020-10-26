<?php /* Template Name: Usługi*/
get_header(); ?>


<main>
<section class="serv">
  <div class="container">
    <div class="serv__inner">
      <h2 class="serv__title title anim-item">
        <?php the_field('serv__title')?>
      </h2>
      <div class="serv__row row">
        <div class="col-md-5">
          <?php if( have_rows('serv__items') ): ?>
            <ul class="serv__items">
            <?php while( have_rows('serv__items') ): the_row(); ?>
                <li class="serv__item">
                <a href="#<?php the_sub_field('serv__id')?>">
                  <h3 class="serv__item-left">
                    <?php the_sub_field('serv__item-text')?>
                  </h3>
                  </a>
                </li>
            <?php endwhile; ?>
            </ul>
          <?php endif; ?>
        </div>

        <div class="col-md-7">
          <?php if( have_rows('serv__single') ): ?>
            <ul class="serv__single anim-item">
              <?php while( have_rows('serv__single') ): the_row(); ?>
                  <li class="serv__sinle-item" id="<?php the_sub_field('serv__id')?>">
                    <h3 class="serv__item-text">
                    <i class="fas fa-square"></i>
                      <?php the_sub_field('serv__single-title')?>
                    </h3>
                    <?php if( have_rows('serv__single-list') ): ?>
                      <ul class="serv__single-list">
                        <?php while( have_rows('serv__single-list') ): the_row(); ?>
                          <li class="serv__single-list-item">
                            <span>.</span>
                              <p class="serv__single-list-text">
                                <?php the_sub_field('serv__single-list-text')?>
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