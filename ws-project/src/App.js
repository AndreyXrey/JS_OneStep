import React, {useEffect, useState} from 'react';
import './Styles/App.css';
import PostList from "./components/PostList";
import PostForm from "./components/PostForm";
import PostFilter from "./components/PostFilter";
import MyModal from "./components/UI/MyModal/MyModal";
import MyButton from "./components/UI/button/MyButton";
import {usePosts} from "./hooks/usePosts";
import PostService from "./API/PostService";
import Loader from "./components/UI/Loader/Loader";
// import PostItem from "./components/PostItem";
// import MyButton from "./components/UI/button/MyButton";
// import MyInput from "./components/UI/input/MyInput";
// import MySelect from "./components/UI/select/MySelect";
// import Counter from "./components/Counter";
// import ClassCounter from "./components/ClassCounter";


function App() {
    const [posts, setPosts] = useState([// {id: 1, title: 'Rom 1', body: 'Sugar'},
        // {id: 2, title: 'Whisky 2', body: 'Hard'},
        // {id: 3, title: 'Cola 3', body: 'Light'},
        // {id: 4, title: 'Vodka 4', body: 'Cool'},
        // {id: 5, title: 'Bear 5', body: 'Too easy'},
        // {id: 6, title: 'Water 6', body: 'Just water'},
        // {id: 7, title: 'Броооооо 7', body: 'Felix, зацени штукенцию'},
    ])
    const [filter, setFilter] = useState({sort:'', query:''});
    const [modal, setModal] = useState(false);
    const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);
    const [isPostLoading, setIsPostLoading] = useState(false);

    useEffect(()=>{
        fetchPosts()
    }, [])

    const createPost = (newPost) => {
        setPosts([...posts, newPost])
        setModal(false)
    }

    async function fetchPosts() {
        setIsPostLoading(true);
        setTimeout(async()=>{
            const posts = await PostService.getAll();
            setPosts(posts)
            setIsPostLoading(false);
        }, 1000)
    }

    const removePost = (post) => {
        setPosts(posts.filter(p => p.id !== post.id))
    }

    return (
        <div className="App">
            <MyButton style={{marginTop: 30}} onClick={fetchPosts}>GET POSTS</MyButton>
            <MyButton style={{marginTop: 30}} onClick={() => setModal(true)}>
                СОЗДАТЬ ПОСТ
            </MyButton>
            <MyModal visible={modal} setVisible={setModal}>
                <PostForm create={createPost}/>
            </MyModal>
            <hr style={{margin:'15px 0'}}/>
            <PostFilter filter={filter} setFilter={setFilter}/>
            {isPostLoading
                ?<div style={{display: 'flex', justifyContent: 'center', marginTop: 30}}><Loader/></div>
                :<PostList remove={removePost} posts={sortedAndSearchedPosts} title="JS посты"/>
            }
        </div>
    );
}
export default App;
