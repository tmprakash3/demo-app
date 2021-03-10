import { useRouter } from 'next/router'

const Details = ({post}) => {
    const router = useRouter();
    if(router.isFallback) {
        return <div>Loading....</div>
    }
    return (
        <div>
            <h1>Detail Page</h1>
            <p>{post.id} {post.title}</p>
            <p>{post.body}</p>
        </div>
    );
}

export const getStaticPaths = async() => {
    const res = await fetch('http://jsonplaceholder.typicode.com/posts');
    const posts = await res.json();
    const paths = posts.map((post, index) => {
        if(index < 50) return { params: { id: post.id.toString()}}
    }).filter(posts => typeof posts != 'undefined');
    console.log(paths);
    return {
        paths,
        fallback: true
    }
}

export const getStaticProps = async({params}) => {
    const res = await fetch(`http://jsonplaceholder.typicode.com/posts/${params.id}`);
    const post = await res.json();
    console.log(post);
    return {
        props: {
            post
        }
    }
}


 
export default Details;