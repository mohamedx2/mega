import React, { memo, useState } from 'react';
import { Layout } from 'antd';
import UserSidebar from '../sections/Usersidebar/Usersidebar';
import DashboardFooter from '../sections/dashboard_footer/Dashboard_Footer';
import { Outlet } from 'react-router-dom';
import Dash_Header from '../sections/dashboard_header/Dash_Header';

const { Header, Content } = Layout;

// Memoizing Sidebar component
const MemoizedSidebar = memo(UserSidebar);
// Memoizing DashboardFooter component
const MemoizedDashboardFooter = memo(DashboardFooter);
// Memoizing Dash_Header component
const MemoizedDashHeader = memo(Dash_Header);

import { RiCopilotFill } from "react-icons/ri";

const DashboardLayout = () => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <RiCopilotFill className="fixed m-8 bottom-0 right-0 size-8 z-50" />
      <MemoizedSidebar collapsed={collapsed} setCollapsed={setCollapsed} />
      <Layout
        style={{
          marginLeft: collapsed ? 80 : 220, // Adjust based on sidebar width
          transition: 'margin-left 0.2s',
        }}
      >
        <MemoizedDashHeader />
        <Content style={{ margin: '24px 16px 0', overflow: 'initial' }}>
          <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
            <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt veniam tempore rem suscipit officia vero animi aspernatur id eaque necessitatibus in, amet, explicabo perferendis harum, iusto expedita inventore error quisquam. </div>
            <Outlet /> {/* Nested routes will be rendered here */}
          </div>
        </Content>
        <MemoizedDashboardFooter />
      </Layout>
    </Layout>
  );
};

export default DashboardLayout;
