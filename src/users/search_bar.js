import React from 'react'
import { Control, Icon, Input, PanelBlock } from 'bloomer'


const UsersSearchBar = ({ onChange }) => {
  return (
    <PanelBlock className='users-search-bar'>
      <Control hasIcons='left'>
        <Icon isSize='small' isAlign='left'>
          <span className='fa fa-search' />
        </Icon>
        <Input placeholder='Search by name' onChange={onChange}/>
      </Control>
    </PanelBlock>
  )
}


export default UsersSearchBar
