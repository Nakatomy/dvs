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

        <div class="Montserrat-Medium"><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, soluta.</p></div>
        <div class="Montserrat-MediumItalic"><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, soluta.</p></div>
        <div class="Montserrat-Bold"><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, soluta.</p></div>
        <div class="Montserrat-BoldItalic"><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, soluta.</p></div>

    </article>

<?php include 'elements/footer.php'; ?>
