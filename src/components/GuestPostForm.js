import React, { useState } from 'react';

const GuestPostForm = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [link, setLink] = useState('');
  const [file, setFile] = useState(null);
  const [posts, setPosts] = useState([]);

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleContentChange = (e) => {
    setContent(e.target.value);
  };

  const handleLinkChange = (e) => {
    setLink(e.target.value);
  };

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = () => {
    const post = {
      title: title,
      content: content,
      link: link,
      file: file ? file.name : null,
    };

    // Save the post data to local storage
    localStorage.setItem('guestPost', JSON.stringify(post));

    // Save the post to the component state
    setPosts((prevPosts) => [...prevPosts, post]);

    // Save the file to local storage
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        localStorage.setItem(file.name, event.target.result);
      };
      reader.readAsDataURL(file);
    }

    // Clear form fields after submission
    setTitle('');
    setContent('');
    setLink('');
    setFile(null);
  };

  return (
    <div className="container mt-4">
      <h2 className="text-center">Guest Post Form</h2>
      <form>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Title
          </label>
          <input
            type="text"
            className="form-control"
            id="title"
            value={title}
            onChange={handleTitleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="content" className="form-label">
            Content
          </label>
          <textarea
            className="form-control"
            id="content"
            rows="4"
            value={content}
            onChange={handleContentChange}
          ></textarea>
        </div>
        <div className="mb-3">
          <label htmlFor="link" className="form-label">
            Website Link
          </label>
          <input
            type="text"
            className="form-control"
            id="link"
            value={link}
            onChange={handleLinkChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="file" className="form-label">
            Upload Image
          </label>
          <input
            type="file"
            accept="image/*"
            className="form-control"
            id="file"
            onChange={handleFileChange}
          />
        </div>
        <button
          type="button"
          className="btn btn-primary"
          onClick={handleSubmit}
        >
          Submit
        </button>
      </form>

      {/* Display submitted posts */}
      <div className="mt-4">
        <h3>Latest Notifications</h3>
        {posts.map((post, index) => (
          <div key={index} className="card mb-3">
            <div className="card-body">
              <h5 className="card-title">{post.title}</h5>
              <p className="card-text">{post.content}</p>
              {post.link && (
                <div className="mb-3">
                  <a href={post.link} target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
                    Visit Site
                  </a>
                </div>
              )}
              {post.file && (
                <div>
                  <img
                    src={localStorage.getItem(post.file)}
                    alt="Uploaded"
                    className="img-fluid mb-3"
                  />
                </div>
              )}
              {post.file && (
                <p className="card-text">
                  <small className="text-muted">
                    File: <a href={localStorage.getItem(post.file)}>Download Image</a>
                  </small>
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GuestPostForm;
