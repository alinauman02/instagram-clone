import './PostComments.css';
import { ReactComponent as IconCommentEmoji } from 'assets/icons/comment-emoji.svg';

export function PostComments() {
  return (
    <form className="flex-box comment-form">
      <button className="comment-emoji">
        <IconCommentEmoji />
      </button>
      <input className="comment-box" type="string" placeholder="Add a comment" />
      <input type="submit" className="post-button" placeholder="post" value="Post" />
    </form>
  );
}
