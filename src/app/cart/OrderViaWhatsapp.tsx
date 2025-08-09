import React from 'react'
import { Button } from '@/components/ui/button';
import Link from 'next/link';
function OrderViaWhatsapp() {
    return (
        <div className="space-y-3">
            <div className="flex gap-2">
                <Link href="/menu" className="flex-1">
                    <Button variant="secondary" className='w-full'>Continue Shopping</Button>
                </Link>
                <Button variant="destructive" className="flex-1">Clear Cart</Button>
            </div>
        </div>
    )
}

export default OrderViaWhatsapp
