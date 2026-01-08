import { ReactNode, useState } from 'react'

type NavDropdownProps = {
  label: string
  children: ReactNode
}

export default function NavDropdown({ label, children }: NavDropdownProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="relative group">
      <button
        onMouseEnter={() => setIsOpen(true)}
        onMouseLeave={() => setIsOpen(false)}
        className="text-sm font-medium transition-colors text-slate-300 hover:text-white group-hover:text-brand-500 relative pb-1"
      >
        {label}
        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-brand-500 transition-all duration-300 group-hover:w-full" />
      </button>

      {isOpen && (
        <div
          onMouseEnter={() => setIsOpen(true)}
          onMouseLeave={() => setIsOpen(false)}
          className="absolute top-full left-0 mt-0 w-48 bg-slate-900 border border-slate-700 rounded-md shadow-lg py-2 z-50"
        >
          {children}
        </div>
      )}
    </div>
  )
}

type NavDropdownItemProps = {
  label: string
  href: string
}

export function NavDropdownItem({ label, href }: NavDropdownItemProps) {
  return (
    <a
      href={href}
      className="block px-4 py-2 text-sm text-slate-300 hover:text-brand-500 hover:bg-slate-800 transition-colors relative group"
    >
      {label}
      <span className="absolute bottom-2 left-4 w-0 h-0.5 bg-brand-500 transition-all duration-300 group-hover:w-12" />
    </a>
  )
}
