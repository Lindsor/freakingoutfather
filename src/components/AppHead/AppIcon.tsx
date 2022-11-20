export interface AppIconIcon {
  rel: string;
  href: string;
  sizes?: string;
  type?: string;
  color?: string;
}

export interface AppIconProps {
  icons: AppIconIcon[];
}

export const AppIcon = ({ icons }: AppIconProps) => {
  return (
    <>
      {icons.map((icon: AppIconIcon) => {
        return <link key={icon.href} {...icon} />;
      })}
    </>
  );
};
