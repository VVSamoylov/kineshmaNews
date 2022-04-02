<template>
<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Кинешемские новости</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavDropdown">
      <ul class="navbar-nav">
        <li class="nav-item">
           <router-link class="nav-link active" aria-current="page"  to="/politics">Политика</router-link> 
        </li>
        <li class="nav-item">
           <router-link class="nav-link active" aria-current="page"  to="/economics">Экономика</router-link> 
        </li>
        <li class="nav-item">
           <router-link class="nav-link active" aria-current="page"  to="/piple">Общество</router-link> 
        </li>
        <li class="nav-item">
           <router-link class="nav-link active" aria-current="page"  to="/incidents">Проишествия</router-link> 
        </li>
        <li class="nav-item">
           <router-link class="nav-link active" aria-current="page"  to="/science">Наука</router-link> 
        </li>
        <li class="nav-item">
           <router-link class="nav-link active" aria-current="page"  to="/sports">Спорт</router-link> 
        </li>
        <li class="nav-item">
           <router-link class="nav-link active" aria-current="page"  to="/admin/create">Sign in</router-link> 
        </li>
      </ul>
    </div>
  </div>
</nav>
</template>

<script>
export default{
    name: 'adminmenu'
}
</script>

<style scoped>
    nav{
        margin-left:10px;
        margin-right:10px;
    }
</style>