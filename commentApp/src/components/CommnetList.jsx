import React from 'react';
import Comment from './Comment';

const CommentList = ({ comments, onDeleteComment }) => {
  return (
    <div>
      {comments.map((comment) => (
        <Comment key={comment.id} comment={comment} deleteComment={onDeleteComment} />
      ))}
    </div>
  );
};

export default CommentList;
