import './PostComments.css';
import { ReactComponent as CommentEmoji } from 'assets/icons/comment-emoji.svg';

export function PostComments() {
  return (
    <form className="flex-box comment-form">
      <div className="comment-emoji">
        <CommentEmoji />
      </div>
      <input className="comment-box" type="string" placeholder="Add a comment" />
      <input type="submit" className="post-button" placeholder="post" value="Post" />
    </form>
  );
}
