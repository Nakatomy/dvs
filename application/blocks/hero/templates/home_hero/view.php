<div class="home-hero">
    <div class="container relative">
        <?php if ($media_type === 'background_image'): ?>
            <?php $this->inc('elements/custom_image.php', [
                'content'       => $content,
                'image_url'     => $image_url,
                'aspect_ratio'  => $aspect_ratio
            ]); ?>
        <?php elseif($media_type === 'background_video'): ?>
            <?php $this->inc('elements/video.php', [
                'video_url'         => $video_url,
                'video_extension'   => $video_extension,
                'video_attributes'  => $attributes,
                'aspect_ratio'      => $aspect_ratio
            ]); ?>
        <?php endif; ?>
    </div>
</div>
