import './PostActions.css';
import { ReactComponent as Comment } from 'assets/icons/comment.svg';
import { ReactComponent as PaperPlane } from 'assets/icons/paperplane.svg';
import { ReactComponent as BookMark } from 'assets/icons/bookmark.svg';
import { ReactComponent as Like } from 'assets/icons/like.svg';

export function PostActions() {
  return (
    <div className="flex-box">
      <button className="action-icons">
        <Like />
      </button>
      <button className="action-icons">
        <Comment />
      </button>
      <button className="action-icons">
        <PaperPlane />
      </button>
      <button className="action-icons bookmark-icon">
        <BookMark />
      </button>
    </div>
  );
}
