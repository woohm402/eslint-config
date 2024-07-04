import { useEffect, useState } from 'react';

const fetchData = async (name: string) =>
  new Promise<string>((resolve) => setTimeout(() => resolve(name), 1000));

export const Component = ({ name }: { name: string }) => {
  const [data, setData] = useState<string>();

  useEffect(() => {
    let ignore = false;

    fetchData(name).then((newData) => !ignore && setData(newData));

    return () => {
      ignore = true;
    };
  }, []);

  return (
    <div>
      {data}
      {[1, 2, 3].map((item) => (
        <div>{item}</div>
      ))}
    </div>
  );
};
