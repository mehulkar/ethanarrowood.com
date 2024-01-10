export function YouTubeEmbed ({ id }: { id: string}) {
    return (
        <div className="m-auto py-2">
            <iframe
                className="rounded-xl"
                src={`https://www.youtube.com/embed/${id}`}
            />
        </div>
    )
}