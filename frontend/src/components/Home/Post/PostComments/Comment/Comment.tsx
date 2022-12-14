import './Comment.css';
import { ReactComponent as IconLikeComment } from 'assets/icons/like-comment.svg';

export function Comment() {
  return (
    <div className="Comment flex-box">
      <div className="comment-icon"></div>

      <div className="comment-mid">
        <div>
          <span className="reviewer-name">Ejaz hussain</span> The quick brown fox jumps over the lazy dog
        </div>
        <div className="comment-actions">
          <span className="time">19h</span>
          <span className="likes"> 73Likes </span>
          <button className="reply-action">Reply</button>
        </div>
      </div>
      <button className="comment-like">
        <IconLikeComment />
      </button>
    </div>
  );
}
