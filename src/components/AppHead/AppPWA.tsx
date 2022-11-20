export interface AppPWAProps {
  themeColor: string;
}

export const AppPWA = ({ themeColor }: AppPWAProps) => {
  return (
    <>
      <link rel="manifest" href="/site.webmanifest" />

      <meta name="msapplication-TileColor" content={themeColor} />
      <meta name="theme-color" content={themeColor} />
    </>
  );
};
