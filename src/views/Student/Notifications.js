import React from 'react';
import { List, Alert, Card } from 'antd';
import { BellOutlined } from '@ant-design/icons'
import './Student.css'

const data = ['Ant Design Title 1', 'Ant Design Title 2', 'Ant Design Title 3', 'Ant Design Title 4',
];


const Notifications = () => {
	return <>
		<Card >
			<List
				itemLayout="horizontal"
				dataSource={data}
				renderItem={item => <Alert message={item} className='mb-3' type="warning" showIcon closable icon={<BellOutlined />} />}
			/>,
		</Card>
	</>

}
export default Notifications