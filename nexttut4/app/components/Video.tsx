
type Props = {
    id: string
}

export default function Video({ id }: Props) {
    // aspect ratio of 16 by 9 is normal for a video
  return (
    <div className="aspect-w-16 aspect-h-9">
        <iframe
            src={`https://www.youtube.com/embed/${id}`}
            title="Youtube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        />
    </div>
  )
}