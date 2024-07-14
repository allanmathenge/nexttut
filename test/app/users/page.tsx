import Link from 'next/link'
import styles from './page.module.css'
import getAllUsers from '@/lib/getAllUsers'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Users'
}

export default async function page() {

  const usersData: Promise<User[]> = getAllUsers()
  const users = await usersData
  
  const content = (
    <>
      <section className={styles.main}>
        <h3>Users page</h3>
        <h3>
          <Link href="/">⬅Back Home</Link>
        </h3>
      </section>
      {
        users?.map((user) => {
          return (
            <h5 
              className={styles.main}
              key={user.id}>
              <Link href={`/users/${user.id}`}>
                {user.name}
              </Link>
            </h5>
          )
        })
      }
    </>
  )

  return content
}
