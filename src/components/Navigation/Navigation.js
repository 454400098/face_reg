import React from 'react';//standard import

const Navigation = ({onRounteChange,isSignedIn}) => {
    if(isSignedIn){
      return (
        <nav style={{display: 'flex', justifyContent: 'flex-end'}}>
          <p onClick={()=>onRounteChange('signout')} className='f3 link dim black underline pa3 pointer'> Sign out </p>
        </nav>
      );
    }else{
      return (
        <nav style={{display: 'flex', justifyContent: 'flex-end'}}>
          <p onClick={()=>onRounteChange('signin')} className='f3 link dim black underline pa3 pointer'> Sign in </p>
          <p onClick={()=>onRounteChange('register')} className='f3 link dim black underline pa3 pointer'> Register </p>
        </nav>
    );
  }
}


export default Navigation;
