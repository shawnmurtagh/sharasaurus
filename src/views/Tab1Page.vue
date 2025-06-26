<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Circles</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Circles</ion-title>
        </ion-toolbar>
      </ion-header>

      <CirclesList name="Circles" :circles="circles" @add-circle="addCircle" />
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/vue';
import CirclesList from '@/components/CirclesList.vue';
import { CircleDetails } from '@/models/CircleDetails';

const circles:CircleDetails[] =  [
  { circleName: "Silver Lake Friends", circleId: 1, members: [
    {memberName: "Erica", emailAddress:"erica8432@gmail.com", memberId:1, "joinedDate": new Date("2023-10-01")},
    {memberName: "Francisco", emailAddress:"franscoco3@gmail.com", memberId:2, "joinedDate":  new Date("2023-10-01")},
  ] },
  { circleName: "Family", circleId: 2, members: [
    {memberName: "Erica", emailAddress:"erica8432@gmail.com", memberId:1, "joinedDate":  new Date("2023-10-01")},
    {memberName: "Francisco", emailAddress:"franscoco3@gmail.com", memberId:2, "joinedDate":  new Date("2023-10-01")},
  ] },
  { circleName: "Church Family", circleId: 3, members: [
    {memberName: "Erica", emailAddress:"erica8432@gmail.com", memberId:1, "joinedDate":  new Date("2023-10-01")},
    {memberName: "Francisco", emailAddress:"franscoco3@gmail.com", memberId:2, "joinedDate":  new Date("2023-10-01")},
  ] },
];

const addCircle = (circleName: string) => {
  console.log('Adding circle:', circleName);
  circles.push({circleName: circleName, circleId: circles.length + 1, members: []});
};

</script>
