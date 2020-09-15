<div class="embed-responsive embed-responsive-<?php echo $aspect_ratio; ?>">
    <video <?php echo $video_attributes; ?> class="embed-responsive-item">
        <source src="<?php echo $video_url; ?>" type="video/<?php echo $video_extension; ?>">
    </video>
</div>
<article class="texts">
    <div class="container margin-bottom-last-zero">
        <?php echo $content; ?>
    </div>
</article>
