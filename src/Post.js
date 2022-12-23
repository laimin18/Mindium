import { useOutletContext, useParams } from "react-router-dom";
import "./Default.css";

export default function Post() {
  const { id } = useParams();
  const { posts } = useOutletContext();
  const currentPost = posts.filter(
    (post) => post.id === parseInt(id)
  );
  // This if check is necessary. Because while reloading the page, return execute first, but state is still empty...
  // So the currentPost[0] would be null... Then API finish calling in <App />, state update, this component would render again. This time we then get the post data we need.
  if (currentPost.length) {
    return (
      <div className="content-all">
      
      <h2>{currentPost[0].title}</h2>
      {currentPost[0].contents.split("\n").map((line, i) => {
        return (
          <p key={i}>
            {line}
            <br></br>
          </p>
        );
      })}
    </div>
    )
  }
  return <h1>Loading...</h1>
}
