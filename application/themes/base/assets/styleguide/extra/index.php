<?php include '../elements/header.php'; ?>

    <article class="texts">

        <h1>All colors</h1>

        <section>
            <ul class="color-list">
            <?php
                $colors = ['black', 'white', 'red', 'light-blue', 'blue', 'dark-blue', 'light-green', 'green', 'dark-green', 'orange', 'light-gray', 'gray', 'dark-gray'];
                foreach ($colors as $color) {
                    echo '<li><span class="color-globe bg-color-'.$color.'">'.$color.'</span></li>';
                }
            ?>
            </ul>
        </section>

    </article>

<?php include '../elements/footer.php'; ?>
