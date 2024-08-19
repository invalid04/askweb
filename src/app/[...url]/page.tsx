import { ragChat } from "@/lib/rag-chat"

interface PageProps {
    params: {
        url: string | string[] | undefined
    }
}

function reconstructUrl({ url }: { url:string[] }) {
    const decodedComponents = url.map((component) => decodeURIComponent(component))
    return decodedComponents.join('/')
}

const Page = async ({ params }: PageProps) => {
    const reconstructedUrl = reconstructUrl({ url: params.url as string[] })

    await ragChat.context.add({
        type: 'html',
        source: reconstructedUrl
    })

    return (
        <p>hi</p>
    )
}

export default Page