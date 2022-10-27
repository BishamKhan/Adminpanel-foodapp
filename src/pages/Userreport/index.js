import React from 'react';
import { Tabs } from 'antd';
import Userreport from './userreport';


function Userindex() {

  return (
    <div className="userindex">
        <Tabs defaultActiveKey="1">
            <Tabs.TabPane tab="USER REPORT" key="1">
                <Userreport/>
                </Tabs.TabPane>
            <Tabs.TabPane tab="Tab 2" key="2">
                Content of Tab Pane 2
                </Tabs.TabPane>
                <Tabs.TabPane tab="Tab 3" key="3">
                    Content of Tab Pane 3
                    </Tabs.TabPane>
  </Tabs>
    </div>
  );
}

export default Userindex;
