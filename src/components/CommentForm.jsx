import React, { useState, useHistory } from 'react';
import { createComment } from '../../state/services/fetch-utils';

export default function CommentForm() {
  const [comment, setComment] = useState({
    text: '',
  });
  const history = useHistory();

  async function handleSubmitComment(e) {
    e.preventDefault();
    await createComment(comment);
    history.push('/comments');
  }

  return (
    <section>
      <form onSubmit={handleSubmitComment}>
        <input
          required
          value={comment.text}
          type="text"
          onChange={(e) => setComment({ ...comment, text: e.target.value })}
        />
        <button type="submit"></button>
      </form>
    </section>
  );
}
