import { Metadata } from 'next'
import getAllUsers from '@lib/getAllUsers'
import Link from 'next/link'

export const metadata: Metadata = {
    title: 'Users',
}

export default async function HomePage() {
    const usersData: Promise<User[]> = getAllUsers()
    const users = await usersData

    const content = (
        <section>
            <h2>
            <Link href="/">Back home</Link>
            </h2>

            {users?.map((user) => {
                return (
                <>
                    <p key={user.id}>
                        <Link href={`user/${user.id}`}>
                        {user.name}
                        </Link>
                    </p>
                    <br />
                </>
                )
            })}
        
        </section>
    )
    return content
}