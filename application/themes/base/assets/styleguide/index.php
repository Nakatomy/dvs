<?php include 'elements/header.php'; ?>

    <article class="texts">

        <h1>Basic typography</h1>

        <section>
            <p>The quick brown fox jumps over the lazy dog</p>
            <p>Pack my box with five dozen liquor jugs.</p>
            <p>A mad boxer shot a quick, gloved jab to the jaw of his dizzy opponent.</p>
            <p>Egy hűtlen vejét fülöncsípő, dühös mexikói úr Wesselényinél mázol Quitóban.</p>
            <p>Árvíztűrő tükörfúrógép.</p>
        </section>

    </article>

    <article class="texts">

        <h1>Used colors</h1>

        <section>
            <ul class="color-list">
                <?php
                    $colors = ['white', 'light-gray', 'gray', 'dark-gray','black'];
                    foreach ($colors as $color) {
                        echo '<li><span class="color-globe bg-color-'.$color.'"></span><strong>'.$color.'</strong></li>';
                    }
                ?>
            </ul>
            <ul class="color-list">
                <?php
                    $colors = ['theme-primary', 'theme-primary-light', 'theme-primary-dark'];
                    foreach ($colors as $color) {
                        echo '<li><span class="color-globe bg-color-'.$color.'"></span><strong>'.$color.'</strong></li>';
                    }
                ?>
            </ul>
            <ul class="color-list">
                <?php
                    $colors = ['theme-secondary', 'theme-secondary-light', 'theme-secondary-dark'];
                    foreach ($colors as $color) {
                        echo '<li><span class="color-globe bg-color-'.$color.'"></span><strong>'.$color.'</strong></li>';
                    }
                ?>
            </ul>
            <ul class="color-list">
                <?php
                    $colors = ['theme-danger', 'theme-warning', 'theme-info', 'theme-success'];
                    foreach ($colors as $color) {
                        echo '<li><span class="color-globe bg-color-'.$color.'"></span><strong>'.$color.'</strong></li>';
                    }
                ?>
            </ul>
        </section>

        <p>For all colors <a href="./extra">Click here</a></p>

    </article>


    <article class="texts">

        <h1>Used fonts</h1>

        <div class="Montserrat-Medium"><p>Montserrat-Medium Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, soluta.</p></div>
        <div class="Montserrat-Light"><p>Montserrat-Light Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, soluta.</p></div>
        <div class="Montserrat-Regular"><p>Montserrat-Regular Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, soluta.</p></div>
        <div class="Poppins-Italic"><p>Poppins-Italic Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, soluta.</p></div>
        <div class="Poppins-Light"><p>Poppins-Light Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, soluta.</p></div>
        <div class="Poppins-Medium"><p>Poppins-Medium Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, soluta.</p></div>
        <div class="Poppins-Regular"><p>Poppins-Regular Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, soluta.</p></div>
        <div class="Poppins-SemiBold"><p>Poppins-SemiBold Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, soluta.</p></div>
        <div class="Poppins-SemiBoldItalic"><p>Poppins-SemiBoldItalic Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, soluta.</p></div>

        <h1>Used icons</h1>

        <div class="margin-bottom-default">
            <i class="icomoon icon-8-ways"></i>
            <i class="icomoon icon-gbart"></i>
            <i class="icomoon icon-webery"></i>
            <i class="icomoon icon-arrow-down"></i>
            <i class="icomoon icon-arrow-up"></i>
            <i class="icomoon icon-check-icon"></i>
            <i class="icomoon icon-map-icon"></i>
            <i class="icomoon icon-arrow-left"></i>
        </div>

    </article>

<?php include 'elements/footer.php'; ?>
