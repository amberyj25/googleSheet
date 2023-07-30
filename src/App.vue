<template>
  <div id="app" class="container">
    <header>
      <h1>google sheet</h1>
    </header>

    <main>
      <div class="index">
        <div class="index__wrapper">
          <div class="toggle-action-bar-outter">
            <div class="toggle-action-bar">
              <button type="btn" class="btn btn-primary"><a :href="linkUrl" target="_blank">View Google Sheet</a></button>
              <!-- <button type="button" class="btn btn-warning" @click="changeTab('Sheet')">查看</button> -->
            </div>
          </div>
          <div class="checkout_sop_content">
              <component
                :is="tab"
              ></component>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>
<script>
import Sheet from '@/components/Sheet.vue'

export default {
  name: 'Home',
  components: {
    Sheet
  },
  data() {
    return {
      nowTab: 'Sheet',
      linkUrl: 'https://docs.google.com/spreadsheets/d/1twyEDsDvt3ttzJgXWfzqvd_vdAUBzWKe9Dvc2Lx9QbE/edit#gid=0'
    }
  },
  computed: {
    tab() {
      return this.nowTab
    }
  },
  methods: {
    changeTab(tabName) {
      this.nowTab = tabName
    }
  }
}
</script>


<style lang="scss">
.container {
  width: 75%;
  margin: auto;
  header{
    width: 100%;
    h1 {
      text-align: center;
      margin: 35px 0;
    }
  }
  main {
    text-align: right;
    .toggle-action-bar-outter{
        display: flex;
        justify-content: flex-end;
        margin: 35px;
      .toggle-action-bar {
        width: 30%;
        display: flex;
        justify-content: space-between;
        a {
          text-decoration: none;
          color: inherit;
        }
      }
    }
  }
}
</style>
