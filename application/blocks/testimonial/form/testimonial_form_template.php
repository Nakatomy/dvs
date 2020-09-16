<script type="text/x-template" id="testimonial-form-template">
    <div id="" class="ccm-ui">
        <hr v-if="entries.length > 0" />

        <div class="servicelist-block well" v-for="(entry, index) in entries">
            <div class="form-group">
                <a @click.prevent="removeEntry(index)" href="#" class="btn btn-danger"
                   title="<?php echo t('block.testimonial.delete'); ?>">
                    <i class="fa fa-trash"></i> <?php echo t('block.testimonial.delete'); ?>
                </a>
            </div>

            <div class="form-group">
                <input type="hidden" v-model="entry.id"
                       class="form-control" :name="'entries['+ index +'][id]'">
            </div>

            <div class="form-group">
                <label for="'entries['+index+'][fID]'" class="control-label">
                    <?php echo t('block.testimonial.image'); ?>
                </label>
                <c5-file-selector
                    v-model="entry.fID"
                    :inputName="'entries['+index+'][fID]'"
                >
                </c5-file-selector>
            </div>

            <div class="form-group">
                <label for="'entries['+ index +'][name]'" class="control-label">
                    <?php echo t('block.testimonial.name'); ?>
                </label>
                <input type="text" v-model="entry.name"
                           class="form-control" :name="'entries['+ index +'][name]'">
            </div>

            <div class="form-group">
                <label for="'entries['+ index +'][position]'" class="control-label">
                    <?php echo t('block.testimonial.position'); ?>
                </label>
                <input type="text" v-model="entry.position"
                       class="form-control" :name="'entries['+ index +'][position]'">
            </div>

            <div class="form-group">
                <label for="'entries['+ index +'][company]'" class="control-label">
                    <?php echo t('block.testimonial.company'); ?>
                </label>
                <input type="text" v-model="entry.company"
                       class="form-control" :name="'entries['+ index +'][company]'">
            </div>

            <div class="form-group">
                <label for="'entries['+ index +'][companyUrl]'" class="control-label">
                    <?php echo t('block.testimonial.company_url'); ?>
                </label>
                <input type="text" v-model="entry.companyUrl"
                       class="form-control" :name="'entries['+ index +'][companyUrl]'">
            </div>

            <div class="form-group">
                <label for="'entries['+ index +'][paragraph]'" class="control-label">
                    <?php echo t('block.testimonial.paragraph'); ?>
                </label>
                <textarea v-ckeditor :id="'ckeditor-'+index" v-model="entry.paragraph"
                          :name="'entries['+index+'][paragraph]'"
                ></textarea>
            </div>

        </div>

        <hr/>

        <div class="add-new">

            <div class="form-group">
                <a href="#" @click.prevent="addEntry" class="btn btn-default btn-primary">
                    <i class="fa fa-plus"></i> <?php echo t('block.testimonial.add_new_entry'); ?>
                </a>
            </div><!-- form-group end -->

        </div><!-- add-new end -->

    </div><!-- id end -->

</script>

