import {createMemoryHistory, createRouter} from 'vue-router'
import Book from "../views/Book.vue";
import Home from "../views/Home.vue";

const routes = [{
    name: "Home", path: "/", component: Home


}, {
    name: "Book", path: "/book", component: Book
}]

const router = createRouter({
    history: createMemoryHistory(), routes: routes
})

export default router

