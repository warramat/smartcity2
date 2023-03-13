<template>
   <div class="d-flex align-items-center" style="margin-top: 2rem; flex-direction: column;">
          <img src="./logo.png" width="100" height="100" />
          <br />
          <h4>{{title}}</h4>
    </div>
</template>

<script>
    export default {
        props: {
            title: {
                type: String,
                default: ""
            },
        },
    }
</script>

<style lang="scss" scoped>

</style>