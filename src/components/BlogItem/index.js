import { Link } from 'react-router-dom'
import './index.css'

const BlogItem = ({ blog }) => {
  const { id, title, image_url } = blog

  return (
    <li className="blog-item">
      <Link to={`/blogs/${id}`} className="blog-link">
        <img src={image_url} alt={title} className="blog-thumbnail" />
        <h2 className="blog-title">{title}</h2>
      </Link>
    </li>
  )
}

export default BlogItem
