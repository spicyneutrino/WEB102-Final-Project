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
    const [fetchError, setFetchError] = useState(null)

    useEffect(() => {
        const fetchData = async () => {
            const { data, error } = await supabase
                .from("posts")
                .select()

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
            }
        }
        fetchData()
    }, [])

    return (
        <div>
            <Header posts={posts} />
            <Body posts={posts} />
        </div>
    )
}

export default Home