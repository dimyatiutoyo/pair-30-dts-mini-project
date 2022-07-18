function CarouselItem({ title, backdropPath, overview }) {
  return (
    <div style={{
      backgroundColor: 'grey',
      height: '400px',
      backgroundImage: `url(${process.env.REACT_APP_IMDB_IMAGE_URL}/${backdropPath})`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
    }} >
      <div style={{
        height: '100%',
        background: 'linear-gradient(19deg, rgba(0,0,0,1) 0%, rgba(28,28,192,0.03918662191439071) 88%)',
        display: 'flex',
        justifyContent: 'start',
        alignItems: 'end'
      }}>
        <div style={{
          padding: '30px',
          width: '50%',
        }}>
          <div style={{
            fontSize: 48,
            fontWeight: 'bold',
            marginBottom: '20px'
          }}>
            {title}
          </div>
          <div>
            {overview}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CarouselItem;