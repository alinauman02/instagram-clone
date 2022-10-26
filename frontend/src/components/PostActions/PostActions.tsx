import './PostActions.css';
import { ReactComponent as IconComment } from 'assets/icons/comment.svg';
import { ReactComponent as IconPaperPlane } from 'assets/icons/paperplane.svg';
import { ReactComponent as IconBookMark } from 'assets/icons/bookmark.svg';
import { ReactComponent as IconLike } from 'assets/icons/like.svg';

export function PostActions() {
  return (
    <div className="flex-box">
      <button className="action-icons">
        <IconLike />
      </button>
      <button className="action-icons">
        <IconComment />
      </button>
      <button className="action-icons">
        <IconPaperPlane />
      </button>
      <button className="action-icons bookmark-icon">
        <IconBookMark />
      </button>
    </div>
  );
}
