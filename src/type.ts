export interface StatusIconProps {
    src: string;
    alt: string;
    className?: string;
  }
  
  export interface CardProps {
    imageSrc: string;
    title: string;
    alt: string;
  }
  export interface HeaderProps {
    time: string;
    icons: StatusIconProps[];
  }
  export interface MediaControlProps {
    src: string;
    width: string;
    className?: string;
  }
  
  export interface PlayerControlsProps {
    controls: MediaControlProps[];
  }