"use client";

interface EmptyStateProps {
  label?: string;
  subTitle?: string;
}

const EmptyState: React.FC<EmptyStateProps> = ({
  label = "Oops! No data found.",
  subTitle = "Looks like there is empty data field.",
}) => {
  return (
    <div className="text-center flex flex-col gap-1 justiyf-center items-center w-full h-full">
      <p className="font-semibold text-xl">{label}</p>
      <p>{subTitle}</p>
    </div>
  );
};

export default EmptyState;
