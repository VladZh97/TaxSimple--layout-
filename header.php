<!DOCTYPE html>
<html <?php language_attributes(); ?>>

<head>
    <meta charset="<?php bloginfo( 'charset' ); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, shrink-to-fit=no">
    <meta name="description" content="<?php bloginfo('description'); ?>" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="<?php echo get_template_directory_uri(); ?>/assets/css/style.css">
    <?php wp_head(); ?>


</head>

<body <?php body_class(); ?>>
    <header class="header" style="background-image: url(<?php the_field('header__baner', 'option'); ?>)">
        <div class="header__inner">
            <div class="container header__top">
                <div class="header__logo">
                    <a href="<?php echo get_home_url()?>" class="header__logo-link">
                        <img src="<?php the_field('header__logo', 'option') ?>" alt="">
                    </a>
                </div>
                <div class="header__left">
                    <div id="menu" class="menu">
                        <nav id="menu__main" class="menu__main">
                            <?php
                                wp_nav_menu(array(
                                'theme_location' => 'main',
                                'container' => 'ul',
                                'menu_class' => 'header__items'
                                ));
                            ?>
                        </nav>
                    </div>
                    <ul class="header__lang"><?php pll_the_languages();?></ul>
                </div>
                <div class="icon">
                        <div class="burger"></div>
                    </div>
            </div>
        </div>
        <div class="container header__text">
            <h1 class="header__title"><?php the_field('header__title', 'option')?></h1>
            <p class="header__subtitle"><?php the_field('header__subtitle', 'option')?></p>
            <a href="<?php the_field('header__link')?>" class="header__btn anim-item no-anim">
                <?php the_field('header__btn', 'option'); ?>
                <span></span>
                <span></span>
            </a>
        </div>
    </header>