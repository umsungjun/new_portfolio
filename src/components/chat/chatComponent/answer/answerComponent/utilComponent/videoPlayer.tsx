import YouTube from "react-youtube";

type VideoPlayer = {
  videoId: string;
};

export default function VideoPlayer({ videoId }: VideoPlayer) {
  return (
    <div className="overflow-hidden rounded-lg">
      <YouTube videoId={videoId} opts={{ width: "100%", height: "250px" }} />
    </div>
  );
}
