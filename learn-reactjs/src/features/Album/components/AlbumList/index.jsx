import PropTypes from 'prop-types';
import React from 'react';
import './styles.scss';
import AlbumItem from '../AlbumItem';
AlbumList.propTypes = {
    albumList: PropTypes.array.isRequired,
};

function AlbumList({ albumList }) {
    return (
        <ul className="album-list">
            {albumList.map(albumItem => (
                <li key={albumItem.id}>
                    <AlbumItem albumItem={albumItem} />
                </li>
            ))}
        </ul>
    );
}

export default AlbumList;