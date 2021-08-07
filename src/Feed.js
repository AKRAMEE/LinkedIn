import React, { useEffect, useState } from 'react';
import './Feed.css';
import CreateIcon from '@material-ui/icons/Create'
import ImageIcon from '@material-ui/icons/Image'
import SubscriptionsIcon from '@material-ui/icons/Subscriptions'
import EventNoteIcon from '@material-ui/icons/EventNote'
import CalendarViewDayIcon from '@material-ui/icons/CalendarViewDay'
import InputOption from './InputOption';
import Post from './Post';
import { db } from './Firebase';
import firebase from "firebase";
function Feed() {
    const [input, setInput] = useState('');
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        db.collection("posts")
            .orderBy("timestamp", "desc")
            .onSnapshot((snapshot) =>
                setPosts(
                    snapshot.docs.map(doc => (
                        {
                            id: doc.id,
                            data: doc.data(),
                        }
                    ))
                )
            );

    }, [])
    const sendPost = e => {
        e.preventDefault();

        db.collection('posts').add({
            name: 'akramee shit',
            description: 'this shit',
            message: input,
            photoUrl: '',
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        });
        setInput("");
    }
    return (
        <div className="feed">
            <div className="feed__inputContainer">
                <div className="feed__input">
                    <CreateIcon />
                    <form action="">
                        <input type="text" value={input} onChange={e => setInput(e.target.value)} />
                        <button onClick={sendPost} type="submit">Send</button>
                    </form>
                </div>
                <div className="feed__inputOption">
                    {/* input option */}
                    <InputOption Icon={ImageIcon} title="Photo" color="#70b5f9" />
                    <InputOption Icon={SubscriptionsIcon} title="Video" color="red" />
                    <InputOption Icon={EventNoteIcon} title="Event" color="lightgreen" />
                    <InputOption Icon={CalendarViewDayIcon} title="Write article" color="Gold" />
                </div>
            </div>
            {/* post  */}
            {posts.map(({ id, data: { name, description, message, photoUrl } }) => (
                <Post
                    key={id}
                    name={name}
                    description={description}
                    message={message}
                    photoUrl={photoUrl}
                />
            ))}
            <Post name='AKRAM Nebih'
                description='This is a test'
                message="Wow this Work"
                photoUrl="https://img.icons8.com/color/480/avatar.png" />
        </div>
    )
}

export default Feed
