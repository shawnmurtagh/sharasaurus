<template>
  <ion-page>
    <ion-tabs>
      <ion-router-outlet></ion-router-outlet>
      <ion-tab-bar slot="bottom">
        <ion-tab-button tab="Circles" href="/tabs/tab1">
          <ion-icon aria-hidden="true" :icon="ellipse" />
          <ion-label>Circles</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="Shares" href="/tabs/tab2">
          <ion-icon aria-hidden="true" :icon="exit" />
          <ion-label>Shares</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="Borrows" href="/tabs/tab3">
          <ion-icon aria-hidden="true" :icon="enter" />
          <ion-label>Borrows</ion-label>
        </ion-tab-button>
      </ion-tab-bar>
    </ion-tabs>
  </ion-page>
</template>

<script setup lang="ts">
import { IonTabBar, IonTabButton, IonTabs, IonLabel, IonIcon, IonPage, IonRouterOutlet } from '@ionic/vue';
import { ellipse, square, triangle, enter, exit } from 'ionicons/icons';
</script>
