import React, {useEffect} from 'react';
import { classNames } from 'shared/lib/classNames/classNames';


interface BugButtonProps {
  className?: string;
}

export const BugButton = ({ className }: BugButtonProps) => {
    const [error, setError] = React.useState(false);

    const onThrow = () => setError(true);

    useEffect(() => {
        if (error) {throw new Error();}
    }, [error]);

    return (
    <button onClick={onThrow} >
        throw Error()
    </button>
  );
};
