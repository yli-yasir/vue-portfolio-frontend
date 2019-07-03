<template>
  <div class="container-fluid row">
    <div class="col-md-7 about">
      <h1>Y-Li</h1>
      <cite>
        “To live is not to breathe but to act.
        It is to make use of our organs, our senses, our faculties, of all the parts of
        ourselves which give us the sentiment of our existence. The man who has lived the
        most is not he who has counted the most years but he who has most felt life.”
      </cite>
      <br>
      <small class="mt-2 text-muted">― Jean-Jacques Rousseau, Emile or On Education</small>
      <hr>
      <p
        class="mt-2"
      >We are a group of people aiming to learn and grow by tackling real world problems. Solutions don't have to be complicated, simple things can bring big change!</p>
    </div>

    <loader class="col-md-5" endpoint="api/news">
      <template v-slot:content="slotProps">
      <div v-if="isLoggedIn" class="d-flex flex-row-reverse">
        <router-link :to="{name: 'newNews'}" class="btn btn-primary mr-4">New News</router-link>
      </div>
        <h1>News</h1>
        <div class="list-group mb-4">
          <list-group-item
            :isSkeleton="slotProps.isLoading"
            v-for="item in slotProps.response"
            :key="item._id"
            :heading="item.name"
            :description="item.description"
            :url=" '/news/' + item._id"
            :upperNote="'Posted: ' + new Date(item.createdAt).toLocaleString('en-GB')"
            :lowerNote="'Last Edit: ' + new Date(item.updatedAt).toLocaleString('en-GB')"
          ></list-group-item>
        </div>
      </template>

      <template v-slot:loading="slotProps">
                <h1>News</h1>
        <div class="list-group mb-4">
          <list-group-item
            :isSkeleton="true"
            v-for="(one,index) in 4"
            :key="one + index"
          ></list-group-item>
        </div>
        </template>

    </loader>
  </div>
</template>


<script>
import loader from "@/components/Loader";
import listGroupItem from "@/components/ListGroupItem";
import loggedIn from '@/mixins/LoggedIn'
// @ is an alias to /src
export default {
  name: "home",
  components: { loader, listGroupItem },
  mixins: [loggedIn]

};
</script>


