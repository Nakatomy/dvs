<?php /** @var \Concrete\Core\Multilingual\Page\Section\Section[] $language_sections */ ?>
<?php /** @var [] $languages */ ?>

<?php defined('C5_EXECUTE') or die("Access Denied."); ?>

<?php if ($languages): ?>
    <nav class="lng-select" id="lng_<?php echo $bID; ?>">
        <ul>
            <?php foreach ($languages as $language) : ?>
                <li class="<?php echo ($language['active']) ? 'active' : ''; ?>">
                    <a href="<?php echo $language['url']; ?>"
                        <?php echo ($language['active']) ?  'disabled' : ''; ?>
                       title="<?php echo $language['languageText']; ?>">
                        <?php print $language['languageCode']; ?>
                    </a>
                </li>
            <?php endforeach; ?>
        </ul>
    </nav>
<?php endif; ?>
