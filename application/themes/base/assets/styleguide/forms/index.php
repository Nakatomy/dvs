<?php include '../elements/header.php'; ?>

<section>

    <div class="row">

        <div class="col-12">

            <code>
                alerts:
            </code>
            <hr>

            <?php
                // include alerts block
                include '__alerts-block.php';
            ?>

        </div>

    </div>

</section>

<section>

    <div class="row">

        <div class="col-12 col-sm-6">

            <code>
                button default size and default colors:
            </code>
            <hr>

            <?php
                // include buttons block
                $IDs = '1';
                $btnSize = '';
                $btnColor = '';
                include '__buttons-block.php';
            ?>

        </div>

        <div class="col-12 col-sm-6">

            <code>
                button default size and 'v1' colors:
            </code>
            <hr>

            <?php
                // include buttons block
                $IDs = '2';
                $btnSize = '';
                $btnColor = 'btn-v1';
                include '__buttons-block.php';
            ?>

        </div>

    </div>

    <div class="row">

        <div class="col-12 col-sm-6">

            <code>
                button small size and default colors:
            </code>
            <hr>

            <?php
                // include buttons block
                $IDs = '3';
                $btnSize = 'btn-sm';
                $btnColor = '';
                include '__buttons-block.php';
            ?>

        </div>

        <div class="col-12 col-sm-6">

            <code>
                button small size and 'v1' colors:
            </code>
            <hr>

            <?php
                // include buttons block
                $IDs = '4';
                $btnSize = 'btn-sm';
                $btnColor = 'btn-v1';
                include '__buttons-block.php';
            ?>

        </div>

    </div>

    <div class="row">

        <div class="col-12 col-sm-6">

            <code>
                button large size and default colors:
            </code>
            <hr>

            <?php
                // include buttons block
                $IDs = '5';
                $btnSize = 'btn-lg';
                $btnColor = '';
                include '__buttons-block.php';
            ?>

        </div>

        <div class="col-12 col-sm-6">

            <code>
                button large size and 'v1' colors:
            </code>
            <hr>

            <?php
                // include buttons block
                $IDs = '6';
                $btnSize = 'btn-lg';
                $btnColor = 'btn-v1';
                include '__buttons-block.php';
            ?>

        </div>

    </div>

</section>

<section>

    <div class="row">

        <div class="col-12 col-sm-6">

            <code>
                form-control default size and default color:
            </code>
            <hr>

            <?php
                // include forms block
                $IDs = '1';
                $labelSize = '';
                $labelColor = '';
                $inputSize = '';
                $inputColor = '';
                $helpBlockColor = '';
                include '__forms-block.php';
            ?>

        </div>

        <div class="col-12 col-sm-6">

            <code>
                form-control default size and 'v1' color:
            </code>
            <hr>

            <?php
                // include forms block
                $IDs = '2';
                $labelSize = '';
                $labelColor = 'label-v1';
                $inputSize = '';
                $inputColor = 'input-v1';
                $helpBlockColor = 'help-block-v1';
                include '__forms-block.php';
            ?>

        </div>

    </div>

    <div class="row">

        <div class="col-12 col-sm-6">

            <code>
                form-control small size and default color:
            </code>
            <hr>

            <?php
                // include forms block
                $IDs = '3';
                $labelSize = 'label-sm';
                $labelColor = '';
                $inputSize = 'form-control-sm';
                $inputColor = '';
                $helpBlockColor = '';
                include '__forms-block.php';
            ?>

        </div>

        <div class="col-12 col-sm-6">

            <code>
                form-control small size and 'v1' color:
            </code>
            <hr>

            <?php
                // include forms block
                $IDs = '4';
                $labelSize = 'label-sm';
                $labelColor = 'label-v1';
                $inputSize = 'form-control-sm';
                $inputColor = 'input-v1';
                $helpBlockColor = 'help-block-v1';
                include '__forms-block.php';
            ?>

        </div>

    </div>

    <div class="row">

        <div class="col-12 col-sm-6">

            <code>
                form-control large size and default color:
            </code>
            <hr>

            <?php
                // include forms block
                $IDs = '5';
                $labelSize = 'label-lg';
                $labelColor = '';
                $inputSize = 'form-control-lg';
                $inputColor = '';
                $helpBlockColor = '';
                include '__forms-block.php';
            ?>

        </div>

        <div class="col-12 col-sm-6">

            <code>
                form-control large size and 'v1' color:
            </code>
            <hr>

            <?php
                // include forms block
                $IDs = '6';
                $labelSize = 'label-lg';
                $labelColor = 'label-v1';
                $inputSize = 'form-control-lg';
                $inputColor = 'input-v1';
                $helpBlockColor = 'help-block-v1';
                include '__forms-block.php';
            ?>

        </div>

    </div>

</section>

<?php include '../elements/footer.php'; ?>

