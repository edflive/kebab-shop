<script setup lang="ts">
import { gql } from 'graphql-tag';

const { $apollo } = useNuxtApp();

const query = gql`
  query {
    menus {
      data {
        id
        attributes {
          nom
          prix
        }
      }
    }
  }
`;

const { data } = await $apollo.query({ query });
</script>

<template>
  <main class="p-4">
    <h1 class="text-xl font-bold mb-4">Nos menus</h1>
    <ul>
      <li v-for="m in data.menus.data" :key="m.id" class="mb-2">
        <NuxtLink :to="`/menu/${m.id}`">
          {{ m.attributes.nom }} — {{ m.attributes.prix }} €
        </NuxtLink>
      </li>
    </ul>
    <NuxtLink to="/panier" class="mt-4 inline-block underline text-blue-600">
      Voir le panier
    </NuxtLink>
  </main>
</template>
