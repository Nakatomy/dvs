<?php $root = '../../../../../../application'; ?>
<?php $base = '../../../../../../packages/base'; ?>

<!DOCTYPE html>
<html lang="en" id="html" class="no-js">
<head>

	<!-- Setup charset -->
	<meta charset="utf-8">

	<!-- Setup viewport -->
	<meta name="HandheldFriendly" content="true">
	<meta name="MobileOptimized" content="320">
	<meta name="viewport" content="width = device-width, initial-scale = 1.0, minimum-scale = 1.0, maximum-scale = 1.0, user-scalable = no">

	<!-- No automatic telephone detecting on iPad -->
	<meta name="format-detection" content="telephone=no">

	<!-- Title -->
	<title>Styleguide</title>

	<!-- Remove "no-js" class -->
	<script type="text/javascript">
		var $htmlClasses = document.getElementById('html');
		$htmlClasses.className = $htmlClasses.className.replace(/(\s|^)no-js(\s|$)/,' ').replace(/(\s$)(^\s)/,'');
	</script>

	<!-- Project CSS -->
	<link rel="stylesheet" type="text/css" media="all" href="<?php echo $root; ?>/css/dist/base.css">
	<link rel="stylesheet" type="text/css" media="all" href="../../../../../node_modules/@fortawesome/fontawesome-free/css/all.min.css">

</head>
<body>

<!-- main START -->

<div class="main">

<!-- contents START -->

<div class="contents">

    <div class="d-flex">

        <aside class="col-md-3">

            <header class="text-center p-5">
                <nav class="logo">
                    <a href="<?php echo $root; ?>" title="">
                        <img width="200" src="<?php echo $base; ?>/themes/base/assets/img/icons/webery.svg" alt="">
                    </a>
                </nav>
            </header>

            <hr>

            <ul class="nav flex-column">
                <li class="nav-item">
                    <a class="nav-link" href="./">Base</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="./typography">Typography</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="./forms">Form elements</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="./extra">Extra</a>
                </li>
            </ul>

        </aside>

        <div class="col-md-9" style="padding-top:130px;">

