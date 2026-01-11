import { fetchAlbumnById } from '../src/api'

const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get('id')

if(id !== null) {
    
    const data = await fetchAlbumnById(parseInt(id))

    const title = document.querySelector('#title') as HTMLDivElement
    title.innerText = data?.albumn.title
    
    const photos = document.querySelector('#photos') as HTMLDivElement
    title.innerText = data?.albumn.title

    data?.photos.forEach((photo) => {
        const div = document.createElement('div')
        const img = document.createElement('img')

        div.appendChild(img)

        img.src = photo.thumbnailUrl
        img.alt = photo.title
        
        photos.appendChild(div)
    })

} else {
    window.location.href = '/'
}
