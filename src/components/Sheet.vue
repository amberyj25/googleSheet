<template>
  <div>
    <div>
      <div>
        <div class="table-responsiv">
            <table class="table table-striped">
              <thead>
                <tr>
                  <th scope="col" v-for="( title, index) in titles" :key="index" style="text-align: center">{{ title }}</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="row in rows" :key="row.id">
                  <td style="text-align: center">{{ row.Date }}</td>
                  <td style="text-align: center">{{ row.Name }}</td>
                  <td style="text-align: center">{{ row.Phone }}</td>
                  <td style="text-align: center">{{ row.Content }}</td>
                </tr>
              </tbody>
            </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
const { GoogleSpreadsheet } = require('google-spreadsheet');
const creds = require('@/client_secret.json');
// import Skeleton from './Skeleton.vue'

export default {
  name: "Sheet",
  props: ["sheet"],
  components: {
    // Skeleton,
  },
  data() {
    return {
      rows: [],
      loading: false,
      sheetId: '1twyEDsDvt3ttzJgXWfzqvd_vdAUBzWKe9Dvc2Lx9QbE',
      titles: ['Date', 'Name', 'Phone', 'Content']
    }
  },
  methods: {
    async accessSpreadSheet() {
      const vm = this;
      const doc = new GoogleSpreadsheet(vm.sheetId);
      // vm.loading = true
      await doc.useServiceAccountAuth(creds);
      await doc.loadInfo();
      const sheet = doc.sheetsByIndex[0];
      const rows = await sheet.getRows({
        offset: 0
      })
      if (rows) {
        vm.rows = rows;
        // vm.loading = false
      }
    }
  },
  created() {
    this.accessSpreadSheet();
  }
}
</script>

<style lang="scss" scoped></style>