export async function fetchMyPosts(userId: number) {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)
    if (response.status === 200) {
        return await response.json()
    }
}

export async function fetchPosts() {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts`)
    if (response.status === 200) {
        return await response.json()
    }
}

export async function fetchAlbumns() {
    const response = await fetch(`https://jsonplaceholder.typicode.com/albums`)
    if (response.status === 200) {
        return await response.json()
    }
}

export async function fetchPostById(id: number) {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts?id=${id}`)
    if (response.status === 200) {
        return (await response.json())[0]
    }
}

export async function fetchAlbumnById(id: number) {
    const [
        albumnResponse,
        phototsResponse
    ] = await Promise.all([
        fetch(`https://jsonplaceholder.typicode.com/albums?id=${id}`),
        fetch(`https://jsonplaceholder.typicode.com/photos?albumId=${id}`)
    ])
    if (albumnResponse.status === 200 && phototsResponse.status === 200) {
        return {
            albumn: (await albumnResponse.json())[0],
            photos: await phototsResponse.json() as Array<any>
        }
    }
}
