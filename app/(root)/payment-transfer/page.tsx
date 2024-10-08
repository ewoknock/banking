import HeaderBox from '@/components/ui/HeaderBox'
import PaymentTransferForm from '@/components/ui/PaymentTransferForm'
import { useAccount, useUser } from '@/lib/actions/user.actions'
import React from 'react'

const Transfer = async () => {
  // const loggedIn = await getLoggedInUser()
  // const accounts = await getAccounts({ userId: loggedIn.$id })

  // if (!accounts) return

  // const accountsData = accounts?.data
  const { loggedIn, accounts } = await useUser()

  if (!accounts) return
  const { accountsData, appwriteItemId, account } = await useAccount(
    undefined,
    accounts
  )
  return (
    <section className='payment-transfer'>
      <HeaderBox
        title='Payment Transfer'
        subtext='Please provide any specific details or notes related to the payment transfer.'
      />
      <section className='size-full pt-5'>
        <PaymentTransferForm accounts={accountsData} />
      </section>
    </section>
  )
}

export default Transfer
