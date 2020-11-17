<?php include '../elements/header.php'; ?>

    <article class="texts">
        <?php
            // include typography block
            include '__typography-block.php';
        ?>
    </article>

    <section class="tables">

        <!-- table -->
        <code>
            table (table responsive):
        </code>
        <hr>

        <p>table with <strong>".table"</strong> class</p>
        <?php
            $tableStyle = '';
            include '__table-block.php';
        ?>
        <hr>

        <p>table with <strong>".table" and ".table-striped"</strong> classes</p>
        <?php
            $tableStyle = 'table-striped';
            include '__table-block.php';
        ?>
        <hr>

        <p>table with <strong>".table" and ".table-hover"</strong> classes</p>
        <?php
            $tableStyle = 'table-hover';
            include '__table-block.php';
        ?>
        <hr>

        <p>table with <strong>".table", ".table-striped" and ".table-hover"</strong> classes</p>
        <?php
            $tableStyle = 'table-striped table-hover';
            include '__table-block.php';
        ?>
        <hr>

    </section>

<?php include '../elements/footer.php'; ?>

