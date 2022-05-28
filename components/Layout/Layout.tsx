import React, { FunctionComponent, ReactNode } from 'react'
import Navbar from '@components/Navbar/Navbar';

interface BaseLayoutProps {
  children?: ReactNode;
}

const Layout: FunctionComponent<BaseLayoutProps> = ({ children }) => {
  return (
    <div>
      <Navbar />
      <div className="row p-0 m-0">
        <aside className="border-bottom-0 col-md-3 col-xl-2 col-12">
          <nav className="nav-links">
            {/* menu */}
          </nav>
        </aside>
        <main className="col-md-9 col-xl-10 col-12 pt-3 pb-3">
          <div className="shadow-light-100 p-3">
            { children }
          </div>
        </main>
      </div>
    </div>
  )
}

export default Layout