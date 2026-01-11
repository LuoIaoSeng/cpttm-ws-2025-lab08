import { fetchAlbumns, fetchMyPosts, fetchPosts } from "./api"

interface StateType {
    myPosts: Array<PostType> | null
    posts: Array<PostType> | null
    albums: Array<AlbumType> | null
}

interface PostType {
    id: number
    title: string
    body: string
    userId: number
}

interface AlbumType {
    id: number
    title: string
    userId: number
}


export class App {

    postButton: HTMLButtonElement
    albumsButton: HTMLButtonElement
    myPostButton: HTMLButtonElement
    content: HTMLUListElement

    states: StateType = {
        myPosts: null,
        posts: null,
        albums: null
    }

    constructor(dom: {
        postButton: HTMLButtonElement,
        albumsButton: HTMLButtonElement,
        myPostButton: HTMLButtonElement,
        content: HTMLUListElement
    }) {

        this.postButton = dom.postButton
        this.albumsButton = dom.albumsButton
        this.myPostButton = dom.myPostButton
        this.content = dom.content

        this.mounted()
    }

    async mounted() {

        this.postButton.addEventListener('click', async () => {

            this.content.innerHTML = 'Loading'
            this.states.posts = await fetchPosts()
            this.content.innerHTML = ''

            this.states.posts?.forEach((post: PostType) => {

                const li = document.createElement('li')
                const wrapper = document.createElement('div')
                const titleWrapper = document.createElement('div')
                const contentWrapper = document.createElement('div')

                wrapper.appendChild(titleWrapper)
                wrapper.appendChild(contentWrapper)
                li.appendChild(wrapper)

                titleWrapper.innerText = post.title
                contentWrapper.innerText = post.body

                this.content.appendChild(li)

            })
        })

        this.albumsButton.addEventListener('click', async () => {
            this.content.innerHTML = 'Loading'
            this.states.albums = await fetchAlbumns()

            this.content.innerHTML = ''

            this.states.albums?.forEach((album: AlbumType) => {

                const li = document.createElement('li')
                const wrapper = document.createElement('div')
                const titleWrapper = document.createElement('div')
                // const contentWrapper = document.createElement('div')

                wrapper.appendChild(titleWrapper)
                // wrapper.appendChild(contentWrapper)
                li.appendChild(wrapper)

                titleWrapper.innerText = album.title
                // contentWrapper.innerText = post.body

                this.content.appendChild(li)

            })
        })

        this.myPostButton.addEventListener('click', async () => {

            this.content.innerHTML = 'Loading'
            this.states.posts = await fetchMyPosts(1)
            this.content.innerHTML = ''

            this.states.posts?.forEach((post: PostType) => {

                const li = document.createElement('li')
                const wrapper = document.createElement('div')
                const titleWrapper = document.createElement('div')
                const contentWrapper = document.createElement('div')

                wrapper.appendChild(titleWrapper)
                wrapper.appendChild(contentWrapper)
                li.appendChild(wrapper)

                titleWrapper.innerText = post.title
                contentWrapper.innerText = post.body

                this.content.appendChild(li)

            })
        })

    }
}