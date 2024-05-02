'use client'
import type { CollapseProps } from 'antd';
import { Collapse } from 'antd';
const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;

const QualityService = () => {
    const items: CollapseProps['items'] = [
        {
          key: '1',
          label: 'This is panel header 1',
          children: <p>{text}</p>,
        },
        {
          key: '2',
          label: 'This is panel header 2',
          children: <p>{text}</p>,
        },
        {
          key: '3',
          label: 'This is panel header 3',
          children: <p>{text}</p>,
        },
      ];
    const onChange = (key: string | string[]) => {
        console.log(key);
      };
    return (
        <div className="">
            <Collapse items={items} defaultActiveKey={['1']} onChange={onChange} />;
            
        </div>
    );
};

export default QualityService;