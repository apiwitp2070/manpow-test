import React, { useState } from 'react'
import { Switch } from '@headlessui/react'

export default function Header() {
  const [enabled, setEnabled] = useState(false)
  return (
    <div className="relative max-w-4xl h-12 px-8 lg:px-0 lg:mx-auto flex justify-end space-x-4 items-center">
      <Switch
        checked={enabled}
        onChange={setEnabled}
        className="
          bg-orange-200 relative inline-flex items-center h-[28px] w-[56px] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75"
      >
        <span className="text-xs font-semibold absolute left-2">TH</span>
        <span className="text-xs font-semibold absolute right-2">EN</span>
        <span
          aria-hidden="true"
          className={`${enabled ? 'translate-x-1' : 'translate-x-7'}
          pointer-events-none inline-block h-[20px] w-[20px] transform rounded-full bg-orange-400 shadow-lg ring-0 transition duration-200 ease-in-out`}
        />
      </Switch>
      <button className="bg-orange-400 text-gray-100 h-fit px-4 py-1 active:bg-orange-500">
        เข้าสู่ระบบ
      </button>
    </div>
  )
}
