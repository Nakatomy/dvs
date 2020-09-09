<form action="#" method="post">

	<!-- textfield with help block -->
	<div class="form-group row">
		<div class="col-sm-4">
			<label for="textfield-item-<?php echo $IDs; ?>-1" class="control-label <?php echo $labelSize . ' ' . $labelColor; ?>" title="Label text">Label text:</label>
		</div>
		<div class="col-sm-8">
			<input type="text" name="textfield-item-<?php echo $IDs; ?>-1" id="textfield-item-<?php echo $IDs; ?>-1" class="form-control <?php echo $inputSize . ' ' . $inputColor; ?>" placeholder="Placeholder" title="Title" tabindex="10">
			<p class="form-text <?php echo $helpBlockColor; ?>">Example block-level help text here.</p>
		</div>
	</div>

	<div class="form-group row has-error">
		<div class="col-sm-4">
			<label for="textfield-item-<?php echo $IDs; ?>-1-error" class="control-label <?php echo $labelSize . ' ' . $labelColor; ?>" title="Label text">Label text:</label>
		</div>
		<div class="col-sm-8">
			<input type="text" name="textfield-item-<?php echo $IDs; ?>-1-error" id="textfield-item-<?php echo $IDs; ?>-1-error" class="form-control <?php echo $inputSize . ' ' . $inputColor; ?>" placeholder="Error" title="Title" tabindex="10">
			<p class="form-text <?php echo $helpBlockColor; ?>">Example block-level help text here.</p>
		</div>
	</div>

	<div class="form-group row disabled">
		<div class="col-sm-4">
			<label for="textfield-item-<?php echo $IDs; ?>-1-disabled" class="control-label <?php echo $labelSize . ' ' . $labelColor; ?>" title="Label text">Label text:</label>
		</div>
		<div class="col-sm-8">
			<input type="text" name="textfield-item-<?php echo $IDs; ?>-1-disabled" id="textfield-item-<?php echo $IDs; ?>-1-disabled" class="form-control <?php echo $inputSize . ' ' . $inputColor; ?>" disabled="disabled" placeholder="Disabled" title="Title" tabindex="10" value="Disabled">
			<p class="form-text <?php echo $helpBlockColor; ?>">Example block-level help text here.</p>
		</div>
	</div>

	<!-- file upload -->
	<div class="form-group row">
		<div class="col-sm-4">
			<label for="upload-item-<?php echo $IDs; ?>-10" class="control-label <?php echo $labelSize . ' ' . $labelColor; ?>" title="Label text">Label text:</label>
		</div>
		<div class="col-sm-8">
			<div class="form-control form-control-fake <?php echo $inputSize . ' ' . $inputColor; ?>">
				<input type="file" name="upload-item-<?php echo $IDs; ?>-10" id="upload-item-<?php echo $IDs; ?>-10" tabindex="10" title="Title">
			</div>
		</div>
	</div>

	<div class="form-group row has-error">
		<div class="col-sm-4">
			<label for="upload-item-<?php echo $IDs; ?>-10-error" class="control-label <?php echo $labelSize . ' ' . $labelColor; ?>" title="Label text">Label text:</label>
		</div>
		<div class="col-sm-8">
			<div class="form-control form-control-fake <?php echo $inputSize . ' ' . $inputColor; ?>">
				<input type="file" name="upload-item-<?php echo $IDs; ?>-10-error" id="upload-item-<?php echo $IDs; ?>-10-error" tabindex="10" title="Title">
			</div>
		</div>
	</div>

	<div class="form-group row disabled">
		<div class="col-sm-4">
			<label for="upload-item-<?php echo $IDs; ?>-10-disabled" class="control-label <?php echo $labelSize . ' ' . $labelColor; ?>" title="Label text">Label text:</label>
		</div>
		<div class="col-sm-8">
			<div class="form-control form-control-fake <?php echo $inputSize . ' ' . $inputColor; ?>">
				<input type="file" name="upload-item-<?php echo $IDs; ?>-10-disabled" id="upload-item-<?php echo $IDs; ?>-10-disabled" disabled="disabled" tabindex="10" title="Title">
			</div>
		</div>
	</div>

	<!-- select -->
	<div class="form-group row">
		<div class="col-sm-4">
			<label for="select-item-<?php echo $IDs; ?>-1" class="control-label <?php echo $labelSize . ' ' . $labelColor; ?>" title="Label text">Label text:</label>
		</div>
		<div class="col-sm-8">
			<select name="select-item-<?php echo $IDs; ?>-1" id="select-item-<?php echo $IDs; ?>-1" class="form-control <?php echo $inputSize . ' ' . $inputColor; ?>" title="Title" tabindex="10">
				<option value="0">Please select</option>
				<option value="1">Option 1</option>
				<option value="2">Option 2</option>
			</select>
		</div>
	</div>

	<div class="form-group row has-error">
		<div class="col-sm-4">
			<label for="select-item-<?php echo $IDs; ?>-1-error" class="control-label <?php echo $labelSize . ' ' . $labelColor; ?>" title="Label text">Label text:</label>
		</div>
		<div class="col-sm-8">
			<select name="select-item-<?php echo $IDs; ?>-1-error" id="select-item-<?php echo $IDs; ?>-1-error" class="form-control <?php echo $inputSize . ' ' . $inputColor; ?>" title="Title" tabindex="10">
				<option value="0">Error</option>
				<option value="1">Option 1</option>
				<option value="2">Option 2</option>
			</select>
		</div>
	</div>

	<div class="form-group row disabled">
		<div class="col-sm-4">
			<label for="select-item-<?php echo $IDs; ?>-1-disabled" class="control-label <?php echo $labelSize . ' ' . $labelColor; ?>" title="Label text">Label text:</label>
		</div>
		<div class="col-sm-8">
			<select name="select-item-<?php echo $IDs; ?>-1-disabled" id="select-item-<?php echo $IDs; ?>-1-disabled" class="form-control <?php echo $inputSize . ' ' . $inputColor; ?>" disabled="disabled" title="Title" tabindex="10">
				<option value="0" selected>Disabled</option>
				<option value="1">Option 1</option>
				<option value="2">Option 2</option>
			</select>
		</div>
	</div>

	<!-- textarea -->
	<div class="form-group row">
		<div class="col-sm-4">
			<label for="textarea-item-<?php echo $IDs; ?>-1" class="control-label <?php echo $labelSize . ' ' . $labelColor; ?>" title="Label text">Label text:</label>
		</div>
		<div class="col-sm-8">
			<textarea name="textarea-item-<?php echo $IDs; ?>-1" id="textarea-item-<?php echo $IDs; ?>-1" class="form-control <?php echo $inputSize . ' ' . $inputColor; ?>" rows="4" placeholder="Placeholder" title="Title" tabindex="10"></textarea>
		</div>
	</div>

	<div class="form-group row has-error">
		<div class="col-sm-4">
			<label for="textarea-item-<?php echo $IDs; ?>-1-error" class="control-label <?php echo $labelSize . ' ' . $labelColor; ?>" title="Label text">Label text:</label>
		</div>
		<div class="col-sm-8">
			<textarea name="textarea-item-<?php echo $IDs; ?>-1-error" id="textarea-item-<?php echo $IDs; ?>-1-error" class="form-control <?php echo $inputSize . ' ' . $inputColor; ?>" rows="4" placeholder="Error" title="Title" tabindex="10"></textarea>
		</div>
	</div>

	<div class="form-group row disabled">
		<div class="col-sm-4">
			<label for="textarea-item-<?php echo $IDs; ?>-1-disabled" class="control-label <?php echo $labelSize . ' ' . $labelColor; ?>" title="Label text">Label text:</label>
		</div>
		<div class="col-sm-8">
			<textarea name="textarea-item-<?php echo $IDs; ?>-1-disabled" id="textarea-item-<?php echo $IDs; ?>-1-disabled" class="form-control <?php echo $inputSize . ' ' . $inputColor; ?>" disabled="disabled" rows="4" placeholder="Disabled" title="Title" tabindex="10">Disabled</textarea>
		</div>
	</div>

	<!-- checkbox -->
	<div class="form-group row">
		<div class="col-sm-offset-4 col-sm-8">
			<div class="form-check">
				<label for="checkbox-item-<?php echo $IDs; ?>-1" title="Label text" class="form-check-label <?php echo $labelSize . ' ' . $labelColor; ?>">
					<input type="checkbox" name="checkbox-item-<?php echo $IDs; ?>-1" id="checkbox-item-<?php echo $IDs; ?>-1" class="form-check-input" title="Title" tabindex="10">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis obcaecati.
				</label>
			</div>
		</div>
	</div>

	<div class="form-group row has-error">
		<div class="col-sm-offset-4 col-sm-8">
			<div class="form-check">
				<label for="checkbox-item-<?php echo $IDs; ?>-1-error" title="Label text" class="form-check-label <?php echo $labelSize . ' ' . $labelColor; ?>">
					<input type="checkbox" name="checkbox-item-<?php echo $IDs; ?>-1-error" id="checkbox-item-<?php echo $IDs; ?>-1-error" class="form-check-input" title="Title" tabindex="10">ERROR - Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis obcaecati.
				</label>
			</div>
		</div>
	</div>

	<div class="form-group row disabled">
		<div class="col-sm-offset-4 col-sm-8">
			<div class="form-check">
				<label for="checkbox-item-<?php echo $IDs; ?>-1-disabled" title="Label text" class="form-check-label <?php echo $labelSize . ' ' . $labelColor; ?>">
					<input type="checkbox" name="checkbox-item-<?php echo $IDs; ?>-1-disabled" id="checkbox-item-<?php echo $IDs; ?>-1-disabled" class="form-check-input" disabled="disabled" checked="checked" title="Title" tabindex="10">DISABLED - Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis obcaecati.
				</label>
			</div>
		</div>
	</div>

	<!-- radio button -->
	<div class="form-group row">
		<div class="col-sm-offset-4 col-sm-8">
			<div class="form-check">
				<label for="radio-item-<?php echo $IDs; ?>-1" title="Label text" class="form-check-label <?php echo $labelSize . ' ' . $labelColor; ?>">
					<input type="radio" name="radio-item-<?php echo $IDs; ?>-1" id="radio-item-<?php echo $IDs; ?>-1" class="form-check-input" title="Title" tabindex="10">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis obcaecati.
				</label>
			</div>
		</div>
	</div>

	<div class="form-group row has-error">
		<div class="col-sm-offset-4 col-sm-8">
			<div class="form-check">
				<label for="radio-item-<?php echo $IDs; ?>-1-error" title="Label text" class="form-check-label <?php echo $labelSize . ' ' . $labelColor; ?>">
					<input type="radio" name="radio-item-<?php echo $IDs; ?>-1" id="radio-item-<?php echo $IDs; ?>-1-error" class="form-check-input" title="Title" tabindex="10">ERROR - Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis obcaecati.
				</label>
			</div>
		</div>
	</div>

	<div class="form-group row disabled">
		<div class="col-sm-offset-4 col-sm-8">
			<div class="form-check">
				<label for="radio-item-<?php echo $IDs; ?>-1-disabled" title="Label text" class="form-check-label <?php echo $labelSize . ' ' . $labelColor; ?>">
					<input type="radio" name="radio-item-<?php echo $IDs; ?>-1" id="radio-item-<?php echo $IDs; ?>-1-disabled" class="form-check-input" disabled="disabled" checked="checked" title="Title" tabindex="10">DISABLED - Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis obcaecati.
				</label>
			</div>
		</div>
	</div>

	<!-- checkbox skin -->
	<div class="form-group row">
		<div class="col-sm-offset-4 col-sm-8">
			<div class="form-check checkbox-skin <?php echo $inputColor; ?>">
				<input type="checkbox" name="checkbox-item-<?php echo $IDs; ?>-2" id="checkbox-item-<?php echo $IDs; ?>-2" title="Title" tabindex="10">
				<label for="checkbox-item-<?php echo $IDs; ?>-2" title="Label text" class="form-check-label <?php echo $labelSize . ' ' . $labelColor; ?>">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis obcaecati.</label>
			</div>
		</div>
	</div>

	<div class="form-group row has-error">
		<div class="col-sm-offset-4 col-sm-8">
			<div class="form-check checkbox checkbox-skin">
				<input type="checkbox" name="checkbox-item-<?php echo $IDs; ?>-2-error" id="checkbox-item-<?php echo $IDs; ?>-2-error" title="Title" tabindex="10">
				<label for="checkbox-item-<?php echo $IDs; ?>-2-error" title="Label text" class="form-check-label <?php echo $labelSize . ' ' . $labelColor; ?>">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis obcaecati.</label>
			</div>
		</div>
	</div>

	<div class="form-group row disabled">
		<div class="col-sm-offset-4 col-sm-8">
			<div class="form-check checkbox checkbox-skin">
				<input type="checkbox" name="checkbox-item-<?php echo $IDs; ?>-2-disabled" id="checkbox-item-<?php echo $IDs; ?>-2-disabled" disabled="disabled" checked="checked" title="Title" tabindex="10">
				<label for="checkbox-item-<?php echo $IDs; ?>-2-disabled" title="Label text" class="form-check-label <?php echo $labelSize . ' ' . $labelColor; ?>">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis obcaecati.</label>
			</div>
		</div>
	</div>

	<!-- radio button skin -->
	<div class="form-group row">
		<div class="col-sm-offset-4 col-sm-8">
			<div class="form-check radio radio-skin">
				<input type="radio" name="radio-item-<?php echo $IDs; ?>-2" id="radio-item-<?php echo $IDs; ?>-2" title="Title" tabindex="10">
				<label for="radio-item-<?php echo $IDs; ?>-2" title="Label text" class="form-check-label <?php echo $labelSize . ' ' . $labelColor; ?>">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis obcaecati.</label>
			</div>
		</div>
	</div>

	<div class="form-group row has-error">
		<div class="col-sm-offset-4 col-sm-8">
			<div class="form-check radio radio-skin">
				<input type="radio" name="radio-item-<?php echo $IDs; ?>-2" id="radio-item-<?php echo $IDs; ?>-2-error" title="Title" tabindex="10">
				<label for="radio-item-<?php echo $IDs; ?>-2-error" title="Label text" class="form-check-label <?php echo $labelSize . ' ' . $labelColor; ?>">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis obcaecati.</label>
			</div>
		</div>
	</div>

	<div class="form-group row disabled">
		<div class="col-sm-offset-4 col-sm-8">
			<div class="form-check radio radio-skin">
				<input type="radio" name="radio-item-<?php echo $IDs; ?>-2" id="radio-item-<?php echo $IDs; ?>-2-disabled" disabled="disabled" checked="checked" title="Title" tabindex="10">
				<label for="radio-item-<?php echo $IDs; ?>-2-disabled" title="Label text" class="form-check-label <?php echo $labelSize . ' ' . $labelColor; ?>">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis obcaecati.</label>
			</div>
		</div>
	</div>

</form>
<hr>
