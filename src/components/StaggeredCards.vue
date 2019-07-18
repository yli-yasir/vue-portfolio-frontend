<!-- this component will take dataset of items that support the card interface and an
additionally  a key and render cards for them.

items should define:

item.thumbnailUrl
item.title
item.text
item.url
item.key

-->

<template>
<div class="card-columns">
    <card 
    v-for="item in mDataset"
    :key="item.key"
    :thumbnailUrl="item.thumbnailUrl"
    :title="item.title"
    :text="item.text"
    :url="item.url"
    >
    </card>
</div>
</template>

<script>
import card from '@/components/Card'
let dummyCard = {thumbnailUrl:'',title: '',text:'',url:''}

export default {
    data: ()=>{
        return {
            dummyDataset: [
                {...dummyCard, key: 'dummyCard1'},
                {...dummyCard, key: 'dummyCard2'},
                {...dummyCard, key: 'dummyCard3'},
                {...dummyCard, key: 'dummyCard4'},
            ]
        }
    },
    props: {
        dataset: Array
    },
    computed: {
        mDataset(){
            //if no dataset has been provided yet then use the dummy dataset, this is used
            // to show a skeleton of the screen the user should expect once there is 
            // a real dataset
            return !this.dataset ? this.dummyDataset : this.dataset
        }
    },
    components: {card}
}
</script>

<style>
@media (min-width: 576px) {
    .card-columns {
        column-count: 2;
    }
}

@media (min-width: 768px) {
    .card-columns {
        column-count: 3;
    }
}
</style>