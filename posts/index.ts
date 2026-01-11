import { fetchAlbumnById, fetchPostById } from '../src/api'

const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get('id')

if(id !== null) {
    
    const data = await fetchPostById(parseInt(id))

    const title = document.querySelector('#title') as HTMLDivElement
    title.innerText = data?.title
    
    const body = document.querySelector('#body') as HTMLDivElement
    body.innerText = data?.body

} else {
    window.location.href = '/'
}
