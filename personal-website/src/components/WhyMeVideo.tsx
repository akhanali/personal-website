import whyMeVideo from '../assets/WhyMeVideo.mp4';

const WhyMeVideo = () => {
    return (
        <div className="flex flex-col items-center">
            <h2 className="text-2xl font-bold p-4">Why Me?</h2>
            <video controls className="w-full max-w-[700px] rounded-lg shadow-lg">
            <source src={whyMeVideo} type="video/mp4" />
            Your browser does not support the video tag.
            </video>
        </div>
    );
  };
  
  export default WhyMeVideo;
  