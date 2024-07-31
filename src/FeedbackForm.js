import React, { useState } from 'react';
import './FeedbackForm.css'

const FeedbackForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    rating: '',
    comments: '',
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    let formErrors = {};
    let valid = true;

    if (!formData.name.trim()) {
      formErrors.name = 'Name is required';
      valid = false;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      formErrors.email = 'Email is required';
      valid = false;
    } else if (!emailPattern.test(formData.email)) {
      formErrors.email = 'Email is not valid';
      valid = false;
    }

    if (!formData.rating.trim()) {
      formErrors.rating = 'Rating is required';
      valid = false;
    } else if (isNaN(formData.rating) || formData.rating < 1 || formData.rating > 5) {
      formErrors.rating = 'Rating must be between 1 and 5';
      valid = false;
    }

    if (!formData.comments.trim()) {
      formErrors.comments = 'Comments are required';
      valid = false;
    }

    setErrors(formErrors);
    return valid;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      setSubmitted(true);
    }
  };

  return (
    <div>
      {!submitted ? (
        <form onSubmit={handleSubmit}>
          <div>
            <label>
              Name:
              <input type="text" name="name" value={formData.name} onChange={handleChange} />
            </label>
            {errors.name && <span className="error">{errors.name}</span>}
          </div>
          <div>
            <label>
              Email:
              <input type="email" name="email" value={formData.email} onChange={handleChange} />
            </label>
            {errors.email && <span className="error">{errors.email}</span>}
          </div>
          <div>
            <label>
              Rating (1-5):
              <input type="number" name="rating" value={formData.rating} onChange={handleChange} />
            </label>
            {errors.rating && <span className="error">{errors.rating}</span>}
          </div>
          <div>
            <label>
              Comments:
              <textarea name="comments" value={formData.comments} onChange={handleChange}></textarea>
            </label>
            {errors.comments && <span className="error">{errors.comments}</span>}
          </div>
          <button type="submit">Submit</button>
        </form>
      ) : (
        <div>
          <h2>Thank you for your feedback!</h2>
          <p><strong>Name:</strong> {formData.name}</p>
          <p><strong>Email:</strong> {formData.email}</p>
          <p><strong>Rating:</strong> {formData.rating}</p>
          <p><strong>Comments:</strong> {formData.comments}</p>
        </div>
      )}
    </div>
  );
};

export default FeedbackForm;
