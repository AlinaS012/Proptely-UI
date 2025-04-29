import { useContext, useEffect, useState } from 'react'
import Loader from './components/loader/Loader'
import { Outlet, useNavigate } from 'react-router-dom'
import { SidebarContext } from './context/SidebarContext'

function App() {
  const { selected, setSubSelected } = useContext(SidebarContext)
  const navigate = useNavigate()
  // useEffect(() => {
  //   setSubSelected(selected.subheadings[0].name)
  //   navigate(`${selected.subheadings[0].link}`)
  // }, [selected])
  useEffect(() => {
    if (selected?.subheadings?.[0]?.name) {
      setSubSelected(prev => {
        if (prev !== selected.subheadings[0].name) {
          navigate(`${selected.subheadings[0].link}`);
          return selected.subheadings[0].name;
        }
        return prev;
      });
    }
  }, [selected]);

  return (
    <>
      <Outlet />
    </>
  )
}

export default App
