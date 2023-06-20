<template>

  <div class="vfa-demo bg-light pt-3">
    <VueFileAgent
      class="upload-block"
      ref="vfaDemoRef"
      :uploadUrl="'https://www.mocky.io/v2/5d4fb20b3000005c111099e3'"
      :uploadHeaders="{}"
      :multiple="true"
      :deletable="true"
      :theme="'list'"
      :maxSize="'25MB'"
      :errorText="{
        size: 'This file is too large to be attached',
      }"
      v-model="fileRecords"
    >
      <template v-slot:before-outer>
        <p>Email Attachment example with drag & drop support and <span class="badge">attachment</span> keyword basic detection.</p>
        <div class="form-group">
          <input type="text" class="form-control" placeholder="Your Name" value="John Doe">
        </div>
        <div class="form-group">
          <input type="email" class="form-control" placeholder="Email address" value="johndoe@example.com">
        </div>
        <div class="form-group">
          <textarea v-model="message" class="form-control" placeholder="Your Message"></textarea>
        </div>
      </template >
      <template v-slot:file-preview="slotProps">
        <div :key="slotProps.index" class="grid-box-item file-row">
          <button type="button" class="close remove" aria-label="Remove" @click="removeFileRecord(slotProps.fileRecord)">
            <span aria-hidden="true">&times;</span>
          </button>
          <div class="progress" :class="{'completed': slotProps.fileRecord.progress() == 100}">
            <div class="progress-bar" role="progressbar" :style="{width: slotProps.fileRecord.progress() + '%'}"></div>
          </div>
          <strong>{{ slotProps.fileRecord.name() }}</strong> <span class="text-muted">({{ slotProps.fileRecord.size() }})</span>
        </div>
      </template >
      <template v-slot:file-preview-new>
        <div class="text-left my-3" key="new">
          <a href="#" class="">Select files</a> or drag & drop here
        </div>
      </template >
<!--       <template v-slot:after-inner>
        <div class="text-left pt-1">
          <a href="#" class="">Select files</a> or drag & drop here
        </div>
      </template > -->
      <template v-slot:after-outer>
        <div title="after-outer">
          <div class="drop-help-text">
            <p>Drop here</p>
          </div>
          <button type="button" class="btn btn-primary" @click="send()">Send</button>
        </div>
      </template >
    </VueFileAgent>
  </div>

</template>

<script>

export default {
    name: "Uitslagen",
    data: function(){
      return {
        fileRecords: [],
        message: 'I am sending you the attachments',
      }
    },
    methods: {
      removeFileRecord: function(fileRecord){
        return this.$refs.vfaDemoRef.removeFileRecord(fileRecord);
      },
      send: function(){
        if(this.message.indexOf('attachment') !== -1 && this.fileRecords.length < 1){
          if(!confirm('You have mentioned about attachments in your message. Are you sure to send without attachments?')){
            return;
          }
        }
        alert('Message sent!');
      }
    }
}

</script>

<style>
  .vfa-demo {
    position: relative;
  }

  .vfa-demo .file-preview-wrapper::before {
    background: transparent;
  }

  .vfa-demo .file-row {
    position: relative;
    z-index: 15;
    line-height: 24px;
    text-align: left;
    background: #EEE;
    margin-bottom: 5px;
    padding: 2px 5px;
  }

  .vfa-demo .remove {
    float: right;
    margin-top: -3px;
  }

  .vfa-demo .progress {
    float: right;
    width: 85px;
    height: 10px;
    margin-top: 7px;
    margin-right: 10px;
    background: #FFF;
    border: 1px solid #AAA;
  }

  .vfa-demo .progress.completed {
    display: none;
  }

  .vfa-demo .drop-help-text {
    position: absolute;
    top: 0; right: 0; bottom: 0; left: 0;
    margin: 2px;
    background: rgba(255, 255, 255, 0.75);
    z-index: 1200;
    font-size: 32px;
    font-weight: bold;
    color: #888;
    align-items: center;
    justify-content: center;
    display: none;
  }

  .vfa-demo .is-drag-over .drop-help-text {
    display: flex;
  }

  .vfa-demo .upload-block  {
    border: 2px dashed transparent;
    padding: 20px;
    padding-top: 0;
  }

  .vfa-demo .is-drag-over.upload-block {
    border-color: #AAA;
  }

  .vfa-demo .vue-file-agent {
    border: 0 !important;
    box-shadow: none !important;
  }
</style>