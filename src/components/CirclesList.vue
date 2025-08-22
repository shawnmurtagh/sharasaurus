<template>
  <ion-content fixed-slot-placement="before">
    <ion-fab horizontal="end" vertical="bottom" slot="fixed">
      <ion-fab-button v-on:click="openModal()">
        <ion-icon name="add"></ion-icon>
      </ion-fab-button>
    </ion-fab>
    <ion-list lines="full">
      <ion-item v-for="circle in circles" :key="circle.circleId">
        <ion-label v-on:click="openCircleModal(circle.circleId)">{{ circle.circleName }}</ion-label>
      </ion-item>
    </ion-list>
  </ion-content>

  <GenericModal
    :isOpen="isOpen"
    title="Add a Circle"
    @cancel="cancel()"
    @confirm="confirm()"
  >
    <ion-item>
      <ion-input
        v-model="inputValue"
        label="Enter your Circle name"
        label-placement="stacked"
        type="text"
        placeholder="My new circle"
      ></ion-input>
    </ion-item>
  </GenericModal>

  <GenericModal
    :isOpen="isCircleDetailOpen"
    title="Circle Details"
    confirmText=""
    @cancel="cancelCircleDetail()"
    @confirm="confirmCircleDetail()"
  >
    <ion-item v-if="isEditingCircleDetails">
      <ion-input
        v-model="inputValue"
        label="Enter your Circle name"
        label-placement="stacked"
        type="text"
        placeholder="My new circle"
      ></ion-input>
    </ion-item>
    <ion-content class="ion-padding" v-if="!isEditingCircleDetails">
      <h1>
        {{ selectedCircle?.circleName }}
        <ion-button><ion-icon :icon="create"></ion-icon></ion-button>
      </h1>
      <h2>Members</h2>
      <p>Total: {{ selectedCircle?.members?.length || 0 }}</p>
      <ion-list>
        <ion-item v-for="member in selectedCircle?.members" :key="member.memberId">
          <ion-label>
            <h2>{{ member.memberName }}</h2>
            <p>{{ member.emailAddress }}</p>
            <p>Joined: {{ new Date(member.joinedDate).toLocaleDateString() }}</p>
          </ion-label>
        </ion-item>
      </ion-list>
    </ion-content>
  </GenericModal>
</template>

<script setup lang="ts">
import { ref, defineEmits } from 'vue';
import GenericModal from './GenericModal.vue';
import { CircleDetails, defaultCircleDetails } from '@/models/CircleDetails';
import { create } from 'ionicons/icons'; 

const emit = defineEmits(['add-circle']);

const props = defineProps<{
  circles: CircleDetails[];
}>();

const inputValue = ref('');
const selectedCircle = ref<CircleDetails>(defaultCircleDetails);
const isOpen = ref(false);
const isCircleDetailOpen = ref(false);
const isEditingCircleDetails = ref(false);

const openModal = () => {
  console.log('Opening modal');
  isOpen.value = true;
};

const cancel = () => {
  console.log('Modal cancelled');
  isOpen.value = false;
};

const confirm = () => {
  console.log('Modal confirmed');
  if (!inputValue.value) {
    return;
  }
  emit('add-circle', inputValue.value);
  inputValue.value = '';
  cancel();
};

const openCircleModal = (id: number) => {
  console.log('Opening circle modal');
  const circle = props.circles.find((circle: CircleDetails) => circle.circleId === id);
  if (!circle) {
    console.error('Circle not found');
    return;
  }
  selectedCircle.value = circle;
  isEditingCircleDetails.value = false;
  console.log('Selected Circle:', selectedCircle.value);
  isCircleDetailOpen.value = true;
};

const cancelCircleDetail = () => {
  console.log('Circle detail modal cancelled');
  isCircleDetailOpen.value = false;
  selectedCircle.value = defaultCircleDetails;
};

const confirmCircleDetail = () => {
  console.log('Circle detail modal confirmed');
  isCircleDetailOpen.value = false;
  selectedCircle.value = defaultCircleDetails;
};
</script>

<style scoped>
ion-icon {
  color: white;
}
</style>
