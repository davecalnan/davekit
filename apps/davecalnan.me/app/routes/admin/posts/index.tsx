import { Link } from "remix";

const PostIndexPage = () => {
  return (
    <p>
      No post selected. Select a post on the left, or{" "}
      <Link to="new" className="text-blue-500 underline">
        create a new post.
      </Link>
    </p>
  );
};

export default PostIndexPage;
