<template>
  <div>

    <section class="main-content columns">
      <aside class="column is-2 section">
        <p class="menu-label is-hidden-touch">
          Nokia
        </p>
        <ul class="menu-list">
          <li
            v-for="(item, key) of items"
            :key="key"
          >
            <NuxtLink
              :to="item.to"
              exact-active-class="is-active"
            >
              <b-icon :icon="item.icon" /> {{ item.title }}
            </NuxtLink>
          </li>
        </ul>
      </aside>

      <div class="container column is-10 mt-6">
        <Nuxt />
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data () {
    return {
      items: [
        {
          title: 'Dashboard',
          to: { name: 'index' }
        },
        {
          title: 'Region',
          to: { name: 'region' }
        },
        {
          title: 'Inventory',
          to: { name: 'nokia' }
        },
      ]
    }
  }
}
</script>
