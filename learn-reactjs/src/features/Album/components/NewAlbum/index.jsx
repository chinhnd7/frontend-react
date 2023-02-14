const NewAlbum = () => {
    return (
        <form style={{ padding: '1rem' }}>
            <label htmlFor='new-album' style={{ display: 'block' }}>New Album Name</label>
            <input type='text' name='new-album' id='new-album' />
            <input type='submit' value='Create New Album' />
        </form >
    )
}

export default NewAlbum