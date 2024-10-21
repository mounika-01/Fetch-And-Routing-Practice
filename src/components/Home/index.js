import './index.css';
import UserInfo from './UserInfo'; // Adjust the path if UserInfo is in a different directory
import BlogList from './BlogList';   // Adjust the path if BlogList is in a different directory

const Home = () => (
  <div className="home-container">
    <UserInfo />
    <BlogList />
  </div>
);

export default Home;
