// Write your JS code here
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import './index.css'

const BlogItemDetails = () => {
  const { id } = useParams()
  const [blogDetails, setBlogDetails] = useState(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchBlogDetails = async () => {
      const response = await fetch(`https://apis.ccbp.in/blogs/${id}`)
      const data = await response.json()
      setBlogDetails(data)
      setIsLoading(false)
    }

    fetchBlogDetails()
  }, [id])

  if (isLoading) {
    return <div data-testid="loader">Loading...</div>
  }

  if (!blogDetails) {
    return <h1>Blog not found</h1>
  }

  const { title, content, image_url } = blogDetails

  return (
    <div className="blog-item-details-container">
      <h1 className="blog-title">{title}</h1>
      <img src={image_url} alt={title} className="blog-image" />
      <p className="blog-content">{content}</p>
    </div>
  )
}

export default BlogItemDetails
