import React from 'react'
import getFormattedDate from '@/lib/getFormattedDate'
import Link from 'next/link'

type Props = {
  post: BlogPost
}

export default function ListItem({ post }: Props) {

  const { id, date, title } = post
  const formatDate = getFormattedDate(date)

  return (
    <li className='mt-4 text-2xl'>
      <Link className='underline hover:text-blue-500' href={`/posts/${id}`}>{title}</Link>
      <br />
      <p className='text-sm mt-1'>{formatDate}</p>
    </li>
  )
}
