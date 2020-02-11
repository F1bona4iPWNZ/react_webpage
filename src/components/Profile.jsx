import React from 'react';
import s from './Profile.module.css';

const Profile = () => {
    return <div className={'content'}>
        <img src='https://images.unsplash.com/photo-1499084732479-de2c02d45fcc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80'>
        </img>
        <div className={s.ava}> ava + description
            <img src='https://assets.jpegmini.com/user/images/slider_puffin_before_mobile.jpg'></img>
        </div>
        <div className={s.posts}> my post
            <div className={s.item}>
                newpost
            </div>
            <div className={s.item}>
                post1
            </div>
            <div className={s.item}>
                post2
            </div>
        </div>
    </div>
}
export default Profile;