import './PostActions.css';

import like from './../../assets/like.svg';
import comment from './../../assets/comment.svg';
import paperPlane from './../../assets/paperplane.svg';
import bookMark from './../../assets/bookmark.svg';
export function PostActions() {
  return (
    <div className="flex-box">
      <img className="action-icons" src={like} alt="like"></img>
      <img className="action-icons" src={comment} alt="comment"></img>
      <img className="action-icons" src={paperPlane} alt="paperPlane"></img>
      <img className="action-icons bookmark-icon" src={bookMark} alt="paperPlane"></img>
    </div>
  );
}
