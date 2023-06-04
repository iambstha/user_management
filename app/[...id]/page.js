export async function generateStaticParams() {
    const posts = [
        {
            id: '1',
            name: 'Bishal'
        },
        {
            id: '2',
            name: 'Angel'
        },
        {
            id: '3',
            name: 'Rabin'
        }
    ]

    return posts.map((post) => ({
        post
    }));
}

export default function DynamicPage({ params }) {
    console.log(params)
    return (
        <div className=" p-2 ">
            <span>{params.id}</span>
            {/* <span>{params.name}</span> */}
        </div>
    )
}