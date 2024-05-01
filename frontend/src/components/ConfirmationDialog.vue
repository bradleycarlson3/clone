<!-- Component for Confirming User Actions when deleting/updating information -->
<!-- <template>
    <div class="confirmation-dialog" v-if="isVisible">
      <div class="confirmation-dialog__overlay" @click="close"></div>
      <div class="confirmation-dialog__content">
        <div class="confirmation-dialog__header">
          <p>Please Confirm:</p>
        </div>
        <div class="confirmation-dialog__body">
          <p>{{ message }}</p>
        </div>
        <div class="confirmation-dialog__footer">
          <button @click="confirm" class="confirm-btn">Confirm</button>
          <button @click="close" class="cancel-btn">Cancel</button>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  const props = defineProps({
    message: String
  });
  const emit = defineEmits(['confirm', 'update:isVisible']);
  
  const isVisible = ref(true);
  
  function confirm() {
    emit('confirm');
    isVisible.value = false;
  }
  
  function close() {
    isVisible.value = false;
    emit('update:isVisible', false);
  }
  </script>
  
  <style scoped>

  /* Utilized AI to assist with styling; Used the following prompt: */
  /* "provide styling for a popup saying are you sure? with two buttons, confirm, and cancel" */

  .confirmation-dialog__overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
  }
  
  .confirmation-dialog__content {
    background: white;
    border-radius: 8px;
    padding: 20px;
    width: 90%;
    max-width: 400px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    z-index: 1001;
  }
  
  .confirmation-dialog__header p,
  .confirmation-dialog__body p {
    margin: 0;
    padding: 10px 0;
    text-align: center;
  }
  
  .confirmation-dialog__footer {
    display: flex;
    justify-content: space-around;
    padding-top: 20px;
  }
  
  .confirm-btn, .cancel-btn {
    border: none;
    border-radius: 4px;
    padding: 10px 20px;
    color: white;
    cursor: pointer;
  }
  
  .confirm-btn {
    background-color: #4CAF50; /* Green */
  }
  
  .cancel-btn {
    background-color: #f44336; /* Red */
  }
  </style>
  -->
