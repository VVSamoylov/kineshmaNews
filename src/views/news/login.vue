<template>
  <newsmenu/>
  <br/>
  <div class="container">
    <div class="row">
            <div class="mb-3 row">
                <label for="staticEmail" class="col-sm-2 col-form-label">Email</label>
                <div class="col-sm-4">
                    <input type="text"  class="form-control" id="staticEmail" >
                </div>
            </div>
                <div class="mb-3 row">
                <label for="inputPassword" class="col-sm-2 col-form-label">Password</label>
                <div class="col-sm-4">
                        <input type="password" class="form-control" id="inputPassword">
                </div>
            </div>
    </div>
  </div>
</template>

<script>
import newsmenu from '../../components/newsmenu.vue'
export default {
  components: { newsmenu },

}
</script>

<style>

</style>