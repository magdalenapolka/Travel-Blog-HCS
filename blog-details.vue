<template>
  <section class="py-20 px-6">
    <div class="container mx-auto">
      <div class="pb-4">
        <router-link to="/">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="feather feather-arrow-left"
          >
            <line x1="19" y1="12" x2="5" y2="12"></line>
            <polyline points="12 19 5 12 12 5"></polyline>
          </svg>
        </router-link>
      </div>
      <div class="flex flex-col lg:flex-row gap-8">
        <div class="w-full lg:w-10/12 xl:w-9/12">
          <div
            v-if="post"
            class="p-6 rounded-md border border-gray-100 shadow-xl"
          >
            <h1 class="text-3xl font-black pb-8">
              {{ post.title }}
            </h1>
            <figure>
              <img
                class="aspect-video w-full"
                :src="post.image"
                :alt="post.title"
              />
            </figure>

            <div class="flex gap-5 justify-between items-center pt-5">
              <div class="flex gap-3 items-center" v-if="post.author">
                <figure>
                  <img
                    class="w-12 h-12 rounded-full"
                    :src="post.author.image"
                    :alt="post.author.name"
                  />
                </figure>
                <p class="text-black text-xl">{{ post.author.name }}</p>
              </div>
              <div class="pb-3 xl:pb-5 inline-block font-medium text-xl">
                {{ post.date }}
              </div>
            </div>
            <div
              v-html="post.details"
              class="pt-10 leading-relaxed text-lg"
            ></div>
          </div>
        </div>
        <div class="w-full lg:w-4/12 xl:w-3/12">
          <div class="p-5 bg-white rounded-sm shadow-lg sticky top-0">
            <h2 class="font-black text-2xl">Related Post</h2>
            <div
              class="
                grid grid-cols-1
                sm:grid-cols-2
                md:grid-cols-3
                lg:grid-cols-1
                gap-5
              "
            >
              <div
                class="
                  rounded-md
                  overflow-hidden
                  bg-white
                  border border-gray-100
                  mt-5
                  mb-5
                "
                v-for="post in relatedPosts"
                :key="post.id"
              >
                <figure>
                  <router-link :to="`/posts/${post.slug}`">
                    <img
                      class="aspect-video w-full"
                      :src="post.image"
                      :alt="post.title"
                    />
                  </router-link>
                </figure>
                <div class="px-4 pt-4 pb-4">
                  <router-link :to="`/posts/${post.slug}`">
                    <h2
                      class="
                        text-base
                        xl:text-xl
                        font-bold
                        pb-3
                        xl:pb-5
                        text-black
                      "
                    >
                      {{ post.title }}
                    </h2>
                  </router-link>
                  <div class="pb-3 xl:pb-5 text-sm lg:text-lg inline-block">
                    {{ post.date }}
                  </div>
                  <div class="flex gap-3 items-center">
                    <figure>
                      <img
                        class="w-12 h-12 rounded-full"
                        :src="post.author.image"
                        :alt="post.author.name"
                      />
                    </figure>
                    <p class="text-black text-sm lg:text-xl">
                      {{ post.author.name }}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { reactive, ref, onMounted, watch } from "vue";
