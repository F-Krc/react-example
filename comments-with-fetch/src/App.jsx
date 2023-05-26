import React, { useState, useEffect } from 'react';
import CommentForm from './components/CommentForm';
import CommentList from './components/CommnetList';
import { BsFillChatTextFill } from 'react-icons/bs';

const App = () => {
  const fetchComments = async () => {
    try {
      const url = 'https://tiny-house-helden.de/api/comments.json';
      const proxyUrl = 'https://corsproxy.io/?' + url;
      const response = await fetch(proxyUrl);
      const data = await response.json();
      console.log(data);
      return data;
    } catch (error) {
      throw new Error('Error fetching comments:', error);
    }
  };

  const saveToLocalStorage = (comments) => {
    localStorage.setItem('comments', JSON.stringify(comments));
  };

  const getFromLocalStorage = () => {
    const savedComments = localStorage.getItem('comments');
    return savedComments ? JSON.parse(savedComments) : [];
  };

  const [comments, setComments] = useState([]);

  useEffect(() => {
    const loadComments = async () => {
      try {
        const savedComments = getFromLocalStorage();
        if (savedComments) {
          setComments(savedComments);
        } else {
          const data = await fetchComments();
          setComments(data);
          saveToLocalStorage(data);
        }
      } catch (error) {
        console.error('Error loading comments:', error);
      }
    };

    loadComments();
  }, []);

  const addComment = (name, text) => {
    const newCommentId = comments.reduce((maxId, comment) => Math.max(maxId, comment.id), 0) + 1;
    const isoDate = new Date().toLocaleString('de-DE');
    const newComment = { 
      id: newCommentId, 
      name: name, 
      text: text, 
      date: isoDate };
    const updatedComments = [...comments, newComment];
    setComments(updatedComments);
    saveToLocalStorage(updatedComments);
  };

  const deleteComment = (id) => {
    const updatedComments = comments.filter((comment) => comment.id!== id);
    setComments(updatedComments);
    saveToLocalStorage(updatedComments);
  };

  return (
    <div className="App">
      <h2>
        <BsFillChatTextFill /> {comments.length} Kommentar
      </h2>
      <CommentForm addComment={addComment} />
      <CommentList comments={comments} onDeleteComment={deleteComment} />
    </div>
  );
};

export default App;