<template>
  <div class="container-fluid p-0">
    <div class="row no-gutters mvh-100">
      <div 
        class="col-12 col-sm-12 col-md-4 col-lg-4 align-self-center"
        v-for="card of cards" :key="card.id">     
          <router-link :to="card.route" class="card mx-4 d-flex align-items-center shadow-sm card-item">
            <div class="d-table m-auto">
              <img :src="card.img" class="d-table card-img-top mt-5 mx-auto" :alt="card.title">
              <div class="card-body">
                <h3 class="text-center text-nowrap text-truncate">
                  {{ card.title }}
                </h3>
              </div>
            </div>
          </router-link>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  components: {

  },
  data() {
    return {
      cards: [
        {
          id: 1, 
          title: 'Календарь', 
          img: 'https://image.flaticon.com/icons/svg/942/942810.svg', 
          route: '/list'
        },
        {id: 2, title: 'Учебные материалы', img: 'https://image.flaticon.com/icons/svg/182/182322.svg', route: '/lessons'},
        {id: 3, title: 'Профиль', img:  'https://image.flaticon.com/icons/svg/182/182335.svg', route: '/profile'}
      ],
    }
  }
}
</script>

<style scoped>
  .card {
    min-height: 320px;
    border: none;
  }
  .card-img-top {
    width: 75px;
  }
  .card-item h3 {
    color: #222;
  }
  .card-img-top,
  .card-item h3 {
    transition: .5s;
  }
  .card-item:hover .card-img-top {
    transform: scale(1.1);
  }
  .card-item:hover h3 {
    color: var(--primary);
  }
</style>
