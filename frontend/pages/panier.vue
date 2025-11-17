<script setup lang="ts">
const { items } = useCart();

const total = computed(() =>
  items.value.reduce((sum, it) => sum + Number(it.prix || 0), 0)
);

async function goPay() {
  const res = await fetch('http://localhost/api/checkout', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ amount: Math.round(total.value * 100) }),
  });
  const data = await res.json();
  if (data.url) {
    window.location.href = data.url;
  }
}
</script>

<template>
  <main class="p-4">
    <h1 class="text-xl font-bold mb-4">Panier</h1>
    <ul v-if="items.length">
      <li v-for="(item, idx) in items" :key="idx" class="mb-1">
        {{ item.nom }} — {{ item.prix }} €
      </li>
    </ul>
    <p v-else>Votre panier est vide.</p>

    <p class="mt-4 font-semibold">Total : {{ total }} €</p>

    <button
      v-if="items.length"
      @click="goPay"
      class="mt-4 px-4 py-2 border rounded"
    >
      Payer
    </button>
  </main>
</template>