import { useRoute } from "vue-router";
import router from "@/router";
export default {
  name: "blogDetails",
  setup() {
    let posts = reactive([
      {
        id: 1,
        title: "Northern Italy",
        slug: "northern-italy",
        image:require('../assets/img/NorthernItaly.jpg'),
        details:
          "An epic Northern Italy Itinerary that has everything – lakes, mountains, historical towns,<br><br> Italy has always been the centre of attention because of its beauty and culture. Year after year, it ranks in the top 10 as one of the most visited countries in the world. Italy is where you can really experience it all – the best food, beaches, mountains, canals, art, architecture, luxury cars, and history. Can you believe Italy has the most UNESCO World Heritage sites in the world?<br><br>Italy’s amazingness isn’t just due to its rich culture or fascinating history, or even the scenic beauty. It is more than that.<br><br>It is about experiencing the mediterranean climate, the joy of sitting on a chair along the street in one of the cafes while sipping espresso, tasting the simplicity of food that’s cooked with just 3-5 ingredients, seeing the locals communicate with energetic gestures and listening to the musical sound of Italian chatter.<br><br>If you look at the map of Italy, you will notice the country is shaped like a boot. It is surrounded by water on almost all sides, except the top of the boot. As you go down from the top of the boot to the toe, you will see how the landscape changes from mountains and alpine lakes, to vineyards, and to the beaches. ",
        date: "March, 9 2022",
        author: {
          name: "rookiedeveloper ",
          image: "https://avatars0.githubusercontent.com/u/23272049",
        },
        coords: {
          lat: 41.8719,
          lng: 12.5614,
        },
      },
      {
        id: 2,
        title: "Museums in Kalisz",
        slug: "museums-in-kalisz",
        image:require('../assets/img/museumofkalisz.jpg'),
        details:
          "Polska is full of history and the Polish are great lovers of knowledge of the past so you will find many museums in the country, whether it be a folk, military, science, skansen, transport or any other type Poland has a long history and has been an important trading route that has been invaded by many different groups over the past 1,000 years.<br><br> Museums are a great way to explore the nations history about the inhabitants of the land in the past, their lives and customs.<br><br>Archaeological collections include equipment of grave objects, metal inventory. The ethnographic part has in its collection e.g. costumes, religious items, instruments and handicrafts, while the historical collections - military and cartographic archives.<br><br>The facility was built in 1914 and has four branches: the Drawing and Graphic Center, the Archaeological Reserve, the Literary Department and the Palace and Park Complex.",
        date: "March, 9 2022",
        author: {
          name: "rookiedeveloper ",
          image: "https://avatars0.githubusercontent.com/u/23272049",
        },
        coords: {
          lat: 51.919437,
          lng: 18.145136,
        },
      },
      {
        id: 3,
        title: "Bosnia Road Trip",
        slug: "bosnia-road-trip",
        image:require('../assets/img/bosnia.jpg'),
        details:
          "How awesome is Bosnia-Herzegovina – there are epic waterfalls, stunning clear rivers and charming little towns.<br><br> When considering a country in eastern Europe for a road trip, Bosnia & Herzegovina should be one of the first countries on your mind. This idyllic country often gets overshadowed by its neighbour, Croatia. Don’t get me wrong, Croatia is a magnificent country in itself but Bosnia & Herzegovina is just something else. <br><br> Nature-lovers will be astounded by the abundance of natural marvels that are hidden within Bosnia & Herzegovina. It is a surprise that it is often less travelled than its neighbours, but that also means that it is typically less crowded. This also means that you will be able to travel around without seeing the full effects that tourism has on the society. You can expect genuine, unforgettable experiences.<br/><br/> Even though this post has a recommended itinerary for a road trip in Bosnia-Herzegovina, we recommend not making concrete plans but having a rough idea where you want to start and end. Enter Bosnia, go find a river and drive along it. <br><br>We drove along the Drina and got to see some of the most amazing<br><br>scenery on our rented car. On our second trip here, we explored the area<br><br>around Una and Krka rivers in our Camper van.",
        date: "March, 9 2022",
        author: {
          name: "rookiedeveloper ",
          image: "https://avatars0.githubusercontent.com/u/23272049",
        },
        coords: {
          lat: 44.409138,
          lng: 18.294168,
        },
      },
      {
        id: 4,
        slug: "pula-croatia",
        title: "Things to do in Pula, Croatia",
        image:require('../assets/img/pulacroatia.jpg'),
        details:
          "Pula is fun, vibrant and historical. It has a bit of everything that Croatia is famous for – all packed in one destination. <br><br> Situated on the lower tip of the Istrian Peninsula, Pula is a coastal town with an abundance of distinctive rocky beaches. It is more than just a beach destination, it has a LOT of history too. There is so much more to this charming, medieval town that makes it worth the visit and the perfect destination for you to start or end your adventures in Croatia. <br><br> Pula is one of the biggest and most important towns of the Istria region. Due the history surrounding this area, Pula is often viewed as a little Rome with many impressive Roman ruins dispersed around the city. With comfortable, mild weather year-round and an eclectic nightlife scene, you would be remiss to avoid Pula during your travels. <br><br><h1>Things to do in Pula, Croatia</h1> Pula is situated right on the coast of the Adriatic Sea so you can be assured that there is no shortage of picturesque beaches to spend your days here. Go with the family and lounge on the shore or take part in some water sports with your friends. If you are searching for paradise, you will be able to find it.<br><br> Taking a dip in some of the most popular beaches such as Ambrela Beach, Hawaiian Cove Beach, or Valkane Beach comes as a given that it is one of the best things to do in Pula. We loved Stoja Beach the most and you can even camp here if you are road tripping or camping around Croatia.",
        date: "March, 9 2022",
        author: {
          name: "rookiedeveloper ",
          image: "https://avatars0.githubusercontent.com/u/23272049",
        },
        coords: {
          lat: 51.919437,
          lng: 14.145136,
        },
      },
    ]);
    let post = ref({});
    let relatedPosts = ref([]);
    let route = useRoute();
    const LoadData = () => {
      if (route.name == "BlogDetails") {
        let slug = route.params.slug;
        let getpost = posts.find((el) => el.slug == slug);
        if (typeof getpost != "undefined") {
          post.value = getpost;
        } else {
          router.push("/404");
        }
        let related = posts.filter((el) => el.slug != slug);
        if (related.length > 0) {
          relatedPosts.value = related;
        }
      }
    };
    onMounted(() => {
      LoadData();
    });
    watch(
      () => route.params,
      () => {
        LoadData();
      }
    );
    return {
      posts,
      post,
      relatedPosts,
    };
  },
};
</script>

<style>
h1 {font-size: 25px !important;font-weight: 700 !important;}
</style>