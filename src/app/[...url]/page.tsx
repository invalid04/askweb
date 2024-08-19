interface PageProps {
    params: {
        url: string | string[] | undefined
    }
}

const Page = ({ params }: PageProps) => {
    return (
        <p>hi</p>
    )
}

export default Page