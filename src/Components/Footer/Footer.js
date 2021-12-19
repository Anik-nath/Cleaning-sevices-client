import React from 'react';
import styles from '../Navigation/myButton.module.css';

const Footer = () => {
    return (
        <div className={styles.mainbg}>
           <div className="container text-white pt-5">
               <div className="row">
                   <div className="col-lg-4 col-md-4 col-12">
                        <h5 className="text-warning">
                        <span className="h2 text-primary"><i className="fas fa-broom"></i></span>
                            BD Cleener</h5>
                        <p className="text-white-50">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reiciendis, officia.</p>
                   </div>
                   <div className="col-lg-4 col-md-4 col-12">
                       <h5>UseFul Link</h5>
                       <ul className="text-white-50 list-unstyled">
                           <li>Link 1</li>
                           <li>Link 1</li>
                           <li>Link 1</li>
                       </ul>
                   </div>
                   <div className="col-lg-4 col-md-4 col-12">
                   <h5>UseFul Link</h5>
                    <ul className="text-white-50 list-unstyled">
                        <li>Link 1</li>
                        <li>Link 1</li>
                        <li>Link 1</li>
                    </ul>
                   </div>
               </div><hr />
               <div className="row">
                   <div className="col-12 text-center pb-3">
                       <small className="text-white-50"> &copy; Copywrite 2021 Cleener.com </small>
                   </div>
               </div>
           </div>
        </div>
    );
};

export default Footer;