const WhyMeVideo = () => {
    return (
      <div>
        <h2 className="text-2xl font-bold p-4">Why Me?</h2>
        <video controls width={600}>
            <source src="personal-website/src/assets/WhyMeVideo.mp4" type="video/mp4" />
        </video>
      </div>
    );
  };
  
  export default WhyMeVideo;
  