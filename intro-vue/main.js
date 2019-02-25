Vue.component("cat-card", {
    props: [
        "cat",
        "isFavCat",
        "removeCat"
    ],
    template: `
        <div :class="{ 'fav-cat': isFavCat }" class="card">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Cat03.jpg/1200px-Cat03.jpg" class="card-img-top" :alt="'Photo of ' + cat">
            <div class="card-body text-center">
           
                <!— cat name -->
                <h5 class="card-title">{{ cat }}</h5>

                <!— remove cat button -->
                <button type="button" class="btn btn-danger btn-sm" @click="removeCat(cat)">Remove</button>
            </div>
        </div>
    `
});

var app = new Vue({

    el: "#app",

    data: {
        cats: [
            "Timmy",
            "Carlos",
            "Fuzzy"
        ],
        favCat: "Carlos",
        newCatName: ""
    },

    computed: {
        numCats() {
            return this.cats.length;
        }
    },

    methods: {
        addCat() {
            this.cats.push(this.newCatName);
            this.newCatName = "";
        },

        removeCat(cat) {
            var index = this.cats.indexOf(cat);
            this.cats.splice(index, 1);
        }
    }
})