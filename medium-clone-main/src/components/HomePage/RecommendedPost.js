import React from 'react';
import sample from './sample.jpg';

const RecommendedPost = () => {
    return(
        <div className="post">
            <div className="post-container">
                <div className="post-top">
                    <svg width="28" height="29" viewBox="0 0 28 29" fill="none" className="ip y">
                        <path fill="#fff" d="M0 .8h28v28H0z"></path>
                        <g opacity="0.8" clipPath="url(#trending_svg__clip0)">
                            <path fill="#fff" d="M4 4.8h20v20H4z"></path>
                            <circle cx="14" cy="14.79" r="9.5" stroke="#000"></circle>
                            <path
                                d="M5.46 18.36l4.47-4.48M9.97 13.87l3.67 3.66M13.67 17.53l5.1-5.09M16.62 11.6h3M19.62 11.6v3"
                                stroke="#000"
                                strokeLinecap="round"
                            ></path>
                        </g>
                        <defs>
                            <clipPath id="trending_svg__clip0">
                                <path
                                    fill="#fff"
                                    transform="translate(4 4.8)"
                                    d="M0 0h20v20H0z"
                                ></path>
                            </clipPath>
                        </defs>
                    </svg>

                    <span> Trending on Medium </span>
                </div>

                <div className="rcm-post-wrapper">
                    <div className="rcm-post-container">
                        <div className="rcm-posts">
                            <div className="rcm-post">
                                <div className="rcm-post-left">
                                    <span>1</span>
                                </div>
                                <div className="rcm-post right">
                                    <div className="rcm-post-content">
                                        <div className="rcm-post-top">
                                            <img src={sample} alt="logo"/>
                                            <span> Username Blog </span>
                                        </div>
                                        <div className={"content"}>
                                           <p> This is the test Title. </p>
                                        </div>
                                        <div className="footer">
                                            <span> 01 08 2022 | 2 min read </span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="rcm-post">
                                <div className="rcm-post-left">
                                    <span>2</span>
                                </div>
                                <div className="rcm-post right">
                                    <div className="rcm-post-content">
                                        <div className="rcm-post-top">
                                            <img src={sample} alt="logo"/>
                                            <span> Username Blog 2 </span>
                                        </div>
                                        <div className={"content"}>
                                            <p> This is the test Title. </p>
                                        </div>
                                        <div className="footer">
                                            <span> 05 08 2022 | 6 min read </span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="rcm-post">
                                <div className="rcm-post-left">
                                    <span>3</span>
                                </div>
                                <div className="rcm-post right">
                                    <div className="rcm-post-content">
                                        <div className="rcm-post-top">
                                            <img src={sample} alt="logo"/>
                                            <span> Username Blog 3 </span>
                                        </div>
                                        <div className={"content"}>
                                            <p> This is the test Title. </p>
                                        </div>
                                        <div className="footer">
                                            <span> 05 08 2022 | 9 min read </span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="rcm-post">
                                <div className="rcm-post-left">
                                    <span>4</span>
                                </div>
                                <div className="rcm-post right">
                                    <div className="rcm-post-content">
                                        <div className="rcm-post-top">
                                            <img src={sample} alt="logo"/>
                                            <span> Username Blog 5</span>
                                        </div>
                                        <div className={"content"}>
                                            <p> This is the test Title. </p>
                                        </div>
                                        <div className="footer">
                                            <span> 07 08 2022 | 3 min read </span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="rcm-post">
                                <div className="rcm-post-left">
                                    <span>5</span>
                                </div>
                                <div className="rcm-post right">
                                    <div className="rcm-post-content">
                                        <div className="rcm-post-top">
                                            <img src={sample} alt="logo"/>
                                            <span> Username Blog 6</span>
                                        </div>
                                        <div className={"content"}>
                                            <p> This is the test Title. </p>
                                        </div>
                                        <div className="footer">
                                            <span> 08 08 2022 | 6 min read </span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="rcm-post">
                                <div className="rcm-post-left">
                                    <span>6</span>
                                </div>
                                <div className="rcm-post right">
                                    <div className="rcm-post-content">
                                        <div className="rcm-post-top">
                                            <img src={sample} alt="logo"/>
                                            <span> Username Blog 6</span>
                                        </div>
                                        <div className={"content"}>
                                            <p> This is the test Title. </p>
                                        </div>
                                        <div className="footer">
                                            <span> 09 08 2022 | 7 min read </span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="rcm-post">
                                <div className="rcm-post-left">
                                    <span>7</span>
                                </div>
                                <div className="rcm-post right">
                                    <div className="rcm-post-content">
                                        <div className="rcm-post-top">
                                            <img src={sample} alt="logo"/>
                                            <span> Username Blog 7</span>
                                        </div>
                                        <div className={"content"}>
                                            <p> This is the test Title. </p>
                                        </div>
                                        <div className="footer">
                                            <span> 10 08 2022 | 11 min read </span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="rcm-post">
                                <div className="rcm-post-left">
                                    <span>8</span>
                                </div>
                                <div className="rcm-post right">
                                    <div className="rcm-post-content">
                                        <div className="rcm-post-top">
                                            <img src={sample} alt="logo"/>
                                            <span> Username Blog 8</span>
                                        </div>
                                        <div className={"content"}>
                                            <p> This is the test Title. </p>
                                        </div>
                                        <div className="footer">
                                            <span> 10 08 2022 | 2 min read </span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="rcm-post">
                                <div className="rcm-post-left">
                                    <span>9</span>
                                </div>
                                <div className="rcm-post right">
                                    <div className="rcm-post-content">
                                        <div className="rcm-post-top">
                                            <img src={sample} alt="logo"/>
                                            <span> Username Blog 9</span>
                                        </div>
                                        <div className={"content"}>
                                            <p> This is the test Title. </p>
                                        </div>
                                        <div className="footer">
                                            <span> 11 08 2022 | 4 min read </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default RecommendedPost;