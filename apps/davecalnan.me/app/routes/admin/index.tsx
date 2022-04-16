import { Link } from "@remix-run/react";
import { LoaderFunction, json } from "@remix-run/server-runtime";
import { requireUserId } from "~/session.server";

export const loader: LoaderFunction = async ({ request }) => {
  await requireUserId(request);
  return json({});
};

const AdminHomepage = () => {
  return (
    <div>
      <h1>Admin Homepage</h1>
      <Link to="/admin/posts">Posts</Link>
    </div>
  );
};

export default AdminHomepage;
