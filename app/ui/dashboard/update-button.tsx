import { ArrowPathIcon } from '@heroicons/react/24/outline';
import { formatDistanceToNow } from 'date-fns';
import { memo, useEffect, useState } from 'react';

interface Props {
  onClickUpdateButton: () => void;
  revalidateDate: Date;
}

function UpdateButton({ onClickUpdateButton, revalidateDate }: Props) {
  const [distance, setDistance] = useState<string>(
    formatDistanceToNow(revalidateDate),
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setDistance(formatDistanceToNow(revalidateDate));
    }, 3000);
    return () => clearInterval(interval);
  }, [revalidateDate]);

  return (
    <div className="flex items-center pb-2 pt-6">
      <ArrowPathIcon
        className="h-5 w-5 text-gray-500 hover:text-blue-500 "
        onClick={onClickUpdateButton}
      />
      <h3 className="ml-2 text-sm text-gray-500 ">Updated {distance}</h3>
    </div>
  );
}

export default memo(UpdateButton);
