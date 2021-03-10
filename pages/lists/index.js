import postStyles from '../../styles/postcard.module.css';
import Link from 'next/link';

const Lists = ({posts}) => {
    return (
        <div>
            <h1>Listing Page</h1>
            {posts.map(post => {
                return (
                    <Link href='/lists/[id]' as={`/lists/${post.id}`}>
                    <div className={postStyles.postcard}  key={post.id}>
                        <span>{post.id}</span> &nbsp;
                        <span>{post.title}</span> &nbsp;
                        <p>{post.body}</p>
                    </div>
                    </Link>
                )
            })}
        </div>
    );
}

export const getStaticProps = async() => {
    const res = await fetch('http://jsonplaceholder.typicode.com/posts');
    const posts = await res.json();
    return {
        props: {
            posts
        }
    }

}


export default Lists;