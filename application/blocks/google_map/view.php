<?php $this->inc('elements/script_i18n.php'); ?>

<?php if ((empty($skin) && empty($markers)) || !$is_api_key_available): ?>
    <div class="embed-responsive embed-responsive-<?php echo $aspect_ratio; ?>">
        <iframe
            class="embed-responsive-item"
            title="<?php echo t('Google Map'); ?>"
            src="https://maps.google.com/maps?hl=<?php $language; ?>&amp;q=<?php echo $center_location; ?>&amp;ie=UTF8&amp;t=&amp;z=<?php echo $zoom; ?>&amp;iwloc=B&amp;output=embed"
            frameborder="<?php echo $frame_border; ?>"
            <?php if ($allow_full_screen): ?>allowfullscreen<?php endif; ?>>
        </iframe>
    </div>
<?php else: ?>
    <div class="relative map-container">
        <div id="map-<?php echo $bID; ?>" class="google-map" data-config='<?php echo $config; ?>'
            style="width: 100%; height: 600px;">
        </div>
        <div class="map-layer active">
            <p>
                <strong><?php echo t('Address:'); ?></strong>
                <?php echo $center_location; ?>
            </p>
        </div>
    </div>
<?php endif; ?>
