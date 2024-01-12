import Post from "./Post";
import classes from "./PostList.module.css";
import NewPost from "./NewPost";
const PostList = () => {
  return (
    <>
      <NewPost />
      <ul className={classes.posts}>
        <Post author="Maximilian" body="hello from Maximilian" />
        <Post author="Manuel" body="hello from Manuel" />
      </ul>
    </>
  );
};

export default PostList;
