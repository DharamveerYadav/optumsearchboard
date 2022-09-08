import React from 'react';
import ThumbUpAltOutlinedIcon from '@mui/icons-material/ThumbUpAltOutlined';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';

import BlogHeader from './BlogHeader/BlogHeader';
import Profile from './Profile/Profile';

import IconComp from './IconComp/IconComp';

import './Blog.css';

const Blog = (props) => {

    return (
        <div className="blog-container">
         <span className="fs-2 fw-bold">Yammer</span>   
         <div className="blog mx-4 d-flex flex-column">
         <div className="blog-header">
            <BlogHeader />
         </div>
         <span className="mb-4">
         Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries
         </span>
         <textarea cols="8" disabled className="mb-4"></textarea>
         <div className="icon-box">
             <IconComp icon={ThumbUpAltOutlinedIcon} text="like" />
             <IconComp icon={ChatBubbleOutlineOutlinedIcon} text="comment" />
             <IconComp icon={ShareOutlinedIcon} text="share" />
         </div>
         </div>

         <div className="divider"></div>
         <div className="comment-section d-flex">
             <Profile />
             <div className="comment d-flex flex-column w-100">
                 <textarea  disabled></textarea>
                 <div className="icon-box mt-1">
                 <IconComp icon={ThumbUpAltOutlinedIcon} />
             <IconComp icon={ChatBubbleOutlineOutlinedIcon} />
             <IconComp icon={ShareOutlinedIcon}  />
                 </div>
             </div>
         </div>

        </div>

    )
};

export default Blog;