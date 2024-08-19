import { ragChat } from "@/lib/rag-chat"

interface PageProps {
    params: {
        url: string | string[] | undefined
    }
}

const Page = ({ params }: PageProps) => {
    const reconstructedUrl = reconstrustUrl({url: params.url as string})

    // await ragChat.context.add({
    //     type: 'html',
    //     source: 
    // })

    return (
        <p>hi</p>
    )
}

export default Page