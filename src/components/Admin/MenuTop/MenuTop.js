import React from 'react'
import {Button, Icon} from 'antd'
import './MenuTop.scss';
import Logo from '../../../assets/img/png/logo.png'
import {logout} from '../../../api/auth'

export default function MenuTop(props) {

    const {menuCollapsed, setMenuCollapsed} = props;

    const logoutUSer = () => {
        logout();
        window.location.reload();
    }

  return (
    <div className='menu-top'>
        <div className='menu-top__left'>
            <img
                className='menu-top__left-logo'
                src={Logo}
                alt="Logo web"
            />
            <Button type="link" onClick={() => setMenuCollapsed(!menuCollapsed)}>
                <Icon type={menuCollapsed ? "menu-unfold" : "menu-fold"}  />
            </Button>
        </div>
        <div className='menu-top__right'>
            <Button type='link' onClick={logoutUSer}>
                    <Icon type="poweroff" />
            </Button>
        </div>
    </div>
  )
}
