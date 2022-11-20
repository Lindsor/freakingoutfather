export interface AppDescriptionProps {
  description?: string;
}

export const AppDescription = ({ description }: AppDescriptionProps) => {
  description = description?.trim();

  if (!description) {
    return null;
  }

  return <meta name="description" content={description} />;
};
