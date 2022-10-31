import './CreatePost.css';
import { ReactComponent as IconCreatPost } from 'assets/icons/create-post-icon.svg';

interface CreatePostProps {
  setCreatePostBoxVisibility: (value: boolean) => void;
}

export function CreatePost({ setCreatePostBoxVisibility }: CreatePostProps) {
  return (
    <div className="create-post-background">
      <div className="create-post">
        <div className="create-post-header">Create New Post</div>
        <div className="create-post-upload">
          <div className="create-post-icon">
            <IconCreatPost />
          </div>

          <div className="create-post-text">Drag photos and videos here</div>
          <button
            className="create-post-button"
            onClick={() => {
              setCreatePostBoxVisibility(false);
            }}
          >
            Select from computer
          </button>
        </div>
      </div>
    </div>
  );
}
