import React from 'react';
import '../sub-pages/comment-card.css';

export default function CommentCard({comment}) {
  return (
    <div className="container-card mt-2 vh-100">
    <div className="box">
        <div>
            <strong>JOE WATSON SBF</strong>
            <p>{comment.text}</p>
            <span>{comment.author}</span> <span>{comment.date.slice(0,4)}</span>
        </div>
    </div>
</div>
  )
}
