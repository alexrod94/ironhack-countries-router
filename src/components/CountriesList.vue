<template>
  <div>
    <!-- Bootstrap container wrapper div -->
    <div class="container">
      <!-- Bootstrap row wrapper div -->
      <div class="row">
        <!-- Countries List (Bootstrap column) -->
        <div class="col-5" style="max-height: 90vh; overflow: scroll">
          <div class="list-group">
            <router-link
              class="list-group-item list-group-item-action"
              v-for="el in countries"
              :to="`/country/${el.alpha3Code}`"
            >
              <img
                :src="`https://flagpedia.net/data/flags/icon/72x54/
${el.alpha2Code.toLowerCase()}.png`"
              />
              <p>{{ el.name.common }}</p>
            </router-link>
          </div>
        </div>

        <!-- Country Details (Bootstrap column) -->
        <div class="col-7">
          <router-view />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      countries: null,
    };
  },
  methods: {
    async getCountries() {
      const res = await fetch(
        "https://ih-countries-api.herokuapp.com/countries"
      );
      const finalRes = await res.json();
      this.countries = finalRes;
    },
  },
  mounted() {
    this.getCountries();
  },
};
</script>

<style></style>
