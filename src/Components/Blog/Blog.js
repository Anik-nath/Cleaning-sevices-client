import React from 'react';
import styles from "../Navigation/myButton.module.css";

const Blog = () => {
    return (
        <div>
        <div className={styles.pageBackground}>
        <div className="container py-5">
          <div className="row py-5">
            <div className="col-12 text-center text-light py-5">
              <h1 className="display-3">Blog</h1>
            </div>
          </div>
        </div>
      </div>
        </div>
    );
};

export default Blog;