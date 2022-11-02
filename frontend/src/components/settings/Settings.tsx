import { useState } from 'react'
import './Settings.css'


export function Settings() {
    const [changeMode,setChangeMode]=useState<'Password'|'Profile'>('Profile');
  return (
    <div className='settings flex-box'>

    </div>
  )
}
