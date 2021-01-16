
import React from 'react'

//import {Header} from '../components/Header'
// import {TagName} from '../components/TagName'
import {FirstPicture} from '../components/FirstPicture'
// import {MenuBar} from '../components/MenuBar'
import {Categries} from '../components/Categries'
import {TopSeller} from '../components/TopSeller'
import {JoinForm} from '../components/JoinForm'


export const Home = () => {
    return (
        <div>

      <FirstPicture />
      <Categries />
      <TopSeller />
      <JoinForm />
    
        </div>
    )
}
