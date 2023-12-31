//import components
import Header from '../components/Header';
import Body from '../components/Body';

//import config
import supabase from '../config/supaBaseClient';
import { useState } from 'react';
import { useEffect } from 'react';

//main component

const Home = () => {
    //states
    const [posts, setPosts] = useState(null)
    const [copyPosts, setCopyPosts] = useState(null)
    const [fetchError, setFetchError] = useState(null)
    const [orderBy, setOrderBy] = useState("postID")
    const [isAscending, setIsAscending] = useState(true)

    useEffect(() => {
        const fetchData = async () => {
            const { data, error } = await supabase
                .from("posts")
                .select()
                .order(orderBy, { "ascending": isAscending })

            console.log(data)
            console.log(error)
            if (error) {
                console.log(error)
                setFetchError(error)
                setPosts(null)
            }
            if (data) {
                console.log(data)
                setFetchError(null)
                setPosts(data)
                setCopyPosts(data)
            }
        }
        fetchData()
    }, [orderBy, isAscending])

    return (
        <div>
            <Header posts={posts} copyPosts={copyPosts} setPosts={setPosts} setCopyPosts={setCopyPosts} />
            <Body posts={copyPosts} setIsAscending={setIsAscending} setOrderBy={setOrderBy} />
        </div>
    )
}

export default Home