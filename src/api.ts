export async function fetchMyPosts(userId: number) {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)
    if(response.status === 200) {
        return await response.json()
    }
}

export async function fetchPosts() {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts`)
    if(response.status === 200) {
        return await response.json()
    }
}

export async function fetchAlbumns() {
    const response = await fetch(`https://jsonplaceholder.typicode.com/albums`)
    if(response.status === 200) {
        return await response.json()
    }
}