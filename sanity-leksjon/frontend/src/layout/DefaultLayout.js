import { Outlet } from 'react-router-dom'

function DefaultLayout() {
  return (
    <main className="h-screen w-full">
      <Outlet />
    </main>
  )
}

export default DefaultLayout
