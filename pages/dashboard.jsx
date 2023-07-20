import React from 'react'
import '@/app/globals.css'
const dashboard = () => {
		return (
				<>
			
<div className="min-h-full">
  <nav className="bg-gray-800">
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="flex h-16 items-center justify-between">
        <div className="flex items-center">
          <div className="flex-shrink-0">
            <img className="h-8 w-8" src="data:image/png;base64,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" alt="Your Company"/>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <a href="#" className="bg-gray-900 text-white rounded-md px-3 py-2 text-sm font-medium" aria-current="page">Dashboard</a>
              <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">Team</a>
              <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">Projects</a>
              <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">Calendar</a>
              <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">Reports</a>
            </div>
          </div>
        </div>
        <div className="hidden md:block">
          <div className="ml-4 flex items-center md:ml-6">
            <button type="button" className="rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
              <span className="sr-only">View notifications</span>
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" />
              </svg>
            </button>

            <div className="relative ml-3">
              <div>
                <button type="button" className="flex max-w-xs items-center rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800" id="user-menu-button" aria-expanded="false" aria-haspopup="true">
                  <span className="sr-only">Open user menu</span>
                  <img className="h-8 w-8 rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt=""/>
                </button>
              </div>

              
              <div className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="user-menu-button" tabIndex="1">
                <a href="#" className="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabIndex="-1" id="user-menu-item-0">Your Profile</a>
                <a href="#" className="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabIndex="-1" id="user-menu-item-1">Settings</a>
                <a href="#" className="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabIndex="-1" id="user-menu-item-2">Sign out</a>
              </div>
            </div>
          </div>
        </div>
        <div className="-mr-2 flex md:hidden">
          <button type="button" className="inline-flex items-center justify-center rounded-md bg-gray-800 p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800" aria-controls="mobile-menu" aria-expanded="false">
            <span className="sr-only">Open main menu</span>
            <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
            <svg className="hidden h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>
    </div>

    <div className="md:hidden" id="mobile-menu">
      <div className="space-y-1 px-2 pb-3 pt-2 sm:px-3">
        <a href="#" className="bg-gray-900 text-white block rounded-md px-3 py-2 text-base font-medium" aria-current="page">Dashboard</a>
        <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium">Team</a>
        <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium">Projects</a>
        <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium">Calendar</a>
        <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium">Reports</a>
      </div>
      <div className="border-t border-gray-700 pb-3 pt-4">
        <div className="flex items-center px-5">
          <div className="flex-shrink-0">
            <img className="h-10 w-10 rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt=""/>
          </div>
          <div className="ml-3">
            <div className="text-base font-medium leading-none text-white">Tom Cook</div>
            <div className="text-sm font-medium leading-none text-gray-400">tom@example.com</div>
          </div>
          <button type="button" className="ml-auto flex-shrink-0 rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
            <span className="sr-only">View notifications</span>
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" />
            </svg>
          </button>
        </div>
        <div className="mt-3 space-y-1 px-2">
          <a href="#" className="block rounded-md px-3 py-2 text-base font-medium text-gray-400 hover:bg-gray-700 hover:text-white">Your Profile</a>
          <a href="#" className="block rounded-md px-3 py-2 text-base font-medium text-gray-400 hover:bg-gray-700 hover:text-white">Settings</a>
          <a href="#" className="block rounded-md px-3 py-2 text-base font-medium text-gray-400 hover:bg-gray-700 hover:text-white">Sign out</a>
        </div>
      </div>
    </div>
  </nav>

  <header className="bg-white shadow">
    <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold tracking-tight text-gray-900">Dashboard</h1>
    </div>
  </header>
  <main>
    <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
      {/* <!-- Your content --> */}
    </div>
  </main>
</div>

				</>
		)
}

export default dashboard