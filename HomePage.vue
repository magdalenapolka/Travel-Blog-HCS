<template>
  <section class='py-28 px-5'>
    <div class='container mx-auto'>
      <div class='flex flex-col md:flex-row gap-10'>
        <div class='w-full md:w-5/12 lg:w-7/12'>
          <div
            class='grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-5 xl:gap-10'
          >
            <div
              class='rounded-md overflow-hidden bg-white shadow-lg'
              v-for='post in posts'
              :key='post.id'
            >
              <figure>
                <router-link :to='`/posts/${post.slug}`'>
                  <img
                    class='aspect-video w-full'
                    :src='post.image'
                    :alt='post.title'
                  />
                </router-link>
              </figure>
              <div class='px-6 pt-6 pb-8'>
                <router-link :to='`/posts/${post.slug}`'>
                  <h2
                    class='
                      text-xl
                      xl:text-2xl
                      font-bold
                      pb-3
                      xl:pb-5
                      text-black
                    '
                  >
                    {{ post.title }}
                  </h2>
                </router-link>
                <div class='pb-3 xl:pb-5 text-lg inline-block'>
                  {{ post.date }}
                </div>
                <div class='flex gap-3 items-center'>
                  <figure>
                    <img
                      class='w-12 h-12 rounded-full'
                      :src='post.author.image'
                      :alt='post.author.name'
                    />
                  </figure>
                  <p class='text-black text-xl'>{{ post.author.name }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class='w-full md:w-7/12 lg:w-5/12'>
          <GMapMap
            class='h-screen'
            :center='center'
            :zoom='7'
            map-type-id='terrain'
          >
            <GMapCluster>
              <GMapMarker
                :key='post.id'
                v-for='post in posts'
                :position='post.coords'
                :clickable='true'
                @click='clickMarker(post.id, post.coords)'
              />
              <GMapInfoWindow
                :opened='window_open'
                :position='infowindow'
                :options='{
                  pixelOffset: {
                    width: 0,
                    height: -35,
                  },
                }'
              >
                <div
                  v-if='Object.keys(post).length !== 0'
                  class='rounded-md overflow-hidden bg-white shadow-lg lg:w-64'
                >
                  <div
                    class='pb-2 flex justify-end right-1 top-1 absolute z-50'
                  >
                    <button
                      @click='window_open = false'
                      type='button'
                      class='
                        w-5
                        h-5
                        rounded-full
                        border border-gray-400
                        flex
                        justify-center
                        items-center
                        focus:outline-none
                        leading-1
                        text-gray-900
                      '
                    >
                      x
                    </button>
                  </div>
                  <router-link :to='`/posts/${post.slug}`'>
                    <figure class='pt-4'>
                      <img
                        class='aspect-video w-full'
                        :src='post.image'
                        :alt='post.title'
                      />
                    </figure>
                  </router-link>
                  <div class='px-2 pt-3 pb-5'>
                    <router-link :to='`/posts/${post.slug}`'>
                      <h2 class='text-md font-bold pb-2 text-black'>
                        {{ post.title }}
                      </h2>
                    </router-link>
                    <div class='pb-2 text-sm inline-block'>
                      {{ post.date }}
                    </div>
                    <div class='flex gap-3 items-center'>
                      <figure>
                        <img
                          class='w-8 h-8 rounded-full'
                          :src='post.author.image'
                          :alt='post.author.name'
                        />
                      </figure>
                      <p class='text-black text-sm'>{{ post.author.name }}</p>
                    </div>
                  </div>
                </div>
              </GMapInfoWindow>
            </GMapCluster>
          </GMapMap>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data () {
    return {
      info_marker: null,
      infowindow: { lat: +null, lng: +null },
      window_open: false,
      posts: [
        {
          id: 1,
          title: 'Northern Italy',
          slug: 'northern-italy',
          image:require('../assets/img/NorthernItaly.jpg'),
          details:
            'An epic Northern Italy Itinerary that has everything – lakes, mountains, historical towns, Italy has always been the centre of attention because of its beauty and culture. Year after year, it ranks in the top 10 as one of the most visited countries in the world.',
          date: 'March, 9 2022',
          author: {
            name: 'rookiedeveloper ',
            image: 'https://avatars0.githubusercontent.com/u/23272049'
          },
          coords: {
            lat: 41.8719,
            lng: 12.5614
          }
        },
        {
          id: 2,
          title: 'Museums in Kalisz',
          slug: 'museums-in-kalisz',
          image:require('../assets/img/museumofkalisz.jpg'),
          details:
            'Polska is full of history and the Polish are great lovers of knowledge of the past so you will find many museums in the country, whether it be a folk, military, science, skansen, transport or any other type Poland has a long history and has been an important trading route that has been invaded by many different groups over the past 1,000 years.',
          date: 'March, 9 2022',
          author: {
            name: 'rookiedeveloper ',
            image: 'https://avatars0.githubusercontent.com/u/23272049'
          },
          coords: {
            lat: 51.919437,
            lng: 18.145136
          }
        },
        {
          id: 3,
          title: 'Bosnia Road Trip',
          slug: 'bosnia-road-trip',
          image:require('../assets/img/bosnia.jpg'),
          details:
            'How awesome is Bosnia-Herzegovina – there are epic waterfalls, stunning clear rivers and charming little towns. When considering a country in eastern Europe for a road trip, Bosnia & Herzegovina should be one of the first countries on your mind. This idyllic country often gets overshadowed by its neighbour, Croatia. Don’t get me wrong, Croatia is a magnificent country in itself but Bosnia & Herzegovina is just something else. Nature-lovers will be astounded by the abundance of natural marvels that are hidden within Bosnia & Herzegovina.',
          date: 'March, 9 2022',
          author: {
            name: 'rookiedeveloper ',
            image: 'https://avatars0.githubusercontent.com/u/23272049'
          },
          coords: {
            lat: 44.409138,
            lng: 18.294168
          }
        },
        {
          id: 4,
          slug: 'pula-croatia',
          title: 'Things to do in Pula, Croatia',
          image:require('../assets/img/pulacroatia.jpg'),
          details:
            'Pula is fun, vibrant and historical. It has a bit of everything that Croatia is famous for – all packed in one destination.Situated on the lower tip of the Istrian Peninsula, Pula is a coastal town with an abundance of distinctive rocky beaches. It is more than just a beach destination, it has a LOT of history too',
          date: 'March, 9 2022',
          author: {
            name: 'rookiedeveloper ',
            image: 'https://avatars0.githubusercontent.com/u/23272049'
          },
          coords: {
            lat: 44.8666,
            lng: 13.8496
          }
        }
      ],
      center: { lat: 51.919437, lng: 19.145136 },
      post: {}
    }
  },
  methods: {
    clickMarker (postId, coords) {
      console.log(coords)
      this.infowindow.lat = coords.lat
      this.infowindow.lng = coords.lng
      const post = this.posts.find((el) => el.id === postId)
      this.post = post
      this.window_open = true
    }
  }
}
</script>

<style>
.gm-ui-hover-effect {
  display: none !important
}
</style>
