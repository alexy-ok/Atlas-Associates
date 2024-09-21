const HomeVideo = () => {
    return (
        <>
            <video autoPlay loop muted width='100%' height='auto' >
                <source src="/media/TimelapseEncoded.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
        </>
    )
}

export default HomeVideo;