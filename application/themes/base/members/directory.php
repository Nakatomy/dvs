<?php $this->inc('elements/header/view.php'); ?>

<div class="container">

    <header class="texts text-center pt-4">
        <h1><?php echo t('Members')?></h1>
    </header>

    <div class="row">
        <div class="col-xl-5 col-md-6 mx-auto">

            <form method="get" action="<?php echo $view->action('search_members')?>" class="navbar-form">
                <div class="row">
                    <div class="col-md-9 form-group">
                        <input name="keywords" type="text" value="<?php echo $keywords?>" class="form-control" placeholder="<?php echo t('Search')?>" />
                    </div>
                    <div class="col-md-3 form-group">
                        <input name="submit" type="submit" value="<?php echo t('Search')?>" class="btn btn-block"/>
                    </div>
                </div>
            </form>

            <?php if ($total == 0) { ?>

                <div><?php echo t('No users found.')?></div>

            <?php } else { ?>

                <table class="table" id="ccm-members-directory">

                    <?php
                        $av = Loader::helper('concrete/avatar');
                        $u = new User();
                    ?>

                    <tr>
                        <th><?php echo t('Avatar'); ?></th>
                        <th><?php echo t('Name'); ?></th>
                        <th><?php echo t('Date joined'); ?></th>
                    </tr>

                    <?php foreach($users as $user) { 	?>
                        <tr>
                            <td class="ccm-members-directory-avatar"><a href="<?php echo $user->getUserPublicProfileURL()?>"><?php echo $user->getUserAvatar()->output()?></a></td>
                            <td><a href="<?php echo $user->getUserPublicProfileURL()?>"><?php echo ucfirst($user->getUserName())?></a></td>
                            <td><?php echo $user->getUserDateAdded(); ?></td>
                        </tr>
                    <?php } ?>

                </table>

                <?php if ($pagination->haveToPaginate()) { ?>

                    <?php echo $pagination->renderDefaultView();?>

                <?php } ?>

            <?php } ?>

        </div>
    </div>

</div>

<?php $this->inc('elements/footer/view.php'); ?>

