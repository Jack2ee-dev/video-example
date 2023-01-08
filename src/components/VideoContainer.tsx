import { FC, useCallback, useEffect, useRef, useState } from "react";

type Props = {
  src?: string;
}

const VideoContainer: FC<Props> = ({src}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  const [video, setVideo] = useState<HTMLVideoElement>();

  const handleVideo = useCallback(() => {
    if (video?.paused) {
      video.play();
      return;
    }
    video?.pause();
  }, [video]);

  useEffect(() => {
    if (!src) return;

    const _video = (document.getElementById('_video') || document.createElement('video')) as HTMLVideoElement;
    _video.id = '_video';
    _video.playsInline = true;
    _video.controls = false;
    _video.src = src;
    _video.style.height = '100vh';
    _video.style.objectFit = 'contain';

    setVideo(video);
    containerRef.current?.appendChild(_video);

    _video.play().catch(() => {
      _video.play();
    })
  }, [src]);

  return (
    <div ref={containerRef} onClick={handleVideo} />
  )
}

export default VideoContainer;
