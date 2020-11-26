import React from 'https://esm.sh/react';
import Tab from './tabs/Tab.tsx';

interface Props {
  viewIndex: number;
  updateViewIndex: (action: string | number) => void;
}

const TabBar = (props: Props) => {
  const { viewIndex, updateViewIndex } = props;
  const tabs = [
    'Latency',
    'Success Rate',
    'Data Size',
    'APIs',
    'test'
  ];

  return (
    <div className="container-tab">
      {tabs.map((label, i) => {
        return (
          <Tab
            label={label}
            highlight={viewIndex === i ? true : null}
            index={i}
            length={tabs.length}
            updateViewIndex={updateViewIndex}
            key={i}
          />
        );
      })}
    </div>
  );
};

export default TabBar;
