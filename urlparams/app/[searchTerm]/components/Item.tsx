
import Link from "next/link"
import Image from "next/image"

type Props = {
    result: Result
}

export default function Item({ result }: Props) {
  const itemTextCol = (
    <div>
      <h2>
        <Link href={`https://en.wikipedia.org/?curid=${result.pageid}`} target="_blank" className="text-xl text-blue-500" >
          {result.title}
        </Link>
      </h2>
        <p>{result.extract}</p>
    </div>
  )

  const content = result?.thumbnail?.source
  ? (
      <article className="border border-solid border-green-50 my-3 px-3 shadow-md">
        <div className="flex items-center p-6">
          <div className="pr-3">
            <Image
              src={result.thumbnail.source} 
              alt={result.title}
              width={result.thumbnail.width}
              height={result.thumbnail.height}
              Loading="lazy"
            />
          </div>
          {itemTextCol}
        </div>
      </article>
  ) : (
    <section className="border border-solid border-green-50 my-3 px-3 shadow-md">
      {itemTextCol}
    </section>
  )

  return content
}