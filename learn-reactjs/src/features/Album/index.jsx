import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import AlbumList from '../Album/components/AlbumList';
AlbumFeature.propTypes = {

};

function AlbumFeature(props) {
    const albumList = [
        {
            id: 1,
            albumName: 'Nhạc Mới Tết Này',
            thumbnailUrl: 'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/4/e/e/7/4ee7fcca9e824104baeaedb2f5634e0b.jpg',
        },
        {
            id: 2,
            albumName: 'Nhạc Xuân Hay Nhất',
            thumbnailUrl: 'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/6/f/d/8/6fd8a0ae2ef979a2e77d67dde5c8c91c.jpg',
        },
        {
            id: 3,
            albumName: 'Rap Vui Ngày Tết',
            thumbnailUrl: 'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/3/d/8/9/3d892d99220c424542f00fcab07b854d.jpg',
        },

    ];

    return (
        <div>
            <h2>Có thể bạn sẽ thích đấy</h2>
            <AlbumList albumList={albumList}> </AlbumList>
            <Outlet />
            <Link to='new'>Create new album</Link>
        </div>
    );
}

export default AlbumFeature;