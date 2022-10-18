import './PostActions.css';

import { ReactComponent as Comment } from './../../assets/comment.svg';
import { ReactComponent as PaperPlane } from './../../assets/paperplane.svg';
import { ReactComponent as BookMark } from './../../assets/bookmark.svg';
import { ReactComponent as Like } from './../../assets/like.svg';
export function PostActions() {
  return (
    <div className="flex-box">
      <div className="action-icons">
        <Like />
      </div>
      <div className="action-icons">
        <Comment />
      </div>
      <div className="action-icons">
        <PaperPlane />
      </div>
      <div className="action-icons bookmark-icon">
        <BookMark />
      </div>
    </div>
  );
}
