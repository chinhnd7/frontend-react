import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';
import { useParams } from 'react-router-dom';
import { companyData } from '../../../../data/company';

AlbumItem.propTypes = {
    albumItem: PropTypes.object.isRequired,
};

function AlbumItem({ albumItem }) {
    const { albumId } = useParams();
    let companyName = "";

    if (albumId && companyData[albumId]) {
        companyName = companyData[albumId]['name'];
    }

    return (
        <div className="album">
            <div className="album__thumbnail">
                <img src={albumItem.thumbnailUrl} alt={albumItem.albumName}></img>
            </div>

            <p className="album__name">{albumItem.albumName}</p>
            <p>{companyName}</p>
        </div>
    );
}

export default AlbumItem;