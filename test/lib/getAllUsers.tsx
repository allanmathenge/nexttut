export default async function getAllUsers() {
    const res = await fetch('https://jsonplaceholder.typicode.com/users')

    if (!res.ok) throw new Error ('Could not fetch users')

    return res.json()
}

// We have no try catch block because we will use react suspense and error boundaries