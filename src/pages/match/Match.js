import React, { useEffect, useState } from 'react';
// import './About.css';

function Match() {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await fetch(
          'https://jsonplaceholder.typicode.com/todos'
        );
        const jsonresult = await response.json();

        if (response.ok) {
          setPosts(jsonresult); // Correct way to update state
          console.log(jsonresult); 
        } else {
          setError(jsonresult.error || 'Failed to fetch posts'); // Error message handling
          console.log(jsonresult);
        }
      } catch (err) {
        setError('An error occurred while fetching data'); // Catch network or other errors
        console.error(err);
      }
    };

    fetchPost();
  }, []);

  return (
    <div>
      {error && <p style={{ color: 'red' }}>{error}</p>} {/* Display error message */}
      {posts &&
        posts.map((post) => {
          return <h2 key={post.id}>{post.title}</h2>; // Add a key for each list item
        })}
    </div>
  );
}

export default Match;
