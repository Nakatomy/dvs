<?php if (!$form_id): ?>
    <h3><?php echo t("Empty form display block"); ?></h3>
<?php else: ?>
    <?php echo $form_view; ?>
<?php endif; ?>

<script>
    $(document).ready(function (){
        $('.datepicker').datepicker({
            dateFormat: "<?php echo $datepicker_date_format; ?>"
        });
    });
</script>
