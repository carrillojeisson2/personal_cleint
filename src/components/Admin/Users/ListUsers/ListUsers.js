
import React, {useState, useEffect} from 'react'
import {Switch, List, Avatar, Button, Icon} from 'antd'
import NoAvatar from '../../../../assets/img/png/no-avatar.png'
import './ListUsers.scss'
import Modal from '../../../Modal'
import EditUserForm from '../editUserForm/EditUserForm'
import { getAvatarApi } from '../../../../api/user'


// import ListUsers from '.'


export default function ListUsers(props) {
    const {usersActive, usersInactive, setReloadUsers} = props;
    const [viewUsersActives, setViewUsersActives] = useState(true)
    const [isVisiblModal, setIsVisiblModal] = useState(false)
    const [modalTitle, setModalTitle] = useState('')
    const [modalContent, setModalContent] = useState(null)

    return(
        <div className='list-users'>
            <div className='list-users__switch'>
                <Switch
                    defaultChecked
                    onChange={() => setViewUsersActives(!viewUsersActives)}
                />
                <span>
                    {viewUsersActives ? "Usuarios activos" : "Usuarios inactivos"}
                </span>

                {viewUsersActives ? 
                (<UsersActive 
                    usersActive={usersActive} 
                    setIsVisiblModal={setIsVisiblModal} 
                    setModalTitle={setModalTitle}
                    setModalContent={setModalContent}
                    setReloadUsers={setReloadUsers}
                />) 
                : 
                (<UsersInactive usersInactive={usersInactive}/>)}

                <Modal
                    title={modalTitle}
                    isVisible={isVisiblModal}
                    setIsVisible={setIsVisiblModal}
                >
                  {modalContent}
                </Modal>
            </div>
        </div>
    );

}




function UsersActive(props) {

    const {
        usersActive,
        setIsVisiblModal,
        setModalTitle,
        setModalContent,
        setReloadUsers
    } = props;


    const editUser = (user) => {
        setIsVisiblModal(true)
        setModalTitle(`Editar ${user.name ? user.name : '...'} ${user.lastname ? user.lastname : '...'}`)
        setModalContent(<EditUserForm user={user} setIsVisiblModal={setIsVisiblModal} setReloadUsers={setReloadUsers}/>)
    }
    return (
        <List
            className='users-active'
            itemLayout="horizontal"
            dataSource={usersActive}
            renderItem={user => 
                <UserActive
                    user={user}
                    editUser={editUser}
                />
            }
        />
    )
}

function UserActive(props) {
    const {user, editUser} = props;
    const [avatar, setAvatar] = useState(null)

    useEffect(() => {
      if(user.avatar) {
        getAvatarApi(user.avatar).then(response => {
            setAvatar(response)
        })
      }else{
        setAvatar(null)
      }
    }, [user])

    return (
        <List.Item
                    actions={[
                        <Button
                            type="primary"
                            onClick={() => editUser(user)}
                        >
                            <Icon type="edit" />
                        </Button>,
                        <Button
                        type="danger"
                        onClick={() => console.log('Desactivar usuario')}
                    >
                        <Icon type="stop" />
                    </Button>,
                    <Button
                    type="danger"
                    onClick={() => console.log('Eliminar usuario')}
                >
                    <Icon type="delete" />
                </Button>
                    ]}
                >
                    <List.Item.Meta
                        avatar={<Avatar src={avatar ? avatar : NoAvatar} />}
                        title={
                            `
                                ${user.name ? user.name : "..."}
                                ${user.lastname ? user.lastname : '...'}
                            `
                        }
                        description={user.email}
                    />
                </List.Item>
    )
    
}


function UsersInactive(props) {
    const {usersInactive} = props;

    return (
        <List
            className='users-inactive'
            itemLayout="horizontal"
            dataSource={usersInactive}
            renderItem={user => (
                <UserInactive
                    user={user}
                />
            )}
        />
    )
}

function UserInactive(props) {
    const {user} = props;
    const [avatar, setAvatar] = useState(null)

    useEffect(() => {
      if(user.avatar){
        getAvatarApi(user.avatar).then(response => {
            setAvatar(response) 
        })
      }else{
        setAvatar(null)
      }
    }, [user])
    

    return (
        <List.Item
                    actions={[
                        <Button
                            type="primary"
                            onClick={() => console.log('activar usuario')}
                        >
                            <Icon type="check" />
                        </Button>,
                        
                    <Button
                    type="danger"
                    onClick={() => console.log('Eliminar usuario')}
                >
                    <Icon type="delete" />
                </Button>
                    ]}
                >
                    <List.Item.Meta
                        avatar={<Avatar src={avatar ? avatar : NoAvatar} />}
                        title={
                            `
                                ${user.name ? user.name : "..."}
                                ${user.lastname ? user.lastname : '...'}
                            `
                        }
                        description={user.email}
                    />
                </List.Item>
    )
}

