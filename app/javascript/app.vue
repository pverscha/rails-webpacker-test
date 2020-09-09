<template>
  <div id="app">
    <p>{{ message }}</p>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import { Prop, Watch } from "vue-property-decorator";
import DatasetForm from "unipept-web-components/src/components/dataset/DatasetForm.vue";
import Pept2DataCommunicator from "unipept-web-components/src/business/communication/peptides/Pept2DataCommunicator";

export default {
  data: function () {
    return {
      message: DatasetForm.toString() + Pept2DataCommunicator.toString()
    }
  }
}
</script>

<style scoped>
</style>
