<form action="#" method="post">

	<!-- button -->
	<div class="form-group row">
		<div class="col-sm-12">
			<p>framework defaults:</p>
			<button type="submit" name="button-item-<?php echo $IDs; ?>-1-submit" id="button-item-<?php echo $IDs; ?>-1-submit" class="btn <?php echo $btnSize . ' ' . $btnColor; ?>" title="Title" tabindex="10">Submit</button>
			<button type="button" name="button-item-<?php echo $IDs; ?>-1-disabled" id="button-item-<?php echo $IDs; ?>-1-disabled" class="btn <?php echo $btnSize . ' ' . $btnColor; ?>" disabled="disabled" title="Title" tabindex="10">Disabled</button>
			<a href="#" class="btn <?php echo $btnSize . ' ' . $btnColor; ?>" title="Title" tabindex="10">Link</a>
			<a href="#" class="btn btn-multilines <?php echo $btnSize . ' ' . $btnColor; ?>" title="Title" tabindex="10">Multilines</a>
		</div>
	</div>

	<!-- button default bootstrap -->
	<div class="form-group row">
		<div class="col-sm-12">
			<p>bootstrap defaults:</p>
			<button type="button" name="button-item-<?php echo $IDs; ?>-1-primary" id="button-item-<?php echo $IDs; ?>-1-primary" class="btn <?php echo $btnSize . ' ' . $btnColor; ?> btn-primary" title="Title" tabindex="10">Primary</button>
			<button type="button" name="button-item-<?php echo $IDs; ?>-1-secondary" id="button-item-<?php echo $IDs; ?>-1-secondary" class="btn <?php echo $btnSize . ' ' . $btnColor; ?> btn-secondary" title="Title" tabindex="10">Secondary</button>
			<button type="button" name="button-item-<?php echo $IDs; ?>-1-success" id="button-item-<?php echo $IDs; ?>-1-success" class="btn <?php echo $btnSize . ' ' . $btnColor; ?> btn-success" title="Title" tabindex="10">Success</button>
			<button type="button" name="button-item-<?php echo $IDs; ?>-1-info" id="button-item-<?php echo $IDs; ?>-1-info" class="btn <?php echo $btnSize . ' ' . $btnColor; ?> btn-info" title="Title" tabindex="10">Info</button>
			<button type="button" name="button-item-<?php echo $IDs; ?>-1-warning" id="button-item-<?php echo $IDs; ?>-1-warning" class="btn <?php echo $btnSize . ' ' . $btnColor; ?> btn-warning" title="Title" tabindex="10">Warning</button>
			<button type="button" name="button-item-<?php echo $IDs; ?>-1-danger" id="button-item-<?php echo $IDs; ?>-1-danger" class="btn <?php echo $btnSize . ' ' . $btnColor; ?> btn-danger" title="Title" tabindex="10">Danger</button>
			<button type="button" name="button-item-<?php echo $IDs; ?>-1-link" id="button-item-<?php echo $IDs; ?>-1-link" class="btn <?php echo $btnSize . ' ' . $btnColor; ?> btn-link" title="Title" tabindex="10">Link</button>
		</div>
	</div>

</form>
<hr>
