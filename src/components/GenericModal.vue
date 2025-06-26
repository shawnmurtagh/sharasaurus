<template>
  <ion-modal :is-open="isOpen" @willDismiss="onWillDismiss">
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-button @click="cancel()">Cancel</ion-button>
        </ion-buttons>
        <ion-title>{{ title }}</ion-title>
        <ion-buttons slot="end">
          <ion-button :strong="true" @click="confirm()">{{confirmText}}</ion-button>
        </ion-buttons>
      </ion-toolbar>
    </ion-header>
    <ion-content class="ion-padding">
      <slot></slot>
    </ion-content>
  </ion-modal>
</template>

<script setup lang="ts">
import { ref, defineProps, defineEmits } from 'vue';
import { OverlayEventDetail } from '@ionic/core/components';

// Props for customization
defineProps({
  isOpen: Boolean, // Controls modal visibility
  title: {
    type: String,
    default: 'Modal Title', // Default title
  },
  confirmText: {
    type: String,
    default: 'Confirm', // Default title
  },
});

// Emits for parent communication
const emit = defineEmits(['cancel', 'confirm', 'willDismiss']);

// Methods to handle modal actions
const cancel = () => {
  emit('cancel'); // Emit cancel event
};

const confirm = () => {
  emit('confirm'); // Emit confirm event
};

const onWillDismiss = (event: CustomEvent<OverlayEventDetail>) => {
  emit('willDismiss', event.detail); // Emit willDismiss event with details
};
</script>

<style scoped>
/* Add any scoped styles for the modal here */
</style>