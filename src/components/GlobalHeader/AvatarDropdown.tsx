/*
 * @Author: atdow
 * @Date: 2021-05-14 15:05:52
 * @LastEditors: null
 * @LastEditTime: 2021-05-14 15:38:54
 * @Description: file content
 */
import { LogoutOutlined, SettingOutlined, UserOutlined } from '@ant-design/icons';
import { Avatar, Menu, Spin, Dropdown } from 'antd';
import React from 'react';
import styles from './header.module.less';

export default class AvatarDropdown extends React.Component<any> {
    onMenuClick = (event: {
        key: React.Key;
        keyPath: React.Key[];
        item: React.ReactInstance;
        domEvent: React.MouseEvent<HTMLElement>;
    }) => {
        const { key } = event;

        // if (key === 'logout') {
        //   const { dispatch } = this.props;

        //   if (dispatch) {
        //     dispatch({
        //       type: 'login/logout',
        //     });
        //   }

        //   return;
        // }

        // history.push(`/account/${key}`);
    };

    render(): React.ReactNode {
        // const {
        //   currentUser = {
        //     avatar: '',
        //     name: '',
        //   },
        //   menu,
        // } = this.props;
        const menu = true;
        const menuHeaderDropdown = (
            <Menu className={styles.menu} selectedKeys={[]} onClick={this.onMenuClick}>
                {menu && (
                    <Menu.Item key="center">
                        <UserOutlined />
                        个人中心
                    </Menu.Item>
                )}
                {menu && (
                    <Menu.Item key="settings">
                        <SettingOutlined />
                        个人设置
                    </Menu.Item>
                )}
                {menu && <Menu.Divider />}

                <Menu.Item key="logout">
                    <LogoutOutlined />
                    退出登录
                </Menu.Item>
            </Menu>
        );
        return (
            <div className={styles.avatarDropdown}>
                <Dropdown overlay={menuHeaderDropdown} placement="bottomCenter">
                    <Avatar size="small" className={styles.avatar} alt="avatar" />
                </Dropdown>
            </div>
        );

        // return currentUser && currentUser.name ? (
        //     <HeaderDropdown overlay={menuHeaderDropdown}>
        //         <span className={`${styles.action} ${styles.account}`}>
        //             <Avatar
        //                 size="small"
        //                 className={styles.avatar}
        //                 src={currentUser.avatar}
        //                 alt="avatar"
        //             />
        //             <span className={`${styles.name} anticon`}>{currentUser.name}</span>
        //         </span>
        //     </HeaderDropdown>
        // ) : (
        //     <span className={`${styles.action} ${styles.account}`}>
        //         <Spin
        //             size="small"
        //             style={{
        //                 marginLeft: 8,
        //                 marginRight: 8,
        //             }}
        //         />
        //     </span>
        // );
    }
}

// export default connect(({ user }: ConnectState) => ({
//     currentUser: user.currentUser,
// }))(AvatarDropdown);
