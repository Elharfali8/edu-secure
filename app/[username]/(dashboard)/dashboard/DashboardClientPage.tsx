import { ShieldUser, SmartphoneNfc, Users } from 'lucide-react'
import React from 'react'

const DashboardClientPage = () => {
  const summary = [
    {
      id: 'fb21',
      title: 'students',
      number: 63,
      icon: Users,
    },
    {
      id: 'fb22',
      title: 'parents',
      number: 48,
      icon: Users,
    },
    {
      id: 'fb23',
      title: 'active NFC cards',
      number: 52,
      icon: SmartphoneNfc,
    },
    {
      id: 'fb24',
      title: 'Pickup today',
      number: 63,
      icon: ShieldUser,
    },
  ]

  return (
      <main className=''>
      <div>
        <h1 className="text-2xl font-semibold text-[#0F172A]">Dashboard</h1>
      </div>
      <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-4 mt-5 lg:mt-8'>
        {summary.map((item) => {
            const Icon = item.icon
          return (
            <div key={item.id} className="rounded-xl border border-[#E5E7EB] bg-white p-6 shadow-sm flex items-center gap-4">
              <div>
                <span className='bg-blue-50 block text-blue-600 p-2 rounded-md'>
                <Icon />
              </span>
              </div>
              <div className=''>
                <h4 className='capitalize text-lg lg:text-xl font-semibold text-gray-600'>{item.title}</h4>
                <p className='text-xl lg:text-2xl font-bold'>
                  {item.number}
                </p>
              </div>
            </div>
          )
        })}
      </div>
    </main>
  )
}

export default DashboardClientPage