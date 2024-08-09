import Post from "../post/Post";
import "./posts.scss";

const Posts = () => {
  //TEMPORARY
  const posts = [
    {
      id: 1,
      name: "Harsh Singh",
      userId: 1,
      profilePic:
        "https://thumbs.dreamstime.com/b/vector-pixel-art-man-sit-sleep-vector-pixel-art-man-sit-sleep-isolated-109521519.jpg",
      desc: "Enjoying the sunset",
      img: "https://images.pexels.com/photos/33834/landscape-shore-sunset-clouds.jpg?cs=srgb&dl=pexels-pixabay-33834.jpg&fm=jpg",
    },
    {
      id: 2,
      name: "Sarah Doe",
      userId: 2,
      profilePic:
        "https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=1600",
      desc: "Tenetur iste voluptates dolorem rem commodi voluptate pariatur, voluptatum, laboriosam consequatur enim nostrum cumque! Maiores a nam non adipisci minima modi tempore.",
    },
  ];

  return <div className="posts">
    {posts.map(post=>(
      <Post post={post} key={post.id}/>
    ))}
  </div>;
};

export default Posts;
