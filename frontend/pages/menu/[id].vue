<script setup lang="ts">
import { gql } from 'graphql-tag';
const route = useRoute();
const { $apollo } = useNuxtApp();
const { addItem } = useCart();

const query = gql`
  query($id: ID!) {
    menu(id: $id) {
      data {
        id
        attributes {
          nom
          description
          prix
        }
      }
    }
  }
`;

const { data } = await $apollo.query({
  query,
  variables: { id: route.params.id },
});

const menu = computed(() => data.menu.data);
function addToCart() {
  addItem({
    type: 'menu',
    id: menu.value.id,
    nom: menu.value.attributes.nom,
    prix: menu.value.attributes.prix,
  });
}
</script>

<template>
  <main class="p-4" v-if="menu">
    <h1 class="text-xl font-bold mb-2">{{ menu.attributes.nom }}</h1>
    <p class="mb-2">{{ menu.attributes.description }}</p>
    <p class="mb-4">Prix : {{ menu.attributes.prix }} €</p>
    <button @click="addToCart" class="px-3 py-1 border rounded">
      Ajouter au panier
    </button>
    <div class="mt-4">
      <NuxtLink to="/panier" class="underline text-blue-600">Voir le panier</NuxtLink>
    </div>
  </main>
</template>
