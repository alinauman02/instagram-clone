import './CreatePost.css';
import { ReactComponent as CreatePostIcon } from 'assets/icons/create-post-icon.svg';

interface CreatePostProps {
  setCreatePostBox: (value: boolean) => void;
}
export function CreatePost({ setCreatePostBox }: CreatePostProps) {
  return (
    <div className="create-post-background">
      <div className="create-post">
        <div className="create-post-header">Create New Post</div>
        <div className="create-post-upload">
          <div className="create-post-icon">
            <CreatePostIcon />
          </div>

          <div className="create-post-text">Drag photos and videos here</div>
          <button
            className="create-post-button"
            onClick={() => {
              setCreatePostBox(false);
            }}
          >
            Select from computer
          </button>
        </div>
      </div>
    </div>
  );
}
