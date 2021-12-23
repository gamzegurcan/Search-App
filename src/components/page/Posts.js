import posts from "../../data/posts";
import { Link } from 'react-router-dom';

function Posts(props){
  return(
    <>
      <div className="col-sm-12">
        <h1>Posts</h1>
        <hr />
      </div>

      {posts.map((item, index) => (
        <div className="col-sm-3 mb-2" key={item.id}>
          <div className="card">
            <img
              className="card-img-top"
              src={`https://picsum.photos/id/${item.id.split('-')[1]}/300/200`}
              alt="jfjj"
            />
            <div className="card-body">
              <h5 className="card-title">{item.title}</h5>

              <Link to={`${item.id}`} className="btn btn-primary">
                Detail
              </Link>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

export default Posts;